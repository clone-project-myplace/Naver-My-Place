import styled from "styled-components";
import defaultProfileImg from "../assets/default_profile.jpeg";
import { HiPencil } from "react-icons/hi";
import {
  navbarColorCode,
  naverColorCode,
  subTitleColorCode,
} from "../constants/colorCode";
import { useNavigate } from "react-router-dom";
import { Container } from "react-bootstrap";

const UserProfile = ({ editable, profileImg }) => {
  const navigate = useNavigate();

  const goToEditPage = () => {
    navigate("/myprofile");
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
          src={defaultProfileImg}
          alt="profile image"
          onClick={goToEditPage}
        />
        <EditPencilArea onClick={goToEditPage}>
          <HiPencil color={navbarColorCode} />
        </EditPencilArea>
        <div style={{ position: "relative", top: "5px" }}>
          <div align="left">닉네임</div>
          <div align="left">사진리뷰 40 3.2 목</div>
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
        <PostingInfo>사진리뷰 40 3.2 목</PostingInfo>
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
const ProfileAreatop = styled.div`
  display: flex;
  margin: 0 auto;
`;
const ProfileArea = styled.div`
  display: flex;
`;

const Nickname = styled.div`
  font-weight: 800;
  margin-left: 10px;
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

const NicknameArea = styled.div`
  input {
    background-color: gray;
    border: 1px solid yellow;
    padding: 10px;
    width: 100%;
  }
  textarea {
    width: 100%;
    padding: 10px;
  }
`;

const NickNameInput = styled.div`
  margin-left: 10px;
`;
