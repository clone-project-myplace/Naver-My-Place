import VisitCard from "./VisitCard";
import axios from "axios";
import { useQuery } from "react-query";
import LoadingSpinner from "../LoadingSpinner";
import styled from "styled-components";
import { Container } from "react-bootstrap";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Visit = () => {
  const navigate = useNavigate();
  const accessToken = window.localStorage.getItem("accessToken");
  const config = {
    headers: {
      Authorization: accessToken,
    },
  };
  const { isLoading, isError, error, data } = useQuery(
    ["get-visit-data"],
    () => {
      return axios.get(
        `${process.env.REACT_APP_BASEURL}/api/reviews/visits`,
        config
      );
    }
  );
  if (isLoading) {
    return <LoadingSpinner />;
  }
  if (isError) {
  }

  const visitList = data.data.data;

  //비로그인 상태일 때 처리
  const goToLoginPage = () => {
    navigate("/login");
  };
  if (!accessToken) {
    return (
      <Container style={{ margin: "50px" }}>
        <div class="card text-center">
          <div class="card-header">로그아웃 상태입니다.</div>
          <div class="card-body">
            <h5 class="card-title">로그인하고 여러분의 후기를 들려주세요</h5>
            <p class="card-text"></p>
            <div class="btn btn-primary" onClick={goToLoginPage}>
              로그인
            </div>
          </div>
          <div class="card-footer text-muted">MY 플레이스</div>
        </div>
      </Container>
    );
  }

  // 방문한 곳이 없을때 처리
  if (visitList?.length == 0) {
    return (
      <Container style={{ margin: "50px" }}>
        <div class="card text-center">
          <div class="card-header">방문한 곳이 없습니다.</div>
          <div class="card-body">
            <h5 class="card-title">여러분의 후기를 들려주세요</h5>
            <p class="card-text"></p>
            <a href="#" class="btn btn-primary">
              방문하러가기
            </a>
          </div>
          <div class="card-footer text-muted">MY 플레이스</div>
        </div>
      </Container>
    );
  }

  return (
    <Container>
      <VisitArea>
        {visitList?.map((item, i) => {
          return <VisitCard key={i} item={item} />;
        })}
      </VisitArea>
    </Container>
  );
};

export default Visit;

const VisitArea = styled.div`
  padding: 20px;
`;

const MonthIndex = styled.div`
  font-weight: 700;
  font-size: 20px;
  margin: 20px 0px 0px 10px;
`;
