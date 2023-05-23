const authRouter = require('express').Router();
const { celebrate } = require('celebrate');

authRouter.post('/signup', () => {});
authRouter.post('/signin', () => {});

module.exports = authRouter;