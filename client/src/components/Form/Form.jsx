import React, { useState } from "react";
import FileBase from "react-file-base64";
import { useDispatch, useSelector } from "react-redux";
import { createPost } from "../../api/api";
import {
  clearFormData,
  setCreator,
  setTitle,
  setMessage,
  setTags,
  setFile,
} from "../../features/form/formSlice";
import "./styles.css";

function Form() {
  const dispatch = useDispatch();
  const formData = useSelector((store) => {
    return store.form;
  });

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
    dispatch(createPost(formData));
  };

  return (
    <div className="container">
      {JSON.stringify(formData)}
      <h1>Create a memory</h1>
      <form onSubmit={(e) => handleSubmit(e)}>
        <input
          className="form-control"
          name="creator"
          placeholder="creator"
          type="text"
          onChange={(e) => dispatch(setCreator(e.target.value))}
          value={formData.creator}
          required
        />
        <input
          className="form-control"
          name="title"
          placeholder="title"
          type="text"
          onChange={(e) => dispatch(setTitle(e.target.value))}
          value={formData.title}
          required
        />
        <input
          className="form-control"
          name="message"
          placeholder="message"
          type="text"
          onChange={(e) => dispatch(setMessage(e.target.value))}
          value={formData.message}
          required
        />
        <input
          className="form-control"
          name="tags"
          placeholder="tags"
          type="text"
          onChange={(e) => dispatch(setTags(e.target.value))}
          value={formData.tags}
        />
        <div className="filepicker">
          <FileBase
            type="file"
            multiple={false}
            name="selectedFile"
            onDone={({ base64 }) => dispatch(setFile(base64))}
          />
        </div>
        <button className="btn btn-primary" type="submit">
          Add
        </button>
        <button className="btn btn-secondary" onClick={(e) => handleClear(e)}>
          Clear
        </button>
      </form>
    </div>
  );
}

export default Form;
