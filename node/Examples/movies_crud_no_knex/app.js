'use strict'

const express = require('express');
const app = express();
const methodOverride = require('method-override');
const bodyParser = require('body-parser');
const morgan = require('morgan');

app.set('view engine', 'jade');
app.use(express.static(__dirname + '/public'));
app.use(morgan('tiny'));
app.use(bodyParser.urlencoded({extended:true}));
app.use(methodOverride('_method'));

let movies = [
  {
    title: 'Batman Begins', 
    description: 'Batman sure loves punching',
    rating: 10,
    id: 1
  }, {
    title: 'Cars',
    description: 'Pixar movie',
    rating: 7,
    id: 2
  }];
let nextMovieId = 3;

let findMovie = id => movies.find(movie => movie.id === id);
let findMovieIdx = id => movies.findIndex(movie => movie.id === id);

app.get('/', (req, res) => {
  res.redirect('/movies');
});

app.get('/movies', (req, res) => {
  res.render('index', {movies});
});

app.get('/movies/new', (req, res) => {
  res.render('new');
});

app.post('/movies', (req, res) => {
  movies.push(Object.assign(req.body.movie, {id: nextMovieId}));
  nextMovieId++;
  res.redirect('/movies');
});

app.get('/movies/:id', (req, res) => {
  let movie = findMovie(+req.params.id);
  res.render('show', {movie});
});

app.get('/movies/:id/edit', (req, res) => {
  let movie = findMovie(+req.params.id);
  res.render('edit', {movie});
});

app.put('/movies/:id', (req, res) => {
  let movieIdx = findMovieIdx(+req.params.id);
  movies[movieIdx] = Object.assign(movies[movieIdx], req.body.movie);
  res.redirect('/movies');
});

app.delete('/movies/:id', (req, res) => {
  let movieIdx = findMovieIdx(+req.params.id);
  movies.splice(movieIdx,1);
  res.redirect('/movies');
});

app.listen(3000, () => console.log("Listening on localhost:3000"));