const dotenv = require('dotenv');
dotenv.config();

const cors = require('cors');

const express = require('express');
const app = express();

const fs = require('fs');
const diary = fs.createWriteStream('diary.txt');

//middleware
const bodyparser = require('body-parser');
app.use(bodyparser.json());
app.use(bodyparser.urlencoded({ extended: true }));
const morgan = require('morgan');
app.use(morgan('combined', { stream: diary }));
const pagination = require('./middlewares/pagination');
app.use(pagination);
const { errorHandle } = require('./middlewares/errorHandle');
app.use(errorHandle);
app.use(cors());

//routers
const paramsRoute = require('./routers/params');
app.use('/api/v1/params', paramsRoute);

const categoryRoute = require('./routers/category');
app.use('/api/v1/category', categoryRoute);

const productRoute = require('./routers/product');
app.use('/api/v1/product', productRoute);

const accountRoute = require('./routers/account');
app.use('/api/v1/account', accountRoute);

const orderRoute = require('./routers/order');
app.use('/api/v1/order', orderRoute);

app.use((req, res, next) => {
    console.log(req.pagination);
    next();
})

const middleWare = (req, res, next) => {
    console.log(Date());
    next();
}

app.get('/api/v1/test-err', (req, res, next) => {
    next('Found an error!')
});

const port = process.env.port;
app.listen(port, err => {
    if (err) console.log(err);
    console.log("App listening...");
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