

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
        return this.arrProxys;
    }

    get getArrProduct(){
        return this.arrProducts;
    }

    //FUNCTIONS
    addItem(productUuid, amount){

        if(amount <= 0) 
            throw new ShoppingCartException("Amount cannot be 0 or less");

        let index = this.arrProxys.findIndex(item => item.productUuid == productUuid);
        if(index < 0){
            this.arrProxys.push(new ProductProxy(productUuid, amount));
            return;
        }
            
        this.arrProxys[index].quantity += amount;
    }

    updateItem(productUuid, newAmount){

        if(newAmount < 0)
            throw new ShoppingCartException("Amount cannot be negative number");

        let index = this.arrProxys.findIndex(item => item.productUuid == productUuid);
        if(index < 0)
            return;

        if(newAmount == 0){
            this.arrProxys.splice(index,1);
            return;
        }

        this.arrProxys[index].quantity = newAmount;
    }

    removeItem(productUuid){
        let index = this.arrProxys.findIndex(item => item.productUuid == productUuid);
        if(index < 0)
            return;
        this.arrProxys.splice(index,1);
    }

    calculateTotal(){
        //TENGO QUE MODIFICAR TODOS ESTOS PARA A LA VEZ AGREGAR UN PRODUCTO A LA OTRA LISTA
        let total = 0;
        for (let i = 0; i < this.arrProxys.length; i++) {
            total += 1 * this.arrProxys[i].quantity;
        }
        return total;
    }

}


/*
let coso = new ShoppingCart();
coso.addItem(1,10);
coso.addItem(2,10);
coso.addItem(3,10);
coso.addItem(4,10);
coso.addItem(5,10);

function imprimir(coso){
    console.table(coso.arrProxys);
}
*/
