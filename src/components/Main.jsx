import React, {useState, useEffect} from "react";
import { Navbar, Posts, Register, PostDetails, Login } from "./";
import { createBrowserRouter, createRoutesFromElements, RouterProvider, Route, useParams } from "react-router-dom";
import {getPosts} from '../api-adapter'
const Main = () => {
  const [posts, setAllPosts] = useState([])
  useEffect(() => {
    async function fetchPosts() {
        const allPosts = await getPosts()
        setAllPosts(allPosts)
    }
    fetchPosts()
}, [])
  function filterPosts(postId) {
  return posts.filter((post) => {
        return post._id == postId
    })
}
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Navbar />}>
        <Route path="posts">
          <Route index element={<Posts posts={posts} />} />
          <Route path=":id"  element={<PostDetails filterPosts={filterPosts}/>} />
        </Route>
        <Route path="register" element={<Register />} />
        <Route path="login" element={<Login />} />
      </Route>
    )
  );
  return (
    <div id="main">
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
};

export default Main;
