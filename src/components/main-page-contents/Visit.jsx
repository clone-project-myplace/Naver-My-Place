import VisitCard from "./VisitCard";
import axios from "axios";
import { useQuery } from "react-query";
import LoadingSpinner from "../LoadingSpinner";
import styled from "styled-components";
import { Container } from "react-bootstrap";
import { useState } from "react";

const Visit = () => {
  const accessToken = window.localStorage.getItem("accessToken");
  console.log(accessToken);
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
    console.log(error);
  }

  const visitList = data.data.data;

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
