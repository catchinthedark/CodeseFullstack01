const mysql = require('mysql');
const dbConfig = require('../config/dbConfig');
const db = 'thachthao'

const connection = mysql.createConnection({
    host: dbConfig.host,
    user: dbConfig.user,
    password: dbConfig.password
})

connection.connect(error => {
    if (error) throw error;
    console.log("Sucessfully connected to the database");
})

connection.query('CREATE DATABASE IF NOT EXISTS ??', db, function(err, results) {
    if (err) {
        console.log('error in creating database', err);
        return;
    }

    console.log('created a new database');

    connection.changeUser({
        database: db
    }, function(err) {
        if (err) {
            console.log('error in changing database', err);
            return;
        }
    });
});


module.exports = connection;