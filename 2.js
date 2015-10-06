var webPage = require('webpage');
var page = webPage.create();
var system = require('system');

page.open('http://www.google.com/', function(status) {
  system.stdout.write(status)
});
