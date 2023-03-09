import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./Login";
import MainPage from "./MainPage";
import Signup from "./Signup";
import Detail from "../pages/Detail";
import Write from "./Write";
import UserProfileEdit from "./UserProfileEdit";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<MainPage />} />
        <Route path="/detail/:id" element={<Detail />} />
        <Route path="/write/:mode" element={<Write />} />
        <Route path="/myprofile" element={<UserProfileEdit />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
