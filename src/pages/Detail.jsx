import React from "react";
import styled from "styled-components";
import { useMutation, useQuery, useQueryClient } from "react-query";
import { useParams, useNavigate } from "react-router-dom";
import { getDetail } from "../api/getDetail";
import DetailCard from "../components/detail-page-component/DetailCard";
import { Navbar, Button } from "react-bootstrap";
import { HiArrowLeft } from "react-icons/hi2";
import { GrHome } from "react-icons/gr";

function Detail() {
    const { id } = useParams();

    const { isLoading, isError, data } = useQuery(["getReview"], () =>
        getDetail(id)
    );


    const navigate = useNavigate();
    const navigateToBack = () => {
        navigate(-1);
    };

    const detailData = data?.data.data;

    if (isError) {
        // 큼..!
        return <h1>에러가 발생했습니다.</h1>;
    }

    return (
        <>
            <Wrapper>
                <Header>
                    <Navbar
                        expand='lg'
                        sticky='top'
                        style={{
                            display: "flex",
                            justifyContent: "space-between",
                        }}
                    >
                        <Navbar.Brand
                            onClick={navigateToBack}
                            style={{ cursor: "pointer" }}
                        >
                            <HiArrowLeft size={34} />
                        </Navbar.Brand>
                        <Navbar.Brand>
                            <StyledButton variant='outline-dark'>
                                <GrHome /> MY플레이스홈
                            </StyledButton>
                        </Navbar.Brand>
                    </Navbar>
                    <StContainer>
                        <StNameContainer>
                            {/* <h2>음식점이름</h2> */}
                            <h2>{detailData?.restaurantName}</h2>
                            <div>❤️</div>
                        </StNameContainer>
                        {/* <StAddressContainer>주소</StAddressContainer> */}
                        <StAddressContainer>{detailData?.restaurantAddress}</StAddressContainer>
                    </StContainer>
                </Header>
                <DetailCard detailData={detailData} isLoading={isLoading} />
            </Wrapper>
        </>
    );
}

export default Detail;

const Wrapper = styled.div`
    /* background: #f9f9f9; */
    height: 100%;
`;

const Header = styled.div`
    position: relative;
    background: #fff;
    box-shadow: 0 0 10px rgb(0 0 0 / 10%);
`;

const StContainer = styled.div`
    position: relative;
    padding: 12px 24px 20px 20px;
    background: #fff;
`;

const StNameContainer = styled.div`
    width: 100%;
    max-width: 720px;
    margin: 0 auto;
    box-sizing: border-box;
    display: flex;

    justify-content: space-between;
`;

const StAddressContainer = styled.div`
    width: 100%;
    max-width: 720px;
    margin: 0 auto;
    box-sizing: border-box;
    display: flex;
`;

const StyledButton = styled(Button)`
    &:hover {
        background-color: transparent;
        color: #212529;
    }
    &:active {
    background-color: transparent;
    color: #212529;
    box-shadow: none;
  }

    /* border-color: #b5b5b5; */
`;
