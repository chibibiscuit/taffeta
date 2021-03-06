var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var lessMiddleware = require('less-middleware');

var index = require('./routes/index');
var users = require('./routes/users');
var backgrounds = require('./routes/backgrounds');
var links = require('./routes/links');

var app = express();

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/taffeta')
  .then(() => console.log('connection successful'))
  .catch((err) => console.error(err));

// view engine setup
//app.set('views', path.join(__dirname, 'public'));

app.engine('.html', require('ejs').renderFile);

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(lessMiddleware(path.join(__dirname, 'public'), {
  src: 'styles',
  force: true
}));
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', index);
app.use('/users', users);
app.use('/backgrounds', backgrounds);
app.use('/links', links);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page 
  res.status(err.status || 500);
  res.render('error');
});

app.get('/', function(req, res){
    res.sendfile('index.html', { root: __dirname + "/public" } );
});

module.exports = app;
