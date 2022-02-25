const express   = require('express');
const cors      = require('cors'); 

const { dbConnection } = require('../database/config');

class Server {

    constructor() {
        this.app    = express();
        this.port   = process.env.PORT;
        this.productosRoutePath = '/api/productos'
        this.carritoRoutePath = '/api/carrito'

        // Conectar a base de datos


        // Middelwares
        this.middelwares();
        
        // Rutas de mi aplicacion
        this.routes();
    }

    async conectarDB() {
        await dbConnection
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