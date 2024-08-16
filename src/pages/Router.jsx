import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./home";

const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
    </Routes>
  );
};

export default Router;
