import React, { useRef, useState } from "react";
import UserProfile from "../components/UserProfile";
import styled from "styled-components";

import defaultProfileImg from "../assets/default_profile.jpeg";
import { HiPencil } from "react-icons/hi";
import { subTitleColorCode } from "../constants/colorCode";

import { Container } from "react-bootstrap";


const UserProfileEdit = () => {

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

    return (
        <>
            <div>
                <ProfileArea>
                    <img
                        style={ProfileImg}
                        src={defaultProfileImg}
                        alt='profile image'
                    />
                    <EditPencilArea>
                        <HiPencil />
                    </EditPencilArea>
                    <div>
                        <Nickname>닉네임</Nickname>
                        <PostingInfo>사진리뷰 40 3.2 목</PostingInfo>
                    </div>
                </ProfileArea>

                <Container>
                    <form encType='multipart/form-data'>
                        <input
                            type='file'
                            accept='img/*'
                            onChange={onImgPostHandler}
                            ref={fileInput}
                        />
                        <button>이미지 업로드</button>
                        <NicknameArea>
                            <div>닉네임</div>
                            <input type='text' />
                            <div>소개</div>
                            <textarea
                                type='text'
                                placeholder='예. 분당구  빵집 & 케이크 맛집 탐험가'
                            />
                        </NicknameArea>
                    </form>
                    <button>닫기</button>
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
