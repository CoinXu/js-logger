#/usr/bin/bash

./node_modules/karma/bin/karma start ./karam.config.js

if [ "$?" == "0" ]; then
	echo "exec test case success."
else
	echo "exeec test case fail"
fi

if [ -d coverage ] && [ "$?" == "0" ]; then
	rm -rf coverage
fi
