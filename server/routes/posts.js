const express=require('express');
const router=express.Router();
const postsController=require('../controllers/posts');

//route
router.get('/',postsController().getposts);
router.post('/',postsController().createPost);
router.get('/:id', postsController().getPost);
router.patch('/:id', postsController().updatePost);
router.delete('/:id', postsController().deletePost);
router.patch('/:id/likePost', postsController().likePost);
module.exports=router;
module.exports=router;