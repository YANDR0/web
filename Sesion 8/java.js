/*
function fun_1 (var_1 = 5){
    return var_1 + 3;
}

let resultado = fun_1();
console.log("Resultado: ", resultado);*/

/*
function showMes(mes){
    console.log(mes);
}

let var_mes = showMes;
var_mes("Hola XD");
console.log(var_mes);
console.log(typeof var_mes)*/


/*
let arreglo = [
    ["Juan", 1],
    ["Pedro", 2]
]

let funcion = function de_chill_fuction (array, index){
    return index < array.length && index > 0? array[index][0] + array[index][1]: null;
}

console.log(funcion(arreglo, 1))*/

function createNewUser(id, name, store){
    if(id > 0 && id < 1000){
        store(id, name);
    }
    else{
        console.log("AAAAAAAAAAAAAAA")
    }
}

createNewUser(25, "Yuan", function(id, name) {
    console.log("Se guardó ID:", id, ", Nombre:", name)
})

createNewUser(25, "Yuan", (id, name) => {
    console.log("Se guardó ID:", id, ", Nombre:", name)
})
