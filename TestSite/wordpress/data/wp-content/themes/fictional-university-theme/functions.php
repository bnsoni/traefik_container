<?php



    function universityRegisterSearch(){
        register_rest_route('university/v1', 'search', array(
            'methods' => WP_REST_Server::READABLE, /*USE this constant to ensure that when wp_rest_server changes our readable endpoints will keep working as intended*/ 
            'callback' => 'searchResults'
        ));
        
        #register_rest_route('ibl/api', '/interview/id=(?P<id>[a-zA-Z0-9-]+)', array(
        #    'methods' => WP_REST_Server::READABLE,
        #    'callback' => 'insertUserSubmission' 
        #));

      
    }


    function searchResults(){
        $myposts = new WP_Query(array(
            'post_type' => 'post'
        ));
            
        $postsRefined = array();

        while($myposts->have_posts()){
            $myposts->the_post();
            
            array_push($postsRefined, array(
                'title' => get_the_title(),
                'permalink' => get_the_permalink()
            ));
        }

        return $postsRefined;
        
    }

    #add_action('rest_api_init', 'universityRegisterSearch');


    function university_custom_rest() {
        

        register_rest_field('post', 'authorName', array(
          'get_callback' => function() {return get_the_title();}
        ));
      }
      
      add_action('rest_api_init', 'university_custom_rest');

    function university_files(){
        wp_enqueue_script('main-javascript-js', get_theme_file_uri('/build/index.js'), array('jquery'), '1.0', true);
        wp_enqueue_style('op-fonts', '//fonts.googleapis.com/css?family=Roboto+Condensed:300,300i,400,400i,700,700i|Roboto:100,300,400,400i,700,700i');
        wp_enqueue_style('font-awesome', '//maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css');
        wp_enqueue_style('university_main_styles', get_theme_file_uri('/build/style-index.css'));
        wp_enqueue_style('university_extra_styles', get_theme_file_uri('/build/index.css'));
    }

    add_action('wp_enqueue_scripts', 'university_files');


    function university_features(){
        register_nav_menu('headerMenuLocation', 'Header Menu Location');
        add_theme_support('title-tag');
    }

    add_action('after_setup_theme', 'university_features');

/**
 * Custom Gutenberg blocks
 */
require get_template_directory() . '/inc/gutenberg.php';