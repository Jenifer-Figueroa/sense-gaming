var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var methodOverride = require('method-override')
const session = require('express-session')


var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var productsRouter=require("./routes/products");

var localsUsersCheck=require('./middlewares/localsUserCheck')

/*var productCart = require("./routes/productCart")*/

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, '../public')));
app.use(methodOverride('_method'));
app.use(session({secret:"senseGaming", resave: true, saveUninitialized: true}))

app.use(localsUsersCheck)

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use("/products", productsRouter);

/*Ruta para autenticar con facebook*/
/*app.get('/auth/facebook', passport.authenticate('facebook'))*/

/*ruta de callback a la que redirige tras autenticar con face
en caso de fallo redirige a otra vista /login */
/*app.get('/auth/facebook/', passport.authenticate('facebook',{successRedirect: '/', failureRedirect: '/users/login'}))*/

/*app.use("/carrito", productCart)*/


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
