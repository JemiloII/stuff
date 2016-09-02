require('../support')
const app = require('../../src/crud/app')
const request = require('supertest')(app)

describe('get /', function () {
  it('can fill out every part of the form', function () {
    let page = createPage(request)

    return page.visit('/')
      .then(page.clickLink('Interviews'))
      .then(page.clickLink('New Interview'))
      .then(page.fillIn('Candidate', {with: 'Joe Jones'}))
      .then(page.check('Passed'))
      .then(page.select('Junior Developer', {from: 'Position'}))
      .then(page.clickButton('Save'))
      .then(function ($) {
        expect($('h1').html()).to.eq('Show Interview');
      })
  });

  it('can click buttons', function () {
    let page = createPage(request)

    return page.visit('/')
      .then(page.clickLink('Interviews'))
      .then(page.clickLink('New Interview'))
      .then(page.fillIn('Candidate', {with: 'Joe Jones'}))
      .then(page.check('Passed'))
      .then(page.select('Junior Developer', {from: 'Position'}))
      .then(page.clickButton('Save And New'))
      .then(function ($) {
        console.log(page);
        expect($('h1').html()).to.eq('Show Interview');
      })
  });
});
