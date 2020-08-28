const account = require('../services/account');

const getAll = async(req, res) => {
    const { data, metadata } = await account.getAll(req.pagination);
    res.send({
        data,
        metadata
    });
}

const getById = async(req, res) => {
    const { data } = await account.getById(req.params.id);
    res.send(data);
}

const create = async(req, res) => {
    const { data } = await account.create(req.body);
    res.send('Account created!');
}

const updateById = async(req, res) => {
    const { data } = await account.updateById(req.params.id, req.body);
    res.send('Account updated!');
}

const deleteById = async(req, res) => {
    const { data } = await account.deleteById(req.params.id);
    res.send('Account deleted!')
}

module.exports = {
    getAll,
    getById,
    create,
    updateById,
    deleteById
}