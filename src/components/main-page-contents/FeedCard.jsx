import React from "react";
import { useNavigate } from "react-router-dom";

const FeedCard = ({ item }) => {
  const navigate = useNavigate();
  return (
    <div onClick={() => navigate(`/detail/id`)}>
      <div></div>
      <div>이미지</div>
      <div>내용</div>
      <div>태그</div>
      <div>주소</div>
    </div>
  );
};

export default FeedCard;
