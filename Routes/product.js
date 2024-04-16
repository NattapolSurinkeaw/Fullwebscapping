const express = require('express')
const router = express.Router()

router.get('/product', (req, res) => {
    res.send("test the get product ")
})

module.exports = router