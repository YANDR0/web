import * as fs from 'node:fs';

let fileReadedCb = function (error, data){
    if(error){
        console.log(error);
    }
    let newJson = JSON.parse(data);
    console.table(newJson.users)
    fs.readFile('./files/db1.json','utf8',getAverage);
}

let getAverage = (error, data) => {
    if(error){
        console.log(error);
    }
    let newJson = JSON.parse(data);
    newJson = newJson.users;
    let total = 0;
    let c = 0;
    newJson.forEach(element => {
        total += element.edad;
        c++;
    });

    console.log("Promedio : " + total/c);
    fs.readFile('./files/db1.json','utf8',getLongest);
}

let getLongest = (error, data) => {
    if(error){
        console.log(error);
    }
    let newJson = JSON.parse(data);
    newJson = newJson.users;
    let max = -1;
    newJson.forEach(element => { max = max < element.edad? element.edad: max;});
    newJson.forEach(element => { max = max == element.edad? element.name: max;});
    console.log("Mayor: " + max);
    fs.readFile('./files/db1.json','utf8', deleteUsers(2));
}

let deleteUsers = id => ((error, data) => {
    if(error){
        console.log(error);
    }
    let newJson = JSON.parse(data);
    newJson = newJson.users;
    let index = newJson.findIndex((x)=> x.id == id);
    newJson.splice(index, 1);
    console.table(newJson);
})



fs.readFile('./files/db1.json','utf8',fileReadedCb);





import chalk from "chalk";
import asciiCats from "ascii-cats";

console.log(chalk.bgBlue.underline("SPECS: "));
console.log(chalk.bold("CPU Usage: ") + chalk.underline.red('99%'));
console.log(chalk.bold("RAM Usage: ") + chalk.underline.yellow('65%'));
console.log(chalk.bold("Disk Usage: ") + chalk.underline.green('23%'));

console.log(chalk.bold.blueBright(asciiCats()));

