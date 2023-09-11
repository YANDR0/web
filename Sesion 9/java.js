/*
function crearAlumno(nombre, carrera) {
    return{
        nombre, carrera
    }
}
let alumno_1 = crearAlumno("Raúl", "ISC")

let alumno_3 = alumno_1;
alumno_3.semestre = 6;
console.log(alumno_1.semestre);
console.log(alumno_3 == alumno_1);
console.log(alumno_3 === alumno_1);
let alumno_4 = {};
let alumno_5 = {};
console.log( alumno_4 == alumno_5);
console.log( alumno_4 === alumno_5);
let alumno_6 = {};
Object.assign(alumno_6, alumno_1);
console.log(alumno_6);

function Alumno (nombre, carrera){
    this.nombre = nombre;
    this.carrera = carrera;
}

class AlumnoC {
    constructor(nombre, carrera){
        this.nombre = nombre;
        this.carrera = carrera;
    }
}
*/

let celular_1 = {
    marca: "La hora",
    modelo: "Chaifon",
    año: 2012,
    precio: 5.5,
    venta: true,
    get algo(){
        return this.marca + " " + this.modelo;
    },
    set algo(datos){
        let [ram, pros] = datos.split(" ")
        this.ram = ram;
        this.pros = pros;
    }
}

function crearCelular(marca, modelo, anio, precio, venta) {
    return new Celular(marca, modelo, anio, precio, venta)
}

class Celular {
    constructor(marca, modelo, anio, precio, venta){
        this.marca = marca;
        this.modelo = modelo;
        this.anio = anio;
        this.precio = precio;
        this.venta = venta;
    }
}

function mostrar(cel){
    for (let key in cel)
        console.log(cel[key])
}

function tiene(cel, llave){
    if(cel[llave] === undefined){
        console.log("No existe");
    }
    else{
        console.log(cel[llave]);
    }
}

//mostrar(celular_1);
//tiene(celular_1, "marca");
//tiene(celular_1, "datos");






