const mongoose = require("mongoose");

const productsSchema = new mongoose.Schema({
    id : {
        type : Number,
        required : true
    },
    title : {
        type : String,
        required : true
    },
    description : {
        type : String,
        required : true
    },
    price : {
        type : Number,
        required : true
    },
    images : {
        type : String,
        required : true
    },
    category : {
        type : String,
        required : true
    },
    brand : {
        type : String,
        required : true
    },
    rating : {
        type : Number,
        required : true
    },
    stock : {
        type : Number,
        required : true
    },
    createdOn : {
        type : Date,
        default : Date.now
    }
    
})

module.exports = mongoose.model("products", productsSchema)