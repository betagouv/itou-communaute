<?php
/**
 * The template for displaying single llms quize
 *
 * @link https://developer.wordpress.org/themes/basics/template-hierarchy/#single-post
 *
 * @package BuddyBoss_Theme
 */

get_header();
?>

	<div id="primary" class="content-area quizlmslifter">
		<main id="main" class="site-main">

			<?php
            
            while ( have_posts() ) :
				the_post();

				get_template_part( 'template-parts/content', 'llms_quiz' );

			endwhile; // End of the loop.
       
			?>

		</main><!-- #main -->
	</div><!-- #primary -->
	
<?php
get_footer();
