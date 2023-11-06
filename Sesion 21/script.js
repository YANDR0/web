
function doStuff(){
    let elemento = document.getElementById("lista");
    let p1 = document.createElement("p");
    let p2 = document.createElement("p");
    p1.innerText = "A ver";
    p2.innerText = "A ver x2";
    elemento.before(p1);
    elemento.after(p2);
   
    let l1 = document.createElement("li");
    let l2 = document.createElement("li");
    let l3 = document.createElement("li");

    l1.innerHTML = "1";
    l2.innerHTML = "2";
    l3.innerHTML = "3";

    elemento.prepend(l1);
    l1.nextElementSibling.after(l2);
    elemento.append(l3);

    let html_to_insert = "<mark>Importante</mark>";
    elemento.insertAdjacentHTML("afterbegin", html_to_insert);
}

doStuff();



/*
function getInfo(elemento, atributo){
    console.log(elemento.getAttribute("id"));
    console.log(elemento.atribute);
    console.log(elemento.hasAttribute(atribute));
}
*/