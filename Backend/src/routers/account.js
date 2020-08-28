const Route = require('express').Router();
const account = require('../controllers/account');
const { tryCatch } = require('../middlewares/errorHandle');

Route.get('/', tryCatch(account.getAll));
Route.get('/:id', tryCatch(account.getById));
Route.post('/', tryCatch(account.create));
Route.put('/:id', tryCatch(account.updateById));
Route.delete('/:id', tryCatch(account.deleteById));

module.exports = Route;