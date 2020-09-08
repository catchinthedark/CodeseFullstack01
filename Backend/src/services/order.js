const db = require('../utils/db');
const o = '`order`';

const getAll = async({ limit, offset }) => {
    const sql = `SELECT orderId, username, productId, price, amount, note, status, created_at, updated_at
                FROM ${o}
                WHERE isDelete = 0
                LIMIT ?
                OFFSET ?;`;
    const countSql = `SELECT COUNT(orderId) AS total
                    FROM ${o}
                    WHERE isDelete = 0;`;
    const params = [limit, offset];
    const data = await db.queryMulti(sql, params);
    const { total } = await db.queryOne(countSql);
    return {
        data,
        metadata: {
            length: data.length,
            total
        }
    };
}

const getById = async(orderId) => {
    const sql = `SELECT username, productId, price, amount, note, status, created_at, updated_at
                FROM ${o}
                WHERE orderId = ?
                    AND isDelete = 0
                LIMIT 1;`;
    const data = await db.queryOne(sql, orderId);
    return {
        data
    };
}

const create = async({ username, productId, price, amount, note, status }) => {
    const sql = `INSERT INTO ${o}(orderId, username, productId, price, amount, note, status)
                VALUES (uuid(), ?, ?, ?, ?, ?, ?);`;
    const params = [username, productId, price, amount, note, status];
    const data = await db.query(sql, params);
}

const updateById = async(orderId, { username, productId, price, amount, note, status }) => {
    const sql = `UPDATE ${o} 
                SET username = ?, productId = ?, price = ?, amount = ?, note = ?, status = ?
                WHERE orderId = ?
                    AND isDelete = 0;`;
    const params = [username, productId, price, amount, note, status, orderId];
    const data = await db.query(sql, params);
}

const deleteById = async(orderId) => {
    const sql = `UPDATE ${o}
                SET isDelete = 1
                WHERE orderId = ?;`;
    const data = await db.query(sql, orderId);
}

const listOrder = async() => {
    const sql = `SELECT orderId, status
                FROM ${o}
                WHERE isDelete = 0;`;
    const data = await db.queryMulti(sql);
    return {
        data,
        metadata: {
            length: data.length
        }
    };
}

module.exports = {
    getAll,
    getById,
    create,
    updateById,
    deleteById,
    listOrder
}