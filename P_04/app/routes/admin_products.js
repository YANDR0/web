const express = require("express");
const router = express.Router();
const dataHandler = require("../controllers/data_handler");

//  ### POST admin/products
router.post("/", (req, res) => {
    let json = req.body;

    let list = Object.keys(json);
    let keys = ["title", "description", "imageUrl", "unit", "stock", "pricePerUnit", "category"];
    let miss = [];
    for(const key of keys)
        if(!list.includes(key))
            miss.push(key);

    if(miss.length > 0) 
        return res.status(400).send("Atributos faltantes: " + miss.join(", "));

    dataHandler.createProduct(json);
    res.status(201).send("El animal " + json.title + " ha sido spawneado de la nada con éxito");
});


//  ### PUT admin/products/:id
router.put("/:id", (req, res) => {
    let id = req.params.id;
    let json = req.body;
    if("uuid" in json)
        return res.status(400).send("El uuid no se puede modificar");

    try {
        dataHandler.updateProduct(id, json);
        json = dataHandler.getProductById(id);
        res.status(200).send("Los atributos de " + json.title + " se han modificado de forma exitosa");
    } catch (error) {
        res.status(404).send("No le puede mover a algo que no existe");
    }
});


//  ### DELETE /admin/products/:id
router.delete("/:id", (req, res) => {
    const id = req.params.id;
    try {
        dataHandler.getProductById(id);
        dataHandler.deleteProduct(id);
        res.status(200).send("Borrado exitoso, felicidades, acaba de extinguir un animal");
    } catch (error) {
        res.status(400).send("El producto no existe");
    }
});


module.exports = router;