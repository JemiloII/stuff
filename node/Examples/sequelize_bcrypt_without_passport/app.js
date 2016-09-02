var express = require("express"),
  bodyParser = require("body-parser"),
  app = express(),
  morgan = require("morgan"),
  routes = require("./routes");


app.set('view engine', 'jade');

app.use(bodyParser.urlencoded({extended: true}) );
app.use(morgan("dev"));

app.get('/', function(req,res){
  res.render("users/index", {message: null});
});

app.use('/users', routes.users);

// catch-all for 404 errors
app.get('*', function(req,res){
  res.render('errors/404');
});

app.listen(3000, function(){
  console.log("get this party started on port 3000");
});


