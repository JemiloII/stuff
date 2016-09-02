module.exports = run;

const config = {
  client: 'postgresql',
  connection: {
    database: 'node-curriculum-videos',
  },
}

const knex = require('knex')(config)

function run(cb) {
  knex.schema
    .createTable('users', function (table) {
      table.increments();
      table.string('name');
    })
    .createTable('tags', function (table) {
      table.increments();
      table.string('name');
    })
    .createTable('videos', function (table) {
      table.increments();
      table.integer('owner_id').references('users.id');
      table.string('title');
    })
    .createTable('taggings', function (table) {
      table.increments();
      table.integer('tag_id').references('tags.id');
      table.integer('video_id').references('videos.id');
    })
    .createTable('comments', function (table) {
      table.increments();
      table.integer('video_id').references('videos.id');
      table.integer('author_id').references('users.id');
      table.text('text');
    })
    .then(function () {
      return Promise.all([
        knex('users').insert({id: 1, name: 'User 1'}),
        knex('users').insert({id: 2, name: 'User 2'}),
        knex('users').insert({id: 3, name: 'User 3'}),
        knex('users').insert({id: 4, name: 'User 4'}),
      ])
    })
    .then(function () {
      return Promise.all([
        knex('tags').insert({id: 10, name: 'funny'}),
        knex('tags').insert({id: 11, name: 'lulz'}),
        knex('tags').insert({id: 12, name: 'catz'}),
        knex('tags').insert({id: 13, name: 'music'}),
      ])
    })
    .then(function () {
      return Promise.all([
        knex('videos').insert({id: 20, title: 'Video 1', owner_id: 4}),
        knex('videos').insert({id: 21, title: 'Video 2', owner_id: 3}),
        knex('videos').insert({id: 22, title: 'Video 3', owner_id: 2}),
        knex('videos').insert({id: 23, title: 'Video 4', owner_id: 1}),
      ])
    })
    .then(function () {
      return Promise.all([
        knex('taggings').insert({video_id: 20, tag_id: 10}),
        knex('taggings').insert({video_id: 20, tag_id: 11}),
        knex('taggings').insert({video_id: 20, tag_id: 12}),
      ])
    })
    .then(function () {
      return Promise.all([
        knex('comments').insert({video_id: 20, author_id: 1, text: "firsties"}),
        knex('comments').insert({video_id: 20, author_id: 3, text: "secondz"}),
        knex('comments').insert({video_id: 20, author_id: 3, text: "too late!"}),
      ])
    })
    .then(function () {
      return cb(knex)
    })
    .then(function (data) {
      knex.destroy();
    })
    .catch(function () {
      knex.destroy();
    })
}
