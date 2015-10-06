'use strict';
var fs = require('fs');

var url = process.argv[2];
if (!url) process.exit(1);

console.log('starting bench on ' + url);

var spawn = require('child_process').spawn;
var proc = spawn("phantomjs", ["phantom.js", url]);

var counter = 0;
var data = fs.createWriteStream('s3.csv', {'flags': 'a'});

data.write('Iteration, Response\n');

proc.stdout.on('data', function(d) {
  data.write(counter + ', ' + d.toString() + '\n');
  counter += 1;
});
