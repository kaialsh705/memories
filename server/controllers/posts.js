const PostMessage=require('../models/postMessage');
const mongoose =require('mongoose')
function postsController(){
    return{
        async getposts(req,res){
           try {
            const postMessage=await PostMessage.find();
            // console.log(postMessage);

            res.status(200).json(postMessage);
        } catch (error) {
               res.status(404).json({message:error.message})
           }
        },
        async getPost (req, res) { 
            const { id } = req.params;
        
            try {
                const post = await PostMessage.findById(id);
                
                res.status(200).json(post);
            } catch (error) {
                res.status(404).json({ message: error.message });
            }
        },
        async createPost(req,res){
            const post=req.body;
            const newPost=new PostMessage(post);

            try {
                await newPost.save();
                res.status(200).json(newPost);
            } catch (error) {
                res.status(404).json({message:error.message})
            }
        },
        async updatePost(req, res){
            const { id } = req.params;
            const { title, message, creator, selectedFile, tags } = req.body;
            
            if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send(`No post with id: ${id}`);
        
            const updatedPost = { creator, title, message, tags, selectedFile, _id: id };
        
            await PostMessage.findByIdAndUpdate(id, updatedPost, { new: true });
        
            res.json(updatedPost);
        },
        async deletePost (req, res){
            const { id } = req.params;
        
            if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send(`No post with id: ${id}`);
        
            await PostMessage.findByIdAndRemove(id);
        
            res.json({ message: "Post deleted successfully." });
        },
        async likePost (req, res){
            const { id } = req.params;
        
            if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send(`No post with id: ${id}`);
            
            const post = await PostMessage.findById(id);
        
            const updatedPost = await PostMessage.findByIdAndUpdate(id, { likeCount: post.likeCount + 1 }, { new: true });
            
            res.json(updatedPost);
        }

    }
}
module.exports=postsController;