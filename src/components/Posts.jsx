import React, {useEffect, useState} from 'react'
import {getPosts} from '../api-adapter'
import { SinglePost } from "./"
import { Outlet, useParams } from "react-router-dom"
const Posts = (props) => {
    const [posts, setAllPosts] = useState([])
    const {id} = useParams()
    useEffect(() => {
        async function fetchPosts() {
            const allPosts = await getPosts()
            setAllPosts(allPosts)
        }
        fetchPosts()
    }, [])
return (
    <div className='posts'>{`This is your Posts Component`} 
    {id ? <Outlet/> :
            posts.length ? posts.map((post) => {
                return <SinglePost key={`post-id-${post._id}`} post={post} />
        }) : <div>Loading Your Posts</div>
        }
    </div>
)}

export default Posts