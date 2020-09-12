const db = require('../utils/db');
const security = require('../utils/security');

const login = async(account) => {
    const getAccountSql = `SELECT username, password
                    FROM account
                    WHERE username = ?
                    LIMIT 1;`;
    const getAccount = await db.queryOne(getAccountSql, [account.username]);
    const compare = await security.verifyPassword(account.password, getAccount.password);
    if (compare) {
        return security.generateToken({
            username: account.username,
            role: 1
        })
    } else {
        return false;
    }
}

module.exports = {
    login
}