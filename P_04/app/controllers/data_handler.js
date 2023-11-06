const fs = require("fs");
const Product = require("./product");
const productsArray = JSON.parse(fs.readFileSync("./app/data/products.json"));

class ProductListExeption{
    constructor(error){
        this.errorMessage = error;
    }
}

class ProductList{

    constructor(){}
    
    //GETTER AND SETTER
    set setProductArray(value){
        throw new ProductListExeption("Product list cannot be modified in this way");
    }

    get getProductArray(){
        return productsArray;
    }

    //FUNCTIONS
    getProducts(){
        return productsArray;
    }

    getProductById(uuid){
        let index = productsArray.findIndex(item => item.uuid == uuid);
        if(index < 0)
            throw new ProductListExeption("Product with that uuid do not exists");
        return Product.createFromObject(productsArray[index]);
    }

    createProduct(product){
        let index = productsArray.findIndex(item => item.uuid == product.uuid);
        if(index > -1)
            throw new ProductListExeption("Product with that uuid already exists");
        if(typeof (product) == "string")
            productsArray.push(Product.createFromJson(product));
        else if(typeof (product) == "object")
            productsArray.push(Product.createFromObject(product));
        
        fs.writeFileSync("./app/data/products.json", JSON.stringify(productsArray));
    }

    updateProduct(uuid, updatedProduct){
        if("uuid" in updatedProduct)
            throw new ProductListExeption("Object cannot contain an uuid");

        let index = productsArray.findIndex(item => item.uuid == uuid);
        if(index < 0)
            throw new ProductListExeption("That uuid do not exists in the array");

        updatedProduct = Product.cleanObject(updatedProduct);
        Object.assign(productsArray[index], updatedProduct);
        fs.writeFileSync("./app/data/products.json", JSON.stringify(productsArray));
    }

    deleteProduct(uuid){
        let index = productsArray.findIndex(item => item.uuid == uuid);
        if(index >= 0)
            productsArray.splice(index, 1);
        fs.writeFileSync("./app/data/products.json", JSON.stringify(productsArray));
    }

    findProduct(query){
        if(typeof(query) !== "string" || query == "") 
            return false;

        let clear = query.replace( /[<>]/g,"");
        clear = clear.split(":");

        let result = this.getProducts();
        result = clear.length > 1? result.filter(item => item.category == clear[0]): result;
        result = clear[1] != ""? result.filter(item => item.title == clear[clear.length-1]): result;
        console.table(result);
        return result;
    }

}

// GLOBAL LIST
var globalProductList = new ProductList();

exports.getProducts = globalProductList.getProducts;
exports.getProductById = globalProductList.getProductById;
exports.createProduct = globalProductList.createProduct;
exports.updateProduct = globalProductList.updateProduct;
exports.deleteProduct = globalProductList.deleteProduct;
exports.findProduct = globalProductList.findProduct;
exports.globalProductList = globalProductList;
