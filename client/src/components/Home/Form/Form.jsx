import React from "react";
import FileBase from "react-file-base64";
import { useDispatch, useSelector } from "react-redux";
import { createPost, updatePost } from "../../../api/post.js";
import {
  clearFormData,
  setTitle,
  setMessage,
  setTags,
  setSelectedFile,
} from "../../../features/form/formSlice";
import "./styles.css";

function Form() {
  const dispatch = useDispatch();
  const { updateMode, data } = useSelector((store) => store.form);
  const { isLoggedIn } = useSelector((store) => store.user);

  const handleClear = (e) => {
    e.preventDefault();
    dispatch(clearFormData());
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { name } = JSON.parse(localStorage.getItem("user"));
    if (updateMode) dispatch(updatePost({ ...data, name }));
    else dispatch(createPost({ ...data, name }));
  };

  if (!isLoggedIn) {
    return (
      <div id="form-container">
        <div id="form-body" className="card">
          <div className="card-body m-3">
            <h2>Login to create your memories and share it with the World!</h2>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div id="form-container">
      <div id="form-body" className="card">
        <div className="card-body m-3">
          <h1>{updateMode ? "Update" : "Create"} a memory</h1>
          <form onSubmit={(e) => handleSubmit(e)}>
            <input
              className="form-control"
              name="title"
              placeholder="title"
              type="text"
              onChange={(e) => dispatch(setTitle(e.target.value))}
              value={data.title}
              required
            />
            <input
              className="form-control"
              name="message"
              placeholder="message"
              type="text"
              onChange={(e) => dispatch(setMessage(e.target.value))}
              value={data.message}
              required
            />
            <input
              className="form-control"
              name="tags"
              placeholder="tags"
              type="text"
              onChange={(e) => dispatch(setTags(e.target.value.split(",")))}
              value={data.tags}
            />
            <div className="filepicker">
              <FileBase
                type="file"
                multiple={false}
                name="selectedFile"
                onDone={({ base64 }) => dispatch(setSelectedFile(base64))}
              />
            </div>
            {!updateMode && (
              <button className="btn btn-primary" type="submit">
                Add
              </button>
            )}
            {updateMode && (
              <button className="btn btn-primary" type="submit">
                Update
              </button>
            )}
            <button
              className="btn btn-secondary"
              onClick={(e) => handleClear(e)}
            >
              Clear
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Form;
