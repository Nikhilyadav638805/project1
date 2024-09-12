const mongoose = require('mongoose')


const connectToDB =()=>{
  mongoose.connect('mongodb://localhost:27017/Blogapplication')
  .then(()=>console.log('connect to mongodb successfully'))
  .catch(()=>console.log('error is connecting to mongoDB'))
} 

module.exports=connectToDB