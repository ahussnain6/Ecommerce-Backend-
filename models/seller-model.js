const mongoose = require("mongoose");
const bcrypt = require("bcryptjs")
const jwt = require("jsonwebtoken")
const sellerSchema = new mongoose.Schema({
    username:{
        type:String,
        require:true
    },
    email:{
        type:String,
        require:true
    },
    phone:{
        type:String,
        require:true
    },
    password:{
        type:String,
        require:true
    },
    sellerId:{
        type:String,
        require:true
    },
    isAdmin:{
        type:Boolean,
        default:false,
    }
})

sellerSchema.methods.generateToken =async function(){
try{
return jwt.sign(
{
userId :this._id.toString(),
email:this.email,
isAdmin:this.isAdmin,
},
process.env.JWT_SIGN_KEY,
{    expiresIn :"30d"   }
)
}catch(error){
    console.error(error);
}
}
const Seller = new mongoose.model("Seller",sellerSchema);
module.exports = Seller;