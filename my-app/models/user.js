const mongoose = require('mongoose')
const users = new mongoose.Schema({
    username: { type: String },
    password: { type: String },
    fname: { type: String },
    lname: { type: String },
    age: { type: Number },
    role: { 
        type: String, 
        enum: ['user', 'admin'], 
        default: 'user' 
    },
    approve: {
        type: Boolean,
        default: false
    }
})

module.exports = mongoose.model("users", users)   // ตัวแรกชื่อ Collection ตัวสองตัวแปร Schema