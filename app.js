var express = require('express');
var routes = require('./routes/index');
var http = require('http');
var path = require('path');
var app = express();
app.listen(process.env.PORT || 5000);

// all environments
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.use(express.json());
app.use(express.bodyParser({ keepExtensions: true, uploadDir: './public/DFS' }));
app.use(express.methodOverride());
app.use(app.router);
app.use(require('less-middleware')('/less', {
    dest: '/css',
    pathRoot: path.join(__dirname, 'public')
}));
app.use(express.static(path.join(__dirname, 'public')));

routes.route(app);