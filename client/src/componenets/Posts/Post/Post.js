import React from 'react';
import { Button} from '@material-ui/core/';
import ThumbUpAltIcon from '@material-ui/icons/ThumbUpAlt';
import DeleteIcon from '@material-ui/icons/Delete';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';
import {useDispatch} from 'react-redux';
import { likePost, deletePost } from '../../../actions/posts';
import moment from 'moment';
import "./Style.css";
 const Post=({post, setCurrentId})=>{
  const dispatch = useDispatch();
  const style={
    width: "20rem",
}

    return(
        <>
          <div className="post container">
            <div className="card1 card" style={style}>
              <div className="top-image">
                <div className="font-bold ml-2">
                  <h6>{post.creator}</h6>
                  <br/>
                  <p>{moment(post.createdAt).fromNow()}</p>
                </div>
                <div className="dot">
                <Button size="small" onClick={() => setCurrentId(post._id)}><MoreHorizIcon fontSize="default" /></Button>
                </div>
              </div>
              <img src={post.selectedFile || 'https://user-images.githubusercontent.com/194400/49531010-48dad180-f8b1-11e8-8d89-1e61320e1d82.png'} title={post.title} className="card-img-top" alt="..."/>
              <div className="card-body">
                <h5 className="card-title">{post.title}</h5>
                <p className="card-text">{post.tags.map((tag)=>`#${tag} `)}</p><br/>
                <p className="card-text">{post.message}</p>
                <div className="bottom_icon">
                  <div className="icon">
                  <Button size="small" color="primary" onClick={() => dispatch(likePost(post._id))}><ThumbUpAltIcon fontSize="small" /> Like {post.likeCount} </Button>
                  <Button size="small" color="primary" onClick={() => dispatch(deletePost(post._id))}><DeleteIcon fontSize="small" /> Delete</Button>
                  </div>
                </div>
              </div>
            </div>
          </div>  
        </>
    )
}
export default Post;
