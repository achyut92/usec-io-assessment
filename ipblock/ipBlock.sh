#!/bin/bash
filename="$1"
t=$((60*$2))
while read -r i;
do
    ADDR=$i

    iptables -I INPUT -s $ADDR -j DROP

    echo $ADDR "is Blocked"

done < "$filename" & sleep $t; ./ipUnblock.sh $filename