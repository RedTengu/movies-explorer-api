const authRouter = require('express').Router();
const { celebrate } = require('celebrate');

const { createUser } = require('../controllers/users');

authRouter.post('/signup', createUser);
authRouter.post('/signin', () => {});

module.exports = authRouter;