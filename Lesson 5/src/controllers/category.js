const Category = require('../models/categoryModel');

const getAllCategory = (req, res) => {
    Category.getAllCategory((err, data) => {
        if (err)
            res.status(500).send({
                message: err.message || "Some error occurred while retrieving categories."
            });
        else res.send(data);
    })
};

const getCategoryById = (req, res) => {
    Category.getCategoryById(req.params.categoryId, (err, data) => {
        if (err) {
            if (err.kind === "not_found") {
                res.status(404).send({
                    message: `Not found category with id ${req.params.categoryId}.`
                });
            } else {
                res.status(500).send({
                    message: "Error retrieving category with id " + req.params.categoryId
                });
            }
        } else res.send(data);
    })
}

const createCategory = (req, res) => {
    if (!req.body) {
        res.status(400).send({
            message: "Content can not be empty!"
        });
    }
    const category = new Category({
        display: req.body.display,
        description: req.body.description,
        imageUrl: req.body.imageUrl
    });
    Category.createCategory(category, (err, data) => {
        if (err)
            res.status(500).send({
                message: err.message || "Some error occurred while creating the category."
            });
        else res.send(data);
    })
}

const updateCategoryById = (req, res) => {
    if (!req.body) {
        res.status(400).send({
            message: "Content can not be empty!"
        });
    }
    Category.updateCategoryById(
        req.params.id,
        new Category(req.body),
        (err, data) => {
            if (err) {
                if (err.kind === "not_found") {
                    res.status(404).send({
                        message: `Not found category with id ${req.params.categoryId}.`
                    });
                } else {
                    res.status(500).send({
                        message: "Error updating category with id " + req.params.categoryId
                    });
                }
            } else res.send(data);
        }
    )
}

const deleteCategoryById = (req, res) => {
    Category.deleteCategoryById(req.params.categoryId, (err, data) => {
        if (err) {
            if (err.kind === "not_found") {
                res.status(404).send({
                    message: `Not found category with id ${req.params.categoryId}.`
                });
            } else {
                res.status(500).send({
                    message: "Could not delete category with id " + req.params.categoryId
                });
            }
        } else res.send({ message: `Category was deleted successfully!` });
    })
}

module.exports = {
    getAllCategory,
    getCategoryById,
    createCategory,
    updateCategoryById,
    deleteCategoryById
}