import React, { useRef, useState } from "react";
import styled from "styled-components";

import defaultProfileImg from "../assets/default_profile.jpeg";
import { HiPencil } from "react-icons/hi";
import { naverColorCode, subTitleColorCode } from "../constants/colorCode";

import { Container } from "react-bootstrap";

import { useMutation } from "react-query";
import { uploadProfile } from "../axios/api";
import { useNavigate } from "react-router-dom";

const UserProfileEdit = () => {
  const navigate = useNavigate();

  const [newimage, setNewImage] = useState("");
  const [file, setFile] = useState("");

  const onImgPostHandler = (event) => {
    setNewImage([]);
    for (let i = 0; i < event.target.files.length; i++) {
      setFile(event.target.files[i]);
      let reader = new FileReader();
      reader.readAsDataURL(event.target.files[i]);
      reader.addEventListener("loaded", (event) => {
        newimage.src = event.target.result;
      });
      reader.onloadend = () => {
        const base = reader.result;
        if (base) {
          const baseSub = base.toString();
          setNewImage((newimage) => [...newimage, baseSub]);
        }
      };
    }
  };

  const fileInput = useRef(null);
  const onImgButton = (event) => {
    event.preventDefault();
    fileInput.current.click();
  };

  const mutation = useMutation(uploadProfile, {
    onSuccess: () => {
      // queryClient.invalidateQueries("reviews");
    },
  });

  const onSubmitPostHandler = async (event) => {
    event.preventDefault();

    const formData = new FormData();

    formData.append("imgUrl", file);

    mutation.mutate(formData);
    alert("업로드 완료!");
  };

  // 닫기 버튼 핸들러
  const backToHome = () => {
    navigate("/");
  };
  const logoutHandler = () => {
    window.localStorage.removeItem("accessToken");
    navigate("/");
  };
  return (
    <>
      <div>
        <ProfileArea>
          <img style={ProfileImg} src={defaultProfileImg} alt="profile image" />
          <EditPencilArea>
            <HiPencil />
          </EditPencilArea>
          <div>
            <Nickname>닉네임</Nickname>
            <PostingInfo>사진리뷰 40 3.2 목</PostingInfo>
          </div>
        </ProfileArea>

        <Container>
          <form encType="multipart/form-data" onSubmit={onSubmitPostHandler}>
            <input
              type="file"
              accept="img/*"
              onChange={onImgPostHandler}
              ref={fileInput}
            />
            <button>이미지 업로드</button>
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
          <LogoutButton onClick={backToHome}>닫기</LogoutButton>
          <LogoutButton onClick={logoutHandler}>로그아웃</LogoutButton>
        </Container>
      </div>
    </>
  );
};

export default UserProfileEdit;

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

const LogoutButton = styled.div`
  background-color: ${naverColorCode};
  border-radius: 5px;
  padding: 10px;
  width: 200px;
  text-align: center;
  margin: 20px;
`;
