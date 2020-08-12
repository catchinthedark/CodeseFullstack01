const sql = require('../ultils/db');

const Category = function(category) {
    this.display = category.display,
        this.description = category.description,
        this.imageUrl = category.imageUrl
};

Category.getAllCategory = (result) => {
    sql.query('SELECT * FROM category', (err, res) => {
        if (err) {
            console.log(err);
            result(null, err);
            return;
        }
        console.log('Category: ', res);
        result(null, res);
    })
}

Category.getCategoryById = (result, categoryId) => {
    sql.query(`SELECT * FROM category WHERE categoryId = ${categoryId}`, (err, res) => {
        if (err) {
            console.log(err);
            result(err, null);
            return;
        }
        console.log('Category: ', res[0]);
        result(null, res[0])
    })
};

Category.createCategory = (newCategory, result) => {
    sql.query('INSERT INTO category SET ?', newCategory, (err, res) => {
        if (err) {
            console.log(err);
            result(err, null);
            return;
        }
        console.log('New category created!');
        result(null, { id: res.insertId, ...newCategory });
    });
};

Category.updateCategoryById = (categoryId, category, result) => {
    sql.query('UPDATE category SET display = ?, description = ?, imageUrl = ? WHERE categoryId = ?', [category.display, category.description, category.imageUrl, categoryId]),
        (err, res) => {
            if (err) {
                console.log(err);
                result(null, err);
                return;
            }
            console.log('Updated category: ', { categoryId: categoryId, ...category });
            result(null, { categoryId: categoryId, ...category })
        }
}

Category.deleteCategoryById = (categoryId, result) => {
    sql.query(`DELETE FROM category WHERE categoryId = ${categoryId}`, (err, res) => {
        if (err) {
            console.log(err);
            result(null, err);
            return;
        }
        console.log('Category deleted!');
        result(null, res);
    })
}

module.exports = Category;