const Route = require('express').Router();
const auth = require('../controllers/auth');
const { tryCatch } = require('../middlewares/errorHandle');

Route.get('/', tryCatch(auth.login));

module.exports = Route;