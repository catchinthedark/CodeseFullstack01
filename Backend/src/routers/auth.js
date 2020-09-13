const Route = require('express').Router();
const auth = require('../controllers/auth');
const { tryCatch } = require('../middlewares/errorHandle');

Route.post('/login', tryCatch(auth.login));

module.exports = Route;