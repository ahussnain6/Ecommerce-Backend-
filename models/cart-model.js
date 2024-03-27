const mongoose = require("mongoose");
const cartSchema = new mongoose.Schema({
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
    userId:{
        type:String,
        require:true
    },
    productId:{
        type:Number,
        require:true
    },
    quantity:{
        type:Number,
        require:true
    }

})
const Cart = new mongoose.model("Cart",cartSchema);
module.exports = Cart;