import React from "react";
import { useNavigate } from "react-router-dom";

const ReviewCard = () => {
  const navigate = useNavigate();
  const goToDetailPage = (id) => {
    navigate(`/detail/${id}`);
  };
  return <div onClick={() => goToDetailPage("id")}>ReviewCard</div>;
};

export default ReviewCard;
