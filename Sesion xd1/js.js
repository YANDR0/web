
/*
let b1 = document.getElementById("b1"); // +
let b2 = document.getElementById("b2"); // -
let n1 = document.getElementById("num1");
let n2 = document.getElementById("num2");


b1.addEventListener("click", () => {
    n1.innerText = Math.floor(n1.innerText) + 1;
    n2.innerText = Math.floor(n2.innerText) + 1;
});

b2.addEventListener("click", () => {
    n1.innerText = Math.floor(n1.innerText) - 1;
    n2.innerText = Math.floor(n2.innerText) + 1;
});
*/


let b3 = document.getElementById("b3");
let c = document.getElementById("cuadro");


b3.addEventListener("click", () => {
    c.value = "";
    alert("Enviado");
});

c.addEventListener("keypress", () => {
    if(event.key == "Enter")
        b3.click();
});
