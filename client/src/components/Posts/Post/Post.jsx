import React, { useEffect } from "react";
import moment from "moment";
import "./styles.css";
import { useDispatch } from "react-redux";
import { setUpdateMode, setFormData } from "../../../features/form/formSlice";
import { deletePost, likePost } from "../../../api/post.js";
import profile from "../../../assets/profile.png";

function Post({ post }) {
  const dispatch = useDispatch();

  const handleEditClick = (post) => {
    dispatch(setUpdateMode(true));
    dispatch(setFormData(post));
  };

  const handleDeleteClick = (_id) => {
    dispatch(deletePost(_id));
  };

  const handleLikeClick = (_id) => {
    dispatch(likePost(_id));
  };

  return (
    <div className="card m-2">
      {/* header */}
      <div className="card-header">
        <div className="d-flex  align-items-center fw-light">
          <img
            className="my-0 me-1"
            src={profile}
            alt=""
            width="30px"
            height="30px"
          ></img>

          <p id="post-user-name" className="m-0 flex-grow-1">
            @{post.name}
          </p>
          <p className="m-0 text-end">{moment(post.createdAt).fromNow()}</p>
        </div>
      </div>
      {/* image */}
      <img src={post.selectedFile} className="card-img-top" alt={post.title} />

      {/* Card Body */}
      <div className="card-body">
        {/* tags */}
        <div className="post-tags">
          <div className="d-flex">
            {post.tags.map((tag, idx) => {
              return (
                <span key={idx} id="idx" className="fw-light fst-italic me-1">
                  #{tag}
                </span>
              );
            })}
          </div>
        </div>

        {/* title */}
        <h5 className="card-title fw-bold my-2">{post.title}</h5>

        {/* body */}
        <p className="card-text post-body-text">{post.message}</p>

        {/* Actions */}
        <div className="d-flex">
          <div
            className="mx-1"
            type="button"
            onClick={() => handleLikeClick(post._id)}
          >
            <i id="likePostIcon" className="fa-solid fa-heart fa-xl"></i>{" "}
            {post.likeCount}
          </div>
          <div className="flex-grow-1"></div>
          <div
            className="mx-1"
            type="button"
            onClick={() => handleEditClick(post)}
          >
            <i className="fa-solid fa-pen-to-square fa-xl"></i>
          </div>
          <div
            className="mx-1"
            type="button"
            onClick={() => handleDeleteClick(post._id)}
          >
            <i className="fa-solid fa-trash fa-xl"></i>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Post;
