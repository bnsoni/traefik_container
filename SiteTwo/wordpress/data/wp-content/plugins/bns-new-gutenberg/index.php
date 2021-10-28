<?php

/* Plugin name: BNS Gutenberg
Description: js trial
Version 1.0
Author: Soni
Author URI: <Https class="
*/

if( ! defined( 'ABSPATH' ) ) exit;

class tryingGutenberg{
    function __construct(){
        add_action('enqueue_block_editor_assets', array($this, 'adminAssets'));
    }

    function adminAssets(){
        wp_enqueue_script('ournewblocktype', plugin_dir_url(__FILE__) . 'test.js', array('wp-blocks'));
    }
}

$tryingGutenbergObj = new tryingGutenberg();