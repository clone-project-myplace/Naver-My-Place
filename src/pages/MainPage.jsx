import { useState } from "react";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import Feed from "../components/main-page-contents/Feed";
import Review from "../components/main-page-contents/Review";
import Visit from "../components/main-page-contents/Visit";
import { changeTab } from "../contexts/reducers/tabModeSlice";
import defaultProfileImg from "../assets/default_profile.jpeg";
import { navbarColorCode } from "../constants/colorCode";
import UserProfile from "../components/UserProfile";
import { FiMenu } from "react-icons/fi";

const MainPage = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  // 탭관련
  const [selectedTab, setSelectedTab] = useState("피드"); //탭 왼쪽부터 0
  const tabClickHandler = (e) => {
    setSelectedTab(e.target.textContent);
  };

  const accessToken = window.localStorage.getItem("accessToken"); //토큰 저장

  //로그인 버튼 핸들러
  const onLoginButtonHandler = () => {
    navigate("/login");
  };

  const contents = () => {
    switch (selectedTab) {
      case "피드":
        return <Feed />;
      case "방문":
        return <Visit />;
      case "리뷰":
        return <Review />;
      default:
        return;
    }
  };

  return (
    <div>
      <TopLogoArea>
        <div>MY 플레이스</div>
        <div>
          {" 쿠폰 "} <FiMenu size="30px" />
        </div>
      </TopLogoArea>
      <MyProfileArea>
        {accessToken === null ? (
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
          <div
            style={{
              display: "flex",
              marginBottom: "20px",
            }}
          >
            <UserProfile editable={true} />
          </div>
        )}
        <div>
          <ReviewWriteButton>리뷰 쓰기</ReviewWriteButton>
        </div>
      </MyProfileArea>
      <TabsOuter>
        <TabsArea>
          <Tab name="피드" selectedTab={selectedTab} onClick={tabClickHandler}>
            피드
          </Tab>
          <Tab name="방문" selectedTab={selectedTab} onClick={tabClickHandler}>
            방문
          </Tab>
          <Tab name="리뷰" selectedTab={selectedTab} onClick={tabClickHandler}>
            리뷰
          </Tab>
        </TabsArea>
      </TabsOuter>
      {contents()}
    </div>
  );
};

export default MainPage;

const ProfileImg = {
  padding: "2px",
  borderRadius: "50%",
  width: "75px",
  height: "75px",
};

const ReviewWriteButton = styled.button`
  display: block;
  margin: 0 auto;
  width: 300px;
  height: 38px;
  border-radius: 8px;
  background: #0cc5a4;
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);
  box-sizing: border-box;
  border: none;
  font-size: 1.5rem;
  font-weight: 700;
  color: #fff;
`;

const LoginButton = styled.span`
  margin-left: 30px;
`;

const TopLogoArea = styled.div`
  background-color: ${navbarColorCode};
  color: white;
  height: 53px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
  border-bottom: solid 3px rgb(134, 142, 150, 0.2);
`;

const MyProfileArea = styled.div`
  color: white;
  background-color: ${navbarColorCode};
  height: 159px;
  padding: 10px;
  text-align: center;
`;

const TabsOuter = styled.div`
  background-color: ${navbarColorCode};
  position: sticky;
  top: 0px;
  z-index: 1000;
`;

const TabsArea = styled.div`
  display: flex;
  height: 51px;
  justify-content: space-around;
  width: 300px;
  margin: 0 auto;
`;

const Tab = styled.div`
  border-bottom: ${({ name, selectedTab }) =>
    selectedTab === name ? "5px solid white" : ""};
  color: white;
  width: 40px;
  height: 35px;
  text-align: center;
  margin-top: 16px;
`;
