import React, { useState } from 'react'
import video from '../data/video'

const Click = () => {

const [like, setLike] = useState(video.upvotes)
const [dislike, setDislike] = useState(video.downvotes)


const handleLike = () => {
    setLike(like + 1)
}
const handleDislike = () => {
    setDislike(dislike - 1)
}
  return (
    <div> 

        <button onClick={handleLike}>{like}👍</button>
        <button onClick={handleDislike}>{dislike}👎</button>
        
    </div>
  )


}

export default Click