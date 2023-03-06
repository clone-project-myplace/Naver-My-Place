import axios from "axios";
import { useQuery } from "react-query";
import FeedCard from "./FeedCard";
import LoadingSpinner from "../LoadingSpinner";
import { useEffect, useRef, useState } from "react";

const Feed = () => {
  const pageEnd = useRef();

  //무한 스크롤 관련
  const [pins, setPins] = useState([]);
  const [page, setPage] = useState(1); //스크롤이 닿았을 때 새롭게 데이터 페이지를 바꿀 state
  const [loading, setLoading] = useState(false); //로딩 성공, 실패를 담을 state

  const loadMore = () => {
    setPage((prev) => prev + 1);
  };

  const fetchPins = async (page) => {
    const API_KEY = "X-X14z7mHkX89GXieytSzVqqbqtkhF9V-Q0tGKDo75I";
    const res = await fetch(
      `https://api.unsplash.com/photos/?client_id=${API_KEY}&page=${page}&per_page=10`
    );
    const data = await res.json();
    setPins((prev) => [...prev, ...data]);
    setLoading(true);
  };

  useEffect(() => {
    fetchPins(page);
  }, [page]);

  /////무한 스크롤

  useEffect(() => {
    if (loading) {
      //로딩되었을 때만 실행
      const observer = new IntersectionObserver(
        (entries) => {
          if (entries[0].isIntersecting) {
            loadMore();
          }
        },
        { threshold: 0.7 }
      );
      //옵져버 탐색 시작
      observer.observe(pageEnd.current);
    }
  }, [loading]);

  const { isLoading, isError, error, data } = useQuery(
    ["get-feed-data"],
    () => {
      axios.get(`${process.env.REACT_APP_BASEURL}/api/reviews`);
    }
  );
  if (isLoading) {
    return <LoadingSpinner />;
  }
  if (isError) {
    console.log(error);
  }

  return (
    <div>
      <FeedCard />
      <FeedCard />
      <div ref={pageEnd}>Loading</div>
    </div>
  );
};

export default Feed;
