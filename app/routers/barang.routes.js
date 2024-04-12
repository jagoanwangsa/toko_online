const { Router } = require('express');
const home = require('../controllers/home.controller')

const app = Router();
app.get('/', home);

module.exports = app;


