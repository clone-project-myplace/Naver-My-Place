import axios from "axios";
import React from "react";
import { useQuery } from "react-query";
import LoadingSpinner from "./LoadingSpinner";

const Likes = () => {
  const token = window.localStorage.getItem("token");
  const { isLoading, isError, error, data } = useQuery(
    ["getLikesCount"],
    () => {
      axios.get("api");
    }
  );
  if (isLoading) {
    return <LoadingSpinner />;
  }
  if (isError) {
    console.log(error);
  }

  const toggleLikes = () => {
    axios.post(`${process.env.REACT_APP_BASEURL}/api/reviews/${id}`);
  };
  return <div onClick={toggleLikes}>Likes</div>;
};

export default Likes;
