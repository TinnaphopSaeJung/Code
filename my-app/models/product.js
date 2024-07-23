const mongoose = require('mongoose')
const products = new mongoose.Schema({
    product_image: { type: String },
    product_name: { type: String },
    price: { type: Number },
    amount: { type: Number }
})

module.exports = mongoose.model("products", products)   // ตัวแรกชื่อ Collection ตัวสองตัวแปร Schema