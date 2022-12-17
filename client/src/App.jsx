import React, { useState } from "react";
import Form from "./components/Form/Form";
import Posts from "./components/Posts/Posts";
import Nav from "./components/Nav/Nav";
import "./styles.css";

const App = () => {
  const [postData, setPostData] = useState({
    creator: "",
    title: "",
    message: "",
    tags: "",
    selectedFile: "",
  });

  const [updateMode, setUpdateMode] = useState(false);

  return (
    <div>
      <Nav />
      <Form
        postData={postData}
        setPostData={setPostData}
        updateMode={updateMode}
        setUpdateMode={setUpdateMode}
      />
      <Posts setPostData={setPostData} setUpdateMode={setUpdateMode} />
    </div>
  );
};

export default App;
