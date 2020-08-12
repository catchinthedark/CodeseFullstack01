const Route = require('express').Router();
const categoryController = require('../controllers/category');

Route.get('/', categoryController.getAllCategory);
Route.get('/:id', categoryController.getCategoryById);
Route.post('/', categoryController.createCategory);
Route.put('/:id', categoryController.updateCategoryById);
Route.delete('/:id', categoryController.deleteCategoryById);

module.exports = Route;