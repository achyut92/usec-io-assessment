#!/bin/bash
filename="$1"
while read -r i;
do
    ADDR=$i
    iptables -D INPUT -s $ADDR -j DROP

    echo $ADDR "is Blocked"
done < "$filename"