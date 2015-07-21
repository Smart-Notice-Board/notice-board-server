#!/bin/bash
while [ : ]
do


    ncftpget -R -v -T -u "ps2015" -p "RVCE@cse2015" www.rvdigitalnoticeboard.co.in /var/www/html/dnb/images1 /public_html/uploaded_images/*.*
    sleep 30

done
