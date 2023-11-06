
function readProducts(value){
    let url = "http://localhost:3000/data"
    let xhr = new XMLHttpRequest();
    xhr.open('GET',url);

    if(value == 0) xhr.setRequestHeader('opcion',"mostrar");   //Manda dentro de opcion el segundo texto para
    if(value == 1) xhr.setRequestHeader('opcion',"caro");       //Saber que opcion se eligio
    if(value == 2) xhr.setRequestHeader('opcion',"promedio");

    xhr.send();
    xhr.onload = function () {
        if(xhr.status != 200) {
            alert("Error, error, error dwskfwjdnfc");
        } else {
            let ref = document.getElementById("consultas");   //Conexion al html
            let codigo;
            if(value == 0){
                let datos = JSON.parse(xhr.responseText);
                codigo += `
                <table>
                    <tr>
                        <th>id</th>
                        <th>Nombre</th>
                        <th>Precio</th>
                        <th>Calificación</th>
                        <th>Temporada</th>
                    </tr>`;
                for(let i of datos){
                    codigo += `
                    <table>
                        <tr>
                            <th>${i.id}</th>
                            <th>${i.name}</th>
                            <th>${i.price}</th>
                            <th>${i.rate}</th>
                            <th>${i.season}</th>
                        </tr>`;
                }
                codigo += '\n</table>'
            }
            if(value == 1){
                let datos = JSON.parse(xhr.responseText);
                codigo += '<p> Producto más caro: </p>'
                codigo += `<p> Producto: ${i.name}, Precio: ${i.price}</p>`
            }
            if(value == 2){
                let datos = JSON.parse(xhr.responseText);
                codigo += `<p> El promedio es: ${datos.result}</p>`;
            }
            //console.log(codigo);
            
            ref.innerHTML = codigo;     
        }
    }
}