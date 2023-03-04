import axios from "axios";
import { useQuery } from "react-query";
import FeedCard from "./FeedCard";
import LoadingSpinner from "../LoadingSpinner";

const Feed = () => {
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
      MainPage
      {data?.data.map((item) => (
        <FeedCard item={item} />
      ))}
      <FeedCard />
    </div>
  );
};

export default Feed;
