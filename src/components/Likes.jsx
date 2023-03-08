// import axios from "axios";
// import React from "react";
// import { useQuery } from "react-query";
// import LoadingSpinner from "./LoadingSpinner";

// const Likes = () => {
//   const accessToken = window.localStorage.getItem("accessToken");
//   const { isLoading, isError, error, data } = useQuery(
//     ["getLikesCount"],
//     () => {
//       console.log("ddd");
//     }
//   );
//   if (isLoading) {
//     return <LoadingSpinner />;
//   }
//   if (isError) {
//     console.log(error);
//   }

//   const toggleLikes = () => {
//     console.log(accessToken);
//   };
//   return <div onClick={toggleLikes}>Likes</div>;
// };

// export default Likes;
