import React from "react";
import Form from "./Form/Form";
import Posts from "./Posts/Posts.jsx";
import { Toaster } from "react-hot-toast";

function Home() {
  return (
    <>
      <Toaster />
      <Form />
      <Posts />
    </>
  );
}

export default Home;
