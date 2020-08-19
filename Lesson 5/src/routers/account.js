const Route = require('express').Router();
const account = require('../controllers/account');

Route.get('/', account.getAll);
Route.get('/:id', account.getById);
Route.post('/', account.create);
Route.put('/:id', account.updateById);
Route.delete('/:id', account.deleteById);

module.exports = Route;