const mongoose = require('mongoose')
const orders = new mongoose.Schema({
    buyer: { type: String },
    items: [{
        product: { type: mongoose.Schema.Types.ObjectId, ref: 'products' },
        amount: { type: Number }
    }],
    total_price: { type: Number },
    created_at: { type: Date, default: Date.now }
})

module.exports = mongoose.model("orders", orders)   // ตัวแรกชื่อ Collection ตัวสองตัวแปร Schema