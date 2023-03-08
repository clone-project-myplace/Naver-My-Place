import styled from "styled-components";
import defaultProfileImg from "../assets/default_profile.jpeg";
import { HiPencil } from "react-icons/hi";
import { subTitleColorCode } from "../constants/colorCode";
import ReactModal from "react-modal";
import { useCallback, useRef, useState } from "react";
import { Container } from "react-bootstrap";
import axios from "axios";

const UserProfile = ({ editable }) => {
  const [isOpen, setIsOpen] = useState(false);
  const inputRef = useRef(null);
  const editModalOnHandler = () => {
    setIsOpen(true);
  };
  const onUploadImage = useCallback((e) => {
    if (!e.target.files) {
      return;
    }

    const formData = new FormData();
    formData.append("image", e.target.files[0]);

    axios({
      baseURL: "",
      url: "/images/:username/thumbnail",
      method: "POST",
      data: formData,
      headers: {
        "Content-Type": "multipart/form-data",
      },
    })
      .then((response) => {
        console.log(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  const onUploadImageButtonClick = useCallback(() => {
    if (!inputRef.current) {
      return;
    }
    inputRef.current.click();
  }, []);

  if (editable) {
    return (
      <div>
        <ProfileArea>
          <img
            style={ProfileImg}
            src={defaultProfileImg}
            alt="profile image"
            onClick={editModalOnHandler}
          />
          <EditPencilArea onClick={editModalOnHandler}>
            <HiPencil />
          </EditPencilArea>
          <div>
            <Nickname>닉네임</Nickname>
            <PostingInfo>사진리뷰 40 3.2 목</PostingInfo>
          </div>
        </ProfileArea>
        <ReactModal isOpen={isOpen}>
          <Container>
            <form>
              <input
                type="file"
                accept="image/*"
                ref={inputRef}
                onChange={onUploadImage}
              />
              <button onClick={onUploadImageButtonClick}>이미지 업로드</button>
              <NicknameArea>
                <div>닉네임</div>
                <input type="text" />
                <div>소개</div>
                <textarea
                  type="text"
                  placeholder="예. 분당구  빵집 & 케이크 맛집 탐험가"
                />
              </NicknameArea>
            </form>
            <button onClick={() => setIsOpen(false)}>닫기</button>
          </Container>
        </ReactModal>
      </div>
    );
  }
  return (
    <ProfileArea>
      <img style={ProfileImg} src={defaultProfileImg} alt="profile image" />
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

const NickNameInput = styled.div``;
