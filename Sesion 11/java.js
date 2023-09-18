
function Prueba_1(){
console.log("uno");
setTimeout(() => {
    console.log("A");

}, 7000);
setTimeout(() =>{
    console.log("B");

}, 0);
setTimeout(() =>{
    console.log("C");

}, 2000);
setTimeout(() =>{
    console.log("D");

}, 1000);
console.log("end");
}

function Ejercicio_1(){
    for (let i = 0; i < 5; i++) {
        setTimeout(() =>{ 
            console.log("Hola");
        }, 1000*i);
    }
    for (let j = 0; j < 4; j++) {
        setTimeout(() =>{
            if(j < 4) console.log("Mundo");
        }, 1000*j);
        
    }
}

function Prueba_2(){
    let promesa1 = new Promise((resolve, reject) => {
        setTimeout(() =>{ 
            if(Math.random() < 0.5){
                console.log("Procesando la promesa");
                resolve("Correcto");
            } else {
                reject(new Error("Algo falló"))
            }
        }, 1000);
    });
    promesa1.then((result) => {
        console.log(result);
    },(error) => {
        console.log(error);
    });
}

function Prueba_2(){
    function loadScript(src){
        return new Promise((resolve, reject) => {
            let script = document.createElement('script');
            script.src = src;
            script.onload = () => resolve(script);
            script.onerror = () => reject(new Error("AAAAAAAAAAAAAAAAA"));
            document.head.append(script);
        });
    }

    let promesa2 = loadScript("https://www.googletagmanager.com/gtag/js?id=UA-XXXXX-Y");
    promesa2.then(
        scrip => alert("Todo un genio joven"),
        error => alert("Otro AAAAAAAAAAA")
    );
    promesa2.then(script => alert("Finiquitado"));
}


// Async/Await Equivalen a las promises pero 
Prueba_2();
