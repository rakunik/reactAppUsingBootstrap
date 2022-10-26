import React from 'react'

const UserList = (props) => {
    const {posts, handleClickUser, userId} = props
    const userIdList = [...new Set([...posts.map(p=>p.userId)])]

    return (
    <div>
        <h2 className='text-center'>UserId List</h2>
        <div className='list-group text-center'>
            {userIdList.map(uId=>{
                return <button type='button' key={uId} className= {`list-group-item list-group-action text-center ${uId===userId?'active': null}`} onClick={(e)=>handleClickUser(uId)}>{uId}</button>
            })}
        </div>

    </div>
  )
}

export default UserList