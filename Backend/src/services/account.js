const db = require('../utils/db');
const security = require('../utils/security');

const getAll = async({ limit, offset }) => {
    const sql = `SELECT username, password, role, display, email, phone, address, birthday, avatar, status, created_at, updated_at
                FROM account
                WHERE isDelete = 0
                LIMIT ?
                OFFSET ?;`;
    const countSql = `SELECT COUNT(username) AS total
                    FROM account
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

const getById = async(username) => {
    const sql = `SELECT password, role, display, email, phone, address, birthday, avatar, status, created_at, updated_at
                FROM account
                WHERE username = ?
                    AND isDelete = 0
                LIMIT 1;`;
    const data = await db.queryOne(sql, username);
    return {
        data
    };
}

const create = async(newAccount) => {
    const checkExistSql = `SELECT COUNT(username) AS cnt
                        FROM account
                        WHERE username = ?;`;
    const checkExist = await db.queryOne(checkExistSql, [newAccount.username]);
    if (checkExist.cnt > 0) {
        return "Account existed!";
    }
    const encryptedPassword = await security.generatePassword(newAccount.password);
    const sql = `INSERT INTO account(username, password)
                VALUES (?, ?);`;
    await db.query(sql, [newAccount.username, encryptedPassword]);
    return "Account created!";
}

const updateById = async(username, { password, role, display, email, phone, address, birthday, avatar, status }) => {
    const sql = `UPDATE account
                SET password = ?, role = ?, display = ?, email = ?, phone = ?, address = ?, birthday = ?, avatar = ?, status = ?
                WHERE username = ?
                    AND isDelete = 0;`;
    const params = [password, role, display, email, phone, address, birthday, avatar, status, username];
    const data = await db.query(sql, params);
}

const deleteById = async(username) => {
    const sql = `UPDATE account
                SET isDelete = 1
                WHERE username = ?;`;
    const data = await db.query(sql, username);
}

const listAccount = async() => {
    const sql = `SELECT username, display
                FROM account
                WHERE isDelete = 0;`;
    const data = await db.queryMulti(sql);
    return {
        data,
        metadata: {
            length: data.length
        }
    }
}

module.exports = {
    getAll,
    getById,
    create,
    updateById,
    deleteById,
    listAccount
}