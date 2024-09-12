const mongoose = require('mongoose');

let userSchema = new mongoose.Schema({
  name:{
    type:String,
    require:true,
    trim:true,
    minlenth:3
  },
  email:{
    type:String,
    unique:true,
    require:true
  },
  password:{
    type:String,
    require:true
  }
})

module.exports = mongoose.model('Users',userSchema)