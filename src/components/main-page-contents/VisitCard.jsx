import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { naverColorCode, subTitleColorCode } from "../../constants/colorCode";
import { BsFillPencilFill } from "react-icons/bs";

const VisitCard = ({ item }) => {
  const navigate = useNavigate();
  const goToWritePage = (id) => {
    navigate(`/write/create`, {
      state: {
        item,
      },
    });
  };
  return (
    <VisitCardStyle>
      <VisitTitleTopArea>
        <VisitTitle>{item.visitedRestaurantName}</VisitTitle>
        <VisitDesc>{item.visitedDate}</VisitDesc>
      </VisitTitleTopArea>
      <Reservation>{item.visitedRestaurantName} 예약</Reservation>

      {item.isReviewed ? (
        <ReviewPostButton style={{ color: "rgb(1,1,1,0.4)" }}>
          리뷰 작성 완료
        </ReviewPostButton>
      ) : (
        <ReviewPostButton onClick={goToWritePage} style={{ cursor: "pointer" }}>
          <BsFillPencilFill color={naverColorCode} /> 리뷰 쓰기
        </ReviewPostButton>
      )}
    </VisitCardStyle>
  );
};

export default VisitCard;

const VisitCardStyle = styled.div`
  background-color: #fff;
  border-radius: 6px;
  margin: 20px 10px;
  padding: 20px;
  filter: drop-shadow(0 2px 2px rgba(0, 0, 0, 0.12))
    drop-shadow(0 3px 1px rgba(0, 0, 0, 0.14))
    drop-shadow(0 1px 5px rgba(0, 0, 0, 0.12))
    drop-shadow(0 -1px 2px rgba(0, 0, 0, 0.1));
`;

const VisitTitleTopArea = styled.div`
  display: flex;
  align-items: center;
`;

const VisitTitle = styled.div`
  font-weight: 700;
  font-size: 16px;
  margin-right: 10px;
`;

const VisitDesc = styled.div`
  font-size: 12px;
  color: ${subTitleColorCode};
`;

const Reservation = styled.div`
  color: ${subTitleColorCode};
  font-weight: 600;
  font-size: 13px;
`;

const ReviewPostButton = styled.div`
  background-color: rgb(250, 251, 252, 1);
  text-align: center;
  padding: 8px;
`;
