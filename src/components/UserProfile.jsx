import styled from "styled-components";
import { HiPencil } from "react-icons/hi";
import { navbarColorCode, subTitleColorCode } from "../constants/colorCode";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import jwt_decode from "jwt-decode";
import { useEffect } from "react";
import { useQuery } from "react-query";
import axios from "axios";

const UserProfile = ({ editable, profileImg, reviewCountt }) => {
  const navigate = useNavigate();
  const accessToken = window.localStorage.getItem("accessToken");

  const { data } = useQuery(["getProfileInfo"], () => {
    return axios.get(`${process.env.REACT_APP_BASEURL}/api/members/info`, {
      headers: {
        Authorization: accessToken,
      },
    });
  });

  const currentNickname = data?.data.data.memberName;
  const currentImgUrl = data?.data.data.profileImgUrl;
  const reviewCount = data?.data.data.reviewCount;

  const goToEditPage = () => {
    const config = {
      state: {
        currentNickname,
        currentImgUrl,
      },
    };
    navigate("/myprofile", config);
  };

  if (editable) {
    return (
      <div
        style={{
          display: "flex",
          position: "relative",
          left: "42%",
          cursor: "pointer",
        }}
      >
        <img
          style={ProfileImg}
          src={currentImgUrl}
          alt="profile image"
          onClick={goToEditPage}
        />
        <EditPencilArea onClick={goToEditPage}>
          <HiPencil color={navbarColorCode} />
        </EditPencilArea>
        <div style={{ position: "relative", top: "5px" }}>
          <div align="left">{currentNickname}</div>
          <div align="left">사진리뷰 </div>
        </div>
      </div>
    );
  }
  return (
    <ProfileArea>
      <img style={ProfileImg} src={profileImg} alt="profile image" />
      {/* src에 이미지 경로 */}
      <div>
        <NickNameInput>닉네임</NickNameInput>
        <PostingInfo>사진리뷰 {reviewCountt}</PostingInfo>
      </div>
    </ProfileArea>
  );
};

export default UserProfile;

const ProfileImg = {
  padding: "2px",
  borderRadius: "50%",
  width: "60px",
  height: "60px",
};

const ProfileArea = styled.div`
  display: flex;
`;

const PostingInfo = styled.div`
  font-weight: 400;
  color: ${subTitleColorCode};
  margin-left: 10px;
`;

const EditPencilArea = styled.div`
  background-color: rgb(256, 256, 256, 0.8);
  position: relative;
  right: 20px;
  top: 38px;
  border-radius: 70%;
  overflow: hidden;
  width: 20px;
  height: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const NickNameInput = styled.div`
  margin-left: 10px;
`;
