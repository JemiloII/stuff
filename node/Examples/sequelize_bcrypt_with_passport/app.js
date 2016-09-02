var express = require("express"),
  bodyParser = require("body-parser"),
  passport = require("passport"),
  cookieParser = require("cookie-parser"),
  session = require("cookie-session"),
  routes = require("./routes/index"),
  flash = require('connect-flash'),
  app = express(),
  morgan = require('morgan'),
  routeMiddleware = require("./middleware/auth");

// Middleware for ejs, grabbing HTML and including static files
app.set('view engine', 'jade');
app.use(morgan('dev'));
app.use(bodyParser.urlencoded({extended: false}) );

// make sure session-cookie is created before passport starts
app.use(session( {
  secret: 'thisismysecretkey',
  name: 'chocolate chip',
  maxage: 3600000
  })
);

// get passport + flash messages started
app.use(passport.initialize());
app.use(passport.session());
app.use(flash());

// include passport and call it with the module!
require('./config/passport')(passport);

app.use("/users", routes.users);

app.get('/', function(req,res){
  res.redirect('/users');
});

// catch-all for 404 errors
app.get('*', function(req,res){
  res.render('errors/404');
});


app.listen(3000, function(){
  console.log("get this party started on port 3000");
});

