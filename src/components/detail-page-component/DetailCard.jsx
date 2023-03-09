import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { BsThreeDotsVertical } from "react-icons/bs";
import { useState } from "react";
import { useQueryClient } from "react-query";
import DeleteModal from "./DeleteModal";
import { useMutation } from "react-query";
import { deleteReview, likeReview } from "../../api/getDetail";
import { getDate } from "../../utils/getDate";
import { AiOutlineHeart, AiFillHeart } from "react-icons/ai";
import LoadingSpinner from "../LoadingSpinner";

const DetailCard = ({ detailData, isLoading }) => {
  const accessToken = window.localStorage.getItem("accessToken");

  const [showButtons, setShowButtons] = useState(false);
  const [confirmDelete, setConfirmDelete] = useState(false);
  const [isfilled, setIsfilled] = useState(false);
  const navigate = useNavigate();

  const queryClient = useQueryClient();

  const { mutate: deleteReviewMutate } = useMutation(
    () => deleteReview(detailData.reviewId, accessToken),
    {
      onSuccess: () => {
        queryClient.invalidateQueries("getReview");
      },
    }
  );

  //likes
  const { mutate: likeReviewMutate } = useMutation(
    () => likeReview(detailData.reviewId, accessToken),
    {
      onSuccess: () => {
        queryClient.invalidateQueries("getReview");
      },
    }
  );
  const navToEditButton = () => {
    navigate("/write/edit", {
      state: { detailData },
    });
  };

  useEffect(() => {
    if (!detailData?.isPushed) {
      setIsfilled(false);
    } else {
      setIsfilled(true);
    }
  }, [detailData]);

  if (isLoading) {
    return <LoadingSpinner />;
  }

  //토큰 디코딩 -> memberName 가져오기
  const parseJwt = (accessToken) => {
    const base64Url = accessToken.split(".")[1];
    const base64 = base64Url.replace(/-/g, "+").replace(/_/g, "/");
    const jsonPayload = decodeURIComponent(
      window
        .atob(base64)
        .split("")
        .map(function (c) {
          return "%" + ("00" + c.charCodeAt(0).toString(16)).slice(-2);
        })
        .join("")
    );

    return JSON.parse(jsonPayload);
  };

  let curMemberName = null;

  //if문 accessToken이 null 아닐때만!
  //그래야 로그인x 유저도 detail page 접근
  if (accessToken !== null) {
    curMemberName = parseJwt(accessToken).sub;
  }

  const handleEllipsisButtonModal = () => {
    setShowButtons(!showButtons);
  };

  const handleOpenModal = () => {
    setConfirmDelete(true);
  };

  const handleCloseModal = () => {
    setConfirmDelete(false);
  };

  const handleConfirm = () => {
    handleCloseModal();
  };

  const handleDelete = () => {
    deleteReviewMutate();
    alert("삭제 완료!");
    navigate(-1);
  };

  const handleOnClickLikeBtn = (e) => {
    e.stopPropagation();
    setIsfilled(!isfilled);
    likeReviewMutate();
  };

  return (
    <DetailBox>
      <OuterBox>
        <ProfileBox>
          <ProfileArea>
            <img
              src={detailData?.profileImgUrl}
              style={ProfileImg}
              alt="profile image"
            />
            <div>
              <NickNameInput>{detailData?.memberName}</NickNameInput>
              <PostingInfo>리뷰 {detailData?.reviewCount} </PostingInfo>
            </div>
          </ProfileArea>
        </ProfileBox>
        <div style={{ display: "flex" }}>
          {accessToken === null ? (
            <LikesButton onClick={handleOnClickLikeBtn} disabled>
              {detailData?.isPushed || isfilled ? (
                <AiFillHeart size={30} color="red" />
              ) : (
                <AiOutlineHeart size={30} />
              )}
              {detailData?.likeCount}
            </LikesButton>
          ) : (
            <LikesButton onClick={handleOnClickLikeBtn}>
              {detailData?.isPushed || isfilled ? (
                <AiFillHeart size={30} color="red" />
              ) : (
                <AiOutlineHeart size={30} />
              )}
              {detailData?.likeCount}
            </LikesButton>
          )}

          {detailData?.memberName == curMemberName && (
            <BsThreeDotsVerticalStyle>
              <BsThreeDotsVertical
                style={{ cursor: "pointer" }}
                onClick={handleEllipsisButtonModal}
              />
            </BsThreeDotsVerticalStyle>
          )}
        </div>
      </OuterBox>

      <div style={{ position: "relative" }}>
        <ButtonBox>
          {showButtons && (
            <>
              <ButtonContainer>
                <EachButton onClick={navToEditButton}>수정하기</EachButton>
              </ButtonContainer>

              <ButtonContainer>
                <EachButton onClick={handleOpenModal}>삭제하기</EachButton>
              </ButtonContainer>

              <DeleteModal
                isOpen={confirmDelete}
                onClose={handleCloseModal}
                onConfirm={handleConfirm}
                handleDelete={handleDelete}
                message="리뷰를 삭제하시겠습니까?"
              />
            </>
          )}
        </ButtonBox>
      </div>

      <ImgBox>
        <StCardContentPicture src={detailData?.reviewImgUrl} />
      </ImgBox>
      <Desc>{detailData?.reviewContents}</Desc>
      <Tag>
        {detailData?.keywordList.map((item, index) => {
          return <TagButton key={index}> {item} </TagButton>;
        })}
      </Tag>
      <Footer>{getDate(detailData?.createdDate)}</Footer>
    </DetailBox>
  );
};

