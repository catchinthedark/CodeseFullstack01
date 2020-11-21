const db = require('../utils/db');
const { v1: uuidv1 } = require('uuid');

const getAll = async() => {
    const sql = `SELECT id, fullName
                FROM student;`;
    const data = await db.queryMulti(sql);
    return {
        data
    };
}

const getById = async(id) => {
    const sql = `SELECT fullName, gender, age
                FROM student
                WHERE id = ?;`;
    const data = await db.queryOne(sql, id);
    return {
        data
    };
}

const add = async({ fullName, gender, age }) => {
    const sql = `INSERT INTO student(id, fullName, gender, age)
                VALUES (?, ?, ?, ?);`;
    const params = [uuidv1(), fullName, gender, age];
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