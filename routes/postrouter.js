const express = require('express');
const { createPost, updatePost, deletePost, getSingleUserData, getallUserPost } = require('../controllers/postControllers');
const { getAllUser } = require('../controllers/userController');
const router = express.Router();


router.post('/create',createPost)
router.put('/update/:_id',updatePost)
router.delete('/delete/:_id',deletePost)
router.get('/getallPost',getallUserPost)
router.get('/getsingleUser/:_id',getSingleUserData)

module.exports=router
