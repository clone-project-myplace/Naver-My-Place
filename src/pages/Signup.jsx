import React from "react";
import styled from "styled-components";
import { naverColorCode } from "../constants/colorCode";
import { useForm } from "react-hook-form";
import axios from "axios";
import LoadingSpinner from "../components/LoadingSpinner";
import { Container } from "react-bootstrap";
import { CiUser, CiLock } from "react-icons/ci";
import LoginSignupButtonStyle from "../styles/LoginSignupButtonStyle";

import { useNavigate } from "react-router-dom";

const Signup = () => {
  const navigate = useNavigate();
  const { register, handleSubmit } = useForm();

  const postSignup = (data) => {
    if (data.memberPw !== data.memberPwConfirm) {
      alert("비밀번호가 일치하지 않습니다");
      return;
    }
    axios
      .post(`${process.env.REACT_APP_BASEURL}/api/members/signup`, data)
      .then((res) => {
        console.log(res);
        navigate("/login");
      })
      .catch((err) => alert(err.response.data.error.msg));
  };

  return (
    <Container>
      <FormStyle onSubmit={handleSubmit((data) => postSignup(data))}>
        <LogoStyle style={{ marginBottom: "30px" }}>NAVER</LogoStyle>
        <IdInput>
          <CiUser />
          <InputStyle
            type="text"
            placeholder="아이디"
            {...register("memberId", { required: "아이디를 입력해주세요" })}
          />
        </IdInput>
        <MiddleInput>
          <CiUser />
          <InputStyle
            type="text"
            placeholder="닉네임"
            {...register("memberName", { required: "아이디를 입력해주세요" })}
          />
        </MiddleInput>
        <MiddleInput>
          <CiUser />
          <InputStyle
            type="text"
            placeholder="비밀번호"
            {...register("memberPw", { required: "아이디를 입력해주세요" })}
          />
        </MiddleInput>
        <PasswordInput>
          <CiLock />
          <InputStyle
            type="password"
            placeholder="비밀번호 확인"
            {...register("memberPwConfirm", {
              required: "비밀번호를 입력해주세요",
            })}
          />
        </PasswordInput>
        <div>
          <LoginSignupButtonStyle type="submit" style={{ marginTop: "30px" }}>
            로그인
          </LoginSignupButtonStyle>
        </div>
      </FormStyle>
    </Container>
  );
};

export default Signup;

const LogoStyle = styled.div`
  color: ${naverColorCode};
  font-size: 30px;
  font-weight: 900;
`;

const FormStyle = styled.form`
  display: flex;
  flex-direction: column;
  width: 80%;
  text-align: center;
  padding: 20px;
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

const MiddleInput = styled.div`
  border-bottom: 1px solid gray;
  border-left: 1px solid gray;
  border-right: 1px solid gray;
  width: 70vw;
  padding: 10px;
`;
