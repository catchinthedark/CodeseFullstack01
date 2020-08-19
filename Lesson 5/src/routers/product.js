const Route = require('express').Router();
const product = require('../controllers/product');

Route.get('/', product.getAll);
Route.get('/:id', product.getById);
Route.post('/', product.create);
Route.put('/:id', product.updateById);
Route.delete('/:id', product.deleteById);

module.exports = Route;