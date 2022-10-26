import './App.css';
import { useState, useEffect } from "react";
import axios from 'axios';

import CommentList from './components/CommentList';
import TitleList from './components/TitleList';
import UserList from './components/UserList';


 const App = () => {

    const [posts, setPosts] = useState([]);
    const [userId, setUserId] = useState();
    const [postId, setPostId] = useState();
    
    
    useEffect(()=>{

      const  getPosts = async () => {
       try {
        const res =  await axios.get("https://jsonplaceholder.typicode.com/posts")
        setPosts(res.data)
       } 
       catch (error) {
        console.error(error);
       } 
      }

       getPosts()
    },[])

  
    const handleClickUser = (uId) =>{
      setUserId(uId)
    }

    const handleClickPostId = (postId) => {
      setPostId(postId)
    }

  return (
    <div className="container mt-2 text-center">
      <div className="row g-3">
        <div className="col-2">
          { posts?.length && <UserList posts={posts} userId={userId} handleClickUser={handleClickUser}/> }
        </div>
        <div className="col">
          {userId && <TitleList posts={posts} userId={userId} postId={postId} handleClickPostId = {handleClickPostId}  />}
        </div>
        <div className="col">
          {postId && <CommentList postId={postId}/>}
        </div>
      </div>
    </div>
  );
}

export default App;
