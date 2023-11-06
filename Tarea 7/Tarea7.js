

function showProducts(){
    let url = "http://localhost:3000/products"
    let xhr = new XMLHttpRequest();
    xhr.open('GET',url);
    xhr.send();
    xhr.onload = () => {
        if(xhr.status == 404) 
            alert("No se encontraron los productos");
        else if(xhr.status != 200)
            alert(xhr.status + ': ' + xhr.statusText);
        else{
            console.log("Lo logró señor!");
            let producto = JSON.parse(xhr.responseText);
            console.table(producto);

            let code = [];
            for (const o of producto) 
                code.push(`<b>ID: ${o.id} </b>
                <p>Name: ${o.name}</p>
                <p>Price: ${o.price}</p>
                <p>Cat: ${o.category}</p><br>`)

            code = code.join("")
            document.getElementById("Productos").innerHTML=code;
        }
    }
}

function addProduct(producto){
    let url = "http://localhost:3000/products"
    let xhr = new XMLHttpRequest();
    xhr.open('POST',url);
    xhr.setRequestHeader('Content-Type', 'application/json');
    xhr.send([JSON.stringify(producto)]);

    xhr.onload = () => {
        if (xhr.status != 201) alert(xhr.status + ': ' + xhr.statusText);
        else console.log("Producto guardado!");
    }
}

function queryParam(id){
    let url = "http://localhost:3000/products?id="+id;
    let xhr = new XMLHttpRequest();
    xhr.open('GET',url);
    xhr.send();
    xhr.onload = function () {
        if(xhr.status == 404) {
            alert("Usuario no encontrado");
        } else if(xhr.status != 200){
            alert(xhr.status + ': ' + xhr.statusText);
        } else{
            console.log("Producto encontrado!");
            let result = JSON.parse(xhr.responseText);
            console.log(result);

            let prd = `<b>Producto con id: ${id}</b> 
            <p>Producto: ${result[0].name}</p> 
            <p>Precio: ${result[0].price}</p>`;

            if(!!result){
                document.getElementById("param").innerHTML=prd;
            }
        }
    }
}

