const Controller = require('./controllers/controller');
const http = require('http');

const controller = new Controller
const server = http.createServer(function (req, res) {

})

console.log(controller.home())

server.listen(8001)

