const categoryService = require('../services/category');
const productService = require('../services/product');
const accountService = require('../services/account');
const orderService = require('../services/order');

const listCategory = async(req, res) => {
    try {
        const { data, metadata } = await categoryService.listCategory();
        res.send({
            data,
            metadata
        })
    } catch (err) {
        console.log(err);
        res.send(err);
    }
}

const listProduct = async(req, res) => {
    try {
        const { data, metadata } = await productService.listProduct();
        res.send({
            data,
            metadata
        })
    } catch (err) {
        console.log(err);
        res.send(err);
    }
}

const listAccount = async(req, res) => {
    try {
        const { data, metadata } = await accountService.listAccount();
        res.send({
            data,
            metadata
        })
    } catch (err) {
        console.log(err);
        res.send(err);
    }
}

const listOrder = async(req, res) => {
    try {
        const { data, metadata } = await orderService.listOrder();
        res.send({
            data,
            metadata
        })
    } catch (err) {
        console.log(err);
        res.send(err);
    }
}

module.exports = {
    listCategory,
    listProduct,
    listAccount,
    listOrder
}