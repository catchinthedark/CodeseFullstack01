const account = require('../services/account');

const getAll = async(req, res, next) => {
    const { data, metadata } = await account.getAll(req.pagination);
    res.send({
        data,
        metadata
    });
}

const getById = async(req, res, next) => {
    const { data } = await account.getById(req.params.id);
    res.send(data);
}

const create = async(req, res, next) => {
    const newAccount = {
        username: req.body.username,
        password: req.body.password,
    }
    if (!newAccount.username || !newAccount.password) {
        res.status(400).send({
            status: 0,
            message: 'Username or password is empty!'
        })
    }
    if (newAccount.password.length < 6) {
        res.status(400).send({
            status: 0,
            message: 'Password must have more than 6 digits!'
        })
    }
    const data = await account.create(newAccount);
    if (data.status === 0) {
        res.status(400).send({
            status: 0,
            message: 'Account existed!'
        })
    }
    res.status(400).send({
        status: 1,
        message: 'Account created!'
    })
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