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
app.use(cors());

//routers
const classRoute = require('./routers/class');
app.use('/api/v1/class', classRoute);
const studentRoute = require('./routers/student');
app.use('/api/v1/student', studentRoute);

const port = process.env.port;
app.listen(port, err => {
    if (err) console.log(err);
    console.log("App listening...");
});