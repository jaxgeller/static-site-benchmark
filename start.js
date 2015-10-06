const user = process.env.PLOTLY_USER;
const key = process.env.PLOTLY_KEY;
const plotly = require('plotly')(user, key);



var path = require('path')
var childProcess = require('child_process')
var phantomjs = require('phantomjs')
var binPath = phantomjs.path

var childArgs = [ path.join(__dirname, 'phantom.js'), 'http://google.com' ];

var spawn = require('child_process').spawn;
var proc = spawn(binPath, childArgs);


var counter = 0;
var x = [];
var y = [];

proc.stdout.on('data', function(d) {
  x.push(counter);
  y.push(d.toString());
  counter += 1;

  console.log(x.length)
});


process.on('SIGINT', function () {
  console.log(y);
});
