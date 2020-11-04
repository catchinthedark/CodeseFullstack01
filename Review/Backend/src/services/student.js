const db = require('../utils/db');

const getById = async(id) => {
    const sql = `SELECT fullName, gender, age
                FROM student
                WHERE id = ?;`;
    const data = await db.queryOne(sql, id);
    return {
        data
    };
}

module.exports = {
    getById
}