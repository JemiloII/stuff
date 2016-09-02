var chai = require('chai');
var chaiHttp = require('chai-http');
var assert = require('assert');
var should = chai.should();

// Setup to use test db!
process.env.NODE_ENV = 'test';
var server = require('../app');
var knex = require('../db/knex');
chai.use(chaiHttp);

function getPosts(){
  return knex('posts').select();
}

describe('Posts REST API', function() {
  beforeEach(function () {
    return knex.seed.run(knex.config);
  });
  it('should GET ALL users on /api/v1/users', function (done) {
    chai.request(server).get('/api/v1/users').end(function(err, res){
      res.body.should.have.status(200);
      res.should.be.json;
      res.body.results.should.have.length(4);
      res.body.results[0].should.have.property('id');
      res.body.results[0].should.have.property('username');
      done();
    });
  });
});
