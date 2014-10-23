
/**
 * Module dependencies.
 */

var express = require('express');
var routes = require('./routes/index');
var http = require('http');
var path = require('path');
var app = express();

// all environments
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.use(express.favicon());
app.use(express.logger('dev'));
app.use(express.json());
app.use(express.bodyParser({ keepExtensions: true, uploadDir: './public/DFS' }));
app.use(express.methodOverride());
app.use(app.router);
app.use(require('less-middleware')('/less', {
    dest: '/css',
    pathRoot: path.join(__dirname, 'public')
}));
app.use(express.static(path.join(__dirname, 'public')));

// development only
if ('development' == app.get('env')) {
  app.use(express.errorHandler());
}
routes.route(app);
http.createServer(app).listen(process.env.PORT || 5000), function(){
  console.log('Express server listening on port ' + app.get('port'));
});
