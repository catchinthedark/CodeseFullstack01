const Category = require('../services/categoryService');

const getAllCategory = async(req, res) => {
    try {
        const data = await Category.getAllCategory(req);
        res.send(data);
    } catch (err) {
        res.status(500).send({
            message: err.message || "Some error occurred while retrieving categories."
        });
    }
};

const getCategoryById = async(req, res) => {
    try {
        const data = await Category.getCategoryById(req.params.id);
        res.send(data);
    } catch (err) {
        if (err.kind === "not_found") {
            res.status(404).send({
                message: `Not found category with id ${req.params.id}.`
            });
        } else {
            res.status(500).send({
                message: "Error retrieving category with id " + req.params.id
            });
        }
    }
}

const createCategory = (req, res) => {
    try {
        const newCategory = {
            categoryId: req.body.categoryId,
            display: req.body.display,
            description: req.body.description,
            imageUrl: req.body.imageUrl
        };
        Category.createCategory(newCategory);
        res.send({ message: `New category was created!` });
    } catch (err) {
        if (!req.body) {
            res.status(400).send({
                message: "Content can not be empty!"
            });
        } else {
            res.status(500).send({
                message: err.message || "Some error occurred while creating the category."
            });
        }
    }
}

const updateCategoryById = (req, res) => {
    try {
        const updatedCategory = {
            display: req.body.display,
            description: req.body.description,
            imageUrl: req.body.imageUrl
        }
        Category.updateCategoryById(req.params.id, updatedCategory);
        res.send({ message: `Category was updated successfully!` });
    } catch (err) {
        if (!req.body) {
            res.status(400).send({
                message: "Content can not be empty!"
            });
        } else if (err.kind === "not_found") {
            res.status(404).send({
                message: `Not found category with id ${req.params.categoryId}.`
            });
        } else {
            res.status(500).send({
                message: "Error updating category with id " + req.params.categoryId
            });
        }
    }
}

const deleteCategoryById = (req, res) => {
    try {
        Category.deleteCategoryById(req.params.id);
        res.send({ message: `Category was deleted successfully!` });
    } catch (err) {
        if (err.kind === "not_found") {
            res.status(404).send({
                message: `Not found category with id ${req.params.categoryId}.`
            });
        } else {
            res.status(500).send({
                message: "Could not delete category with id " + req.params.categoryId
            });
        }
    }
}

module.exports = {
    getAllCategory,
    getCategoryById,
    createCategory,
    updateCategoryById,
    deleteCategoryById
}