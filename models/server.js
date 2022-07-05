const express = require('express');
const cors = require ('cors');

class Server {
    constructor() {
        this.app    = express();
        this.port   = 3000;
        this.server = require('http').createServer( this.app );
        
        this.paths = {
            auth: '/api/auth',       
        }
        this.middlewares();
        this.routes();
    }
    middlewares(){

        // Cors
        this.app.use( cors() )

        //Directorio Publico
        // this.app.use( express.static('public') );

            // Lectura y Parseo del body
            this.app.use( express.json() );

        // carga de archivos
        // this.app.use(fileUpload ({
        //     useTempFiles : true,
        //     tempFileDir : '/tmp/',
        //     createParentPath: true
        // }));
    }
    routes(){
        // this.app.use(this.paths.auth, require('../routes/auth'));
        // this.app.use(this.paths.buscar, require('../routes/buscar'));
        // this.app.use(this.paths.upload, require('../routes/uploads'));
        // this.app.use(this.paths.usuarios, require('../routes/usuarios') );
        // this.app.use(this.paths.categorias, require('../routes/categorias') );
        // this.app.use(this.paths.productos, require('../routes/productos') );
    }
    listen(){
        this.server.listen(this.port, ()=> {
            console.log(`Servidor corriendo en puerto ${ this.port } `);
        });


    }

    
}

module.exports = Server