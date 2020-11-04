const db = require('../utils/db');

const getAll = async() => {
    const sql = `SELECT id, className 
                FROM class;`;
    const data = await db.queryMulti(sql);
    return {
        data
    };
}

const getById = async(classId) => {
    const sql = `SELECT id, fullName
                FROM student
                WHERE classId = ?;`;
    const data = await db.queryMulti(sql, classId);
    return {
        data
    };
}

module.exports = {
    getAll,
    getById
}