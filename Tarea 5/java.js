

class Libro {
    constructor(ID, autor, anio, fecha){
        this.ID = ID;
        this.autor = autor;
        this.anio = anio;
        this.fecha = fecha;
    }
}

class NuevoLibro {
    constructor(ID, autor, anio, fecha, clave, palabras){
        this.ID = ID;
        this.autor = autor;
        this.anio = anio;
        this.fecha = fecha;
        this.clave = clave;
        this.palabras = palabras;
    }
}

function crearLibro(ID, autor, anio, fecha) {
    return new Libro(ID, autor, anio, fecha)
}

function crearNuevoLibro(ID, autor, anio, fecha, clave, palabras){
    return new NuevoLibro(ID, autor, anio, fecha, clave, palabras)
}

function clone_arr(array){
    let new_array = []
    let size = array.length
    for(let i = 0; i < size; i++){
        new_array.push(array[i]);
    }

    return new_array;
}

//BORRA ELEMENTO POR ID
function delete_element(num, array){
    let toDelete = array.findIndex(p => p.ID == num)
    if(toDelete == -1) return;
    delete array[toDelete];
}

//REGRESA EL ARRAY CON AÑOS
function find_by_year(year, array){
    return array.filter(p => p.anio <= year)
}

//FUNCION QUE SE ENCARGA DEL SWITCH
function parte_4(array, opcion){
    switch (opcion) {
        case "TOT":
            let sum = 0
            for (let i = 0; i < array.length; i++) 
                sum += array[i].palabras;
            console.log("\nEn total hay " + sum + " palabras");
            break;

        case "PRO":
            let pro = 0
            for (let i = 0; i < array.length; i++) 
                pro += array[i].palabras;
            console.log("\nEl promedio es " + pro/array.length + " palabras");
            break;

        case "MAX":
            array.sort((i,j)=>(j.palabras-i.palabras));
            console.log("\nEl máximo es de " + array[0].palabras + " palabras");
            break;

        case "MIN":
            array.sort((i,j)=>(i.palabras-j.palabras));
            console.log("\nEl mínimo es de " + array[0].palabras + " palabras");
            break;
        default:
            console.log("\nNo pues no se puede");
            break;
    }

}


//EJERCICIOS
function ejercicio_1(array){

    console.log("Ejercicio 1")

    for (let i = 0; i < 10; i++) {
        id = i+1;
        autor = "Autor" + (Math.floor((Math.random() * 100))+1);
        anio = Math.floor(Math.random()*21) + 2000;
        fecha = new Date(anio + "-01-01T12:00:00.000Z");
    
        array.push(crearLibro(id, autor, anio, fecha))
    }

    console.table(array);

    let v_json = JSON.parse(JSON.stringify(array))
    console.log(v_json)
}

function ejercicio_2(array){

    console.log("\nEjercicio 2");
    array.unshift(crearLibro(0,"Juan",1999,new Date("1999-01-01T12:00:00.000Z")));
    let size = array.length
    let array_2 = []
    let new_array = clone_arr(array)

    for(let i = 0; i < size; i++){
        let tmp = new_array.pop();
        array_2.push(tmp);
    }

    console.table(array_2);
}

function ejercicio_3(array){
    console.log("\nEjercicio 2");
    let array_3 = clone_arr(array);

    console.log("Delete element with id = 0")
    delete_element(0, array_3);
    console.table(array_3);

    let result = find_by_year(2010, array_3);
    console.log("Books of before or from 2010")
    console.table(result)
}

function ejercicio_final(){
    console.log("\nEjercicio final");

    let lista = []

    for (let i = 0; i < 20; i++) {
        id = i+1;
        autor = "Autor" + (Math.floor((Math.random() * 100))+1);
        anio = Math.floor(Math.random()*21) + 2000;
        fecha = new Date(anio + "-01-01T12:00:00.000Z");
        clave = Math.floor(Math.random()*900) + 100;
        palabras = Math.floor(Math.random()*99_001)+1000;
    
        lista.push(crearNuevoLibro(id, autor, anio, fecha, clave, palabras))
    }

    lista.splice(7,0,(crearNuevoLibro(0,"Juan",1999,new Date("1999-01-01T12:00:00.000Z"),200, 10000)));

    console.table(lista);
    lista.sort((i,j)=>(i.clave-j.clave));
    console.table(lista);

    parte_4(lista,"TOT");
    parte_4(lista,"PRO");
    parte_4(lista,"MAX");
    parte_4(lista,"MIN");

}





let array = []

ejercicio_1(array)
ejercicio_2(array)
ejercicio_3(array)
ejercicio_final()



