import React, { useEffect } from "react";
import moment from "moment";
import "./styles.css";
import { useDispatch } from "react-redux";
import { setUpdateMode, setFormData } from "../../../features/form/formSlice";
import { deletePost, likePost } from "../../../api/api";
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

  useEffect(() => {
    console.log(post);
  }, [post]);

  return (
    <div className="card">
      {/* header */}
      <div class="card-header">
        <div className="d-flex  align-items-center fw-light">
          <img
            className="my-0 me-1"
            src={profile}
            alt=""
            width="30px"
            height="30px"
          ></img>
          <p className="m-0 flex-grow-1">@{post.creator}</p>
          <p className="m-0 text-end">{moment(post.createdAt).fromNow()}</p>
        </div>
      </div>
      {/* image */}
      <img src={post.selectedFile} className="card-img-top" alt={post.title} />

      {/* Card Body */}
      <div className="card-body">
        {/* tags */}
        {post.tags.map((tag, idx) => {
          return (
            <span id="idx" className="fw-light fst-italic">
              #{tag + " "}
            </span>
          );
        })}

        {/* title */}
        <h5 className="card-title fw-bold my-2">{post.title}</h5>

        {/* body */}
        <p className="card-text">{post.message}</p>

        {/* Actions */}
        <div className="d-flex">
          <div
            className="mx-1"
            type="button"
            onClick={() => handleLikeClick(post._id)}
          >
            <i id="likePostIcon" class="fa-solid fa-heart fa-xl"></i>{" "}
            {post.likeCount}
          </div>
          <div className="flex-grow-1"></div>
          <div
            className="mx-1"
            type="button"
            onClick={() => handleEditClick(post)}
          >
            <i class="fa-solid fa-pen-to-square fa-xl"></i>
          </div>
          <div
            className="mx-1"
            type="button"
            onClick={() => handleDeleteClick(post._id)}
          >
            <i class="fa-solid fa-trash fa-xl"></i>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Post;
