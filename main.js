const express = require ('express');
const connectToDB = require('./db');
const app = express();
const port  = 8070;
let database  =require('./db')
database()


app.use(express.json())

let postCollection= require('./models/PostSchema')
let userCollection = require('./models/UserSchema')

let userRouter = require('./routes/routes')
let postRouter = require('./routes/postrouter')

app.get('/',(req,res)=>{
  res.send('welcome page')
})

// app.post('/Register',async(req,res)=>{
//   let {name,email, password} =req.body
//   try{
//     let data  = await userCollection.create({
//       name:name,
//       password:password,
//       email:email
//     })
//     res.json({msg:"user registered successfullly", data,success:true})
//   }catch(error){
//     res.json({msg:"error in user registration",success:false,error})
//   }
// })
app.use('/users',userRouter)
app.use('/post',postRouter)

app.listen(port,()=>{
  console.log(`Server is running on http://localhost:${port}`)
});
