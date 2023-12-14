
let xhr = new XMLHttpRequest();
var data = sessionStorage.getItem("car");   //Sesión en forma de string
var inventory;
let cantidad = JSON.parse(data);            //Sesión ya formateada
var buttons;

xhr.open('POST', 'http://localhost:3000/products/cart');
xhr.setRequestHeader("Content-Type", "application/json");
xhr.send(data);
xhr.onload = function (){
    if(xhr.status == 200){
        inventory = JSON.parse(xhr.responseText);
        showProducts(inventory);
        startStorage();
    }
    else alert("Todo explotó");
};

function showProducts(inventory){
    let html = "";
    let html_2 = "";
    let total = 0;
    for (let i = 0; i < inventory.length; i++){
        let amount = cantidad[cantidad.findIndex(e => e.uuid == inventory[i].uuid)].q;
        html += `
        <div class="col-lg-12">
            <div class="card">
                <div class="card-body">
                    <div class="d-flex">
                        <div class="flex-shrink-0">
                            <h3>
                            ${inventory[i].title} <button type="submit" class="btn btn-danger" onclick = "deleteFromCart('${inventory[i].uuid}')"><i class="fa-solid fa-trash"></i></button>
                            </h3>
                        <div class="input-group mb-3 toRemove" uuid="${inventory[i].uuid}">
                            <span class="input-group-text">Cantidad:</span>
                            <input type="number" id="typeNumber" class="form-control" min="0" max="10" value="${amount}" readonly>   <!--Añadir readonly después-->
                            <button type="button" class="btn btn-primary"><i class="fa-solid fa-pencil"></i></button>
                        </div>
                        <div class="input-group mb-3">
                            <span class="input-group-text">Precio:</span>
                            <input type="text" class="form-control Required" placeholder="${inventory[i].pricePerUnit}" readonly>
                            <span class="input-group-text">$MXN</span>
                        </div>
                        </div>
                        <div class="flex-grow-1">
                            <img class=" ml-3" src="${inventory[i].imageUrl}" style="float: right; height: 150px; width: 150px;  border-radius: 10%;">
                        </div> 
                    </div>
                </div>
            </div>
        </div>
        `; 
        html_2 += `
        <p><b>${inventory[i].title}: </b>${inventory[i].pricePerUnit} x ${amount}</p>
        `;
        total += inventory[i].pricePerUnit*amount;
    }

    html_2 += `
    <br>
    <h4>Total: ${total}</h4>
    `;

    document.getElementById("cartProducts").innerHTML = html;
    document.getElementById("precios").innerHTML = html_2;
    addListener();
}


function deleteFromCart(id){
    let del = inventory.findIndex(e => e.uuid == id);
    inventory.splice(del, 1);
    del = cantidad.findIndex(e => e.uuid == id);
    cantidad.splice(del, 1);
    sessionStorage.setItem("car", JSON.stringify(cantidad));
    showProducts(inventory);
}


function addListener(){
    buttons = document.getElementsByClassName("toRemove");
    for (let i = 0; i < buttons.length; i++) {
        buttons[i].lastElementChild.addEventListener("click", editButton);
    }
}


function editButton(){
    let prev = event.currentTarget.previousElementSibling;
    prev.readOnly = false;   

    let b1 = document.createElement("button");
    b1.type = "button";
    b1.setAttribute("class", "btn btn-success");
    b1.innerHTML = `<i class="fa-solid fa-circle-check"></i>`;

    let b2 = document.createElement("button");
    b2.type = "button";
    b2.setAttribute("class", "btn btn-danger");
    b2.innerHTML = `<i class="fa-brands fa-xbox"></i>`;

    event.currentTarget.remove();
    prev.after(b1, b2);

    b1.addEventListener("click", aceptButton);
    b2.addEventListener("click", canceltButton);
}

function startStorage(){
    if(sessionStorage.getItem("car") === null){
        const car = [];
        sessionStorage.setItem("car",JSON.stringify(car));
    }
}

function aceptButton(){
    let prev = event.currentTarget.previousElementSibling;
    let num = prev.value;

    let idParent = prev.parentElement.getAttribute("uuid");     //uuid del producto a mover
    let toModify = cantidad.findIndex(e => e.uuid == idParent);     //Posición del susodicho en el carrito
    if(num < 1){
        deleteFromCart(idParent);
        return;
    }
    
    cantidad[toModify].q = num;
    sessionStorage.setItem("car", JSON.stringify(cantidad));

    showProducts(inventory);
}


function canceltButton(){
    let prev = event.currentTarget.previousElementSibling.previousElementSibling;
    let b = document.createElement("button");
    prev.readOnly = true; 

    b.type = "button";
    b.setAttribute("class", "btn btn-primary");
    b.innerHTML = `<i class="fa-solid fa-pencil">`;
    b.addEventListener("click", editButton);

    let idParent = prev.parentElement.getAttribute("uuid");
    let amount = cantidad[cantidad.findIndex(e => e.uuid == idParent)].q;
    prev.value = amount;

    event.currentTarget.previousElementSibling.remove();
    event.currentTarget.remove();

    prev.after(b);
}