import React, { useState } from "react";
import Form from "./components/Form/Form";
import Posts from "./components/Posts/Posts";
import Nav from "./components/Nav/Nav";
import "./styles.css";

const App = () => {
  return (
    <div>
      <Nav />
      <Form />
      <Posts />
    </div>
  );
};

export default App;
