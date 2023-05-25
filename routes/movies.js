const moviesRouter = require('express').Router();
const { celebrate } = require('celebrate');

const { getMyMovies, createMovie, deleteMovie } = require('../controllers/movies');

moviesRouter.get('/', getMyMovies);
moviesRouter.post('/', createMovie);
moviesRouter.delete('/:_id', deleteMovie);

module.exports = moviesRouter;