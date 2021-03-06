<?php


/**
 * itou_on_user_registration
 * action to programmatically set new members as WP default role
 * @param int $user_id User ID 
 * @return void
 */
function itou_on_user_registration($user_id) {
  $type = bp_get_member_type($user_id, true);
  $area = xprofile_get_field_data('Région', $user_id);
  $profile_field_type_id = '104';
  $args = array(
    'field'   => $profile_field_type_id, // Exact field name or field ID.
    'user_id' => $user_id // ID of logged in user
  );
  $profile_type = bp_get_profile_field_data( $args ); 
  $group_area = $area !== '' ? itou_get_group_from_area($area):[];
  logger('Trying to register new user with ==> '.$type.' - '.print_r($profile_type, true));  
  if($type === 'membre' && !itou_is_user_role($user_id, ['administrator'])) {    
    $user = new WP_User($user_id);
    $user->add_role(get_option('default_role'));
  }
  if(isset($profile_type) && !empty($profile_type)) {
    $member_type_slug = get_post_field( 'post_name', $profile_type );
    if($member_type_slug === "bande-a-itou") {
      $bande_a_itou_group = groups_get_groups([
        'slug' => 'la-bande-a-itou'
      ]);
      logger('Trying to set member type ==> '.$user_id.' '.$member_type_slug);  
      $return = bp_set_member_type($user_id, $member_type_slug);
      logger('Set member type ==> '.print_r($return, true));  
      logger('Trying to join group ==> '.print_r($bande_a_itou_group, true));  
      if(!empty($bande_a_itou_group) && $return) {
        logger('Joining group ==> '.print_r($bande_a_itou_group, true));  
        groups_join_group($bande_a_itou_group['groups'][0]->id, $user_id);
      }
    }  
  }
  if(!empty($group_area)){
    foreach($group_area as $group) {
      if($group->status === 'public') {
        groups_join_group($group->id, $user_id);
      }
    }
    
  }
}

/**
 * itou_get_user_roles
 * get user roles by user ID
 * @param int $user_id User ID 
 * @return array Flat list of roles (slug string)
 */
function itou_get_user_roles($user_id) {
  $user = get_userdata( $user_id );
  return empty( $user ) ? array() : $user->roles;
}

/**
 * itou_is_user_role
 * check if user has some WP Role
 * @param int $user_id User ID 
 * @param mixed $role string or array containing the role to check 
 * @return boolean
 */
function itou_is_user_role($user_id, $role) {
  return in_array($role, itou_get_user_roles( $user_id ));
}

/**
 * 
 * itou_set_users_default_role
 * used as WP Cron hook to reset users default WP role
 * @return void
 */
function itou_set_users_default_role() {
  $users = get_users();
  foreach($users as $user) {
    itou_on_user_registration($user->ID);
  }
}

/**
 * Hooks to handle user / member registration / update
 */
add_action( 'user_register', 'itou_on_user_registration', 20, 1 );
add_action( 'bp_core_activated_user', 'itou_on_user_registration', 20, 1 );
add_action( 'save_post', 'itou_on_user_registration', 20, 1 );
add_action( 'bp_core_signup_user', 'itou_on_user_registration', 20, 1 );
add_action('itou_set_users_default_role', 'itou_set_users_default_role');

