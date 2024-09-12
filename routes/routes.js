const express = require  ('express');
const { createUser, deleteUser, getAllUser, updateUser, loginUser } = require('../controllers/userController');
  const router  = express.Router();

  router.post('/create',createUser);
  router.delete('/delete/:_id',deleteUser);
  router.put('/update/:_id',updateUser);
  router.get('/getall',getAllUser);
  router.post('/login',loginUser);

  module.exports = router;