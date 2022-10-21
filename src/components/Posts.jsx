import React, {useEffect, useState} from 'react'
import { SinglePost } from "./"
const Posts = (props) => {
    const posts = props.posts
    console.log(posts)
return (
    <div className='posts'>{`This is your Posts Component`} 
          {  posts.length ? posts.map((post) => {
                return <SinglePost key={`post-id-${post._id}`} post={post} />
        }) : <div>Loading Your Posts</div>
        }
    </div>
)}

export default Posts