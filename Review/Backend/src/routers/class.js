const Route = require('express').Router();
const Class = require('../controllers/class');

Route.get('/', Class.getAll);
Route.get('/:id', Class.getById);

module.exports = Route;