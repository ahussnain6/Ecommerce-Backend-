const Seller = require("../models/seller-model");
const Cart = require("../models/cart-model");
const Product = require("../models/product-model");
const SellerSignup =async (req,res)=>{
    const {username,email,phone,password,sellerID}= req.body;
    try{
      const sellerExist = await Seller.findOne({email});
      if(sellerExist){
        return res.status(400).json({msg:"email already exists"})} 
     const sellerCreated = await Seller.create({username,email,phone,password,sellerID});
     res.status(200).send({email:sellerCreated.email,
      name:sellerCreated.username,
      msg : "registration successful",
     token: await sellerCreated.generateToken(),
     sellerId : sellerCreated._id.toString(),});
    }
    catch(error){
        res.status(400).send({msg:"page not found"})
    }
  }
  const SellerLogin = async (req,res)=>{
    const {email,password} = req.body;
     try{
       const sellerExist = await Seller.findOne({email:email});
       if(!sellerExist){
        return res.status(400).json({message:"Invalid Credientials"});
       }else{
      if(sellerExist.password == password){
        res.status(200).json({
          name:sellerExist.username,
          email:sellerExist.email,
          msg:"Login Successful",
          token: await sellerExist.generateToken(),
          sellerId : sellerExist._id.toString(),
        }) }
      else{
       res.status(401).json({message:"Invalid email or password"})}} }
     catch(error){
      next(error); }}
      const AddProduct = async(req,res)=>{
        const {name,price,color,image,desc,sellerId}= req.body;
      try {
      const data = await Product.create({name,price,color,image,desc,sellerId});
        res.json({status:"ok",dat:data});
      } catch (error) { next(error); }}
      const getOrders = async(req,res)=>{
        const sellerId = req.params.id;
     try {
      const orders = await Cart.find({sellerId:sellerId});
      res.json(orders);
     } catch (error) {
      console.log(error);
     }
      }
      module.exports = {getOrders,AddProduct,SellerSignup,SellerLogin};