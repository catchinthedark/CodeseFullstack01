const Route = require('express').Router();
const order = require('../controllers/order');
const { tryCatch } = require('../middlewares/errorHandle');

Route.get('/', tryCatch(order.getAll));
Route.get('/:id', tryCatch(order.getById));
Route.get('/u', tryCatch(order.getByUsername));
Route.post('/', tryCatch(order.create));
Route.put('/:id', tryCatch(order.updateById));
Route.delete('/:id', tryCatch(order.deleteById));

module.exports = Route;