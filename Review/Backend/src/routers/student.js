const Route = require('express').Router();
const Student = require('../controllers/student');

Route.get('/', Student.getAll);
Route.get('/:id', Student.getById);
Route.post('/', Student.add);

module.exports = Route;