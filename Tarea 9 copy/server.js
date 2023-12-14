const mongoose = require("mongoose");
const cors = require("cors");
const express = require("express");

const app = express();
const port = 3000;

let mongoConnection = "mongodb+srv://admin:Parangaricutirimicuaro01@myapp.j2ikbis.mongodb.net/BasesNoRelacionales";
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
let userSchema = mongoose.Schema({
    origin: {
        type: String,
        required: true
    },
    connection: {
        type: Boolean,
        required: true
    }
});

let User = mongoose.model("flights", userSchema);

app.use(express.json())

app.use(cors({
    methods: ['GET', 'POST', 'DELETE', 'UPDATE', 'PUT', 'PATCH']
}));

app.post('/', (req, res) => {
    let user = User(req.body);
    user.save().then((doc) => console.log(("Usuario creado: " + doc)));
    res.send(user);
})

app.put('/', (req, res) => {
    console.log("Actualizando ando");
    let id = req.body.id,
        nombre = req.body.nombre,
        correo = req.body.correo,
        edad = req.body.edad,
        object_to_update = {},
        flag_updated = false;

    if(nombre != undefined){
        object_to_update.nombre = nombre;
        flag_updated = true;
    }

    if(correo != undefined){
        object_to_update.correo = correo;
        flag_updated = true && flag_updated;
    }

    if(edad != undefined){
        object_to_update.edad = edad;
        flag_updated = true && flag_updated;
    }

    console.log(id);
    if(flag_updated){
        User.findByIdAndUpdate(id, object_to_update, {new: true}).then((doc => {
            console.log("Se actualizó");
            console.log(doc);
            res.send(doc);
        })).catch((err) => console.log(err));
    } else {
        res.send("AAAAAAAAAAAAAAAAA");
    }
})

app.get("/"), (req, res) => {
    let xd = req.query.nombre;

    User.find({
        nombre: {$regex: xd}
    }).then((docs) => {
        res.send(docs);
        console.log(docs);
    }).catch((err) => console.log(err));
}

app.delete('/', (req, res) => {
    console.log("Registro eliminado");
    let id = req.body.id;

    User.findByIdAndDelete(id).then((doc) => {
        console.log("Se borró")
        console.log(doc);
        res.send(doc);
    }).catch((err) => console.log(err));
});

app.listen(port, () => {
    console.log("Lito " + port);
});




