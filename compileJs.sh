#!/usr/bin/expect
spawn sudo nodemon -w public/javascripts -x browserify public/javascripts/main.js > public/javascripts/login.js
send "YDW52025\r"
interact

