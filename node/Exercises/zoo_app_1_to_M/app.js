'use strict'

const express = require("express")
const app = express()
const methodOverride = require("method-override")
const morgan = require("morgan")
const bodyParser = require("body-parser");
const routes = require('./routes/index')

app.set("view engine", "jade");
app.use(express.static(__dirname + "/public"));
app.use(morgan("tiny"))
app.use(bodyParser.urlencoded({extended:true}));
app.use(methodOverride("_method"));

app.disable('x-powered-by')

app.get("/", (req,res)=> {
  res.redirect("/owners");
});

app.use('/owners', routes.owners)
app.use('/owners/:owner_id/zoos', routes.zoos)

app.use((req, res, next) => {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});


if (app.get('env') === 'development') {
  app.use((err, req, res, next) => {
    res.status(err.status || 500);
    res.render('error', {
      message: err.message,
      helperMessage: true,
      error: err
    });
  });
}

app.use((err, req, res, next) => {
  res.status(err.status || 500);
  res.render('error', {
    message: err.message,
    error: {}
  });
});


app.listen(3000, ()=> {
  console.log("Server is listening on port 3000");
});
