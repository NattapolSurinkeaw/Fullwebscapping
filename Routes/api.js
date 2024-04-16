const express = require('express')
const router = express.Router()


router.get('/api', (req, res) => {
    res.send('test the rout api.js')
})

module.exports = router