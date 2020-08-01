const express = require('express')

const router = express.Router()

router.get('/', (req, res) => {
    let data = "This is home page"
    res.send(data)
})

module.exports = router