const Controller = require('./controllers/controller')
const express = require('express')
const routeWeb = require('./Routes/web')
const routeApi = require('./Routes/api')


const app = express();

const controller = new Controller

app.use(routeWeb)
app.use(routeApi)

app.get('/test', (req, res) => {
    res.send(controller.home());
})

app.listen(8001, () => console.log("start with port 8001"))

