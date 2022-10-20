import React from "react";
import { useOutletContext, Link } from "react-router-dom";
const PostDetails = (props) => {
    const context = useOutletContext()
    const post = context[0]
    console.log(post)
    return (
        <>
            {post ? <div className="box">
      <div>{post.title} </div>
      <div>{post.description} </div>
      <div>{post.price} </div>
      <div>{post.location} </div>
      <Link to={'/posts'}>
        <button>Go Back</button>
      </Link></div> : <div>Loading your post details...</div>
            }
    </>
  );
};

export default PostDetails;
