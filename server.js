const app = require('./app')

const {Server: HttpServer} = require('http')
const {Server: SocketIO}  = require('socket.io')

const http = new HttpServer(app)
const io = new SocketIO(http)

const PORT = process.env.PORT || 3005
http.listen(PORT, () => {
    console.log(`Servidor Funcionando en el Puerto: ${PORT}`)
})

io.on('connection', (socket) => {
    console.log('Nuevo cliente conectado',socket.id);
    socket.on('chat:msj', data => {
        if(data.email <= 0) return console.log('ERROR! falta mensaje'); ;
        io.sockets.emit('chat:msj', data)
    })
});

module.exports = http