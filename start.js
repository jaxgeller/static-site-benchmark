var path = require('path')
var childProcess = require('child_process')
var phantomjs = require('phantomjs')
var binPath = phantomjs.path

var childArgs = [ path.join(__dirname, 'phantom.js'), 'http://159.203.83.31/' ];

var spawn = require('child_process').spawn;
var proc = spawn(binPath, childArgs);

proc.stdout.on('data', function(d) {
  console.log(d.toString());
});
