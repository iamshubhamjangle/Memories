import React from "react";
import { useState } from "react";
import FileBase from "react-file-base64";
import { useDispatch } from "react-redux";
import { updatePost } from "../../../../server/controllers/posts";
import { createPost } from "../../api/api";
import "./styles.css";

function Form({ postData, setPostData, updateMode, setUpdateMode }) {
  const dispatch = useDispatch();

  const handleChange = (e) => {
    const { value, name } = e.target;
    setPostData({ ...postData, [name]: value });
  };

  const clear = () => {
    setUpdateMode(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!updateMode) dispatch(createPost(postData));
    else dispatch(updatePost(postData._id, postData));
  };

  return (
    <div className="container">
      <h1>Create a memory</h1>
      <form onSubmit={(e) => handleSubmit(e)}>
        <input
          className="form-control"
          name="creator"
          placeholder="creator"
          type="text"
          onChange={(e) => handleChange(e)}
          value={postData.creator}
        />
        <input
          className="form-control"
          name="title"
          placeholder="title"
          type="text"
          onChange={(e) => handleChange(e)}
          value={postData.title}
        />
        <input
          className="form-control"
          name="message"
          placeholder="message"
          type="text"
          onChange={(e) => handleChange(e)}
          value={postData.message}
        />
        <input
          className="form-control"
          name="tags"
          placeholder="tags"
          type="text"
          onChange={(e) => handleChange(e)}
          value={postData.tags}
        />
        <div className="filepicker">
          <FileBase
            type="file"
            multiple={false}
            onDone={({ base64 }) =>
              setPostData({ ...postData, selectedFile: base64 })
            }
          />
        </div>
        <button className="btn btn-primary" type="submit">
          {!updateMode ? "Add" : "Update"}
        </button>
        <button className="btn btn-secondary" onClick={clear}>
          Clear
        </button>
      </form>

      {/* <p>{JSON.stringify(postData)}</p> */}
    </div>
  );
}

export default Form;
