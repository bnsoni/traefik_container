<?php

function bns_gutenberg_blocks(){
    wp_register_script('custom_js_file', get_template_directory_uri() . '/js/build/index.js', array('wp-blocks', 'wp-editor', 'wp-components'));


    register_block_type( 'bnsgutengerg/testblock', array(
        'editor_script' => 'custom_js_file')
    );
}

function theHTML(){
    return '<p>Hello from theHTML</p>';
}

add_action('init', 'bns_gutenberg_blocks');