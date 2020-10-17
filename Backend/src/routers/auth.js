const Route = require('express').Router();
const auth = require('../controllers/auth');
const { tryCatch } = require('../middlewares/errorHandle');
const { requireLogin, requireRole } = require('../middlewares/auth');

Route.post('/login', tryCatch(auth.login));
Route.get('/me', requireLogin, requireRole(1), tryCatch(auth.getMe));

module.exports = Route;

//401 - unauthorized
//403 - forbidden