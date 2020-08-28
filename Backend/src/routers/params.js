const Route = require('express').Router();
const params = require('../controllers/params');
const { tryCatch } = require('../middlewares/errorHandle');

Route.get('/list-category', tryCatch(params.listCategory));
Route.get('/list-product', tryCatch(params.listProduct));
Route.get('/list-account', tryCatch(params.listAccount));
Route.get('/list-order', tryCatch(params.listOrder));

module.exports = Route;