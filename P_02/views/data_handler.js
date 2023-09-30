
//ME FALTA LO DE FINDPRODUCT QUERY PROQUE TENGO QUE INVESTIGAR

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
        if(index >= 0)
            return this.productArray[index];
    }

    createProduct(product){
        let index = this.productArray.findIndex(item => item.uuid == product.uuid);
        if(index > -1)
            throw new ProductListExeption("Product with that uuid already exist");

        this.productArray.push(Product.createFromObject(product));
    }

    updateProduct(uuid, updatedProduct){
        let index = this.productArray.findIndex(item => item.uuid == uuid);
        if(index < 0)
            throw new ProductListExeption("That uuid do not exist in the array");

        this.productArray[index] = Product.createFromObject(updatedProduct);
    }

    deleteProduct(uuid){
        let index = this.productArray.findIndex(item => item.uuid == uuid);
        if(index >= 0)
            this.productArray.splice(index, 1);
    }

}


var globalProductList = new ProductList();



a = new Product("a");
b = new Product("b");
c = new Product("c");
d = new Product("d");
e = new Product("e");

function show(coso){
    console.table(coso.productArray);
}
