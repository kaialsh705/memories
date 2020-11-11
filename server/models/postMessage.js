const mongoose=require('mongoose');

const Schema=mongoose.Schema

const PostSchema= new Schema({
    title: String,
    message: String,
    creator: String,
    tags: [String],
    selectedFile: String,
    likeCount: {
        type: Number,
        default: 0,
    },
    createdAt: {
        type: Date,
        default: new Date(),
    },
});
const PostMessage=mongoose.model('posts',PostSchema);
module.exports=PostMessage;
