import React from "react";
import styled from "styled-components";
import { naverColorCode } from "../constants/colorCode";
import { useForm } from "react-hook-form";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const postLogin = (data) => {
    const userInfo = { memberId: data.memberId, memberPw: data.memberPw };
    console.log(userInfo);
    axios
      .post(`${process.env.REACT_APP_BASEURL}/api/members/login`, data)
      .then((res) => {
        window.localStorage.setItem("accessToken", res.headers.authorization);
        console.log("res.headers.authorization : ", res.headers.authorization);
        navigate("/");
      })
      .catch((err) => console.log(err));
  };
  return (
    <div>
      <form onSubmit={handleSubmit((data) => postLogin(data))}>
        <LogoStyle>NAVER</LogoStyle>
        <div>
          <input
            type="text"
            placeholder="아이디"
            {...register("memberId", { required: "아이디를 입력해주세요" })}
          />
        </div>
        <div>
          <input
            type="password"
            placeholder="비밀번호"
            {...register("memberPw", {
              required: "비밀번호를 입력해주세요",
            })}
          />
        </div>
        <div>
          <input type="submit" />
        </div>
      </form>
    </div>
  );
};

export default Login;

const LogoStyle = styled.div`
  color: ${naverColorCode};
  font-size: 30px;
  font-weight: 900;
`;
