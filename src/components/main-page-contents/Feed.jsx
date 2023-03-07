import axios from "axios";
import { useQuery } from "react-query";
import FeedCard from "./FeedCard";
import LoadingSpinner from "../LoadingSpinner";
import { useEffect, useRef, useState } from "react";

const Feed = () => {
  const pageEnd = useRef(null);

  //무한 스크롤 관련
  const [dataList, setDataList] = useState([]);
  const [page, setPage] = useState(0); //스크롤이 닿았을 때 새롭게 데이터 페이지를 바꿀 state
  const [loading, setLoading] = useState(false); //로딩 성공, 실패를 담을 state

  const options = { threshold: 1.0 };
  const callback = (entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        observer.unobserve(entry.pageEnd);
        console.log("화면에서 노출됨");
      } else {
        console.log("화면에서 제외됨");
      }
    });
  };
  const observer = new IntersectionObserver(callback, options);

  /////무한 스크롤

  const { isLoading, isError, error, data } = useQuery(
    ["get-feed-data"],
    () => {
      return axios
        .get(`${process.env.REACT_APP_BASEURL}/api/reviews`)
        .then((res) => {
          setDataList(res.data?.data.reviewList);
        });
    }
  );
  if (isLoading) {
    return <LoadingSpinner />;
  }
  if (isError) {
    console.log(error);
  }

  console.log(pageEnd);

  return (
    <div>
      {dataList.map((item, i) => (
        <FeedCard key={i} item={item} />
      ))}
      <div style={{ height: "1000px" }}>dsaf</div>
      <div ref={pageEnd}>Loading</div>
    </div>
  );
};

export default Feed;
