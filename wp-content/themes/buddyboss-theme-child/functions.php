<?php

function custom_wp_enqueue_scripts() {
  wp_enqueue_style('parent-style', get_template_directory_uri() . '/style.css');
  wp_enqueue_style('child-style', get_stylesheet_directory_uri() . '/style.css', array('parent-style'));
}
add_action('wp_enqueue_scripts', 'custom_wp_enqueue_scripts');


function custom_login_style() {
  wp_enqueue_style('buddyboss-theme-login', get_template_directory_uri() . '/assets/css/login.min.css');
  wp_enqueue_style('child-login', get_stylesheet_directory_uri() . '/assets/css/login.css', array('buddyboss-theme-login'));  
}
add_action('login_enqueue_scripts', 'custom_login_style');
