const product = require('../services/product');

const getAll = async(req, res) => {
    const { data, metadata } = await product.getAll(req.pagination);
    res.send({
        data,
        metadata
    });
}

const getById = async(req, res) => {
    const { data } = await product.getById(req.params.id);
    res.send(data);
}

const create = async(req, res) => {
    const { data } = await product.create(req.body);
    res.send('Product created!');
}

const updateById = async(req, res) => {
    const { data } = await product.updateById(req.params.id, req.body);
    res.send('Product updated!');
}

const deleteById = async(req, res) => {
    const { data } = await product.deleteById(req.params.id);
    res.send('Product deleted!');
}

module.exports = {
    getAll,
    getById,
    create,
    updateById,
    deleteById
}