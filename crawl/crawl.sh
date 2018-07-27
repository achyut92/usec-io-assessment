ADDR="$2"
key="$1"
wget -A $key -r -np -e robots=off $ADDR
