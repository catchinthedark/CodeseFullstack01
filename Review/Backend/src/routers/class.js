const Route = require('express').Router();
const Class = require('../controllers/class');

Route.get('/', Class.getAll);
Route.get('/:id', Class.getById);
Route.post('/', Class.add);

module.exports = Route;