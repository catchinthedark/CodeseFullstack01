const order = require('../services/order');

const getAll = async(req, res) => {
    try {
        const { data, metadata } = await order.getAll(req.pagination);
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
        const { data } = await order.getById(req.params.id);
        res.send(data)
    } catch (err) {
        console.log(err);
        res.send(err);
    }
}

const create = async(req, res) => {
    try {
        const { data } = await order.create(req.body);
        res.send('Order created!')
    } catch (err) {
        console.log(err);
        res.send(err);
    }
}

const updateById = async(req, res) => {
    try {
        const { data } = await order.updateById(req.params.id, req.body);
        res.send('Order updated!')
    } catch (err) {
        console.log(err);
        res.send(err);
    }
}

const deleteById = async(req, res) => {
    try {
        const { data } = await order.deleteById(req.params.id);
        res.send({ message: `Order deleted!` })
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