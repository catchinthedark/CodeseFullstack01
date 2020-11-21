const Class = require('../services/class');

const getAll = async(req, res) => {
    const { data } = await Class.getAll();
    res.send(data);
}

const getById = async(req, res) => {
    const { data } = await Class.getById(req.params.id);
    res.send(data);
}

const add = async(req, res) => {
    const { data } = await Class.add(req.body);
    res.send('Class added!');
}

module.exports = {
    getAll,
    getById,
    add
}