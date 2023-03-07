import React from "react";
import styled from "styled-components";
import { useMutation, useQuery, useQueryClient } from "react-query";
import { useParams, useNavigate } from "react-router-dom";
import { getDetail } from "../api/getDetail";
import DetailCard from "../components/detail-page-component/DetailCard";
import { Navbar } from "react-bootstrap";
import { HiArrowLeft } from "react-icons/hi2";

function Detail() {
    const { id } = useParams();

    const { isLoading, isError, data } = useQuery(["getReview"], () =>
        getDetail(id)
    );

    const navigate = useNavigate();
    const navigateToBack = () => {
        navigate(-1);
    };

    const detailData = data?.data;

    console.log(detailData);

    if (isLoading) {
        // 로딩스피너로 바꿔야함
        return <h1>로딩중입니다!</h1>;
    }

    if (isError) {
        // 큼..!
        return <h1>에러가 발생했습니다.</h1>;
    }

    return (
        <>
            <Wrapper>
                <Header>
                    <Navbar expand='lg' sticky='top'>
                        <Navbar.Brand
                            onClick={navigateToBack}
                            style={{ cursor: "pointer" }}
                        >
                            <HiArrowLeft size={24} />
                        </Navbar.Brand>
                    </Navbar>
                    <StContainer>
                        <StNameContainer>
                            <h1>음식점이름</h1>
                            <div>❤️</div>
                        </StNameContainer>
                        <StAddressContainer>주소</StAddressContainer>
                    </StContainer>
                </Header>
                <DetailCard detailData={detailData} />
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
