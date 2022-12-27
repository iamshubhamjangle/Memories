import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchPosts } from "../../../api/post.js";
import Post from "./Post/Post.jsx";
import addFewMemories from "../../../assets/addFewMemories.png";

function Posts() {
  const dispatch = useDispatch();
  const posts = useSelector((store) => store.post.posts);

  useEffect(() => {
    dispatch(fetchPosts());
  }, []);

  return (
    <div className="container">
      <h2 className="my-4">Memories floating the Internet</h2>
      <div className="d-flex flex-wrap justify-content-center">
        {(!posts || posts.length == 0) && (
          <div className="text-center m-5">
            <img src={addFewMemories} height="300px" />
            <h3>Go ahead and add some Memories!</h3>
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
