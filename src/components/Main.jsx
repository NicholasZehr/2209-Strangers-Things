import React from "react";
import { Navbar, Posts, Register, PostDetails } from "./";
import { createBrowserRouter, createRoutesFromElements, RouterProvider, Route } from "react-router-dom"
const Main = () => {

  const router = createBrowserRouter(createRoutesFromElements(
    <Route path="/" element={<Navbar />}>
      <Route path="posts" element={<Posts />}>
        <Route path="details/:id" element={<PostDetails/>}></Route>
      </Route>
      <Route path="register" element={<Register/>}/>
</Route>
  ))
  return (
    <div id="main">
      <RouterProvider router={ router}>
      </RouterProvider>
    </div>
  );
};

export default Main;
