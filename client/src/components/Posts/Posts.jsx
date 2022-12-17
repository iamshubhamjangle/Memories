import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchPosts } from "../../api/api.js";
import Post from "./Post/Post.jsx";

function Posts({ setPostData }) {
  const dispatch = useDispatch();
  const posts = useSelector((store) => {
    console.log("store", store);
    return store.post.posts;
  });

  useEffect(() => {
    dispatch(fetchPosts());
  }, []);

  return (
    <div className="container">
      <h2>Posts - {posts.length ? posts.length : null}</h2>
      {!posts && <p>No memories found!</p>}
      {posts &&
        posts.map((p) => {
          return <Post key={p._id} post={p} setPostData={setPostData} />;
        })}
    </div>
  );
}

export default Posts;
