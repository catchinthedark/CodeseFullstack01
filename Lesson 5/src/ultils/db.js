const mysql = require('mysql');
const config = {
    host: 'codedidungso.me',
    port: 3306,
    user: 'root',
    password: 'Codese2020', //BTVN : try to hide this with .env using dotenv
    database: 'thachthao'
}

const pool = mysql.createPool(config);

const query = (sql, params) => {
    return new Promise((resolve, reject) => {
        pool.query(sql, params, (err, result) => {
            if (err) reject(err)
            else resolve()
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