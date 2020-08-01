const express = require('express')
const pool = require('../utils/db')

const router = express.Router();

router.get('/', (request, response) => {
    pool.query('select * from `user`;', (err, data) => {
        if (err) console.log(err);
        else response.send(data)
    })
})

module.exports = router