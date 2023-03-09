import React from "react";
import styled from "styled-components";
import { useQuery } from "react-query";
import { useParams, useNavigate } from "react-router-dom";
import DetailCard from "../components/detail-page-component/DetailCard";
import { Navbar, Button } from "react-bootstrap";
import { HiArrowLeft } from "react-icons/hi2";
import { GrHome } from "react-icons/gr";
import axios from "axios";

function Detail() {
    const config = (accessToken) => {
        return { Authorization: `${accessToken}` };
    };

    const accessToken = window.localStorage.getItem("accessToken");
    const { id } = useParams();

    const { isLoading, isError, data } = useQuery(["getReview"], () =>
        getDetail(id)
    );

    const getDetail = async (id) => {
        return await axios.get(
            `${process.env.REACT_APP_BASEURL}/api/reviews/${id}`,
            {
                headers: config(accessToken),
            }
        );
    };

    const navigate = useNavigate();
    const navigateToBack = () => {
        navigate(-1);
    };

    const detailData = data?.data.data;

    if (isError) {
    
        return <h1>에러가 발생했습니다.</h1>;
    }

    const navToHome = () => {
        navigate("/");
    };

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
                            <StyledButton
                                variant='outline-dark'
                                onClick={navToHome}
                            >
                                <GrHome /> MY플레이스홈
                            </StyledButton>
                        </Navbar.Brand>
                    </Navbar>
                    <StContainer>
                        <StNameContainer>
                            <h2>{detailData?.restaurantName}</h2>
                        </StNameContainer>
                        <StAddressContainer>
                            {detailData?.restaurantAddress}
                        </StAddressContainer>
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
`;
