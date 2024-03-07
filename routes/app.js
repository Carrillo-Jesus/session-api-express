const express = require('express');
const config = require('@/config');

const app = express();

app.use(express.json());
app.set('port', config.app.port);

app.use('/api/blogs', require('@/routes/blogs'));
app.use('/api/auth', require('@/routes/auth'));
app.use('/api/users', require('@/routes/users'));

module.exports = app;