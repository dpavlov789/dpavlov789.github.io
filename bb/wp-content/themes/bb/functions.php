<?php 
add_action( 'wp_enqueue_scripts', 'bb_scripts' );
function bb_scripts() {
	wp_enqueue_style( 'style', get_template_directory_uri() . '/assets/css/style.css' );
}
?>