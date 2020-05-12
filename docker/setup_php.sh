#!/bin/bash
apt-get update
apt-get -y install libicu-dev
docker-php-ext-install intl 
docker-php-ext-install mysqli
docker-php-ext-install pdo_mysql  
php /var/www/html/vendor/silverstripe/framework/cli-script.php dev/build
/var/www/html/vendor/bin/sake dev/tasks/HydrateCustomConfig
docker-php-entrypoint php-fpm


