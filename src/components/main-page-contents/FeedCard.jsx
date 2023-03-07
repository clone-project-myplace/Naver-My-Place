import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { BsThreeDotsVertical } from "react-icons/bs";
import { BiMap } from "react-icons/bi";
import { FaHeart, FaRegHeart } from "react-icons/fa";
import defaultProfileImg from "../../assets/default_profile.jpeg";
import UserProfile from "../UserProfile";

const FeedCard = ({ item }) => {
  const navigate = useNavigate();
  const goToDatailPage = () => {
    navigate("/test", { state: { title: "title" } });
  };
  return (
    <div>
      <FeedBox onClick={goToDatailPage}>
        <OuterBox>
          <ProfileBox>
            <UserProfile />
          </ProfileBox>
          <BsThreeDotsVerticalStyle>
            <BsThreeDotsVertical />
          </BsThreeDotsVerticalStyle>
        </OuterBox>
        <ImgBox>
          <LocationBox>
            <BiMap />
            서대문구 창천동
          </LocationBox>
        </ImgBox>
        <Desc>
          신촌 새로 생긴 맛집인데 가볍게 술먹기 넘 좋아요! 안주도 다 맛있어요!
        </Desc>
        <Tag>
          <TagButton>음식이 맛있어요</TagButton>
          <TagButton>+1</TagButton>
        </Tag>
        <Rest>
          <RestName>미스타교자 신촌 &gt;</RestName>
          <RestLocation>중식당 ・ 서울특별시 서대문구 창천동</RestLocation>
        </Rest>
      </FeedBox>
    </div>
  );
};

export default FeedCard;

const FeedBox = styled.div`
  background-color: gray;
  margin: 0 auto;
  height: 560px;
  width: 700px;
  padding: 10px;
  margin-top: 20px;
`;

const ProfileBox = styled.div`
  background-color: #af8181;
  width: 500px;
  height: 60px;
`;

const BsThreeDotsVerticalStyle = styled.div`
  font-size: 30px;
`;

const OuterBox = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

const ImgBox = styled.div`
  background-color: yellow;
  margin: 10px auto 10px auto;
  width: 680px;
  height: 300px;
  border-radius: 15px;
`;

const LocationBox = styled.div`
  background-color: gray;
  position: relative;
  top: 91%;
  left: 1%;
`;

const Desc = styled.div`
  background-color: red;
`;

const Tag = styled.div`
  background-color: #7a70d7;
  height: 30px;
  margin: 10px 0px;
  display: flex;
`;

const TagButton = styled.div`
  background-color: #eaeaea;
  margin: 0px 3px;
  border-radius: 2px;
`;

const Rest = styled.div`
  background-color: #75d56d;
  border: 1px solid aqua;
  border-radius: 10px;
  padding: 10px;
`;

const RestName = styled.div`
  font-weight: 700;
`;
const RestLocation = styled.div`
  color: gray;
  font-weight: 300;
`;
