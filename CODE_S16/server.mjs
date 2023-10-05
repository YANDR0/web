import express from 'express';
import chalk from 'chalk';
import * as fs from 'node:fs';


const app = express();
const port = 3000;


let fileReadedCb = function (error, data){
    if(error){
        console.log(error);
    }
    let newJson = JSON.parse(data);
    console.log(chalk.green('Uusuarios encontrados!'));
    console.table(newJson.users)
}


app.get('/', (req, res) => {
    res.send("Raíz del sitio");
    console.log(chalk.blue('Root'));
    
})

app.get('/home', (req, res) => {
    res.send("Home del sitio");
    console.log(chalk.green('Home'));
})

app.get('/users', (req, res) => {
    res.send("Users del sitio");
    fs.readFile('./CODE_S16/db1.json','utf8',fileReadedCb);
    console.log(chalk.yellow('Consultando usuarios'));
    
})


app.listen(port, () => {
    console.log("Aplicacion en puerto: " + port);
})




