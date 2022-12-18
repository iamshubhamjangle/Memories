import React, { useState } from "react";
import Form from "./components/Form/Form";
import Posts from "./components/Posts/Posts";
import Nav from "./components/Nav/Nav";
import "./styles.css";
import Loading from "./components/Utils/Loading";

const App = () => {
  return (
    <div>
      <Nav />
      <Loading />
      <Form />
      <Posts />
    </div>
  );
};

export default App;
