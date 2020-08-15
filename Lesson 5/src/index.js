const express = require('express');
const bodyparser = require('body-parser')
const categoryRoute = require('./routers/category');

const app = express();

app.use(bodyparser.json());
app.use(bodyparser.urlencoded({ extended: true }));
app.use('/api/v1/category', categoryRoute);
//middle wares
//log

app.get('/', (req, res) => {
    res.send('Homepage')
});

app.listen(9067, err => {
    if (err) console.log(err);
    console.log("Listening at port 9067");
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