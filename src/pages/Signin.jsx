import React from "react";
import styled from "styled-components";
import { naverColorCode } from "../constants/colorCode";
import { useForm } from "react-hook-form";

const Signin = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const postLogin = (data) => {
    alert(data);
  };
  return (
    <div>
      <form onSubmit={handleSubmit((data) => postLogin(data))}>
        <LogoStyle>NAVER</LogoStyle>
        <div>
          <input
            type="text"
            placeholder="아이디"
            {...register("userId", { required: "아이디를 입력해주세요" })}
          />
        </div>
        <div>
          <input
            type="password"
            placeholder="비밀번호"
            {...register("userPassword", {
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

export default Signin;

const LogoStyle = styled.div`
  color: ${naverColorCode};
  font-size: 30px;
  font-weight: 900;
`;
