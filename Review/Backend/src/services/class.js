const db = require('../utils/db');
const { v1: uuidv1 } = require('uuid');

const getAll = async() => {
    const sql = `SELECT id, className 
                FROM class;`;
    const data = await db.queryMulti(sql);
    return {
        data
    };
}

const getById = async(classId) => {
    const sql = `SELECT studentId, fullName
                FROM stInClass
                WHERE classId = ?;`;
    const data = await db.queryMulti(sql, classId);
    return {
        data
    };
}

const add = async({ className }) => {
    const sql = `INSERT INTO class(id, className)
                VALUES (?, ?);`;
    const params = [uuidv1(), className];
    const data = await db.query(sql, params);
    return {
        data
    };
}

module.exports = {
    getAll,
    getById,
    add
}