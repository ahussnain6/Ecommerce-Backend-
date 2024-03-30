require("dotenv").config();
const express = require("express");
const app = express();
const PORT = 3000;
const cors = require("cors");
const buyerRouter = require("./route/BuyerRoute");
const sellerRouter = require("./route/SellerRoute");
const productRouter = require("./route/ProductRoute");
const connectdb = require("./utils/db");
const errormiddleware = require("./middlewares/error-middleware");
const corsOptions ={
    origin:"http://localhost:4200",
    method:"GET,POST,PUT,DELETE,HEAD,PATCH",
    credentials:true}
app.use(cors(corsOptions));
app.use(express.json());
app.get("/",(req,res)=>{
    res.end("Working Successfully");
})
app.use("/Seller",sellerRouter);
app.use("/Buyer",buyerRouter);
app.use("/Product",productRouter);
app.use(errormiddleware);
connectdb().then(()=>{
app.listen(PORT,()=>{
    console.log(`server is listening at ${PORT}`);})
}) 