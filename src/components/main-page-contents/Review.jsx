import axios from "axios";
import { Col, Container, Row } from "react-bootstrap";
import { useQuery } from "react-query";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import LoadingSpinner from "../LoadingSpinner";

import ReviewCard from "./ReviewCard";

const Review = () => {
  const navigate = useNavigate();
  const accessToken = window.localStorage.getItem("accessToken");
  const config = { Authorization: `JWT ${accessToken}` };
  const { isLoading, isError, error, data } = useQuery(
    ["get-review-data"],
    () => {
      return axios.get(
        `${process.env.REACT_APP_BASEURL}/api/myreviews`,
        config
      );
    }
  );
  if (isLoading) {
    return <LoadingSpinner />;
  }
  if (isError) {
    console.log(error);
  }

  const reviewList = data?.data.data;

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
  // if (reviewList?.length == 0) {
  //   return (
  //     <Container style={{ margin: "50px" }}>
  //       <div class="card text-center">
  //         <div class="card-header">방문한 곳이 없습니다.</div>
  //         <div class="card-body">
  //           <h5 class="card-title">여러분의 후기를 들려주세요</h5>
  //           <p class="card-text"></p>
  //           <a href="#" class="btn btn-primary">
  //             방문하러가기
  //           </a>
  //         </div>
  //         <div class="card-footer text-muted">MY 플레이스</div>
  //       </div>
  //     </Container>
  //   );
  // }

  return (
    <Container style={{ display: "flex", justifyContent: "center" }}>
      <ReviewArea>
        <Row className="justify-content-md-center">
          <Col xs lg="3" style={{ margin: "20px" }}>
            <ReviewCard />
          </Col>
          <Col xs lg="3" style={{ margin: "20px" }}>
            <ReviewCard />
          </Col>
          <Col xs lg="3" style={{ margin: "20px" }}>
            <ReviewCard />
          </Col>
          <Col xs lg="3" style={{ margin: "20px" }}>
            <ReviewCard />
          </Col>
          <Col xs lg="3" style={{ margin: "20px" }}>
            <ReviewCard />
          </Col>
        </Row>{" "}
      </ReviewArea>
    </Container>
  );
};

export default Review;

const ReviewArea = styled.div`
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
  transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);
  margin: 50px 0px 50px 0px;
  background-color: #eaeaea;
  padding: 50px;
  display: flex;
  width: 800px;
`;
