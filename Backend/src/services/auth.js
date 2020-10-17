const db = require('../utils/db');
const security = require('../utils/security');

const login = async(account) => {
    const sql = `SELECT username, password
                    FROM account
                    WHERE username = ?
                    LIMIT 1;`;
    const result = await db.queryOne(sql, [account.username]);
    if (!result) return false;
    const compare = await security.verifyPassword(account.password, result.password);
    if (compare) {
        const token = security.generateToken({
            username: result.username,
            role: result.role
        })
        return token;
    }
    return false;
}

const getMe = async(username) => {
    const sql = `SELECT username, role, display, email, phone, avatar, address, birthday, status
                FROM account
                WHERE username = ?
                    AND isDelete = 0;`;
    const result = await db.queryOne(sql, [username]);
    return result;
}

module.exports = {
    login,
    getMe
}