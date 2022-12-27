import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchPosts } from "../../../api/post.js";
import Post from "./Post/Post.jsx";
import memories from "../../../assets/memories.png";

function Posts() {
  const dispatch = useDispatch();
  const posts = useSelector((store) => store.post.posts);

  useEffect(() => {
    // console.log("Posts.jsx");
    dispatch(fetchPosts());
  }, []);

  return (
    <div className="container">
      <h2 className="my-4">Memories floating the Internet</h2>
      <div className="d-flex flex-wrap justify-content-center">
        {!posts && (
          <div className="text-center m-5">
            <h1>Go ahead and add some Memories!</h1>
            <img src={memories} height="300px"></img>
          </div>
        )}
        {posts &&
          posts.map((p) => {
            return <Post key={p._id} post={p} />;
          })}
      </div>
    </div>
  );
}

export default Posts;