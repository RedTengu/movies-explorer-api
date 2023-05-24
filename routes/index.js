const router = require('express').Router();

const authRouter = require('./auth');
const usersRouter = require('./users');
const moviesRouter = require('./movies');

router.use(authRouter);
router.use('/users', usersRouter);
router.use('/movies', moviesRouter);

module.exports = router;