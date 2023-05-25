const usersRouter = require('express').Router();
const { celebrate } = require('celebrate');

const { getCurrentUser, editUser } = require('../controllers/users');

usersRouter.get('/me', getCurrentUser);
usersRouter.patch('/me', editUser);

module.exports = usersRouter;