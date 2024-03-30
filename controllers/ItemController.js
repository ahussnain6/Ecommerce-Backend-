const Product = require("../models/product-model"); 
const getProId =async(req,res)=>{
  const id = req.params.id;
try {
  const product = await Product.findOne({_id:id});
  res.json(product);
} catch (error) {
  console.log(error);}}
const getList =async(req,res)=>{
  const id = req.params.id;
try {
  const product = await Product.find({sellerId:id});
  res.json(product);
} catch (error) {
  console.log(error);
}}
   const DelProduct =async(req,res)=>{
   const id = req.params.id;
   try {
    const delitem = await Product.deleteOne({_id:id});
   } catch (error) {
    console.log(error);}}
const getProducts = async (req,res)=>{
  try {
     const products = await Product.find({});
     res.json(products);
  } catch (error) {
    console.log(error);
  }
}
const getsearch =async(req,res)=>{
const q = req.params.q;
  try {
  const item = await Product.find({name:{$regex:q,$options:"i"}});
  res.json(item);
} catch (error) {
  console.log(error);
}
}
module.exports = {DelProduct,getProducts,getProId,getsearch,getList };