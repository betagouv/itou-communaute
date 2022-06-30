<?php

if ( ! defined( 'ABSPATH' ) ) { exit; }

 if ( ! defined( 'ABSPATH' ) ) { exit; } class FS_Admin_Notice_Manager { protected $_module_unique_affix; protected $_id; protected $_title; private $_notices = array(); private $_sticky_storage; protected $_logger; private $_blog_id = 0; private $_is_network_notices; private static $_instances = array(); static function instance( $id, $title = '', $module_unique_affix = '', $is_network_and_blog_admins = false, $network_level_or_blog_id = false ) { if ( $is_network_and_blog_admins ) { $network_level_or_blog_id = true; } $key = strtolower( $id ); if ( is_multisite() ) { if ( true === $network_level_or_blog_id ) { $key .= ':ms'; } else if ( is_numeric( $network_level_or_blog_id ) && $network_level_or_blog_id > 0 ) { $key .= ":{$network_level_or_blog_id}"; } else { $network_level_or_blog_id = get_current_blog_id(); $key .= ":{$network_level_or_blog_id}"; } } if ( ! isset( self::$_instances[ $key ] ) ) { self::$_instances[ $key ] = new FS_Admin_Notice_Manager( $id, $title, $module_unique_affix, $is_network_and_blog_admins, $network_level_or_blog_id ); } return self::$_instances[ $key ]; } protected function __construct( $id, $title = '', $module_unique_affix = '', $is_network_and_blog_admins = false, $network_level_or_blog_id = false ) { $this->_id = $id; $this->_logger = FS_Logger::get_logger( WP_FS__SLUG . '_' . $this->_id . '_data', WP_FS__DEBUG_SDK, WP_FS__ECHO_DEBUG_SDK ); $this->_title = ! empty( $title ) ? $title : ''; $this->_module_unique_affix = $module_unique_affix; $this->_sticky_storage = FS_Key_Value_Storage::instance( 'admin_notices', $this->_id, $network_level_or_blog_id ); if ( is_multisite() ) { $this->_is_network_notices = ( true === $network_level_or_blog_id ); if ( is_numeric( $network_level_or_blog_id ) ) { $this->_blog_id = $network_level_or_blog_id; } } else { $this->_is_network_notices = false; } $is_network_admin = fs_is_network_admin(); $is_blog_admin = fs_is_blog_admin(); if ( ( $this->_is_network_notices && $is_network_admin ) || ( ! $this->_is_network_notices && $is_blog_admin ) || ( $is_network_and_blog_admins && ( $is_network_admin || $is_blog_admin ) ) ) { if ( 0 < count( $this->_sticky_storage ) ) { $ajax_action_suffix = str_replace( ':', '-', $this->_id ); add_action( "wp_ajax_fs_dismiss_notice_action_{$ajax_action_suffix}", array( &$this, 'dismiss_notice_ajax_callback' ) ); foreach ( $this->_sticky_storage as $msg ) { $this->add( $msg['message'], $msg['title'], $msg['type'], true, $msg['id'], false, isset( $msg['wp_user_id'] ) ? $msg['wp_user_id'] : null, ! empty( $msg['plugin'] ) ? $msg['plugin'] : null, $is_network_and_blog_admins ); } } } } function dismiss_notice_ajax_callback() { check_admin_referer( 'fs_dismiss_notice_action' ); if ( ! is_numeric( $_POST['message_id'] ) ) { $this->_sticky_storage->remove( $_POST['message_id'] ); } wp_die(); } static function _add_sticky_dismiss_javascript() { $params = array(); fs_require_once_template( 'sticky-admin-notice-js.php', $params ); } private static $_added_sticky_javascript = false; private static function has_sticky_messages() { if ( ! self::$_added_sticky_javascript ) { add_action( 'admin_footer', array( 'FS_Admin_Notice_Manager', '_add_sticky_dismiss_javascript' ) ); } } function _admin_notices_hook() { if ( function_exists( 'current_user_can' ) && ! current_user_can( 'manage_options' ) ) { return; } $show_admin_notices = ( ! $this->is_gutenberg_page() ); foreach ( $this->_notices as $id => $msg ) { if ( isset( $msg['wp_user_id'] ) && is_numeric( $msg['wp_user_id'] ) ) { if ( get_current_user_id() != $msg['wp_user_id'] ) { continue; } } $show_notice = call_user_func_array( 'fs_apply_filter', array( $this->_module_unique_affix, 'show_admin_notice', $show_admin_notices, $msg ) ); if ( true !== $show_notice ) { continue; } fs_require_template( 'admin-notice.php', $msg ); if ( $msg['sticky'] ) { self::has_sticky_messages(); } } } function _enqueue_styles() { fs_enqueue_local_style( 'fs_common', '/admin/common.css' ); } function is_gutenberg_page() { if ( function_exists( 'is_gutenberg_page' ) && is_gutenberg_page() ) { return true; } $current_screen = get_current_screen(); if ( method_exists( $current_screen, 'is_block_editor' ) && $current_screen->is_block_editor() ) { return true; } return false; } function add( $message, $title = '', $type = 'success', $is_sticky = false, $id = '', $store_if_sticky = true, $wp_user_id = null, $plugin_title = null, $is_network_and_blog_admins = false ) { $notices_type = $this->get_notices_type(); if ( empty( $this->_notices ) ) { if ( ! $is_network_and_blog_admins ) { add_action( $notices_type, array( &$this, "_admin_notices_hook" ) ); } else { add_action( 'network_admin_notices', array( &$this, "_admin_notices_hook" ) ); add_action( 'admin_notices', array( &$this, "_admin_notices_hook" ) ); } add_action( 'admin_enqueue_scripts', array( &$this, '_enqueue_styles' ) ); } if ( '' === $id ) { $id = md5( $title . ' ' . $message . ' ' . $type ); } $message_object = array( 'message' => $message, 'title' => $title, 'type' => $type, 'sticky' => $is_sticky, 'id' => $id, 'manager_id' => $this->_id, 'plugin' => ( ! is_null( $plugin_title ) ? $plugin_title : $this->_title ), 'wp_user_id' => $wp_user_id, ); if ( $is_sticky && $store_if_sticky ) { $this->_sticky_storage->{$id} = $message_object; } $this->_notices[ $id ] = $message_object; } function remove_sticky( $ids ) { if ( ! is_array( $ids ) ) { $ids = array( $ids ); } foreach ( $ids as $id ) { $this->_sticky_storage->remove( $id ); if ( isset( $this->_notices[ $id ] ) ) { unset( $this->_notices[ $id ] ); } } } function has_sticky( $id ) { return isset( $this->_sticky_storage[ $id ] ); } function add_sticky( $message, $id, $title = '', $type = 'success', $wp_user_id = null, $plugin_title = null, $is_network_and_blog_admins = false ) { if ( ! empty( $this->_module_unique_affix ) ) { $message = fs_apply_filter( $this->_module_unique_affix, "sticky_message_{$id}", $message ); $title = fs_apply_filter( $this->_module_unique_affix, "sticky_title_{$id}", $title ); } $this->add( $message, $title, $type, true, $id, true, $wp_user_id, $plugin_title, $is_network_and_blog_admins ); } function clear_all_sticky() { $this->_sticky_storage->clear_all(); } private function get_notices_type() { return $this->_is_network_notices ? 'network_admin_notices' : 'admin_notices'; } } 