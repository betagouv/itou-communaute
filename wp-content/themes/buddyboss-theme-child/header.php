<!doctype html>
<html <?php language_attributes(); ?>>
	<head>
		<meta charset="<?php bloginfo( 'charset' ); ?>">
		<link rel="profile" href="http://gmpg.org/xfn/11">

		<meta property="og:type" content="website">
		<meta property="og:url" content="https://communaute.inclusion.beta.gouv.fr">
		<meta property="og:title" content="<?= get_bloginfo('name'); ?>">
		<meta property="og:description" content="<?= get_bloginfo('description'); ?>">
		<meta property="og:image" content="<?=get_stylesheet_directory_uri() . '/assets/images/'; ?>logo-communaute-inclusion-meta.png">

		<meta property="twitter:card" content="summary_large_image">
		<meta property="twitter:url" content="https://communaute.inclusion.beta.gouv.fr/">
		<meta property="twitter:title" content="<?= get_bloginfo('name'); ?>">
		<meta property="twitter:description" content="<?= get_bloginfo('description'); ?>">
		<meta property="twitter:image" content="<?=get_stylesheet_directory_uri() . '/assets/images/'; ?>logo-communaute-inclusion-meta.png">

		<link rel="shortcut icon" href="<?=get_stylesheet_directory_uri() . '/assets/images/'; ?>favico.ico" type="image/ico">
		<?php wp_head(); ?>

	</head>

	<body <?php body_class(); ?>>

        <?php wp_body_open(); ?>

		<?php if (!is_singular('llms_my_certificate')):
		 
			do_action( THEME_HOOK_PREFIX . 'before_page' ); 
	
		endif; ?>

		<div id="page" class="site">

			<?php do_action( THEME_HOOK_PREFIX . 'before_header' ); ?>

			<header id="masthead" class="<?php echo apply_filters( 'buddyboss_site_header_class', 'site-header site-header--bb' ); ?>">
				<?php do_action( THEME_HOOK_PREFIX . 'header' ); ?>
			</header>

			<?php do_action( THEME_HOOK_PREFIX . 'after_header' ); ?>

			<?php do_action( THEME_HOOK_PREFIX . 'before_content' ); ?>

			<div id="content" class="site-content">

				<?php do_action( THEME_HOOK_PREFIX . 'begin_content' ); ?>

				<div class="container">
					<div class="<?php echo apply_filters( 'buddyboss_site_content_grid_class', 'bb-grid site-content-grid' ); ?>">