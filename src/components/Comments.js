import React from 'react'

const Comments = ({title, view, createdAt, user1, user1C, user2, user2C, size}) => {
  return (
    <div>
         <h1>{title}</h1>
      <p>{view} Views | Uploaded {createdAt}</p>
      <div className='Comments'> 
        <h1>{size} Comments</h1>
        <h2>{user1}</h2>
        <p>{user1C}</p>
        <h2>{user2}</h2>
        <p>{user2C}</p>
      </div>
    </div>
  )
}

export default Comments