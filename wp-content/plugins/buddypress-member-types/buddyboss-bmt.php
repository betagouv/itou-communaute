<?php
/**
 * Plugin Name: BuddyPress Member Types
 * Plugin URI:  https://www.buddyboss.com
 * Description: Easily create and manage member types without having to write a single line of code.
 * Author:      BuddyBoss
 * Author URI:  http://buddyboss.com
 * Version:     1.1.5
 */
// Exit if accessed directly
if ( ! defined( 'ABSPATH' ) )
	exit;

/**
 * ========================================================================
 * CONSTANTS
 * ========================================================================
 */
// Codebase version
if ( ! defined( 'BUDDYBOSS_BMT_PLUGIN_VERSION' ) ) {
	define( 'BUDDYBOSS_BMT_PLUGIN_VERSION', '1.1.5' );
}

// Database version
if ( ! defined( 'BUDDYBOSS_BMT_PLUGIN_DB_VERSION' ) ) {
	define( 'BUDDYBOSS_BMT_PLUGIN_DB_VERSION', '1' );
}

// Directory
if ( ! defined( 'BUDDYBOSS_BMT_PLUGIN_DIR' ) ) {
	define( 'BUDDYBOSS_BMT_PLUGIN_DIR', trailingslashit( plugin_dir_path( __FILE__ ) ) );
}

// Url
if ( ! defined( 'BUDDYBOSS_BMT_PLUGIN_URL' ) ) {
	$plugin_url = plugin_dir_url( __FILE__ );

	// If we're using https, update the protocol. Workaround for WP13941, WP15928, WP19037.
	if ( is_ssl() )
		$plugin_url = str_replace( 'http://', 'https://', $plugin_url );

	define( 'BUDDYBOSS_BMT_PLUGIN_URL', $plugin_url );
}

// File
if ( ! defined( 'BUDDYBOSS_BMT_PLUGIN_FILE' ) ) {
	define( 'BUDDYBOSS_BMT_PLUGIN_FILE', __FILE__ );
}

/**
 * ========================================================================
 * MAIN FUNCTIONS
 * ========================================================================
 */

/**
 * Main
 *
 * @return void
 */
add_action( 'plugins_loaded', 'BUDDYBOSS_BMT_init' );

function BUDDYBOSS_BMT_init() {
	if ( ! function_exists( 'bp_is_active' ) ) {
		return;
	}

	global $BUDDYBOSS_BMT;

	$main_include = BUDDYBOSS_BMT_PLUGIN_DIR . 'includes/main-class.php';

	try {
		if ( file_exists( $main_include ) ) {
			require( $main_include );
		} else {
			$msg = sprintf( __( "Couldn't load main class at:<br/>%s", 'bp-member-types' ), $main_include );
			throw new Exception( $msg, 404 );
		}
	} catch ( Exception $e ) {
		$msg = sprintf( __( "<h1>Fatal error:</h1><hr/><pre>%s</pre>", 'bp-member-types' ), $e->getMessage() );
		echo $msg;
	}

	$BUDDYBOSS_BMT = BuddyBoss_BMT_Plugin::instance();
}

/**
 * Check whether
 * it meets all requirements
 * @return void
 */
function bmt_requirements()
{

    global $Plugin_Requirements_Check;

    $requirements_Check_include  = BUDDYBOSS_BMT_PLUGIN_DIR  . 'includes/requirements-class.php';

    try
    {
        if ( file_exists( $requirements_Check_include ) )
        {
            require( $requirements_Check_include );
        }
        else{
            $msg = sprintf( __( "Couldn't load BMT_Plugin_Check class at:<br/>%s", 'bp-member-types' ), $requirements_Check_include );
            throw new Exception( $msg, 404 );
        }
    }
    catch( Exception $e )
    {
        $msg = sprintf( __( "<h1>Fatal error:</h1><hr/><pre>%s</pre>", 'bp-member-types' ), $e->getMessage() );
        echo $msg;
    }

    $Plugin_Requirements_Check = new BMT_Plugin_Requirements_Check();
    $Plugin_Requirements_Check->activation_check();

}
register_activation_hook( __FILE__, 'bmt_requirements' );

/**
 * Must be called after hook 'plugins_loaded'
 * @return BuddyBoss Bsp Plugin main controller object
 */
function buddyboss_bmt() {

	global $BUDDYBOSS_BMT;
	return $BUDDYBOSS_BMT;

}

/**
 * Allow automatic updates via the WordPress dashboard
 */
require_once('includes/buddyboss-plugin-updater.php');
//new buddyboss_updater_plugin( 'http://update.buddyboss.com/plugin', plugin_basename(__FILE__), 107);
