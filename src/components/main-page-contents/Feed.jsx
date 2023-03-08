import axios from "axios";
import { useQuery } from "react-query";
import FeedCard from "./FeedCard";
import LoadingSpinner from "../LoadingSpinner";
import { useEffect, useRef, useState } from "react";
import Test from "../../pages/Test";

const Feed = () => {
  const [dataList, setDataList] = useState([]);
  // //무한 스크롤 관련
  const pageEnd = useRef();
  const [pins, setPins] = useState([]);
  const [page, setPage] = useState(1); //스크롤이 닿았을 때 새롭게 데이터 페이지를 바꿀 state
  const [loading, setLoading] = useState(false); //로딩 성공, 실패를 담을 state

  const fetchPins = async (page) => {
    axios
      .get(`${process.env.REACT_APP_BASEURL}/api/reviews?page=${page}`)
      .then((res) => {
        console.log(res.data.data.reviewList);
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
        { threshold: 1 }
      );
      //옵져버 탐색 시작
      observer.observe(pageEnd.current);
    }
  }, [loading]);

  /////무한 스크롤

  // const { isLoading, isError, error, data } = useQuery(
  //   ["get-feed-data"],
  //   () => {
  //     return axios
  //       .get(`${process.env.REACT_APP_BASEURL}/api/reviews`)
  //       .then((res) => {
  //         setDataList(res.data.data.reviewList);
  //       });
  //   }
  // );
  // if (isLoading) {
  //   return <LoadingSpinner />;
  // }
  // if (isError) {
  //   console.log(error);
  // }
  // console.log("dataList : ", dataList);

  return (
    <div>
      {dataList.map((item, i) => (
        <FeedCard key={i} item={item} />
      ))}
      <div style={{ height: "1000px" }}>dsaf</div>
      <div ref={pageEnd}>This is End</div>
    </div>
  );
};

export default Feed;
