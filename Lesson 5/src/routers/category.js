const Route = require('express').Router();
const category = require('../controllers/category');

Route.get('/', category.getAll);
Route.get('/:id', category.getById);
Route.post('/', category.create);
Route.put('/:id', category.updateById);
Route.delete('/:id', category.deleteById);

module.exports = Route;