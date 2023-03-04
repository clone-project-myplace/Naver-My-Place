import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import defaultProfileImg from "../assets/default_profile.jpeg";
import { navbarColorCode } from "../constants/colorCode";

const Navbar = () => {
  const navigate = useNavigate();

  // 탭관련
  const tabNameList = ["피드", "방문", "리뷰"];
  const [selectedTab, setSelectedTab] = useState(0);
  const changeTabHandler = (i) => {
    setSelectedTab(i);
  };

  const token = window.localStorage.getItem("token"); //토큰 저장
  return (
    <>
      <div
        style={{
          height: "53px",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          padding: "10px",
        }}
      >
        <div>MY 플레이스</div>
        <div>쿠폰 =</div>
      </div>
      <div style={{ height: "159px", padding: "10px" }}>
        <div style={{ margin: "10px" }}>
          <img style={ProfileImg} src={defaultProfileImg} alt="profile image" />
          <button>로그인하기</button>
        </div>
        <div>
          <ReviewWriteButton>리뷰 쓰기</ReviewWriteButton>
        </div>
      </div>
      <TabsArea>
        {tabNameList.map((item, i) => (
          <Tab
            key={i}
            selectedTab={selectedTab}
            onClick={() => changeTabHandler(i)}
          >
            {item}
          </Tab>
        ))}
      </TabsArea>
    </>
  );
};

export default Navbar;

const ProfileImg = {
  padding: "2px",
  borderRadius: "50%",
  width: "75px",
  height: "75px",
};

const TabsArea = styled.div`
  display: flex;
  height: 51px;
  justify-content: space-around;
  width: 300px;
`;

const Tab = styled.div`
  border-bottom: 5px solid black;
  width: 40px;
  text-align: center;
`;

const NavbarArea = styled.div`
  background-color: ${navbarColorCode};
  display: flex;
  align-items: center;
  flex-direction: column;
`;
const ReviewWriteButton = styled.button`
  width: 300px;
`;
