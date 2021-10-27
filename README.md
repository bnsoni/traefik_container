# traefik_container
A traefik container with initial config (Be sure to create external network 'traefik')

Sample config for associated containers;

version: '3.7'

networks: 
  traefik:
    external: true
  internal:
    external: false


services: 
  
  db:
    image: mysql:8.0.19
    container_name: "mysqldb"
    volumes:
      - db_data:/var/lib/testsite
    restart: always
    environment:
      - MYSQL_ROOT_PASSWORD=123456
      - MYSQL_DATABASE=exampledb
      - MYSQL_USER=admin
      - MYSQL_PASSWORD=123456
    networks:
      - internal
    labels:
      - traefik.enable=false

  wordpress:
    image: wordpress:latest
    container_name: "wordpress"
    restart: always
    labels:
      # The labels are usefull for Traefik only
      - "traefik.enable=true"
      - "traefik.docker.network=traefik"
      # Get the routes from http
      - "traefik.http.routers.wordpresscp.rule=Host(`wp.localhost`)"
      - "traefik.http.routers.wordpresscp.entrypoints=web"
      # Redirect these routes to https
      - "traefik.http.middlewares.redirect-to-https.redirectscheme.scheme=https"
      - "traefik.http.routers.wordpresscp.middlewares=redirect-to-https@docker"
      # Get the routes from https
      - "traefik.http.routers.wordpresscp-secured.rule=Host(`wp.localhost`)"
      - "traefik.http.routers.wordpresscp-secured.entrypoints=web-secure"
      # Apply autentificiation with http challenge
      - "traefik.http.routers.wordpresscp-secured.tls=true"
      - "traefik.http.routers.wordpresscp-secured.tls.certresolver=myhttpchallenge"
    environment:
      - WORDPRESS_DB_HOST=db:3306
      - WORDPRESS_DB_USER=admin
      - WORDPRESS_DB_PASSWORD=123456
      - WORDPRESS_DB_NAME=exampledb
    volumes:
      - ./wordpress/data:/var/www/html/
    depends_on: 
      - db
    networks: 
      - traefik
      - internal

  phpmyadmin:
    image: phpmyadmin/phpmyadmin
    container_name: "phpmyadmin"
    restart: always
    labels:
      # The labels are usefull for Traefik only
      - "traefik.enable=true"
      - "traefik.docker.network=traefik"
      # Get the routes from http
      - "traefik.http.routers.phpmyadmin.rule=Host(`dbadmin.localhost`)"
      - "traefik.http.routers.phpmyadmin.entrypoints=web"
      # Redirect these routes to https
      - "traefik.http.middlewares.redirect-to-https.redirectscheme.scheme=https"
      - "traefik.http.routers.phpmyadmin.middlewares=redirect-to-https@docker"
      # Get the routes from https
      - "traefik.http.routers.phpmyadmin-secured.rule=Host(`dbadmin.localhost`)"
      - "traefik.http.routers.phpmyadmin-secured.entrypoints=web-secure"
      # Apply autentificiation with http challenge
      - "traefik.http.routers.phpmyadmin-secured.tls=true"
      - "traefik.http.routers.phpmyadmin-secured.tls.certresolver=myhttpchallenge"
    environment: 
      PMA_HOST: db
      MYSQL_ROOT_PASSWORD: 123456
    depends_on: 
      - db
    networks:
      - traefik
      - internal
  
volumes:
  db_data:
