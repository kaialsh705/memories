import React,{useState,useEffect} from 'react';
import FileBase from 'react-file-base64'
import {useDispatch,useSelector} from 'react-redux';
import { createPost ,updatePost} from '../../actions/posts';
import './Style.css'
const Form=({currentId,setCurrentId})=>{
    
    const [postData,setPostData] =useState({creator:'',title:'',message:'',tags:'',selectedFile:''});
    
    const post = useSelector((state) => (currentId ? state.posts.find((message) => message._id === currentId) : null));
   
    const dispatch=useDispatch();
    
    useEffect(() => {
        if (post) setPostData(post);
      }, [post])
    
    const clear=()=>{
        setCurrentId(0);
        setPostData({ creator: '', title: '', message: '', tags: '', selectedFile: '' });
    } 
    
    const handleSubmit = async (e) => {
        e.preventDefault();
        if (currentId === 0) {
          dispatch(createPost(postData));
          clear();
        } else {
          dispatch(updatePost(currentId, postData));
          clear();
        }
      };

    return(
        <div className="container">
            <div className="card2 card">
                <h5 className="text-center">Input value</h5>
                <form noValidate autoComplete="off" onSubmit={handleSubmit} >
                    <div className="form-group">
                        <label>Creater</label>
                        <input onChange={(e)=>setPostData({...postData,creator:e.target.value})} value={postData.creator} name="creater" required className="form-control" type="text" placeholder="Name"/>
                    </div>
                    <div className="form-group">
                        <label>Title</label>
                        <input onChange={(e)=>setPostData({...postData,title:e.target.value})} value={postData.title} name="title" required className="form-control" type="text" placeholder="Title"/>
                    </div>
                    <div className="form-group">
                        <label>Message</label>
                        <textarea onChange={(e)=>setPostData({...postData,message:e.target.value})} value={postData.message} name="message" required className="form-control" placeholder="Message"/>
                    </div>
                    <div className="form-group">
                        <label>Tags (coma seprated)</label>
                        <input onChange={(e)=>setPostData({...postData,tags:e.target.value})} value={postData.tags} name="tags" required className="form-control" type="text" placeholder="#Tags"/>
                    </div>
                    <div className="form-group">
                        <FileBase type="file" multiple={false} onDone={({base64})=>setPostData({...postData,selectedFile:base64})}/>
                    </div>
                    <div className="two_btn">
                        <div className="btn1">
                            <button className="btn btn-primary  btn-block"  variant="contained" type="submit">SUBMIT</button>
                        </div>
                        <div className="btn2 mt-2">
                            <button onClick={clear} className="btn btn-danger  btn-block">CLEAR</button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    )
}
export default Form;