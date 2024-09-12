
const postCollection = require('../models/PostSchema');
const { post } = require('../routes/postrouter');



const createPost = async(req,res)=>{
  const {title,description,image,video,user}=req.body;

  try {
    let data = await postCollection.create({
      title,
      description,
      image,
      video,
      user
    })
    return res.json({msg:"post crested successfully", succress:true,data})
  } catch (error) {
   return res.json({msg:"error  in creating post",success:false,error:error.message})
  }

}
const updatePost = async(req,res)=>{
const {title,description,image,video} = req.body;
try {
  let data = await POST.findByIdAndUpdate(id,{$set:{title,description,image,video}} , {new:true})
res.json({msg:"post updated successfully", data,success:true})
} catch (error) {
  res.json({msg:"post updated successfully", error:error.message,success:false})
  
}
}
const deletePost = async(req,res)=>{

  let id = req.params._id

try {
    let data =  await POST.findByIdAndDelete(id)
    res.json({msg:"post has been deleted",data,success:true})
} catch (error) {
    res.json({msg:"post has been deleted",error:error.message,success:false})
    
}
}

const getallUserPost =async(req,res)=>{
try { 
  let data = await POST
  .find().populate({path:'user'}); 
  res.json({msg:"feach successfully",data,success:true})
} catch (error) {
  res.json({msg:"error in getting all user posts", error:error.message,success:false})
}
}


const getSingleUserData = async(req,res)=>{
                                                                                                                                                                                                  
}

module.exports={
  createPost,
  updatePost,
  deletePost,
  getallUserPost,
  getSingleUserData

}