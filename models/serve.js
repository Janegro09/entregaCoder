const express   = require('express')
const cors      = require('cors') 
class Server {

    constructor() {
        this.app    = express();
        this.port   = process.env.PORT;
        this.productosRoutePath = '/api/productos'
        this.carritoRoutePath = '/api/carrito'

        // Middelwares
        this.middelwares();
        
        // Rutas de mi aplicacion
        this.routes();
    }

    middelwares() {
        // CORS
        this.app.use(cors())
 
        // Lectura y parseo del body
        this.app.use(express.json())

        // Directorio publico
        this.app.use(express.static('public'))

    }

    routes() {

        this.app.use(this.productosRoutePath, require('../routes/productos'))
        this.app.use(this.carritoRoutePath, require('../routes/carrito'))

    }

    listen(){
        this.app.listen(this.port, () => {
        console.log('Servidor corriendo en puerto', this.port)
    });
    }

}

module.exports = Server;