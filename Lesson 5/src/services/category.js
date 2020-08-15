const db = require('../ultils/db');

const Category = function(category) {
    this.display = category.display,
        this.description = category.description,
        this.imageUrl = category.imageUrl
};

Category.getAllCategory = async(req) => {
    const limit = parseInt(req.query.limit);
    const skip = limit * (parseInt(req.query.page) - 1);
    let sql;
    const params = [limit, skip];
    if (limit) sql = `SELECT * FROM category LIMIT ? OFFSET ?;`;
    else sql = `SELECT * FROM category;`;
    const result = await db.queryMulti(sql, params);
    return result;
}

Category.getCategoryById = async(categoryId) => {
    const sql = `SELECT * FROM category WHERE categoryId = ?;`;
    const result = await db.queryOne(sql, categoryId);
    return result;
}

Category.createCategory = (newCategory) => {
    const sql = `INSERT INTO category SET ?;`;
    db.query(sql, newCategory);
}

Category.updateCategoryById = (categoryId, updatedCategory) => {
    const sql = `UPDATE category SET display = ?, description = ?, imageUrl = ? WHERE categoryId = ?;`;
    const params = [updatedCategory.display, updatedCategory.description, updatedCategory.imageUrl, categoryId];
    db.query(sql, params);
}

Category.deleteCategoryById = (categoryId) => {
    const sql = `DELETE FROM category WHERE categoryId = ?;`;
    db.query(sql, categoryId);
}

module.exports = Category;

/*
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

Category.getCategoryById = (categoryId, result) => {
    sql.query('SELECT * FROM category WHERE categoryId = ?', categoryId, (err, res) => {
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

Category.updateCategoryById = (categoryId, updatedCategory, result) => {
    sql.query('UPDATE category SET display = ?, description = ?, imageUrl = ? WHERE categoryId = ?', [updatedCategory.display, updatedCategory.description, updatedCategory.imageUrl, categoryId]),
        (err, res) => {
            if (err) {
                console.log(err);
                result(null, err);
                return;
            }
            console.log('Updated category: ', { categoryId: categoryId, ...updatedCategory });
            result(null, { categoryId: categoryId, ...updatedCategory })
        }
}

Category.deleteCategoryById = (categoryId, result) => {
    sql.query('DELETE FROM category WHERE categoryId = ? ', categoryId, (err, res) => {
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

*/