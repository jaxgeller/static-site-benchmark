var system = require('system');
var webpage = require('webpage');

(function run() {
  var date;
  var page = webpage.create();
  page.clearMemoryCache();

  var url = system.args[1]+'?cachemiss='+(Math.random()*1000);

  page.onLoadStarted = function() { date = new Date(); }

  page.open(url, function(s) {
    if (s === 'success') {
      console.log(new Date() - date);
      page.close();
    } else {
      system.stdout.write('ERROR');
    }
    run();
  });
})();
