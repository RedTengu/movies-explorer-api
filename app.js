const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const cors = require('cors');
const { errors } = require('celebrate');

const authRouter = require('./routes/auth');
const router = require('./routes');

const NotFound = require('./errors/notFoundError');

// Подключение Express
const app = express();

// Подключение порта
const { PORT = 3000 } = process.env;

// Подключение БД
mongoose.connect('mongodb://localhost:27017/bitfilmsdb');

// Подключение парсера
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Подключение CORS
app.use(cors());

// Подключение роутов авторизации
app.use(authRouter);
// Подключение остальных роутов
app.use(router);

// Обработка 404
app.use(() => {
  throw (new NotFound('Маршрут не существует'));
});

// Запуск сервера
app.listen(PORT, () => {
  console.log('Сервер запущен.');
});
