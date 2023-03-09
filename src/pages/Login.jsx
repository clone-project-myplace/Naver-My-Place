import React from "react";
import styled from "styled-components";
import { naverColorCode } from "../constants/colorCode";
import { useForm } from "react-hook-form";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { Container } from "react-bootstrap";
import { CiUser, CiLock } from "react-icons/ci";
import LoginSignupButtonStyle from "../styles/LoginSignupButtonStyle";

const Login = () => {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const goToSignup = () => {
    navigate("/signup");
  };
  const postLogin = (data) => {
    const userInfo = { memberId: data.memberId, memberPw: data.memberPw };
    axios
      .post(`${process.env.REACT_APP_BASEURL}/api/members/login`, data)
      .then((res) => {
        window.localStorage.setItem("accessToken", res.headers.authorization);
        navigate("/");
      })
      .catch((err) => console.log(err));
  };
  return (
    <Container>
      <FormStyle onSubmit={handleSubmit((data) => postLogin(data))}>
        <LogoStyle style={{ marginBottom: "30px" }}>NAVER</LogoStyle>
        <IdInput>
          <CiUser />
          <InputStyle
            type="text"
            placeholder="아이디"
            {...register("memberId", { required: "아이디를 입력해주세요" })}
          />
        </IdInput>
        <PasswordInput>
          <CiLock />
          <InputStyle
            type="password"
            placeholder="비밀번호"
            {...register("memberPw", {
              required: "비밀번호를 입력해주세요",
            })}
          />
        </PasswordInput>
        <div>
          <LoginSignupButtonStyle type="submit" style={{ marginTop: "30px" }}>
            로그인
          </LoginSignupButtonStyle>
        </div>{" "}
        <LoginSignupButtonStyle onClick={goToSignup}>
          회원가입
        </LoginSignupButtonStyle>
      </FormStyle>
    </Container>
  );
};

export default Login;

const FormStyle = styled.form`
  display: flex;
  flex-direction: column;
  width: 80%;
  text-align: center;
  padding: 20px;
`;

const LogoStyle = styled.div`
  color: ${naverColorCode};
  font-size: 30px;
  font-weight: 900;
`;

const IdInput = styled.div`
  border: 1px solid gray;
  width: 70vw;
  padding: 10px;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
`;

const PasswordInput = styled.div`
  border-bottom: 1px solid gray;
  border-left: 1px solid gray;
  border-right: 1px solid gray;
  width: 70vw;
  padding: 10px;
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
`;

const InputStyle = styled.input`
  border: none;
  width: 95%;
  margin-left: 10px;
  background-color: rgb(249, 249, 249);

  :focus {
    outline: none;
  }
`;
