import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import LoadingSpinner from "../components/LoadingSpinner";
import Login from "./Login";
import MainPage from "./MainPage";
import Signup from "./Signup";
import Detail from "../pages/Detail"

const Router = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<MainPage />} />
        <Route path='/detail/:id' element={<Detail />} />
      </Routes>
      <LoadingSpinner></LoadingSpinner>
    </BrowserRouter>
  );
};

export default Router;
