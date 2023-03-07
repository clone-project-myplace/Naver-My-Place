import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import styled from "styled-components";
import { BsThreeDotsVertical } from "react-icons/bs";
import { useState } from "react";
import { useQueryClient } from "react-query";
import DeleteModal from "./DeleteModal";
import UserProfile from "../UserProfile";

const DetailCard = ({ detailData }) => {
    const [showButtons, setShowButtons] = useState(false);
    const [confirmDelete, setConfirmDelete] = useState(false);
    const navigate = useNavigate();

    const { id } = useParams();

    const queryClient = useQueryClient();

    // const { mutate: deleteReviewMutate } = useMutation(
    //     () =>
    //         deleteReview(
    //             detailData.reviewId,
    //             localStorage.getItem("accessToken")
    //         ),
    //     {
    //         onSuccess: () => {
    //             queryClient.invalidateQueries("getReview");
    //             console.log("Item deleted");
    //         },
    //     }
    // );

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
        console.log("Confirmed");
        handleCloseModal();
    };

    const handleDelete = () => {
        // deleteReviewMutate();
        navigate("/");
    };

    return (
        <DetailBox>
            <OuterBox>
                <ProfileBox>
                    <UserProfile />
                </ProfileBox>
                <BsThreeDotsVerticalStyle>
                    <BsThreeDotsVertical
                        style={{ cursor: "pointer" }}
                        onClick={handleEllipsisButtonModal}
                    />
                </BsThreeDotsVerticalStyle>
            </OuterBox>
            <div style={{position:"relative"}}>
                <ButtonBox>
                    {showButtons && (
                        <>
                            <ButtonContainer>
                                <EachButton
                                    onClick={() => alert("여기서 수정화면으로")}
                                >
                                    수정하기
                                </EachButton>
                            </ButtonContainer>

                            <ButtonContainer>
                                <EachButton onClick={handleOpenModal}>
                                    삭제하기
                                </EachButton>
                            </ButtonContainer>

                            <DeleteModal
                                isOpen={confirmDelete}
                                onClose={handleCloseModal}
                                onConfirm={handleConfirm}
                                handleDelete={handleDelete}
                                message='리뷰를 삭제하시겠습니까?'
                            />
                        </>
                    )}
                </ButtonBox>
            </div>

            <ImgBox>
                <StCardContentPicture
                    // src={detailData.imgUrl}
                    src='https://pup-review-phinf.pstatic.net/MjAyMzAzMDZfMTQ3/MDAxNjc4MDgwMDU3MDUw.S-7WQ-8rC6FcvN5_KtEAdqubxs_nXzZ7uhv94RkDSZkg.8xoZ5_5SdhqRb_zeg8ysvT3F1A8bi7zGppO6TD-n3Sog.JPEG/2C860D91-1E4B-492E-B71C-D1C1EDBA67EF.jpeg?type=w828_60_sharpen'
                />
            </ImgBox>
            <Desc>
                신촌 새로 생긴 맛집인데 가볍게 술먹기 넘 좋아요! 안주도 다
                맛있어요!
            </Desc>
            <Tag>
                <TagButton>음식이 맛있어요</TagButton>
                <TagButton>기분이 좋아요</TagButton>
            </Tag>
            <Footer>2023-03-03</Footer>
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

const StCardContentPicture = styled.img`
    min-height: 280px;

    object-fit: cover;
    max-height: 430px;
    width: auto;

    display: block;

    margin: 10px;
`;

const Desc = styled.div``;

const Footer = styled.div``;

const Tag = styled.div`
    height: 30px;
    margin: 10px 0px;
    display: flex;
`;

const TagButton = styled.div`
    background-color: #eaeaea;
    margin: 0px 3px;
    border-radius: 2px;
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
