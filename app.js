const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const cors = require('cors');
const { errors } = require('celebrate');

// const { requestLogger, errorLogger } = require('./middlewares/logger');

// Подключение Express
const app = express();

// Подключение порта
const { PORT = 3000 } = process.env;

// Подключение БД
mongoose.connect('mongodb://localhost:27017/bitfilmsdb');

// Подключение парсера
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Подключение логгера
// app.use(requestLogger);

// Подключение CORS
app.use(cors());

// Запуск сервера
app.listen(PORT, () => {
  console.log('Сервер запущен.');
});
