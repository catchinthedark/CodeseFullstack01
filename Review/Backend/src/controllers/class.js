const Class = require('../services/class');

const getAll = async(req, res) => {
    const { data } = await Class.getAll();
    res.send(data);
}

const getById = async(req, res) => {
    const { data } = await Class.getById(req.params.id);
    res.send(data);
}

module.exports = {
    getAll,
    getById
}