const order = require('../services/order');

const getAll = async(req, res) => {
    const { data, metadata } = await order.getAll(req.pagination);
    res.send({
        data,
        metadata
    });
}

const getById = async(req, res) => {
    const { data } = await order.getById(req.params.id);
    res.send(data);
}

const getByUsername = async(req, res) => {
    const { data } = await order.getByUsername(req.params.username);
    res.send(data);
}

const create = async(req, res) => {
    const { data } = await order.create(req.body);
    res.send('Order created!');
}

const updateById = async(req, res) => {
    const { data } = await order.updateById(req.params.id, req.body);
    res.send('Order updated!');
}

const deleteById = async(req, res) => {
    const { data } = await order.deleteById(req.params.id);
    res.send({ message: `Order deleted!` });
}

module.exports = {
    getAll,
    getById,
    getByUsername,
    create,
    updateById,
    deleteById
}