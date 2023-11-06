

class ShoppingCartException {
    constructor(error){
        this.errorMessage = error;
    }
}

class ProductProxy{
    
    constructor(id, num){
        this.productUuid = id;
        this.quantity = num;
    }

    //SETTERS
    set setProductUuid(value){
        throw new ShoppingCartException("Product uuid cannot be modified");
    }

    set setQuantity(value){
        throw new ShoppingCartException("Quantity cannot be modified in this way");
    }

    //GETTERS
    get getProductUuid(){
        return this.proxy;
    }

    get getQuantity(){
        return this.quantity;
    }

}

class ShoppingCart{

    constructor(){
        this.arrProxys = [];
        this.arrProducts = [];
    }

    //SETTERS
    set setArrProxys(value){
        throw new ShoppingCartException("Proxys array cannot be modified");
    }

    set setArrProducts(value){
        throw new ShoppingCartException("Products array cannot be modified");
    }

    //GETTERS
    get getArrProxy(){
        return this.arrProxys.slice();
    }

    get getArrProduct(){
        return this.arrProducts.slice();
    }

    //FUNCTIONS
    addItem(productUuid, amount){

        if(amount <= 0) 
            throw new ShoppingCartException("Amount cannot be 0 or less");

        let index = this.arrProxys.findIndex(item => item.productUuid == productUuid);
        if(index < 0){
            this.arrProducts.push(globalProductList.getProductById(productUuid));
            this.arrProxys.push(new ProductProxy(productUuid, amount));
            return true;
        }
            
        this.arrProxys[index].quantity += amount;
    }

    updateItem(productUuid, newAmount){

        if(newAmount < 0)
            throw new ShoppingCartException("Amount cannot be negative number");

        let index = this.arrProxys.findIndex(item => item.productUuid == productUuid);
        if(index < 0)
            return false;

        if(newAmount == 0){
            this.arrProducts.splice(index,1);
            this.arrProxys.splice(index,1);
            return true;
        }

        this.arrProxys[index].quantity = newAmount;
    }

    removeItem(productUuid){
        let index = this.arrProxys.findIndex(item => item.productUuid == productUuid);
        if(index < 0)
            return false;
        this.arrProducts.splice(index,1);
        this.arrProxys.splice(index,1);
    }

    calculateTotal(){
        let total = 0;
        for (let i = 0; i < this.arrProxys.length; i++)
            total += this.arrProducts[i].pricePerUnit * this.arrProxys[i].quantity;
        return total;
    }

}


module.exports = ShoppingCart;

