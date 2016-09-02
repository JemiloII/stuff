var express = require("express");
var app = express();
var bodyParser = require("body-parser");
var methodOverride = require("method-override")
var morgan = require("morgan")
require("locus")

// MIDDLEWARE + SETUP

app.set("view engine", "ejs");

app.use(bodyParser.urlencoded({
  extended: true
}))
app.use(methodOverride('_method'))
app.use(morgan('dev'))

// SET UP MY CATS

var cats = []
var id = 1

app.get('/', function(req,res){
  // res.locals.cats = cats
  res.redirect('/cats')
});

app.get('/cats', function(req,res){
  res.render("index", {cats})
});

app.get('/cats/new', function(req,res){
  res.render("new")
});

app.get('/cats/:id', function(req,res){
  var cat = cats.find(cat => cat.id === Number(req.params.id));
  res.render("show", {cat})
});

app.get('/cats/:id/edit', function(req,res){
  var cat = cats.find(function(v){
    return v.id === Number(req.params.id)
  })
  res.render("edit",{cat})
});

app.post('/cats', function(req,res){
  var cat = {}
  cat.name = req.body.name
  cat.age = req.body.age
  cat.id = id
  id++
  cats.push(cat)
  res.redirect('/cats')
});

app.patch('/cats/:id', function(req,res){
  var cat = cats.find(cat => cat.id === Number(req.params.id));
  cat.name = req.body.name
  cat.age = req.body.age
  res.redirect('/cats')
})

app.delete('/cats/:id', function(req,res){
  var index = cats.findIndex(cat => cat.id === Number(req.params.id));
  cats.splice(index,1)
  res.redirect('/cats')
})



// LISTEN

app.listen(3000, () => {
  console.log("Server starting on port 3000")
})