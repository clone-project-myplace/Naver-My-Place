import axios from "axios";
import { useQuery } from "react-query";
import FeedCard from "./FeedCard";
import LoadingSpinner from "../LoadingSpinner";
import { useEffect, useRef, useState } from "react";
import Test from "../../pages/Test";
import styled from "styled-components";
import { Card } from "react-bootstrap";

const Feed = () => {
  // //무한 스크롤 관련
  const pageEnd = useRef();
  const [dataList, setDataList] = useState([]);
  const [page, setPage] = useState(0); //스크롤이 닿았을 때 새롭게 데이터 페이지를 바꿀 state
  const [loading, setLoading] = useState(false); //로딩 성공, 실패를 담을 state
  const [isLastPage, setIsLastPage] = useState(false);

  // const fetchPins = async (page) => {
  //   axios
  //     .get(`${process.env.REACT_APP_BASEURL}/api/reviews?page=${page}`)
  //     .then((res) => {
  //       setDataList((prev) => [...prev, ...res.data.data.reviewList]);
  //     });
  //   setLoading(true);
  // };

  const fetchPins = async (page) => {
    axios
      .get(`${process.env.REACT_APP_BASEURL}/api/reviews?page=${page}`)
      .then((res) => {
        setIsLastPage(res.data.data.isLastPage);
        setDataList((prev) => [...prev, ...res.data.data.reviewList]);
      });
    setLoading(true);
  };

  const loadMore = () => {
    setPage((prev) => prev + 1);
  };

  useEffect(() => {
    fetchPins(page);
  }, [page]);

  useEffect(() => {
    if (loading) {
      //로딩되었을 때만 실행
      const observer = new IntersectionObserver(
        (entries) => {
          if (entries[0].isIntersecting) {
            loadMore();
          }
        },
        { threshold: 0.1 }
      );
      //옵져버 탐색 시작
      observer.observe(pageEnd.current);
    }
  }, [loading]);

  /////무한 스크롤

  return (
    <div style={{ height: "120%" }}>
      {dataList.map((item, i) => (
        <FeedCard key={i} item={item} />
      ))}
      {isLastPage === true ? (
        <Card>
          <Card.Body>더 이상의 리뷰는 없어요.</Card.Body>
        </Card>
      ) : page === 0 ? (
        <LoadMore
          style={{ position: "absolute", bottom: "-5600px", opacity: "0" }}
          ref={pageEnd}
        >
          Load More
        </LoadMore>
      ) : (
        <LoadMore style={{ opacity: "0" }} ref={pageEnd}>
          This is End
        </LoadMore>
      )}
    </div>
  );
};

export default Feed;

const LoadMore = styled.div``;
