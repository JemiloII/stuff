var express = require('express');
var router = express.Router();
var knex = require('../../../db/knex');

router.get('/', function (req, res, next) {
  knex('users').select().then(function (users) {
    res.json({
      "status" : 200,
      "results" : users
    })
  })
})

module.exports = router;
