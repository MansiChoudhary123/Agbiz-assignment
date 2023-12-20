import React from "react";
import "./../../Style/Highlight.css";
import name from "./../../Images/Highlight/name.png";
import capital from "./../../Images/Highlight/capital.png";
import language from "./../../Images/Highlight/language.png";
import population from "./../../Images/Highlight/population.png"
import currency from "./../../Images/Highlight/currency.png";
import religion from "./../../Images/Highlight/religion.png";
import HighlightCard from "./HighlightCard";
const data = [
  { heading: "Name", subheading: "Republic of India", image: name },
  { heading: "Capital", subheading: "Delhi", image:  capital},
    {heading: "Language",
    subheading: "Hindi, English and many regional language",
    image: language,
  },
  { heading: "Religion", subheading: "Hinduism, Islam, Cristianity, Others", image:religion},
  { heading: "Population", subheading: "136.64 Crores (2019)", image: population },
  {
    heading: "Currency",
    subheading: "Indian Rupee(INR)",
    image: currency,
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
