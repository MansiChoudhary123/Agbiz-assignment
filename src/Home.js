import React from "react";
import TopCourses from "./Components/TopCourses/TopCourses";
import MainComponent from "./Components/Highlights/MainComponent";
import CarrerScope from "./Components/CareerScope/CarrierScope";
const Home = () => {
  return (
    <div>
      <MainComponent />
      <TopCourses />
      <CarrerScope />
    </div>
  );
};

export default Home;
