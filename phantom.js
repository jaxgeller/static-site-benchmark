var system = require('system');
// var webpage = require('webpage');

(function run() {
  var date = new Date()
  var page = require('webpage').create();
  var url = system.args[1]+'?cachemiss='+(Math.random()*1000);

  page.open(url, function(s) {
    if (s === 'success') {
      system.stdout.write(new Date() - date);
      page.close();
    } else {
      system.stdout.write('ERROR MISS');
    }
    run();
  });
})();
