const express = require("express");
const router = express.Router();
const dataHandler = require("../controllers/data_handler");
const Product = require("../controllers/product");

//  ###GET products 
router.get("/", (req, res) => {
    return res.status(200).send(dataHandler.getProducts());
})

//  ### POST products/cart
router.post("/cart", (req, res) => {
    if(!Array.isArray(req.body))
        return res.status(400).send("Lo dado no es una arreglo");

    let info = req.body;
    let arr = [];

    for(const i of info){
        try{
            let product = dataHandler.getProductById(i.uuid);
            arr.push(product)
        } catch (error) {
            return res.status(404).send("El dino " + i.uuid + " no existe");
        }
    }

    res.status(200).json(arr)
})

//  ### GET products/:id
router.get("/:id", (req, res) => {
    try {
        let result = dataHandler.getProductById(req.params.id);
        res.status(200).send(result); 
    } catch (error) {
        res.status(404).send("El animal solicitado no existe");   
    }
})


module.exports = router;