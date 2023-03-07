import styled from "styled-components";
import defaultProfileImg from "../assets/default_profile.jpeg";
import { HiPencil } from "react-icons/hi";
import { subTitleColorCode } from "../constants/colorCode";

const UserProfile = ({ editable }) => {
  const editModalOnHandler = () => {
    console.log("dd");
  };
  if (editable) {
    return (
      <ProfileArea>
        <img
          style={ProfileImg}
          src={defaultProfileImg}
          alt="profile image"
          onClick={editModalOnHandler}
        />
        {/* src에 이미지 경로 */}
        <EditPencilArea onClick={editModalOnHandler}>
          <HiPencil />
        </EditPencilArea>
        <div>
          <Nickname>닉네임</Nickname>
          <PostingInfo>사진리뷰 40 3.2 목</PostingInfo>
        </div>
      </ProfileArea>
    );
  }
  return (
    <ProfileArea>
      <img style={ProfileImg} src={defaultProfileImg} alt="profile image" />
      {/* src에 이미지 경로 */}
      <div>
        <Nickname>닉네임</Nickname>
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

const ProfileArea = styled.div`
  display: flex;
  align-items: center;
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
  background-color: gray;
  position: relative;
  right: 20px;
  top: 15px;
  border-radius: 70%;
  overflow: hidden;
  width: 20px;
  height: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
`;
