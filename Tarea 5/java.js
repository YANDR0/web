
//ESTO SE HACE GRACIAS A LA SESIÓN 10


class Libro {
    constructor(ID, autor, anio, fecha){
        this.ID = ID;
        this.autor = autor;
        this.anio = anio;
        this.fecha = fecha;
    }
}

function crearLibro(ID, autor, anio, fecha) {
    return new Libro(ID, autor, anio, fecha)
}

function clone_arr(array){
    let new_array = []
    let size = array.length
    for(let i = 0; i < size; i++){
        new_array.push(array[i]);
    }

    return new_array;
}

function delete_element(id, array){

}

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
    
}



/*

let copia = array.concat();

function del (iden, arreglo){
    let index = arreglo.findIndex((iden) => Libro.ID = iden);
    delete arreglo[index];
}

//find
del(3, copia);
console.table(copia);
*/

//;
//console.log(v_json);

//unshift meter al principio
//shift quita el primer elemento
//delete cambia el valor por undefined
//splice 



let array = []

ejercicio_1(array)
ejercicio_2(array)



