const mongoose = require("mongoose");
// const URI = "mongodb://127.0.0.1:27017/mern-admin";
// const URI = "mongodb+srv://ahussnain:ia4wgBuIC5EyyxYe@atlascluster.t7ggxvn.mongodb.net/mern-admin?retryWrites=true&w=majority";
  const URI = process.env.MONGODB_URI;
  // MONGO_DB; 
//  const URI = "mongodb+srv://ahussnain:1302%#E/78@atlascluster.t7ggxvn.mongodb.net/mern-admin?retryWrites=true&w=majority"
const connectdb = async()=>{
try{
 await mongoose.connect(URI);
 console.log("connection successful at db");}
catch(error){
    console.error("database connection failed");
    process.exit(0);}
}
module.exports = connectdb;
