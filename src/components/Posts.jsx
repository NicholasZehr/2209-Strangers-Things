import React, {useEffect, useState} from 'react'
import {getPosts} from '../api-adapter'
import { SinglePost } from "./"
const Posts = (props) => {
const posts = props.posts
console.log(props)
return (
    <div className='posts'>{`This is your Posts Component`} 
          {  posts.length ? posts.map((post) => {
                return <SinglePost key={`post-id-${post._id}`} post={post} />
        }) : <div>Loading Your Posts</div>
        }
    </div>
)}

export default Posts