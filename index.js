require('dotenv').config();

const express = require('express');
const cors = require('cors');

const { dbConnection } = require('./database/config');


// Crear el servidor de express
const app = express();


// Configurar CORS
app.use( cors() );


// Base de datos
dbConnection();


//console.log( process.env );


// Routes
app.get( '/', (req, res) => {

    res.json({
        ok: true,
        msg: 'Hola Mundo'
    });


    /* res.status(400).json({
        ok: true,
        msg: 'Hola Mundo'
    }); */

});


app.listen( process.env.PORT, () => {
    console.log('Servidor corriendo en puerto ' + process.env.PORT );
});


//Cluster: Colección de servidores

//Comandos a utilizar
//npm init -y
//npm install express --save
//npm install express@4.17.1 --save
//node index.js
//npm install -g nodemon
//nodemon index.js
//npm run start:dev
//npm i mongoose
//npm i dotenv
//npm i cors (cors realiza las configuraciones en el servidor con el objetivo de aceptar peticiones de diferentes dominios)