<?php

function university_post_types(){
	register_post_type('event', array(
		'supports' => array('title', 'editor', 'excerpt'),
		'rewrite' => array('slug' => 'events'),
		'has_archive' => true,
		'public' => true,
		'labels' => array(
			'name' => 'Events',
			'add_new_item' => 'Add New Event',
			'edit_item' => 'Edit Event',
			'all_items' => 'All Events',
			'singular_name' => 'Event'	
		),
		'menu_icon' => 'dashicons-calendar'
	));


	register_post_type('Interview', array(
		'supports' => array('title', 'editor', 'excerpt'),
		'rewrite' => array('slug' => 'Interviews'),
		'has_archive' => true,
		'public' => true,
		'labels' => array(
			'name' => 'Interviews',
			'add_new_item' => 'Add New Interview',
			'edit_item' => 'Edit Interview',
			'all_items' => 'All Interviews',
			'singular_name' => 'Interview'	
		)
	));

}

add_action('init', 'university_post_types');