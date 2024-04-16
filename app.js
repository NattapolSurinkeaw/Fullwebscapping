const Controller = require('./controllers/controller')
const express = require('express')
const productRoute = require('./Routes/product')

const app = express();

const controller = new Controller

app.use(productRoute)
app.get('/getmessage', (req, res) => {
    res.send(controller.home());
})

app.listen(8001, () => console.log("start with port 8001"))

