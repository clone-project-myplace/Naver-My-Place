import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import defaultProfileImg from "../../assets/default_profile.jpeg";

const ReviewCard = ({ item }) => {
  const navigate = useNavigate();
  const goToDetailPage = (id) => {
    navigate(`/detail/${id}`, {
      state: {
        restaurantId: item.reviewId,
      },
    });
  };
  console.log(item);
  return (
    <div onClick={goToDetailPage}>
      <Picture>
        <Location align="left">울산시 태화동</Location>
        <RestName>토리스</RestName>
      </Picture>
    </div>
  );
};

export default ReviewCard;

const Picture = styled.div`
  background-image: url("data:image/jpeg;base64,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");
  height: 200px;
  width: 200px;
`;

const Location = styled.div`
  color: white;
  text-align: left;
  position: relative;
  top: 70%;
  left: 8%;
`;

const RestName = styled.div`
  color: white;
  text-align: left;
  position: relative;
  top: 70%;
  left: 8%;
`;
