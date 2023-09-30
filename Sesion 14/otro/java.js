
//URL de un JSON generado (cada quien tiene una)
let url = "https://jsonplaceholder.typicode.com/users";

//Reemplaza el anterior archivo JSON por el nuevo
function  guardarEnJson(urlJSON, id){
    //1. Crear XMLHttpRequest Object
    let xhr = new XMLHttpRequest();
    //2. Configurar: POST actualizar archivo
    /*
        NOTA: Recuerda, para reemplazar como ahora, debe ser con "PUT", pero el servicio "npoint.io"
        para este ejemplo solo permite con "POST"
    */
    xhr.open('GET',urlJSON);
    //3. Indicar tipo de datos JSON
    xhr.setRequestHeader('Content-Type','application/json');
    //4. Enviar solicitud al servidor
    xhr.send();
    let j;
    //5. Una vez recibida la respuesta del servidor
    xhr.onload = function () {
        if(xhr.status != 200) { //Analizar el estatus de la respuesta HTTP
            //Ocurrió un error
            alert(xhr.status + ': ' + xhr.statusText); //Ej. 404: Not Found
        } else {
            j = JSON.parse(xhr.responseText);
            //console.table( j )
            document.getElementById("ID_DIV").innerHTML= "";

        }
    };
}
