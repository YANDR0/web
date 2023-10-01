/*
console.log("\n\n\n<<< ---------- DATA HANDLER ---------- >>>\n\n\n");


//CREACIÓN PRODUCTOS
console.log("\n\n<<< ---------- CREACIÓN Y ASIGNACIÓN DE 12 PRODUCTOS ---------- >>>\n\n");

let p_1 = Product.createFromJson('{"title": "Perucetus" ,"description": "Todo gordo, todo watón, demasiado de hecho","imageUrl": "https://i.imgur.com/eMVU8ks.jpeg","unit": "Manada", "stock": 3, "pricePerUnit": 5020, "category": "Mamífero"}');
let p_2 = Product.createFromJson('{"title": "Diplocaulus" ,"description": "El csm no se quiso extinguir y que renace a la fuerza","imageUrl": "https://images.wikidexcdn.net/mwuploads/wikidex/7/7a/latest/20220313073246/Dragapult.png","unit": "Individuo", "stock": 21, "pricePerUnit": 250, "category": "Tetrápodo"}');
let p_3 = Product.createFromJson('{"title": "Hatzegopteryx" ,"description": "Mantener alejado de bebes, eso come por flojo","imageUrl": "https://static.wikia.nocookie.net/f701bd9c-b5dd-4614-b756-93f4c40a0c32/scale-to-width/755","unit": "Pareja", "stock": 5, "pricePerUnit": 820, "category": "Pterosaurio"}');
let p_4 = Product.createFromJson('{"title": "Anomalocaris" ,"description": "Máximo depredador de su tiempo, tiene escoliosis","imageUrl": "https://images3.memedroid.com/images/UPLOADED342/6247d5c383e7f.jpeg","unit": "Individuo", "stock": 16, "pricePerUnit": 105, "category": "Artrópodo"}');
let p_5 = new Product("Beelzebufo", "Este también come niños, pero normalmente está calmao", "https://i.kym-cdn.com/photos/images/newsfeed/002/374/215/6b6.jpg", "Individuo", 55, 35, "Tetrápodo" );
let p_6 = new Product("A", "d_1", "link_1", "Gramos", 1, 1, "No animal");
let p_7 = new Product("B", "d_2", "link_1", "Celsius", 2, 2, "Esto tampoco")
let p_8 = new Product("C", "d_3", "link_1", "Newtons", 3, 3, "Estoo menos")
let p_9 = new Product("D", "d_4", "link_1", "Metros", 4, 4, "Que me ves");
let p_10 = new Product("Carnotaurus", "Que gran danza de cortejo, todo un macho alfa, todo un conquistador, ojala lo logre", "https://i.kym-cdn.com/photos/images/original/002/390/896/ba3.jpeg", "Individuo", 7, 280, "Terópodo");
let p_11 = new Product("Spinosaurus", "Nomás no se queda quieto, día que pasa, día en que le hacen otra mugre reconstrucción", "https://i.kym-cdn.com/photos/images/original/002/650/231/3cc.jpg", "Individuo", 13, 375, "Terópodo");
let p_12 = new Product("Ambopteryx", "Esta cosa pudo haber evolucionado en un dragón pero no quiso", "https://cdn.sci.news/images/enlarge6/image_7170e-Ambopteryx-longibrachium.jpg", "Pareja", 27, 175, "Maniraptor");

globalProductList.createProduct(p_1);
console.log(" ----- 1 PRODUCTO: ----- ");
console.table(globalProductList.getProducts());
globalProductList.createProduct(p_2);
console.log(" ----- 2 PRODUCTOS: ----- ");
console.table(globalProductList.getProducts()); 
globalProductList.createProduct(p_3);
console.log(" ----- 3 PRODUCTOS: ----- ");
console.table(globalProductList.getProducts());
globalProductList.createProduct(p_4);
globalProductList.createProduct(p_5);
globalProductList.createProduct(p_6);
globalProductList.createProduct(p_7);
globalProductList.createProduct(p_8);
globalProductList.createProduct(p_9);
globalProductList.createProduct(p_10);
globalProductList.createProduct(p_11);
globalProductList.createProduct(p_12);

console.log(" ----- 12 PRODUCTOS: ----- ");
console.table(globalProductList.getProducts());


//ACTUALIZACIÓN DE LOS PRODUCTOS
console.log("\n\n<<< ---------- ACTUALIZACIÓN DE LOS PRODUCTOS EN LA POSICIÓN: 5, 6, 7 y 8 ---------- >>>\n\n");

let p_13 = new Product("Tiktaalik", "Enemigo número 1 de la onu, amenaza internacional, caja de pandora, fuente de todos los males, debe ser detenido cuanto antes", "https://static01.nyt.com/images/2022/05/03/science/00sci-tiktaalik-fossil1-esp-1/00sci-tiktaalik-fossil1-videoSixteenByNineJumbo1600.jpg", "Individuo", 37, 95, "Tetrápodo");
let p_14 = new Product("Tyrannosaurus rex", "Gran padre mejor dinosaurio, un grande el Hank, finalmente un rex que parece animal", "https://i.kym-cdn.com/photos/images/newsfeed/002/343/063/7ca.png", "Manada", 2, 3824, "Terópodo");
let p_15 = new Product("Triceratops", "Tiene cara de pez globo por alguna razón, de grande se compone supongo", "https://pbs.twimg.com/media/FT0iHj_WUAAtjJr.jpg", "Mandada", 6, 4502, "Saurisquio");
let p_16 = new Product("Casuario", "Efectivamente, esto es un dinosaurio, su sola presencia aterra a las masas", "https://upload.wikimedia.org/wikipedia/commons/thumb/b/ba/Kasu%C3%A1r_p%C5%99ilbov%C3%BD.jpg/1200px-Kasu%C3%A1r_p%C5%99ilbov%C3%BD.jpg", "Individuo", 21, 210, "Maniraptor");

globalProductList.updateProduct(p_6.getUuid, p_13);
globalProductList.updateProduct(p_7.getUuid, p_14);
globalProductList.updateProduct(p_8.getUuid, p_15);
globalProductList.updateProduct(p_9.getUuid, p_16);

console.table(globalProductList.getProducts());


//BORRADO DE LOS DATOS
console.log("\n\n<<< ---------- BORRADO DE LOS DATOS EN LA POSICIÓN: 1, 2 y 5 ---------- >>>\n\n");

globalProductList.deleteProduct(p_2.getUuid);
globalProductList.deleteProduct(p_3.getUuid);
globalProductList.deleteProduct(p_13.getUuid);

console.table(globalProductList.getProducts());


//BÚSQUEDAS
console.log("\n\n<<< ---------- BUSQUEDA DE:  ---------- >>>\n\n");

console.log("\n ----- BUSQUEDA DE PRODUCTOS DE CATEGORÍA TERÓPODO: ----- ");
globalProductList.findProduct("<Terópodo>:");

console.log("\n ----- BUSQUEDA DE PRODUCTOS DE NOMBRE AMBOPTERYX: ----- ");
globalProductList.findProduct("<Ambopteryx>");

console.log("\n ----- BUSQUEDA DE PRODUCTOS DE NOMBRE PERUCETUS Y CATEGORÍA MAMÍFERO: ----- ");
globalProductList.findProduct("<Mamífero>:<Perucetus>");


//----------------------------------------------------------------------------------------------------------//
console.log("\n\n\n<<< ---------- SHOPPING CART ---------- >>>\n\n\n");


// AGREGACIÓN DE PRODUCTOS AL CARRO
console.log("\n\n<<< ---------- CREACIÓN DEL CARRO Y AGREGACIÓN DE PRODUCTOS ---------- >>>\n\n");

let shop = new ShoppingCart();

console.log("\n ----- COMPRA 9 BEELZEBUFOS: ----- ");
shop.addItem(p_5.getUuid, 9);
console.table(shop.getArrProxy);
console.table(shop.getArrProduct);

console.log("\n ----- AÑADIR 4 BEELZEBUFOS: ----- ");
shop.addItem(p_5.getUuid, 4);
console.table(shop.getArrProxy);
console.table(shop.getArrProduct);

console.log("\n ----- COMPRA DE UNA MANADA PERUCETUS: ----- ");
shop.addItem(p_1.getUuid, 1);
console.table(shop.getArrProxy);
console.table(shop.getArrProduct);

console.log("\n ----- COMPRA 2 PAREJAS AMBOPTERYX: ----- ");
shop.addItem(p_12.getUuid, 2);
console.table(shop.getArrProxy);
console.table(shop.getArrProduct);

console.log("\n ----- COMPRA 1 SPINOSAURIO: ----- ");
shop.addItem(p_11.getUuid, 1);
console.table(shop.getArrProxy);
console.table(shop.getArrProduct);

console.log("\n ----- COMPRA 1 CARNOTAURO: ----- ");
shop.addItem(p_10.getUuid, 1);
console.table(shop.getArrProxy);
console.table(shop.getArrProduct);


// AGREGACIÓN DE PRODUCTOS AL CARRO
console.log("\n\n<<< ---------- UPDATE DE LOS PRODUCTOS EN EL CARRO ---------- >>>\n\n");

console.log("\n ----- ACTUALIZACIÓN A 0 SPINOSAURUS: ----- ");
shop.updateItem(p_11.getUuid, 0);
console.table(shop.getArrProxy);
console.table(shop.getArrProduct);

console.log("\n ----- ACTUALIZACIÓN A 10 BEELZEBUFOS: ----- ");
shop.updateItem(p_5.getUuid, 10);
console.table(shop.getArrProxy);
console.table(shop.getArrProduct);


// AGREGACIÓN DE PRODUCTOS AL CARRO
console.log("\n\n<<< ---------- BORRADO DE DATOS DEL CARRITO ---------- >>>\n\n");

console.log("\n ----- ELIMINACIÓN DE CARNOTAURUS: ----- ");
shop.removeItem(p_10.getUuid);
console.table(shop.getArrProxy);
console.table(shop.getArrProduct);


//TOTAL DE COMPRA
console.log("\n\n<<< ---------- TOTAL DE COMPRA ---------- >>>\n\n");
console.log(shop.calculateTotal());

*/