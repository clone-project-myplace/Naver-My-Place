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

const MainPage = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  // 탭관련
  const tabNameList = ["피드", "방문", "리뷰"];
  const [selectedTab, setSelectedTab] = useState(0); //탭 왼쪽부터 0
  const changeTabHandler = (i) => {
    setSelectedTab(i);
    dispatch(changeTab(i));
  };

  const token = window.localStorage.getItem("accessToken"); //토큰 저장

  //로그인 버튼 핸들러
  const onLoginButtonHandler = () => {
    navigate("/login");
  };

  return (
    <div style={{ height: "1000px" }}>
      <NavigationBox>
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
      </NavigationBox>
    </div>
  );

  //   const tabMode = useSelector((state) => state.tabModeSlice.tab);
  //   switch (tabMode) {
  //     case 0:
  //       return <Feed />;
  //     case 1:
  //       return <Visit />;
  //     case 2:
  //       return <Review />;
  //     default:
  //       return;
  //   }
};

export default MainPage;

const ProfileImg = {
  padding: "2px",
  borderRadius: "50%",
  width: "75px",
  height: "75px",
};

const NavigationBox = styled.div`
  background-color: ${navbarColorCode};
  height: 247px;
`;

const Tab = styled.div`
  border-bottom: 5px solid #fff;
  width: 40px;
  height: 35px;
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
  margin: 0 auto;
  position: sticky;
  top: 0;
`;
