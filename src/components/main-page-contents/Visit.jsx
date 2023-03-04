import VisitCard from "./VisitCard";
import axios from "axios";
import { useQuery } from "react-query";
import LoadingSpinner from "../LoadingSpinner";

const Visit = () => {
  const { isLoading, isError, error, data } = useQuery(
    ["get-feed-data"],
    () => {
      axios.get(`${process.env.REACT_APP_BASEURL}/api/reviews/visits`);
    }
  );
  if (isLoading) {
    return <LoadingSpinner />;
  }
  if (isError) {
    console.log(error);
  }

  return <VisitCard />;
};

export default Visit;
