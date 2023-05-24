const usersRouter = require('express').Router();
const { celebrate } = require('celebrate');

const { getCurrentUser } = require('../controllers/users');

usersRouter.get('/me', getCurrentUser);
usersRouter.patch('/me', () => {});

module.exports = usersRouter;