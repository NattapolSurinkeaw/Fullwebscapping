const express = require('express')
const WebController = require('../controllers/webController')
const path = require('path')

const router = express.Router()
const webController = new WebController();
const indexPage = path.join(__dirname, "../views/index.html")

router.get('/', (req, res) => {
    res.sendFile(indexPage)
})

router.get('/web', (req, res) => {
    res.send("test the rout web.js")
})

router.get('/testcon', (req, res) => {
    res.json(webController.home())
})

module.exports = router