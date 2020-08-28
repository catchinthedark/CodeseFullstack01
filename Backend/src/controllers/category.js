const category = require('../services/category');

const getAll = async(req, res) => {
    const { data, metadata } = await category.getAll(req.pagination);
    res.send({
        data,
        metadata
    });
};

const getById = async(req, res) => {
    const { data } = await category.getById(parseInt(req.params.id));
    res.send(data);
}

const create = async(req, res) => {
    const { data } = await category.create(req.body);
    res.send('Category created!');
}

const updateById = async(req, res) => {
    const { data } = await category.updateById(parseInt(req.params.id), req.body)
    res.send('Category updated!');
}

const deleteById = async(req, res) => {
    const { data } = await category.deleteById(parseInt(req.params.id));
    res.send('Category deleted!');
}

module.exports = {
    getAll,
    getById,
    create,
    updateById,
    deleteById,
}