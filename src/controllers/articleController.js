const ProductModel = require("../models/ProductModel");

const getAllProducts = async (req, res) => {
    const Products = await ProductModel.find()
    console.log(Products)
    res.send(Products)
};

const createProduct = async (req, res) => {
    const Product = new ProductModel({
        name: req.body.name,
        price: req.body.price,
        category: req.body.category
    })
    Product.save()
    res.send(Product)
};
const updateProduct = async (req, res) => {
    const ProductId = req.params.Product_id
    const updateData = {
        name: req.body.name,
        category: req.body.category,
        price: req.body.price
    }

    try {
        const Product = await ProductModel.updateOne({_id: ProductId}, updateData)
        res.send(Product)
    } catch (e) {
        res.send({msg: "erreur d'ajout"});
    }

};

const deleteProduct = async (req, res) => {
    const id = req.params.Product_id
    const player = await ProductModel.deleteOne({_id: id});
    res.send({player, msg: " Player successfully deleted!"});
};


module.exports = {getAllProducts, createProduct, updateProduct, deleteProduct}
