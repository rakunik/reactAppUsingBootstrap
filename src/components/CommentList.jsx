import axios from 'axios';
import React from 'react'
import {useEffect, useState} from 'react';


const Comment = (props) => {
  const {commentBody, userName, emailId} = props;

  return (
    <div className="container border border-3 mb-1">
      <div className="row border-1">
        <div className="col border p-2">
          {commentBody}
        </div>
      </div>
      <div className="row border-1">
        <div className="col border text-start">
          {userName}
        </div>
        <div className="col border text-end py-1">
          {emailId}
        </div>
      </div>
    </div>
  )
}

const CommentList = (props) => {
  const {postId} = props;

  const [comments, setComments] = useState([])

  useEffect(()=>{
    const getComments = async (Id) => {
      try {
        const {data} = await axios.get(`https://jsonplaceholder.typicode.com/posts/${Id}/comments`)
        setComments(data)
      } catch (error) {
        console.error(error.message)
      }
    }

    getComments(postId)
  
    
  }, [postId])

  return (
    <div>
      
    <h2>Comment List</h2>

    {comments.length && comments.map(comment=>{
      return <Comment key = {comment.id} commentBody={comment.body} userName= {comment.name} emailId= {comment.email} />
    })}
    
    </div>
  )
}

export default CommentList