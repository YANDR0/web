
//ESTO SE HACE GRACIAS A LA SESIÓN 10

/*
function probarConFlechas(test){
    let crearAlumno = (expediente, nombre) => {
        console.log(arguments);
    }
    crearAlumno(34, "Luis")
}

probarConFlechas("HOLA");*/


/*
let strJSON = '{"nombre":"pepe","nacimiento":"2000-11-30T12:00:00.000Z"}';
let obj2 = JSON.parse(strJSON, function(key, value){
    if(key=='nacimiento'){
        return new Date(value);
    }
    return value;
});
console.log(obj2);
console.log(obj2.nacimiento.getFullYear());
*/


function crearLibro(ID, autor, anio, fecha) {
    return new Libro(ID, autor, anio, fecha)
}

class Libro {
    constructor(ID, autor, anio, fecha){
        this.ID = ID;
        this.autor = autor;
        this.anio = anio;
        this.fecha = fecha;
    }
}

let array = []

for (let i = 0; i < 10; i++) {
    id = i+1;
    autor = "Autor" + (Math.floor((Math.random() * 100))+1);
    anio = Math.floor(Math.random()*21) + 2000;
    fecha = new Date(anio + "-01-01T12:00:00.000Z");

    array.push(crearLibro(id, autor, anio, fecha))
}

array.unshift(crearLibro(0,"Juan",1999,new Date("1999-01-01T12:00:00.000Z")))
console.table(array);

/*
let array_2 = []
let size = array.length

for(let i = 0; i < size; i++){
    let tmp = array.pop();
    array_2.push(tmp);
}

console.table(array);
console.table(array_2);
*/

let copia = array.concat();

function del (iden, arreglo){
    let index = arreglo.findIndex((iden) => Libro.ID = iden);
    delete arreglo[index];
}

//find
del(3, copia);
console.table(copia);


//let v_json = JSON.parse(JSON.stringify(array));
//console.log(v_json);

//unshift meter al principio
//shift quita el primer elemento
//delete cambia el valor por undefined
//splice 









