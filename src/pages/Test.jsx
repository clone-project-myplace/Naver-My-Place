import axios from "axios";
import React, { useEffect, useState, useContext } from "react";
import { useQuery } from "react-query";
import Likes from "../components/Likes";
import FeedCard from "../components/main-page-contents/FeedCard";
import TestComp from "../components/TestComp";

// ...

function Test() {
  const [dataList, setDataList] = useState([]);
  const [page, setPage] = useState(0);
  const [target, setTarget] = useState(null);
  const [testList, setTestList] = useState([]);
  // ...
  useEffect(() => {
    console.log("page: ", page);
    setTestList([...testList, ...dataList]);
    console.log(testList);
  }, [page]);
  const { data } = useQuery(["getTestData"], () => {
    return axios.get("http://localhost:5000/memo").then((res) => {
      setDataList(res.data.reviewList);
    });
  });

  const _fetchProductItems = (page) => {
    axios.get("http://localhost:5000/memo").then((res) => {
      setDataList([...dataList, ...res.data.reviewList]);
      setPage((prev) => prev + 1);
    });
  };

  useEffect(() => {
    let observer;
    if (target) {
      observer = new IntersectionObserver(_onIntersect, { threshold: 1 });
      observer.observe(target);
    }

    return () => observer && observer.disconnect();
  }, [target]);

  const _onIntersect = ([entry]) => {
    if (entry.isIntersecting) {
      _fetchProductItems();
    }
  };

  // ...

  return (
    <>
      {dataList.map((item, i) => (
        <FeedCard key={i} item={item} />
      ))}
      <div style={{ height: "1000px" }}></div>
      <div ref={setTarget}>loading</div>
    </>
  );
}

export default Test;
