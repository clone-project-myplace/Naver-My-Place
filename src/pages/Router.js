import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./Login";
import MainPage from "./MainPage";
import Signup from "./Signup";
import Detail from "../pages/Detail";
import UserProfileEdit from "./UserProfileEdit";
import Test from "./Test";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<MainPage />} />
        <Route path="/detail/:id" element={<Detail />} />
        <Route path="/myprofile" element={<UserProfileEdit />} />
        <Route path="/test" element={<Test />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
