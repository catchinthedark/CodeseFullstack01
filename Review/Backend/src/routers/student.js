const Route = require('express').Router();
const Student = require('../controllers/student');

Route.get('/:id', Student.getById);

module.exports = Route;