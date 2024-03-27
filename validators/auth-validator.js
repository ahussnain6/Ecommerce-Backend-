const {z} = require("zod");
const signupSchema = z.object({
    username: z.string({required_error:"Name is required"}).trim().min(3,{message:"Name must be atleast of 3 characters"}).max(255,{message:"Name must not be more than 255 characters"}),
    email: z.string({required_error:"email is required"}).trim().min(3,{message:"email must be atleast of 3 characters"}).max(255,{message:"email must not be more than 255 characters"}),
    phone: z.string({required_error:"phone.no is required"}).trim().min(8,{message:"phone.no must be atleast of 8 characters"}).max(20,{message:"phone.no must not be more than 20 characters"}),
    password: z.string({required_error:"password is required"}).trim().min(7,{message:"password must be atleast of 6 characters"}).max(1024,{message:"Password must not be more than 1024 characters"}),
});
module.exports = signupSchema;