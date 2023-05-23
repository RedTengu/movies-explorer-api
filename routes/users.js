const usersRouter = require('express').Router();
const { celebrate } = require('celebrate');

usersRouter.get('/users/me', () => {});
usersRouter.patch('/users/me', () => {});

module.exports = usersRouter;