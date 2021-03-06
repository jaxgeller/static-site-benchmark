'use strict';

var fs = require('fs');

var url = process.argv[2];
if (!url) process.exit(1);

console.log('starting bench on ' + url);

var spawn = require('child_process').spawn;
var proc = spawn("phantomjs", ["benchmarker.js", url]);

var counter = 0;
var data = fs.createWriteStream(url.split('://')[1]+'.csv', {'flags': 'a'});

data.write('Iteration, Response\n');

proc.stdout.on('data', function(d) {
  data.write(counter + ', ' + d.toString());
  counter += 1;
});
