import React from "react";
import FileBase from "react-file-base64";
import { useDispatch, useSelector } from "react-redux";
import { createPost, updatePost } from "../../api/api";
import {
  clearFormData,
  setCreator,
  setTitle,
  setMessage,
  setTags,
  setSelectedFile,
} from "../../features/form/formSlice";
import "./styles.css";

function Form() {
  const dispatch = useDispatch();
  const { updateMode, data } = useSelector((store) => store.form);

  // const handleChange = (e) => {
  //   const { value, name } = e.target;
  //   // dispatch(setFormData({ ...formData, [name]: value }));
  // };

  const handleClear = (e) => {
    e.preventDefault();
    dispatch(clearFormData());
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (updateMode) dispatch(updatePost(data));
    else dispatch(createPost(data));
  };

  return (
    <div id="form-container">
      <div id="form-body" className="card">
        <div className="card-body m-3">
          <h1>{updateMode ? "Update" : "Create"} a memory</h1>
          <form onSubmit={(e) => handleSubmit(e)}>
            <input
              className="form-control"
              name="creator"
              placeholder="creator"
              type="text"
              onChange={(e) => dispatch(setCreator(e.target.value))}
              value={data.creator}
              required
            />
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
