import React from "react";
import { useNavigate } from "react-router-dom";

const VisitCard = () => {
  const navigate = useNavigate();
  const goToDetailPage = (id) => {
    navigate(`/detail/${id}`);
  };
  return <div onClick={() => goToDetailPage("id")}>VisitCard</div>;
};

export default VisitCard;
