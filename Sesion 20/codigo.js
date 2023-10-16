


function non(){
    a = document.getElementById("div_1");
    a.innerText = "Nones activos"
    a = document.getElementById("div_2");
    a.innerText = "Disabled"
    a = document.getElementById("div_3");
    a.innerText = "Nones activos"
    a = document.getElementById("div_4");
    a.innerText = "Disabled"
    a = document.getElementById("div_5");
    a.innerText = "Nones activos"

}

function par(){
    a = document.getElementById("div_1");
    a.innerText = "Disabled"
    a = document.getElementById("div_2");
    a.innerText = "Pares activos"
    a = document.getElementById("div_3");
    a.innerText = "Disabled"
    a = document.getElementById("div_4");
    a.innerText = "Pares activos"
    a = document.getElementById("div_5");
    a.innerText = "Disabled"
}


function chageDeepestDiv(){

    let body = document.body;
    let i = body.firstElementChild;

    while(i.firstElementChild){
        i = i.firstElementChild;
    }

    i.innerText = "XDDDDDDDD";
}