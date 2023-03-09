import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { BsThreeDotsVertical } from "react-icons/bs";
import { BiMap } from "react-icons/bi";
import { FaHeart, FaRegHeart } from "react-icons/fa";
import defaultProfileImg from "../../assets/default_profile.jpeg";
import UserProfile from "../UserProfile";
import { subTitleColorCode } from "../../constants/colorCode";
import { AiOutlineHeart} from "react-icons/ai";

const FeedCard = ({ item }) => {
    const navigate = useNavigate();
    const goToDatailPage = (id) => {
        navigate(`/detail/${id}`);
    };
    console.log(item);

    return (
        <div>
            <FeedBox onClick={() => goToDatailPage(item.reviewId)}>
                <OuterBox>
                    <ProfileBox>
                        <UserProfile />
                    </ProfileBox>
                    <div style={{ display: "flex" }}>
                        <LikesButton
                            onClick={(e) => {
                                e.stopPropagation();
                            }}
                        >
                            <AiOutlineHeart size={30} />
                            {item.likeCount}
                        </LikesButton>
                        <BsThreeDotsVerticalStyle>
                            <BsThreeDotsVertical />
                        </BsThreeDotsVerticalStyle>
                    </div>
                </OuterBox>
                <ImgBox url={item.reviewImgUrl}>
                    <LocationBox>
                        <BiMap />
                        {item.restaurantAddress}
                    </LocationBox>
                </ImgBox>
                <Desc>{item.reviewContents}</Desc>
                <Tag>
                    <TagButton>{item.keywordList[0]}</TagButton>
                    <TagButton>+{item.keywordList.length - 1}</TagButton>
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
    background-image: url(${({ url }) => url});
    background-repeat: no-repeat;
    background-size: cover;
    margin: 10px auto 10px auto;
    width: 680px;
    height: 300px;
    border-radius: 15px;
`;

const LocationBox = styled.div`
    color: #fff;
    display: inline-block;
    padding: 0px 5px;
    border-radius: 5px;
    position: relative;
    top: 91%;
    left: 1%;
    background-color: rgba(0, 0, 0, 0.628);
`;

const Desc = styled.div``;

const Tag = styled.div`
    height: 30px;
    margin: 10px 0px;
    display: flex;
`;

const TagButton = styled.div`
    margin: 0px 3px;
    padding: 2px 6px;
    border-radius: 4px;

    background-color: #dddddd;
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

const LikesButton = styled.button`
    border: none;
    background-color: white;
`;
