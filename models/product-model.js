const mongoose = require("mongoose");
const productSchema = new mongoose.Schema({
    name:{
        type:String,
        require:true
    },
    price:{
        type:Number,
        require:true
    },
   color:{
        type:String,
        require:true
    },
    image:{
        type:String,
        require:true
    },
    desc:{
        type:String,
        require:true,
    },
    sellerId:{
        type:String,
        require:true
    },
})
const Product = new mongoose.model("Product",productSchema);
module.exports = Product;