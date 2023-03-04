import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import defaultProfileImg from "../assets/default_profile.jpeg";
import { navbarColorCode } from "../constants/colorCode";
import { changeTab } from "../contexts/reducers/tabModeSlice";

const Navbar = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  // 탭관련
  const tabNameList = ["피드", "방문", "리뷰"];
  const [selectedTab, setSelectedTab] = useState(0); //탭 왼쪽부터 0
  const changeTabHandler = (i) => {
    setSelectedTab(i);
    dispatch(changeTab(i));
  };

  const token = window.localStorage.getItem("token"); //토큰 저장

  //로그인 버튼 핸들러
  const onLoginButtonHandler = () => {
    navigate("/login");
  };

  return (
    <>
      <TopLogoArea>
        <div>MY 플레이스</div>
        <div>쿠폰 =</div>
      </TopLogoArea>
      <MyProfileArea>
        {token === null ? (
          <div
            style={{
              position: "relative",
              right: "60px",
              marginBottom: "20px",
            }}
          >
            <img
              style={ProfileImg}
              src={defaultProfileImg}
              alt="profile image"
            />
            <LoginButton onClick={onLoginButtonHandler}>
              로그인하기 {">"}
            </LoginButton>
          </div>
        ) : (
          <div>로그인됨</div>
        )}
        <div>
          <ReviewWriteButton>리뷰 쓰기</ReviewWriteButton>
        </div>
      </MyProfileArea>
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

const Tab = styled.div`
  border-bottom: 5px solid black;
  width: 40px;
  text-align: center;
`;

const ReviewWriteButton = styled.button`
  width: 300px;
`;

const LoginButton = styled.span`
  margin-left: 30px;
`;

const TopLogoArea = styled.div`
  height: 53px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
`;

const MyProfileArea = styled.div`
  height: 159px;
  padding: 10px;
  text-align: center;
`;

const TabsArea = styled.div`
  display: flex;
  height: 51px;
  justify-content: space-around;
  width: 300px;
  text-align: center;
`;
