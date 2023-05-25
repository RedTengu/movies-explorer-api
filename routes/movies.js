const moviesRouter = require('express').Router();
const { celebrate } = require('celebrate');

const { getMyMovies, createMovie, deleteMovie } = require('../controllers/movies');
const movieOwnerCheck = require('../middlewares/movieOwnerCheck');

moviesRouter.get('/', getMyMovies);
moviesRouter.post('/', createMovie);
moviesRouter.delete('/:_id', movieOwnerCheck, deleteMovie);

module.exports = moviesRouter;