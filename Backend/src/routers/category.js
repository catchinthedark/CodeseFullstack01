const Route = require('express').Router();
const category = require('../controllers/category');
const { tryCatch } = require('../middlewares/errorHandle');

Route.get('/', tryCatch(category.getAll));
Route.get('/:id', tryCatch(category.getById));
Route.post('/', tryCatch(category.create));
Route.put('/:id', tryCatch(category.updateById));
Route.delete('/:id', tryCatch(category.deleteById));

module.exports = Route;