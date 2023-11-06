
let xhr = new XMLHttpRequest();
var data = sessionStorage.getItem("car");
let inventory;
let cantidad = JSON.parse(data);

xhr.open('POST', 'http://localhost:3000/products/cart');
xhr.setRequestHeader("Content-Type", "application/json");
xhr.send(data);
xhr.onload = function (){
    if(xhr.status == 200){
        inventory = JSON.parse(xhr.responseText);
        console.log(inventory);
        showProducts(inventory);
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
                        <div class="input-group mb-3">
                            <span class="input-group-text">Cantidad:</span>
                            <input type="number" id="typeNumber" class="form-control" min="0" max="10" value="${amount}" readonly>
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
}


function deleteFromCart(id){
    let del = inventory.findIndex(e => e.uuid == id);
    inventory.splice(del, 1);
    del = cantidad.findIndex(e => e.uuid == id);
    cantidad.splice(del, 1);
    sessionStorage.setItem("car", JSON.stringify(cantidad));
    showProducts(inventory);
}