import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import LoadingSpinner from "../components/LoadingSpinner";
import Login from "./Login";
import MainPage from "./MainPage";
import Signup from "./Signup";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<MainPage />} />
      </Routes>
      <LoadingSpinner></LoadingSpinner>
    </BrowserRouter>
  );
};

export default Router;
