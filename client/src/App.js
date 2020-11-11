import react,{useEffect,useState} from 'react';
import memories from './image/memorie.jpg';
import {getPosts} from './actions/posts';
import Posts from './componenets/Posts/Posts';
import Form from './componenets/Form/Form';
import {useDispatch} from 'react-redux'
import "./App.css"
function App() {
  const [currentId, setCurrentId] = useState(0);
  const dispatch=useDispatch();
  useEffect(() => {
    dispatch(getPosts());
  }, [currentId, dispatch]);
  return (
      <div className="top_head container">
        <div className="head container">
        <div className="title text-center font-bold">
            <h1>Memories</h1>
        </div>
        <div className="img-fluid">
            <img src={memories} alt="memo" className="img" />
        </div> 
      </div>
      <div className="main container">
        <div className="row">
          <div className="col-sm-6">
            <Form currentId={currentId} setCurrentId={setCurrentId}/>
          </div>
          <div className="col-sm-6">
          <Posts setCurrentId={setCurrentId}/>
          </div>
        </div>
      </div>
      </div>
  );
}
export default App;