const db = require('../utils/db');

const getAll = async({ limit, offset }) => {
    const sql = `SELECT categoryId, display, description, imageUrl
                FROM category 
                WHERE isDelete = 0
                LIMIT ? 
                OFFSET ?;`;
    const countSql = `SELECT COUNT(categoryId) AS total 
                    FROM category
                    WHERE isDelete = 0;`;
    const params = [limit, offset];
    const data = await db.queryMulti(sql, params);
    const total = await db.queryOne(countSql);
    return {
        data,
        metadata: {
            length: data.length,
            total
        }
    };
}

const getById = async(categoryId) => {
    const sql = `SELECT display, description, imageUrl 
                FROM category 
                WHERE categoryId = ? 
                    AND isDelete = 0
                LIMIT 1;`;
    const data = await db.queryOne(sql, categoryId);
    return {
        data
    };
}

const create = async({ categoryId, display, description, imageUrl }) => {
    const sql = `INSERT INTO category(categoryId, display, description, imageUrl) 
                VALUES (?, ?, ?, ?);`;
    const params = [categoryId, display, description, imageUrl];
    const data = await db.query(sql, params);
    return {
        data
    };
}

const updateById = async(categoryId, { display, description, imageUrl }) => {
    const sql = `UPDATE category 
                SET display = ?, description = ?, imageUrl = ? 
                WHERE categoryId = ? 
                    AND isDelete = 0;`;
    const params = [display, description, imageUrl, categoryId];
    const data = await db.query(sql, params);
}

const deleteById = async(categoryId) => {
    const sql = `UPDATE category 
                SET isDelete = 1
                WHERE categoryId = ?;`;
    const data = await db.query(sql, categoryId);
}

const listCategory = async() => {
    const sql = `SELECT categoryId, display
                FROM category
                WHERE isDelete = 0;`;
    const data = await db.queryMulti(sql);
    return {
        data,
        metadata: {
            length: data.length,
        }
    }
}

module.exports = {
    getAll,
    getById,
    create,
    updateById,
    deleteById,
    listCategory
}