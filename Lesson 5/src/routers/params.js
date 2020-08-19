const Route = require('express').Router();
const params = require('../controllers/params');

Route.get('/list-category', params.listCategory);
Route.get('/list-product', params.listProduct);
Route.get('/list-account', params.listAccount);
Route.get('/list-order', params.listOrder);

module.exports = Route;