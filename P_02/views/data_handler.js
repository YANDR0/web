

class ProductListExeption{
    constructor(error){
        this.errorMessage = error;
    }
}

class ProductList{

    constructor(){
        this.productArray = [];
    }
    
    //GETTER AND SETTER
    set setProductArray(value){
        throw new ProductListExeption("Product list cannot be modified in this way");
    }

    get getProductArray(){
        return this.productArray.slice();
    }

    //FUNCTIONS
    getProducts(){
        return this.productArray.slice();
    }

    getProductById(uuid){
        let index = this.productArray.findIndex(item => item.uuid == uuid);
        if(index < 0)
            throw new ProductListExeption("Product with that uuid do not exists");
        return Product.createFromObject(this.productArray[index]) ;
    }

    createProduct(product){
        let index = this.productArray.findIndex(item => item.uuid == product.uuid);
        if(index > -1)
            throw new ProductListExeption("Product with that uuid already exists");

        this.productArray.push(Product.createFromObject(product));
    }

    updateProduct(uuid, updatedProduct){
        let index = this.productArray.findIndex(item => item.uuid == uuid);
        if(index < 0)
            throw new ProductListExeption("That uuid do not exists in the array");

        let index_2 = this.productArray.findIndex(item => item.uuid == updatedProduct.uuid);

        if(index_2 >= 0 && index != index_2)
            throw new ProductListExeption("Product with that uuid already exists in a different possition");

        this.productArray[index] = Product.createFromObject(updatedProduct);
    }

    deleteProduct(uuid){
        let index = this.productArray.findIndex(item => item.uuid == uuid);
        if(index >= 0)
            this.productArray.splice(index, 1);
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



