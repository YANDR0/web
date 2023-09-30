
function generateUUID() {
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, c => {
    let r = Math.random() * 16 | 0;
    let v = c == 'x' ? r : (r & 0x3 | 0x8);
    return v.toString(16);
    });
}

function checkString(value){
    if(typeof(value) !== "string")
        throw new ProductExeption("Value is not an string");
    if(value == "")
        throw new ProductExeption("Value is an empty string");
}

function checkNumber(value){
    if(typeof(value) !== "number")
        throw new ProductExeption("Value is not a number");
    if(value < 0)
        throw new ProductExeption("Value is a negative");
}
