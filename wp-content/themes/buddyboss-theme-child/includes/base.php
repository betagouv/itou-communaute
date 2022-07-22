<?php

ini_set('memory_limit', '1024M');

function custom_wp_enqueue_scripts() {
  wp_enqueue_style('parent-style', get_template_directory_uri() . '/style.css');
  //wp_enqueue_style('child-style', get_stylesheet_directory_uri() . '/style.css', array('parent-style'));
  wp_enqueue_style('child-base', get_stylesheet_directory_uri() . '/assets/css/base.css');
  wp_enqueue_style('child-custom', get_stylesheet_directory_uri() . '/assets/css/custom.css');
  wp_enqueue_script('itou-communaute-faq', get_stylesheet_directory_uri() . '/assets/js/faq.js', 'jquery', '1.0');
  wp_enqueue_script('itou-communaute-events', get_stylesheet_directory_uri() . '/assets/js/events.js', 'jquery', '1.0');
  wp_enqueue_script('itou-communaute-idea', get_stylesheet_directory_uri() . '/assets/js/ideas.js', 'jquery', '1.0');
  wp_enqueue_script('itou-communaute-register', get_stylesheet_directory_uri() . '/assets/js/register.js', 'jquery', '1.0');
  wp_enqueue_script('itou-communaute-invites', get_stylesheet_directory_uri() . '/assets/js/invites.js', 'jquery', '1.0');

}
add_action('wp_enqueue_scripts', 'custom_wp_enqueue_scripts');

function custom_login_style() {
  wp_enqueue_style('buddyboss-theme-login', get_template_directory_uri() . '/assets/css/login.min.css');
  wp_enqueue_style('child-login', get_stylesheet_directory_uri() . '/assets/css/login.css', array('buddyboss-theme-login'));

}
add_action('login_enqueue_scripts', 'custom_login_style');

function custom_mail_from($original_email_address) {
  return 'noreply@inclusion.beta.gouv.fr';
}
add_filter('wp_mail_from', 'custom_mail_from');

function custom_mail_name($original_email_from) {
    return 'La communauté';
}
add_filter('wp_mail_from_name', 'custom_mail_name');


function delete_script_version($src) {
  $parts = explode('?', $src);
  return $parts[0];
}
add_filter('script_loader_src', 'delete_script_version', 15, 1);
add_filter('style_loader_src', 'delete_script_version', 15, 1);

remove_action('wp_head', 'wp_generator');


function is_post_type($type) {
  global $wp_query;
  if($type == get_post_type($wp_query->post->ID)) {
    return true;
  } else {
    return false;
  }
}


function custom_register_nav_menu(){
  register_nav_menus( array(
    'header-menu-mobile'		=> 'Primary Mobile',
  ) );
}
add_action( 'after_setup_theme', 'custom_register_nav_menu', 0 );
