const Route = require('express').Router();
const product = require('../controllers/product');
const { tryCatch } = require('../middlewares/errorHandle');

Route.get('/', tryCatch(product.getAll));
Route.get('/:id', tryCatch(product.getById));
Route.post('/', tryCatch(product.create));
Route.put('/:id', tryCatch(product.updateById));
Route.delete('/:id', tryCatch(product.deleteById));

module.exports = Route;