import styled from "styled-components";
import defaultProfileImg from "../assets/default_profile.jpeg";

const UserProfile = () => {
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
  marginRight: "10px",
};

const ProfileArea = styled.div`
  display: flex;
  align-items: center;
`;

const Nickname = styled.div`
  font-weight: 800;
`;

const PostingInfo = styled.div`
  font-weight: 400;
  color: gray;
`;
