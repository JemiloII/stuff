const app = require('../src/app')
const request = require('supertest')
const expect = require('chai').expect

describe('get /', function () {
  it('returns hello', function (done) {
    request(app)
      .get('/')
      .expect(200)
      .end(function(err, res) {
        if (err) throw err;
        expect(res.text).to.eq("Hello!")
        done()
      })
  });
});
