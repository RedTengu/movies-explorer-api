const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const cors = require('cors');
const { errors } = require('celebrate');
const helmet = require('helmet');

const config = require('./utils/config');
const { requestLogger, errorLogger } = require('./middlewares/logger');
const limiter = require('./middlewares/limiter');
const errorController = require('./middlewares/errorController');
const { NotFound } = require('./errors/index');
const router = require('./routes');

// Подключение порта
const { PORT = 3000 } = process.env;

// Подключение Express
const app = express();

// Подключение к БД
mongoose.connect(config.bitfilmsdb);

// Запуск парсера
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Запуск Helmet
app.use(helmet());

// Логгер запросов
app.use(requestLogger);

// Запуск CORS
app.use(cors());

// Запуск rate-limit
app.use(limiter);

// Запуск роутера
app.use(router);

// Обработка 404
app.use(() => {
  throw (new NotFound('Маршрут не существует'));
});

// Логгер ошибок
app.use(errorLogger);

// Ошибки Joi Celebrate
app.use(errors());

// Централизованная обработка ошибок
app.use(errorController);

// Запуск сервера
app.listen(PORT, () => {
  console.log('Сервер запущен.');
});
