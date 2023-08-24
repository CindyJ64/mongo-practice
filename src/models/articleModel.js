const {mongoose, Schema} = require("mongoose");

const ProductSchema = new Schema({
    name: String,
    price: Number,
    category: String,
}, {timestamps: true})
// mongoose.pluralize(null)
const ProductModel = mongoose.model("Product", ProductSchema)

module.exports = ProductModel
