import React from "react";
import { Route, Routes } from "react-router-dom";
import { Toaster } from "react-hot-toast";

import Nav from "./components/Nav/Nav";
import Loading from "./components/Utils/Loading";
import Home from "./components/Home/Home";
import Auth from "./components/Auth/Auth";
import NotFound from "./components/Utils/NotFound";
import Footer from "./components/Footer/Footer";

import "./styles.css";

const App = () => {
  return (
    <div id="App">
      <Toaster />
      <Nav />
      <Loading />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/auth" element={<Auth />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </div>
  );
};

export default App;
