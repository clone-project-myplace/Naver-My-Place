import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import defaultProfileImg from "../assets/default_profile.jpeg";
import { navbarColorCode } from "../constants/colorCode";

const Navbar = () => {
  const navigate = useNavigate();

  const token = window.localStorage.getItem("token"); //토큰 저장
  return (
    <NavbarArea>
      <UserProfile editable={true} />

      <div>
        <img style={ProfileImg} src={defaultProfileImg} alt="profile image" />
        <button>로그인하기</button>
      </div>
      <ReviewWriteButton>리뷰 쓰기</ReviewWriteButton>
      <TabsArea>
        <div>피드</div>
        <div>방문</div>
        <div>리뷰</div>
      </TabsArea>
    </NavbarArea>
  );
};

export default Navbar;

const TabsArea = styled.div`
  display: flex;
  justify-content: space-around;
`;

const ProfileImg = {
  padding: "2px",
  borderRadius: "50%",
  width: "75px",
  height: "75px",
};

const NavbarArea = styled.div`
  background-color: ${navbarColorCode};
  display: flex;
  align-items: center;
  flex-direction: column;
`;
const ReviewWriteButton = styled.button`
  width: 300px;
`;
