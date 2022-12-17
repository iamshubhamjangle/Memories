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

  return (
    <div>
      <Nav />
      <Form postData={postData} setPostData={setPostData} />
      <Posts setPostData={setPostData} />
    </div>
  );
};

export default App;
