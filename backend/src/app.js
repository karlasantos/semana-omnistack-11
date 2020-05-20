const express = require('express');
const cors = require('cors');
const routes = require('./routes');
const { errors } = require('celebrate');

const app = express();

// Para produção envia parâmetro { origin: 'url-application' }
app.use(cors());
app.use(express.json());
app.use(routes);
app.use(errors());


module.exports = app;
