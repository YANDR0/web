
//Los comentarios son así
/* O asá*/

/*
alert("AAAAAAAAAAAA");
let x = 5,
y = 10;
const z= x + y;

console.log("Z es: ",z)

let nombre_1 = "Pepito",
nombre_2 = "Pancho",
nombre_3 = "Yuan";

let array = [
    1,
    "Testo",
    "Otro",
    true,
    [
        "ola",
        false
    ]
]
*/

/*
let number_1 = 3,
x=5,
number_2 = 3.14159,
string_1 = "Cadena 1",
string_2 = "Cadena 2";
console.log(number_1+number_2);
console.log(string_1+string_2);
console.log(number_1-number_2);
console.log(number_1*2.5);
console.log(number_1/number_2);
console.log(number_1=number_2);
console.log(2**3);
console.log(number_1++);
console.log(++number_1);
console.log(number_1--);

if(x==5){
    console.log("XDDDDDDDDDDDD")
}
*/

//array = "A"


function ejercicio(a){
    media = 0;
    for(i = 0; i < a.length; i++){
        media += a[i];
    }
    return media/a.length;
}

let coso = [1,2,3,4,5,6,7];
console.log(ejercicio(coso))

