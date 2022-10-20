import React, {useEffect, useState} from 'react'
import {getPosts} from '../api-adapter'
import {SinglePost} from "./"
const Posts = (props) => {
    const [posts, setAllPosts] = useState([])
    useEffect(() => {
        async function fetchPosts() {
            const allPosts = await getPosts()
            setAllPosts(allPosts)
        }
        fetchPosts()
    }, [])
return (
    <div className='posts'>{`This is your Posts Component`} 
    {
            posts.length ? posts.map((post) => {
                return <SinglePost post={post} />
        }) : <div>Loading Your Posts</div>
        }
    </div>
)}

export default Posts