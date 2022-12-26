import React from "react";
import Form from "../Form/Form";
import Posts from "../Posts/Posts.jsx";
import Footer from "../Footer/footer";
import { Toaster } from "react-hot-toast";

function Home() {
  return (
    <>
      <Toaster />
      <Form />
      <Posts />
      <Footer />
    </>
  );
}

export default Home;
