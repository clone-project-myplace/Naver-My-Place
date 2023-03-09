import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { AiOutlineHeart } from "react-icons/ai";

const ReviewCard = ({ item }) => {
  console.log(item);

  const navigate = useNavigate();
  const goToDetailPage = (id) => {
    navigate(`/detail/${id}`, {
      state: {
        item,
      },
    });
  };

  return (
    <div onClick={() => goToDetailPage(item.reviewId)}>
      <Picture url={item.reviewImgUrl}>
        <Location align="left">{item.restaurantAddress}</Location>
        <RestName>{item.restaurantName}</RestName>
      </Picture>
    </div>
  );
};

export default ReviewCard;

const Picture = styled.div`
  background-image: url(${({ url }) => url});
  background-repeat: no-repeat;
  background-size: cover;
  height: 200px;
  width: 200px;
`;

const Location = styled.div`
  color: white;
  text-align: left;
  position: relative;
  top: 70%;
  left: 8%;
  font-weight: 400;
`;

const RestName = styled.div`
  color: white;
  text-align: left;
  position: relative;
  top: 70%;
  left: 8%;
  font-weight: 600;
`;
