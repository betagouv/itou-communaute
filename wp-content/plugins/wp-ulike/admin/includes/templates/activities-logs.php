<?php
/**
 * Activities logs page template
 * 
 * @package    wp-ulike
 * @author     TechnoWich 2021
 * @link       https://wpulike.com
 */

	// no direct access allowed
	if ( ! defined('ABSPATH') ) {
	    die();
	}

	// Alternate tanle colors
	$alternate = true;
	// Get datasets
	$datasets  = wp_ulike_get_paginated_logs( 'ulike_activities', 'activities' );

	if( empty( $datasets ) ) {
?>
<div class="wrap wp-ulike-container">
	<div class="wp-ulike-row wp-ulike-empty-stats">
		<div class="col-12">
			<div class="wp-ulike-icon">
				<i class="wp-ulike-icons-hourglass"></i>
			</div>
			<div class="wp-ulike-info">
				<?php echo __( 'No data found! This is because there is still no data in your database.', WP_ULIKE_SLUG ); ?>
			</div>
		</div>
	</div>
</div>
<?php
		exit;
	}
?>
<div class="wrap wp-ulike-container">
	<div class="wp-ulike-pro-stats-banner wp-ulike-row">
		<div class="col-12">
			<div class="wp-ulike-inner">
				<div class="wp-ulike-row">
					<h3><?php echo _e( 'Check Votings, Best Likers & Top contents', WP_ULIKE_SLUG ); ?></h3>
					<?php
						echo sprintf( '<p>%s</p><div class="wp-ulike-button-group">%s%s</div>', __('With WP ULike Pro comprehensive Statistics tools, you can track what your users love and what annoys them in an instance. You can extract reports of likes and dislikes in Linear Charts, Pie Charts or whichever you prefer with dateRange picker and status selector controllers, no confusing options and coding needed.',WP_ULIKE_SLUG), wp_ulike_widget_button_callback( array(
							'label'         => __( 'Buy WP ULike Premium', WP_ULIKE_SLUG ),
							'color_name'    => 'default',
							'link'          => WP_ULIKE_PLUGIN_URI . 'pricing/?utm_source=statistics-page&utm_campaign=gopro&utm_medium=wp-dash',
							'target'        => '_blank'
						) ), wp_ulike_widget_button_callback( array(
							'label'         => __( 'More information', WP_ULIKE_SLUG ),
							'color_name'    => 'info',
							'link'          => WP_ULIKE_PLUGIN_URI . 'blog/wp-ulike-pro-statistics/?utm_source=statistics-page&utm_campaign=gopro&utm_medium=wp-dash',
							'target'        => '_blank'
						) ) );
					?>
				</div>
			</div>
		</div>
	</div>
	<div class="wp-ulike-row">
		<div class="col-12">
			<h2 class="wp-ulike-page-title"><?php _e('WP ULike Logs', WP_ULIKE_SLUG); ?></h2>
			<h3><?php _e('Activity Likes Logs', WP_ULIKE_SLUG); ?></h3>
			<div class="tablenav">
				<div class='tablenav-pages'>
					<span class="displaying-num"><?php echo $datasets['num_rows'] . ' ' .  __('Logs',WP_ULIKE_SLUG); ?></span>
					<?php echo $datasets['paginate']->show();  // Echo out the list of paging. ?>
				</div>
			</div>
			<table class="widefat">
				<thead>
					<tr>
						<th width="3%"><?php _e('ID', WP_ULIKE_SLUG); ?></th>
						<th width="13%"><?php _e('Username', WP_ULIKE_SLUG); ?></th>
						<th><?php _e('Status', WP_ULIKE_SLUG); ?></th>
						<th width="6%"><?php _e('Activity ID', WP_ULIKE_SLUG); ?></th>
						<th><?php _e('Permalink', WP_ULIKE_SLUG); ?></th>
						<th><?php _e('Date / Time', WP_ULIKE_SLUG); ?></th>
						<th><?php _e('IP', WP_ULIKE_SLUG); ?></th>
						<th><?php _e('Actions', WP_ULIKE_SLUG); ?></th>
					</tr>
				</thead>
				<tbody class="wp_ulike_logs">
					<?php
					foreach ( $datasets['data_rows'] as $data_row )
					{
					?>
					<tr <?php if ($alternate == true) echo 'class="alternate"';?>>
						<td>
						<?php
							echo $data_row->id;
						?>
						</td>
						<td>
						<?php
							if( NULL != ( $user_info = get_userdata( $data_row->user_id ) ) ) {
								echo get_avatar( $user_info->user_email, 16, '' , 'avatar') . '<em> @' . $user_info->user_login . '</em>';
							}
							else {
								echo '<em> #'. __('Guest User',WP_ULIKE_SLUG) .'</em>';
							}
						?>
						</td>
						<td>
						<?php
							echo $data_row->status;
						?>
						</td>
						<td>
						<?php
							echo $data_row->activity_id;
						?>
						</td>
						<td>
						<?php
							printf( __( '<a href="%1$s">Activity Permalink</a>', WP_ULIKE_SLUG ), bp_activity_get_permalink( $data_row->activity_id ) );
						?>
						</td>
						<td>
						<?php
							echo wp_ulike_date_i18n( $data_row->date_time );
						?>
						</td>
						<td>
						<?php
							echo $data_row->ip;
						?>
						</td>
						<td>
							<button class="wp_ulike_delete button" type="button" data-nonce="<?php echo wp_create_nonce( 'ulike_activities' . $data_row->id ); ?>" data-id="<?php echo $data_row->id;?>" data-table="ulike_activities">
								<i class="dashicons dashicons-trash"></i>
							</button>
						</td>
					<?php
					$alternate = !$alternate;
					}
					?>
					</tr>
				</tbody>
			</table>
			<div class="tablenav">
				<div class='tablenav-pages'>
					<span class="displaying-num"><?php echo $datasets['num_rows'] . ' ' .  __('Logs',WP_ULIKE_SLUG); ?></span>
					<?php echo $datasets['paginate']->show();  // Echo out the list of paging. ?>
				</div>
			</div>
		</div>
	</div>
</div>