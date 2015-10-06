const user = process.env.PLOTLY_USER;
const key = process.env.PLOTLY_KEY;
const plotly = require('plotly')(user, key);

var path = require('path')
var childProcess = require('child_process')
var phantomjs = require('phantomjs')
var binPath = phantomjs.path

var childArgs = [ path.join(__dirname, 'phantom.js'), 'http://static-site-benchmark.s3-website-us-east-1.amazonaws.com/' ];

var spawn = require('child_process').spawn;
var proc = spawn(binPath, childArgs);

var counter = 0;

var fs = require('fs');
var data = fs.createWriteStream('s3.csv');

data.write('Iteration, Response\n');

proc.stdout.on('data', function(d) {
  data.write(counter + ', ' + d.toString() + '\n');
  counter += 1;
});
