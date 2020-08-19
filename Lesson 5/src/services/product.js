const db = require('../utils/db');

const getAll = async({ limit, offset }) => {
    const sql = `SELECT productId, display, provider, description, imageUrl, priceIn, priceOut, priceSale, shipday, instock, status, categoryId, created_at, updated_at
                FROM product 
                WHERE isDelete = 0
                LIMIT ? 
                OFFSET ?;`;
    const countSql = `SELECT COUNT(productId) AS total 
                    FROM product
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

const getById = async(productId) => {
    const sql = `SELECT display, provider, description, imageUrl, priceIn, priceOut, priceSale, shipday, instock, status, categoryId, created_at, updated_at
                FROM product 
                WHERE productId = ? 
                    AND isDelete = 0
                LIMIT 1;`;
    const data = await db.queryOne(sql, productId);
    return {
        data
    };
}

const create = async({ display, provider, description, imageUrl, priceIn, priceOut, priceSale, shipday, instock, status, categoryId }) => {
    const sql = `INSERT INTO product(productId, display, provider, description, imageUrl, priceIn, priceOut, priceSale, shipday, instock, status, categoryId)
                VALUES (uuid(), ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?);`;
    const params = [productId, display, provider, description, imageUrl, priceIn, priceOut, priceSale, shipday, instock, status, categoryId];
    const data = await db.query(sql, params);
}

const updateById = async(productId, { display, provider, description, imageUrl, priceIn, priceOut, priceSale, shipday, instock, status, categoryId }) => {
    const sql = `UPDATE product 
                SET display = ?, provider = ?, description = ?, imageUrl = ?, priceIn = ?, priceOut = ?, priceSale = ?, shipday = ?, instock = ?, status = ?, categoryId = ?
                WHERE productId = ? 
                    AND isDelete = 0;`;
    const params = [display, provider, description, imageUrl, priceIn, priceOut, priceSale, shipday, instock, status, categoryId, productId];
    const data = await db.query(sql, params);
}

const deleteById = async(productId) => {
    const sql = `UPDATE product 
                SET isDelete = 1
                WHERE productId = ?;`;
    const data = await db.query(sql, productId);
}

const listProduct = async() => {
    const sql = `SELECT productId, display
                FROM product
                WHERE isDelete = 0`;
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
    listProduct
}