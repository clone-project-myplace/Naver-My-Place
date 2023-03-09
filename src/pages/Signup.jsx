import React, { useState } from "react";
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

  const [memberId, setMemberId] = useState("");
  const [memberPw, setMemberPw] = useState("");
  const [memberName, setMemberName] = useState("");
  const [memberPwConfirm, setMemberPwConfirm] = useState("");
  const goToLogin = () => {
    navigate("/login");
  };
  const onSignupHandler = (e) => {
    e.preventDefault();
    if (memberPw !== memberPwConfirm) {
      alert("비밀번호가 일치하지 않습니다.");
      return;
    }
    const signupInfo = {
      memberId: memberId,
      memberPw: memberPw,
      memberName: memberName,
    };
    axios
      .post(`${process.env.REACT_APP_BASEURL}/api/members/signup`, signupInfo)
      .then((res) => {
        console.log(res);
        navigate("/login");
      })
      .catch((err) => alert(err.response.data.error.msg));
  };
  // const postSignup = (data) => {
  //   console.log(data);
  //   const postData = {
  //     memberId: data.memberId,
  //     memberPw: data.memberPw,
  //     memberName: data.memberName,
  //   };
  //   console.log(postData);
  //   axios
  //     .post(`${process.env.REACT_APP_BASEURL}/api/members/signup`, data)
  //     .then((res) => {
  //       console.log(res);
  //       navigate("/login");
  //     })
  //     .catch((err) => alert(err.response.data.error.msg));
  // };

  return (
    <Container>
      <FormStyle>
        <LogoStyle style={{ marginBottom: "30px" }}>NAVER</LogoStyle>
        <input
          type="text"
          onChange={(e) => {
            setMemberId(e.target.value);
          }}
          placeholder="아이디를 입력해주세요"
        />
        <input
          type="text"
          onChange={(e) => {
            setMemberName(e.target.value);
          }}
          placeholder="닉네임을 입력해주세요"
        />
        <input
          type="password"
          onChange={(e) => {
            setMemberPw(e.target.value);
          }}
          placeholder="비밀번호를 입력해주세요"
        />
        <input
          type="password"
          onChange={(e) => {
            setMemberPwConfirm(e.target.value);
          }}
          placeholder="비밀번호 확인을 입력해주세요"
        />
        <LoginSignupButtonStyle
          style={{ marginTop: "30px" }}
          onClick={onSignupHandler}
        >
          <div onClick={onSignupHandler}>회원가입</div>
        </LoginSignupButtonStyle>
        <div></div>
      </FormStyle>
    </Container>
  );
};

export default Signup;

const LogoStyle = styled.div`
  color: ${naverColorCode};
  font-size: 30px;
  font-weight: 900;
  margin-left: 18vw;
`;

const FormStyle = styled.form`
  display: flex;
  flex-direction: column;
  width: 80%;
  text-align: center;
  padding: 20px;
  input {
    margin-left: 8vw;
    box-sizing: border-box;
    height: 46px;
    width: 100%;
    outline: none;
    border-radius: 8px;
    padding: 0 12px;
    font-size: 14px;
    border: 1px solid #eee;
  }
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
