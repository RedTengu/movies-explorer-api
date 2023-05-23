const bcrypt = require('bcryptjs');

const User = require('../models/user');

const createUser = (req, res, next) => {
  const {
    email, password, name
  } = req.body;

  bcrypt.hash(password, 10)
    .then((hash) => {
      User.create({
        email, password: hash, name
      })
        .then((newUser) => res.send({
          email: newUser.email,
          name: newUser.name,
        }))
        // .catch((err) => {
        //   if (err.code === 11000) {
        //     next(new Conflict('Пользователь с таким email уже существует!'));
        //   } else if (err.name === 'ValidationError') {
        //     next(new BadRequest('Некорректные данные при создании пользователя.'));
        //   } else {
        //     next(err);
        //   }
        // });
        .catch(err => console.log(err));
    })
    // .catch(next);
    .catch(err => console.log(err));
};

module.exports = {
  createUser,
}