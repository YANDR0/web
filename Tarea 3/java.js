
let calis = [
    [6,8,5,5,10],
    [6,5,7,3,8],
    [5,5,8,1,4],
    [6,9,8,10,5],
    [5,8,5,7,9]
]

let Aprobado = (grupo, promedio) => {
    console.log("El grupo", grupo, "aprobó con un promedio de:", promedio)
};

let Reprobado = (grupo, promedio) => {
    console.log("El grupo", grupo, "reprobó con un promedio de:", promedio)
};

let Promedio = (array) => {
    total = 0
    for(j = 0; j < array.length; j++)
        total += array[j]
    return total / array.length;
}


function getCalificaciones (arreglo, fnAprobado, fnReprobado, getPromedio){

    console.log(arreglo);
    for(i = 0; i < arreglo.length; i++){
        avg = getPromedio(arreglo[i]);
        avg < 6? fnReprobado(i+1,avg): fnAprobado(i+1,avg);
    }
    console.log("Listo");
}

getCalificaciones(calis, Aprobado, Reprobado, Promedio);