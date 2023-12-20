import React from "react";
import "./../../Style/Highlight.css";
import name from "./../../Images/Highlight/name.png";
import HighlightCard from "./HighlightCard";
const data = [
  { heading: "Name", subheading: "Republic of India", image: name },
  { heading: "Capital", subheading: "Delhi", image: name },
  {
    heading: "Language",
    subheading: "Hindi, English and many regional language",
    image: name,
  },
  { heading: "Name", subheading: "Republic of India", image: name },
  { heading: "Capital", subheading: "Delhi", image: name },
  {
    heading: "Language",
    subheading: "Hindi, English and many regional language",
    image: name,
  },
];
const MainComponent = () => {
  return (
    <div className="main-container-highlight">
      <div className="highlight-card-heading">
        <h1>Highlight about India</h1>
      </div>
      <div className="col-10 m-auto">
        <HighlightCard data={data} />
      </div>
    </div>
  );
};

export default MainComponent;
