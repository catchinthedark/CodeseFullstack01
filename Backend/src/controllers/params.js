const categoryService = require('../services/category');
const productService = require('../services/product');
const accountService = require('../services/account');
const orderService = require('../services/order');

const listCategory = async(req, res) => {
    const { data, metadata } = await categoryService.listCategory();
    res.send({
        data,
        metadata
    });
}

const listProduct = async(req, res) => {
    const { data, metadata } = await productService.listProduct();
    res.send({
        data,
        metadata
    });
}

const listAccount = async(req, res) => {
    const { data, metadata } = await accountService.listAccount();
    res.send({
        data,
        metadata
    });
}

const listOrder = async(req, res) => {
    const { data, metadata } = await orderService.listOrder();
    res.send({
        data,
        metadata
    });
}

module.exports = {
    listCategory,
    listProduct,
    listAccount,
    listOrder
}