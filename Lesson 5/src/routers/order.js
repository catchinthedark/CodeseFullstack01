const Route = require('express').Router();
const order = require('../controllers/order');

Route.get('/', order.getAll);
Route.get('/:id', order.getById);
Route.post('/', order.create);
Route.put('/:id', order.updateById);
Route.delete('/:id', order.deleteById);

module.exports = Route;