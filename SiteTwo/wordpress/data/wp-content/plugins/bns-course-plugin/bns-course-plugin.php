<?php

/*
    Plugin Name: BNS COURSE PLUGIN
    Version: 1.0
    Author: Soni
    Author URI: https://www....

*/

add_action('rest_api_init', 'bnsPluginTest');

function bnsPluginTest(){
    register_rest_route('ibl/api', 'interview', array(
        'methods' => WP_REST_Server::READABLE, /*USE this constant to ensure that when wp_rest_server changes our readable endpoints will keep working as intended*/ 
        'callback' => 'bnsPluginTestCallback'
    ));

    register_rest_route('ibl/api', 'interview', array(
        'methods' => WP_REST_Server::CREATABLE, /*USE this constant to ensure that when wp_rest_server changes our readable endpoints will keep working as intended*/ 
        'callback' => 'bnsNewInputCallback'
    ));
}

function bnsPluginTestCallback( $data ){
    global $wpdb;
    
    if(isset($data['greeting'])){
        $tablename = $wpdb->prefix . 'interviews';
        $query = $wpdb->prepare("SELECT * FROM $tablename WHERE greeting = %s", array($_GET['greeting']));//use this to prevent sql injections from a client
        $interviews = $wpdb->get_results($query);

        return $interviews;
    }
    else{
        $allGreetings = $wpdb->prepare("SELECT * FROM wp_interviews");

        $allGreetings = $wpdb->get_results($allGreetings);
        return $allGreetings;
    }
}

function bnsNewInputCallback( $data ){
        global $wpdb;
        $tablename = $wpdb->prefix . "interviews";
        $userInput = $_GET['greeting'];

        $wpdb->insert($tablename, array(
            'greeting' => $userInput
        ));

        return $userInput;
}


class bnsCoursePlugin{
    function __construct(){
        global $wpdb;
        $this->charset = $wpdb->get_charset_collate();
        $this->tablename = $wpdb->prefix . "interviews";

        register_activation_hook(__FILE__, array($this, 'onActivate'));
    }

    function onActivate(){
        require_once(ABSPATH . 'wp-admin/includes/upgrade.php');  /*dbDelta function is not directly accesible, therefore this line is required*/
        dbDelta("CREATE TABLE $this->tablename(
            id bigint(20) unsigned NOT NULL AUTO_INCREMENT,
            greeting varchar(200) NOT NULL DEFAULT '',
            PRIMARY KEY  (id) /*double space after PRIMARY KEY is a must*/
        ) $this->charset;");
    }
}

if (class_exists('bnsCoursePlugin')){
    $objBnsCourse = new bnsCoursePlugin();
}