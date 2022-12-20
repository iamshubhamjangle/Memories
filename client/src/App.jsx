import React from "react";
import { Route, Routes } from "react-router-dom";

import Nav from "./components/Nav/Nav";
import Loading from "./components/Utils/Loading";
import Home from "./components/Home/Home";
import Auth from "./components/Auth/Auth";
import NotFound from "./components/Not Found/NotFound";

import "./styles.css";

const App = () => {
  return (
    <div id="App">
      <Nav />
      <Loading />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/auth" element={<Auth />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
};

export default App;
