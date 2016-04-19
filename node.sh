#!/usr/bin/expect
spawn sudo nginx -s stop
send "YDW52025\r"
spawn sudo nginx -c /usr/local/nginx/conf/nginx.conf
send "YDW52025\r"
spawn sudo nodemon -w/ -x'node bin/www' 
send "YDW52025\r"
interact