export default DetailCard;

const DetailBox = styled.div`
  background-color: #fff;
  margin: 0 auto;
  height: 100%;
  width: 720px;
  padding: 10px;

  box-shadow: 0 2px 6px 0 rgb(0 0 0 / 5%), 0 0 1px 0 rgb(0 21 81 / 5%);
`;

const OuterBox = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

const ProfileBox = styled.div`
  /* background-color: #af8181; */
  width: 500px;
  height: 60px;
`;

const BsThreeDotsVerticalStyle = styled.div`
  font-size: 30px;

  position: relative;

  overflow: visible;
  padding: 0;
  border: 0;
  background: none;
`;

const ImgBox = styled.div`
  position: relative;
  width: 100%;

  display: flex;
  justify-content: center;
`;

const LikesButton = styled.button`
  border: none;
  background-color: white;
`;

const StCardContentPicture = styled.img`
  min-height: 280px;

  object-fit: cover;
  max-height: 400px;
  width: auto;

  max-width: 650px;

  display: block;

  margin: 10px;
`;

const Desc = styled.div`
  margin-top: 15px;
  padding: 0 5px;
  font-size: 15px;
  color: #424242;
  line-height: 2.3rem;
`;

const Footer = styled.div`
  padding: 0 5px;
  display: inline-block;
  font-size: 12px;
  color: #9a9a9a;
  letter-spacing: -0.2px;
  vertical-align: top;
`;

const Tag = styled.div`
  height: 30px;
  margin: 10px 0px;
  display: flex;
  color: #666;
`;

const TagButton = styled.div`
  background-color: #f5f7f8;

  margin: 0px 3px;
  padding: 5px 7px;
  border-radius: 4px;
  letter-spacing: -1px;
`;

const ButtonBox = styled.div`
  right: 0;
  position: absolute;

  z-index: 2010;
  width: 184px;
  border-radius: 18px;
  background: #fff;
  box-shadow: 0 2px 6px 0 rgb(0 0 0 / 5%), 0 0 1px 0 rgb(0 21 81 / 5%);
  box-sizing: border-box;
`;

const ButtonContainer = styled.div`
  display: block;
  position: relative;
  width: 100%;
  height: 56px;
  padding-left: 17px;
  box-sizing: border-box;
  color: #333;
  text-align: left;
`;

const EachButton = styled.button`
  width: 100%;
  height: 100%;

  text-align: inherit;

  overflow: visible;
  padding: 0;
  border: 0;
  background: none;
`;

const ProfileArea = styled.div`
  display: flex;
  align-items: center;
  margin-left: 10px;
`;

const PostingInfo = styled.div`
  font-weight: 400;

  margin-left: 10px;

  color: #8f8f8f;
`;

const NickNameInput = styled.div`
  margin-left: 10px;
`;

const ProfileImg = {
  padding: "2px",
  borderRadius: "50%",
  width: "60px",
  height: "60px",
};
