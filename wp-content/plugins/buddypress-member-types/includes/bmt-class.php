<?php

/**
 * @package WordPress
 * @subpackage BuddyBoss BMT
 */
// Exit if accessed directly
if ( ! defined( 'ABSPATH' ) )
	exit;

if ( ! class_exists( 'BuddyBoss_BMT_BP_Component' ) ):

	/**
	 *
	 * BuddyBoss BMT BuddyPress Component
	 * ***********************************
	 */
	class BuddyBoss_BMT_BP_Component extends BP_Component {

		/**
		 * INITIALIZE CLASS
		 *
		 * @since BuddyBoss BMT 1.0
		 */
		public function __construct() {
			parent::start(
					'bmt', __( 'BMT', 'bp-member-types' ), dirname( __FILE__ )
			);
		}

		/**
		 * Convenince method for getting main plugin options.
		 *
		 * @since BuddyBoss BMT (1.0.0)
		 */
		public function option( $key ) {
			return buddyboss_bmt()->option( $key );
		}

		/**
		 * SETUP BUDDYPRESS GLOBAL OPTIONS
		 *
		 * @since	BuddyBoss BMT 1.0
		 */
		public function setup_globals( $args = array() ) {

		}

		/**
		 * SETUP ACTIONS
		 *
		 * @since  BuddyBoss BMT 1.0
		 */
		public function setup_actions() {
			// Add body class
			add_filter( 'body_class', array( $this, 'body_class' ) );

			add_action( 'bp_members_directory_member_types', array($this, 'bpt_members_directory') );
			//add_action( 'bp_pre_user_query_construct',  array( $this, 'bpt_members_query' ), 1, 1 );
            add_action( 'bp_pre_user_query',  array( $this, 'bmt_members_query' ), 1, 1 );

			//Check hide member is not checked in setting
			$is_member_type_field_visible = buddyboss_bmt()->option( 'hide_member_type_field' );
			if ( empty( $is_member_type_field_visible ) ) {
				add_action( 'bp_account_details_fields',  array( $this, 'bmt_member_type_option' ) );
			}

			// For welcome exp
			if ( function_exists('bwe_load_admin') ) {
				add_action( 'bwe_after_signup_profile_fields',  array( $this, 'bmt_member_type_option' ) );
			}

			add_action( 'admin_enqueue_scripts',  array( $this, 'bmt_member_type_admin_style' ) );
			add_action( 'wp_enqueue_scripts',  array( $this, 'bmt_member_type_style' ) );

			add_action( 'bp_members_admin_user_metaboxes', array( $this, 'bmt_remove_member_type_metabox' ) );

			parent::setup_actions();
		}

		/**
		 * Add active BMT class
		 *
		 * @since BuddyBoss BMT (1.0.0)
		 */
		public function body_class( $classes ) {
			$classes[] = apply_filters( 'buddyboss_bmt_body_class', 'bp-member-types' );
			return $classes;
		}

		/**
		 * Adding Directory tabs
		 */
		public function bpt_members_directory() {
			$member_types = bmt_get_active_member_types();

			foreach ( $member_types as $member_type_id ) {

				if ( !get_post_meta( $member_type_id, '_bp_member_type_enable_directory', true ) ) {
					continue;
				}


				$type_name = bmt_get_member_type_key( $member_type_id );
				$type_id = bmt_member_term_taxonomy_id( $type_name );
				$members_count = count(  bmt_members_by_type( $type_id ));
				$member_type_name = get_post_meta( $member_type_id, '_bp_member_type_label_name', true );

				if ( empty( $type_id ) )
					$type_id = 0;
				?>
				<li id="members-<?php echo $type_id; ?>">
					<a href="<?php echo bp_member_type_directory_permalink( $type_name ); ?>"><?php printf( __( $member_type_name.' <span>%s</span>', 'bp-member-types' ),$members_count ); ?></a>
				</li><?php
			}
		}


        /**
         * Member directory tabs content
         * @param $query
         */
        public function bmt_members_query( $query ) {
            global $wpdb;

	        $cookie_scope = filter_input( INPUT_COOKIE, 'bp-members-scope', FILTER_VALIDATE_INT );
	        $post_scope   = filter_input( INPUT_POST, 'scope', FILTER_VALIDATE_INT );

	        if ( $post_scope ) {
		        $type_id = $post_scope;
	        } elseif ( $cookie_scope ) {
		        $type_id = $cookie_scope;
	        }

	        if ( isset( $type_id ) ) {

		        //Alter SELECT with INNER JOIN
		        $query->uid_clauses['select'] .= " INNER JOIN {$wpdb->prefix}term_relationships r ON u.{$query->uid_name} = r.object_id ";

		        //Alter WHERE clause
		        $query_where_glue            = empty( $query->uid_clauses['where'] ) ? ' WHERE ' : ' AND ';
		        $query->uid_clauses['where'] .= $query_where_glue . "r.term_taxonomy_id = {$type_id} ";
	        }
        }


        /**
		 * Directory tabs content
		 * @param type $query_array
		 */
		public function bpt_members_query( $query_array ) {

			$member_types = bmt_plural_labels_array();

			if ( ( isset( $_COOKIE[ 'bp-members-scope' ] ) && in_array( $_COOKIE[ 'bp-members-scope' ], $member_types ) ) ||
					( isset( $_POST[ 'scope' ] ) && in_array( $_POST[ 'scope' ], $member_types ) )
			) {
				if ( isset( $_COOKIE[ 'bp-members-scope' ] ) ) {
					$type_id = bmt_member_type_id( array_search( $_COOKIE[ 'bp-members-scope' ], $member_types ) );
				} else {
					$type_id = bmt_member_type_id( array_search( $_POST[ 'scope' ], $member_types ) );
				}
				$user_ids = bmt_members_by_type( $type_id );

				if ( !empty( $user_ids ) ) {
					$query_array->query_vars[ 'include' ] = $user_ids;
				} else {
                    $all_users_ids = bmt_get_all_users();
					$query_array->query_vars[ 'exclude' ] = $all_users_ids;
				}
			}
		}

		/**
		 * Member type option
		 */
		public function bmt_member_type_option() {

			$post_ids = bmt_get_active_member_types();
			if ( !empty($post_ids) ) {
				?>
				<div class="editfield field_bmt_member_type required-field">
				<label><?php _e('Member Type','bp-member-types'); ?></label>
				<?php
				/**
				 * Fires and displays Member Type registration validation errors.
				 *
				 * @since 1.1.0
				 */
				do_action( 'bp_field_bmt_member_type_errors' );

				//Pre fill member type with default or selected value
				$bp_member_type_selected = isset( $_REQUEST['bmt_member_type'] ) ? $_REQUEST['bmt_member_type'] : buddyboss_bmt()->option('default_member_type');

				?>
				<select class="bmt-member-type" name="bmt_member_type">
					<option value=""><?php echo '----'; ?></option>
					<?php
					foreach ($post_ids as $pid) {
						$enable_register = get_post_meta($pid, '_bp_member_type_enable_registration', true);

						if ( $enable_register ) {

							$name = bmt_get_member_type_key( $pid );
							?>
							<option value="<?php echo $name ?>" <?php selected( $bp_member_type_selected, $name ) ?>><?php echo get_the_title($pid); ?></option>
						<?php
						}

					} ?>
				</select>
				</div>

				<!-- Member types:
				inline css to make all field hidden by default for conditional fields -->
				<style type="text/css">
				.editfield:not(.field_bmt_member_type) { display: none; }
				</style>
				<!-- End Member types -->
				<?php
			}

		}

		/**
		 * Admin css
		 * if css grows would have to add a admin css file instead.
		 */
		public function bmt_member_type_admin_style() {

			?><style>.post-type-bmt-member-type #post-body #normal-sortables { min-height: 0; }</style><?php

		}

		/**
		 * Admin css
		 * if css grows would have to add a admin css file instead.
		 */
		public function bmt_member_type_style() {

			?><style>footer.entry-meta { display: inline-block; }</style><?php

		}

		/**
		 * remove member type metabox for users who doesn't have permission to change member types
		 */
		function bmt_remove_member_type_metabox() {
		    if ( ! current_user_can( 'manage_options' ) ) {
			    remove_meta_box( 'bp_members_admin_member_type', get_current_screen()->id, 'side' );
		    }
		}


	} //End of class BuddyBoss_BMT_BP_Component


endif;

