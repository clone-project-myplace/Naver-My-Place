import React, { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import styled from "styled-components";
import { BsThreeDotsVertical } from "react-icons/bs";
import { useState } from "react";
import { useQueryClient } from "react-query";
import DeleteModal from "./DeleteModal";
import UserProfile from "../UserProfile";
import { useMutation } from "react-query";
import { deleteReview } from "../../api/getDetail";
import { getDate } from "../../utils/getDate";
import axios from "axios";

const DetailCard = ({ detailData }) => {
    // console.log(detailData);

    const accessToken = window.localStorage.getItem("accessToken");

    const [showButtons, setShowButtons] = useState(false);
    const [confirmDelete, setConfirmDelete] = useState(false);
    const navigate = useNavigate();

    const { id } = useParams();

    const queryClient = useQueryClient();

    const { mutate: deleteReviewMutate } = useMutation(
        () => deleteReview(detailData.reviewId, accessToken),
        {
            onSuccess: () => {
                queryClient.invalidateQueries("getReview");
                console.log("Item deleted");
            },
        }
    );

    const navToEditButton = () => {
        navigate("/write/edit", {
            state: { detailData },
        });
    };

    const curMemberName = null;

    //토큰 디코딩 -> memberName 가져오기
    //if문 accessToken 이 undefined 아닐때만!
    if (accessToken == !undefined) {
        const parseJwt = (accessToken) => {
            const base64Url = accessToken.split(".")[1];
            const base64 = base64Url.replace(/-/g, "+").replace(/_/g, "/");
            const jsonPayload = decodeURIComponent(
                window
                    .atob(base64)
                    .split("")
                    .map(function (c) {
                        return (
                            "%" +
                            ("00" + c.charCodeAt(0).toString(16)).slice(-2)
                        );
                    })
                    .join("")
            );

            return JSON.parse(jsonPayload);
        };

        const curMemberName = parseJwt(accessToken).sub;
    }

    console.log(curMemberName);

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
        deleteReviewMutate();
        // deleteReview2();
        navigate("/");
    };

    return (
        <DetailBox>
            <OuterBox>
                <ProfileBox>
                    <UserProfile />
                </ProfileBox>
                {detailData?.memberName == curMemberName && (
                    <BsThreeDotsVerticalStyle>
                        <BsThreeDotsVertical
                            style={{ cursor: "pointer" }}
                            onClick={handleEllipsisButtonModal}
                        />
                    </BsThreeDotsVerticalStyle>
                )}
            </OuterBox>
            <div style={{ position: "relative" }}>
                <ButtonBox>
                    {showButtons && (
                        <>
                            <ButtonContainer>
                                <EachButton onClick={navToEditButton}>
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
                <StCardContentPicture src={detailData?.reviewImgUrl} />
            </ImgBox>
            <Desc>{detailData?.reviewContents}</Desc>
            <Tag>
                {detailData?.keywordList.map((item, index) => {
                    return <TagButton key={index}> {item} </TagButton>;
                })}
                {/*map으로 데이터 꺼내주기 */}
                {/* <TagButton>음식이 맛있어요</TagButton>
                <TagButton>기분이 좋아요</TagButton> */}
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

const StCardContentPicture = styled.img`
    min-height: 280px;

    object-fit: cover;
    max-height: 400px;
    width: auto;

    max-width: 650px;

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
