
function readUsers(value){
    let url = "http://localhost:3000/users"
    let xhr = new XMLHttpRequest();
    xhr.open('GET',url);
    if(value){
        xhr.setRequestHeader('x-auth',"PASS123");
    }
    xhr.send();
    xhr.onload = function () {
        if(xhr.status != 200) { //Analizar el estatus de la respuesta HTTP
            //Ocurrió un error
            alert("No we"); //Ej. 404: Not Found
        } else {
            console.log("Usuarios");
            console.table(JSON.parse(xhr.responseText));
            console.log("Usuarios leidos");
        }
    }
}