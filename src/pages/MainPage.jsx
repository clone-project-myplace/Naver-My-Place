import React from "react";
import { useSelector } from "react-redux";
import Feed from "../components/main-page-contents/Feed";
import Review from "../components/main-page-contents/Review";
import Visit from "../components/main-page-contents/Visit";

const MainPage = () => {
  const tabMode = useSelector((state) => state.tabModeSlice.tab);
  switch (tabMode) {
    case 0:
      return <Feed />;
    case 1:
      return <Visit />;
    case 2:
      return <Review />;
    default:
      return;
  }
};

export default MainPage;
