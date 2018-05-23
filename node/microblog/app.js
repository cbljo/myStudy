var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var session = require('express-session');
var MongoStore = require('connect-mongo')(session);

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var settings = require('./setting');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());//Cookie解析的中间件
app.use(session({//这里主要是为了建立会话支持，通过cookie实现
        secret:settings.cookieSecret,//防止篡改cookie
    //将数据保存在数据库中，避免丢失
        store:new MongoStore({
            db:settings.db
        })
    }
))
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
//app.use('/hello',indexRouter.hello)
app.use('/users', usersRouter);


// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
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

module.exports = app;
