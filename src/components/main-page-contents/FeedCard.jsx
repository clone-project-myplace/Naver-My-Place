import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { BsThreeDotsVertical } from "react-icons/bs";
import { BiMap } from "react-icons/bi";
import { FaHeart, FaRegHeart } from "react-icons/fa";
import defaultProfileImg from "../../assets/default_profile.jpeg";
import UserProfile from "../UserProfile";
import { subTitleColorCode } from "../../constants/colorCode";

const FeedCard = ({ item }) => {
  const navigate = useNavigate();
  const goToDatailPage = () => {
    navigate(`/detail`, { state: { title: "title" } });
  };
  console.log(item);

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
        <ImgBox url={item.reviewImgUrl}>
          <LocationBox>
            <BiMap />
            {item.restaurantAddress}
          </LocationBox>
        </ImgBox>
        <Desc>{item.reviewContents}</Desc>
        <Tag>
          <TagButton>음식이 맛있어요</TagButton>
          <TagButton>+1</TagButton>
        </Tag>
        <Rest>
          <RestName>{item.restaurantName} &gt;</RestName>
          <RestLocation>{item.restaurantAddress}</RestLocation>
        </Rest>
      </FeedBox>
    </div>
  );
};

export default FeedCard;

const FeedBox = styled.div`
  margin: 0 auto;
  height: 560px;
  width: 700px;
  padding: 10px;
  margin-top: 20px;
`;

const ProfileBox = styled.div`
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
  background-color: #d8ffc2;
  margin: 10px auto 10px auto;
  width: 680px;
  height: 300px;
  border-radius: 15px;
`;

const LocationBox = styled.div`
  display: inline-block;
  padding-left: 5px;
  border-radius: 10px;
  position: relative;
  top: 91%;
  left: 1%;
  background-color: rgba(0, 0, 0, 0.5);
`;

const Desc = styled.div``;

const Tag = styled.div`
  height: 30px;
  margin: 10px 0px;
  display: flex;
`;

const TagButton = styled.div`
  margin: 0px 3px;
  border-radius: 2px;
`;

const Rest = styled.div`
  border-radius: 10px;
  padding: 10px;
  border: 1px solid ${subTitleColorCode};
`;

const RestName = styled.div`
  font-weight: 700;
`;
const RestLocation = styled.div`
  color: gray;
  font-weight: 300;
`;
