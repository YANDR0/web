const express = require('express');     //Llamada a express para hacer uso de este
const router = require('./app/controllers/router');     //Conexión al archivo router
const puerto = 3000;      //Puerto a conectarse
const app = express();      //Forma de inicializar los middlewares

app.use(express.json());    //Conexión a 
app.use(router);    //Mandar router

app.use(express.static('app'));
app.use('/views', express.static('views'));

app.listen(puerto, () => {
    console.log("Práctica 3 iniciada en el puerto: " + puerto);
});