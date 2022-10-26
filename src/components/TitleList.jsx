import React from 'react'

const TitleList = (props) => {
  const {posts, userId, handleClickPostId} = props;

  const postsByUserId = posts.filter(post=>{
    return (post.userId === userId)
  })

  return (
   <div>
        <h2 className='text-center'>Title List</h2>
        <div className="accordion accordion-flush border" id="accordionFlushTitle">
          {postsByUserId.map(post=>{
            return (
              <div key={post.id} className="accordion-item" onClick={e=>handleClickPostId(post.id)}>
                  <h3 className="accordion-header" id={`flush-heading${post.id}`}>
                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target={`#flush-collapse${post.id}`} aria-expanded="false" aria-controls={`flush-collapse${post.id}`}>
                        {post.title}
                    </button>
                  </h3>
                  <div id={`flush-collapse${post.id}`} className="accordion-collapse collapse" aria-labelledby={`flush-heading${post.id}`}data-bs-parent="#accordionFlushTitle">
                    <div className="accordion-body">
                      {post.body}
                    </div>
                  </div>
              </div>
            )
          })}
        </div>


    </div>
  )
}

export default TitleList