import axios from "axios";
import { Col, Container, Row } from "react-bootstrap";
import { useQuery } from "react-query";
import styled from "styled-components";
import LoadingSpinner from "../LoadingSpinner";

import ReviewCard from "./ReviewCard";

const Review = () => {
  const accessToken = window.localStorage.getItem("accessToken");
  const config = { Authorization: `JWT ${accessToken}` };
  const { isLoading, isError, error, data } = useQuery(
    ["get-review-data"],
    () => {
      return axios
        .get(`${process.env.REACT_APP_BASEURL}/api/myreviews`, config)
        .then((res) => console.log(res))
        .catch((err) => console.log(err));
    }
  );
  if (isLoading) {
    return <LoadingSpinner />;
  }
  if (isError) {
    console.log(error);
  }

  return (
    <Container>
      <Row className="justify-content-md-center">
        <ReviewArea>
          <Col xs lg="4">
            <ReviewCard />
          </Col>
          <Col xs lg="4">
            <ReviewCard />
          </Col>
          <Col xs lg="4">
            <ReviewCard />
          </Col>
        </ReviewArea>
      </Row>
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
  text-align: center;
`;
