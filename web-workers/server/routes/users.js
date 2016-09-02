'use strict'
let express = require('express');
let router = express.Router();
let knex = require("../db/knex.js");
let redis = require("../db/redis.js");
let bcrypt = require("bcrypt")

router.use(function (req, res, next) {
  res.locals.error = "";
  next();
})

router.get("/login", function (req,res) {
  res.render('login');
});

router.post("/login", function (req,res) {
  console.log(req.body)
  if (req.body.password && req.body.phone) {
    knex('users').select().where({phone: req.body.phone}).then(function (users) {
      if (users.length > 0 && bcrypt.compareSync(req.body.password, users[0].password)) {
        req.session.user = users[0];
        res.redirect("/")
      } else {
        res.locals.error = "User/Password do not match"
        res.render('login');
      }
    })
  }
});

router.get("/logout", function (req,res) {
  req.session.user = null;
  res.redirect("/");
})

router.get("/signup", function (req,res) {
  res.render('signup');
});

router.post("/signup", function (req,res) {
  if (req.body.password === req.body.verifypassword && req.body.phone) {
    console.log("blah")
    knex.select("*").from('users').where('phone', '=', req.body.phone)
    .then(function (users) {
      console.log("literaly anything")
      if (users.length !== 0) {
        res.locals.error = "That phone number has already been taken!";
        res.render("signup");
      } else {
        let hashedPassword = bcrypt.hashSync(req.body.password, 10);
        knex('users').insert({phone: req.body.phone, password: hashedPassword}).returning("*").then(function (user) {
          req.session.user = user[0];
          res.redirect("/reminders");
        });
      }
    })
  } else {
    res.locals.error = "Passwords did not match!"
    res.render("signup")
  }

});

module.exports = router;
