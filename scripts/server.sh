#!/bin/bash
echo "------------------"
echo "| Run server app |"
echo "------------------"

if [ "$1" == "--help" ]
then
	echo "Usage: $0"
else
	node ../odc.js
fi