
//import {generateUUID} from "./utils.js";



class ProductExeption {
    constructor(error){
        this.errorMessage = error;
    }
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

class Product {

    // CONSTRUCTOR
    constructor(name = "No name", text = "No description", image = "No image", size = "No size", quantity = 0, price = 0, type = "No type"){
        this.uuid = generateUUID();
        this.title = name;
        this.description = text;
        this.imageUrl = image;
        this.unit = size;
        this.stock = quantity;
        this.pricePerUnit = price;
        this.category = type;
    }

    //SETTERS
    set setUuid(value){
        throw new ProductExeption("Products uuids are auto-generated.");
    }

    set setTitle(value){
        checkString(value);
        this.title = value;
    }

    set setDescription(value){
        checkString(value);
        this.description = value;
    }

    set setImageUrl(value){
        checkString(value);
        this.imageUrl = value;
    }

    set setUnit(value){
        checkString(value);
        this.unit = value;
    }

    set setStock(value){
        checkNumber(value);
        this.stock = value;
    }

    set setPricePerUnit(value){
        checkNumber(value);
        this.pricePerUnit = value;
    }

    set setCategory(value){
        checkString(value);
        this.category = value;
    }

    //GETTERS

    get getUuid(){
        return this.uuid;
    }

    get getTitle(){
        return this.title;
    }

    get getDescription(){
        return this.description;
    }

    get getImageUrl(){
        return this.imageUrl;
    }

    get getUnit(){
        return this.unit;
    }

    get getStock(){
        return this.stock;
    }

    get getPricePerUnit(){
        return this.pricePerUnit;
    }

    get getCategory(){
        return this.category;
    }

    //FUNCTIONS

    static createFromJson(jsonValue){
        let result = JSON.parse(jsonValue);
        if (typeof (result) !== 'object') return new Product();

        return this.createFromObject(result);
    }

    static createFromObject(obj){

        let result = new Product();
        let new_obj = this.cleanObject(obj);

        for(const key in result){
            if(new_obj[key])
                result[key] = new_obj[key];
        }

        return result;   
    }

    static cleanObject(obj){

        let list = Object.keys(new Product());

        for(const key in obj) {
            if(!list.includes(key)) 
                delete obj[key];
        }
   
        return obj;
    }

}



