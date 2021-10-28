<?php

/*
    Plugin Name: BNS NEWTABLE
    Version: 1.0
    Author: Soni
    Author URI: https://www....



*/

if( !defined('ABSPATH')) exit;

class InterviewTablePlugin{
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

        register_rest_route('ibl/api', 'interview', array(
            'methods' => WP_REST_Server::READABLE,
            'callback' => 'insertUserSubmissionCallback' 
        ));

        function insertUserSubmissionCallback(){
            $result = "Success";
            return $result;
        }
    }
}

if(class_exists('InterviewTablePlugin')){
    $intTablePlugin = new InterviewTablePlugin();
}