
import cors from "cors";
import express from 'express';
import chalk from 'chalk';
import  * as fs from 'node:fs';

const app = express();
const port = 3000;

app.use(cors({      
    methods: ['GET','POST','DELETE','UPDATE','PUT','PATCH']
}));

app.use("/data", (req, res, next) => {   
    if (req.get("opcion"))
        next();
    else {
        res.sendStatus(401);
        console.log(chalk.red("Sin opcion a procesar"));
    }
})

app.get('/data', (req, res) => {    
    let opcion = req.get('opcion');
    console.log("Allá vamos...");
    fs.readFile('./data/products.json', 'utf-8', (err, data) => {
        let json = JSON.parse(data);

        if (err) {
            console.log("AAAAAAAAAAAAAAA, quien sabe");
            console.log(chalk.red(err));
            return res.status(500);
        }
        if(opcion == "mostrar"){
            console.log(chalk.green("Lista de productos:"));
            console.table(json);
            res.send(json)
        }
        if(opcion == "caro"){
            let value;
            let max = -1;
            for(let i of json){
                if(i.price > max){
                    max = i.price;
                    value = i;
                }
            }
            console.log(chalk.red("Lo más caro es:"));
            console.table(value);
            res.send(value);
        }
        if(opcion == "promedio"){
            let total = 0;
            let amount = 0;
            for(let i of json){
                total += i.price;
                amount++;
            }
            console.log(chalk.yellow("El promedio es:" + total/amount));
            res.send({result: total/amount})
        }
    })

    
});

app.listen(port, () => {
    console.log("Aplicación de ejemplo corriendo en puerto " + port);
});