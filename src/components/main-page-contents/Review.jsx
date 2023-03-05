import axios from "axios";
import { useQuery } from "react-query";
import LoadingSpinner from "../LoadingSpinner";

import ReviewCard from "./ReviewCard";

const Review = () => {
  const { isLoading, isError, error, data } = useQuery(
    ["get-feed-data"],
    () => {
      axios.get(`${process.env.REACT_APP_BASEURL}/api/myreviews`);
    }
  );
  if (isLoading) {
    return <LoadingSpinner />;
  }
  if (isError) {
    console.log(error);
  }

  return <ReviewCard />;
};

export default Review;
