const product = require('../services/product');

const getAll = async(req, res) => {
    try {
        const { data, metadata } = await product.getAll(req.pagination);
        res.send({
            data,
            metadata
        })
    } catch (err) {
        console.log(err);
        res.send(err);
    }
}

const getById = async(req, res) => {
    try {
        const { data } = await product.getById(req.params.id);
        res.send(data)
    } catch (err) {
        console.log(err);
        res.send(err);
    }
}

const create = async(req, res) => {
    try {
        const { data } = await product.create(req.body);
        res.send('Product created!');
    } catch (err) {
        console.log(err);
        res.send(err);
    }
}

const updateById = async(req, res) => {
    try {
        const { data } = await product.updateById(req.params.id, req.body);
        res.send('Product updated!');
    } catch (err) {
        console.log(err);
        res.send(err);
    }
}

const deleteById = async(req, res) => {
    try {
        const { data } = await product.deleteById(req.params.id);
        res.send('Product deleted!');
    } catch (err) {
        console.log(err);
        res.send(err);
    }
}

module.exports = {
    getAll,
    getById,
    create,
    updateById,
    deleteById
}