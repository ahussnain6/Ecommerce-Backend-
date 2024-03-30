const Cart = require("../models/cart-model");
const User = require("../models/user-model");
const bcrypt = require("bcryptjs")
const GetCart = async (req,res)=>{
    const userid = req.params.id;
    try {
     const cart = await Cart.find({userId:userid});
     res.json(cart);
    } catch (error) {
     console.log(error);
    }   }
   const DelCart =async(req,res)=>{
    const id = req.params.id;
    try {
     const delitem = await Cart.deleteOne({_id:id});
     res.json(delitem);
    } catch (error) {
     console.log(error);}
  }
   const AddCart = async(req,res)=>{
    const {name,price,color,image,desc,sellerId,userId,productId,quantity}= req.body;
  try {
  const data = await Cart.create({name,price,color,image,desc,sellerId,userId,productId,quantity});
    res.json({status:"ok"});
  } catch (error) { next(error); }}
  const BuyerSignup =async (req,res)=>{
    const {username,email,phone,password}= req.body;
    try{
      const userExist = await User.findOne({email});
      if(userExist){
        return res.status(400).json({msg:"email already exists"})}; 
     const userCreated = await User.create({username,email,phone,password});
     res.status(200).send({email:userCreated.email,msg : "registration successful",token: await userCreated.generateToken(),
     userId : userCreated._id.toString(),});
    }
    catch(error){
        res.status(400).send({msg:"page not found"})
    }
  }
  const BuyerLogin = async (req,res)=>{
    const { email,password} = req.body;
     try{
       const userExist = await User.findOne({email:email});
       if(!userExist){
        return res.status(400).json({message:"Invalid Credientials"});
       }else{
      const user = await bcrypt.compare(password,userExist.password);
      if(user){
        res.status(200).json({
          name:userExist.username,
          email:userExist.email,
          msg:"Login Successful",
          token: await userExist.generateToken(),
          userId : userExist._id.toString(),
        }) }
      else{
       res.status(401).json({message:"Invalid email or password"})}} }
     catch(error){
      next(error); }}

      module.exports = { GetCart,DelCart,BuyerLogin,BuyerSignup,AddCart};