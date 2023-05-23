const moviesRouter = require('express').Router();
const { celebrate } = require('celebrate');

moviesRouter.get('/movies', () => {});
moviesRouter.post('/movies', () => {});
moviesRouter.delete('/movies/_id', () => {});

module.exports = moviesRouter;