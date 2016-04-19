#!/usr/bin/expect
send "YDW52025\r"
spawn sudo compass watch public -s nested
send "YDW52025\r"
interact

