const category = require('../services/category');

const getAll = async(req, res) => {
    try {
        const { data, metadata } = await category.getAll(req.pagination);
        res.send({
            data,
            metadata
        });
    } catch (err) {
        console.log(err);
        res.send(err);
    }
};

const getById = async(req, res) => {
    try {
        const { data } = await category.getById(parseInt(req.params.id));
        res.send(data);
    } catch (err) {
        console.log(err);
        res.send(err);
    }
}

const create = async(req, res) => {
    try {
        const { data } = await category.create(req.body);
        res.send('Category created!');
    } catch (err) {
        console.log(err);
        res.send(err);
    }
}

const updateById = async(req, res) => {
    try {
        const { data } = await category.updateById(parseInt(req.params.id), req.body)
        res.send('Category updated!');
    } catch (err) {
        console.log(err);
        res.send(err);
    }
}

const deleteById = async(req, res) => {
    try {
        const { data } = await category.deleteById(parseInt(req.params.id));
        res.send('Category deleted!');
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
    deleteById,
}