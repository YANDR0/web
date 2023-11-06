const mongoose = require("mongoose");
const cors = require("cors");
const express = require("express");

const app = express();
const port = 3000;


app.use(express.json())
app.use(cors({
    methods: ['GET', 'POST', 'DELETE', 'UPDATE', 'PUT', 'PATCH']
}));

app.use("/api/users", (req, res, next) => {
    if (req.get("Content-Type") === "application/json")
        next();
    else 
        res.sendStatus(401);
});

app.post("/api/users", (req, res) => {

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

    mongoose.connect(mongoConnection, {useNewUrlParser: true}).then(()=>{
        let userSchema = mongoose.Schema({
            nombre: {
                type: String,
                required: true
            },
            correo: {
                type: String,
                required: true
            },
            pass: {
                type: String,
                required: true
            },
            edad: {
                type: String,
                min: 0, 
                max: 120,
                required: true
            },
            sexo: {
                type: String,
                enum: ["H", "M"],
                required: true
            }
        });

        let User = mongoose.model("users", userSchema);
        let newUser = req.body;
        let user = User(newUser);
        user.save().then((doc) => console.log(("Usuario creado: " + doc)));
        
    })
});

app.listen(port, () => {
    console.log("Lito " + port);
});




