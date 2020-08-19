const mysql = require('mysql');

const config = {
    host: process.env.host,
    port: 3306,
    user: process.env.user,
    password: process.env.password,
    database: process.env.database
}

const pool = mysql.createPool(config);

const query = (sql, params) => {
    return new Promise((resolve, reject) => {
        pool.query(sql, params, (err, result) => {
            if (err) reject(err)
            else resolve(result)
        })
    })
}

const queryOne = (sql, params) => {
    return new Promise((resolve, reject) => {
        pool.query(sql, params, (err, result) => {
            if (err) reject(err)
            else resolve(result[0])
        })
    })
}

const queryMulti = (sql, params) => {
    return new Promise((resolve, reject) => {
        pool.query(sql, params, (err, result) => {
            if (err) reject(err)
            else resolve(result)
        })
    })
}

module.exports = {
    query,
    queryOne,
    queryMulti
}