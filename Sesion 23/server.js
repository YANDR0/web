const mongoose = require("mongoose");
const cors = require("cors");
const express = require("express");

let mongoConnection = "mongodb+srv://admin:Parangaricutirimicuaro01@myapp.j2ikbis.mongodb.net/MyApp";
let db = mongoose.connection;

db.on('connecting', () => {
    console.log('Conectando...');
    console.log(mongoose.connection.readyState);
});

db.on('connected', () => {
    console.log('¡Conectado exitosamente!');
    console.log(mongoose.connection.readyState);
});

mongoose.connect(mongoConnection, {useNewUrlParser: true});