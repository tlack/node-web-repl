/**
 * Module dependencies.
 */

var config = require('./config')
	, express = require('express')
	, hulk = require('hulk-hogan')
  , routes = require('./routes');

var app = module.exports = express.createServer();

// Configuration

app.configure(function(){
	app.register('.hulk', hulk);
  app.set('views', __dirname + '/views');
  app.set('view engine', 'hulk');
	app.use(express.basicAuth(config.auth.username, config.auth.password));
  app.use(express.bodyParser());
  app.use(express.methodOverride());
  app.use(require('stylus').middleware({ src: __dirname + '/public' }));
  app.use(app.router);
  app.use(express.static(__dirname + '/public'));
});

app.configure('development', function(){
  app.use(express.errorHandler({ dumpExceptions: true, showStack: true }));
});

app.configure('production', function(){
  app.use(express.errorHandler());
});

// Routes

app.get('/', routes.index);
app.post('/api', routes.api);

app.listen(3000, function(){
  console.log("Express server listening on port %d in %s mode", app.address().port, app.settings.env);
});
