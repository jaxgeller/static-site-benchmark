'use strict';
const user = process.env.PLOTLY_USER;
const key = process.env.PLOTLY_KEY;

const phantom = require('phantomjs');
const plotly = require('plotly')(user, key);

const path = require('path');
const childProcess = require('child_process');
const binPath = phantom.path;

const childArgs = [ path.join(__dirname, 'phantom.js'), 'http://google.com/'];

childProcess.execFile(binPath, childArgs, function(err, stdout, stderr) {
  console.log(err);
  console.log(stdout);
  console.log(stderr);
});

// var cluster = require('cluster');
// var http = require('http');
// var numCPUs = require('os').cpus().length;

// if (cluster.isMaster) {
//   // Fork workers.
//   for (var i = 0; i < numCPUs; i++) {
//     cluster.fork();
//   }

//   cluster.on('exit', function(worker, code, signal) {
//     console.log('worker ' + worker.process.pid + ' died');
//   });
// } else {

// }
