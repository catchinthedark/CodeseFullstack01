const express = require('express');
require('dotenv').config();
const bodyparser = require('body-parser')
const categoryRoute = require('./routers/category');
const fs = require('fs');
const morgan = require('morgan');

const app = express();

const diary = fs.createWriteStream('diary.txt');

app.use(morgan('combined', { stream: diary }));
app.use(bodyparser.json());
app.use(bodyparser.urlencoded({ extended: true }));
app.use('/api/v1/category', categoryRoute);
//middle wares
//log

app.get('/', (req, res) => {
    res.send('Homepage')
});

app.listen(8080, err => {
    if (err) console.log(err);
    console.log("Listening at port 8080");
});

// IP address - localhost / 127.0.0.1
// port (max = 65535) 
// HTTP 80 HTTPS 443 MySQL 3306 Mongo 27017...

//HTTP methods (IP adress):(port)
// GET - Read 
// POST - Create
//PUT - Update
//DELETE - Delete

//app.listen written at the end

/*
BASE_URL: codedidungso/api/v1
/account
    Create: POST BASE_URL/account
    Read 1: GET BASE_URL/account/:id
    Read n: GET BASE_URL/account
    Update: PUT BASE_URL/account/:id
    Delete: DELETE BASE_URL/account/:id
/product
/order
/category

*/