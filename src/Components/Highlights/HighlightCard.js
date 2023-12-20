import React from "react";

const HighlightCard = ({ data }) => {
  return (
    <div className="row">
      {data.map((item, index) => (
        <div key={index} className="col-5  m-2 highlight-card-item">
          <div className="highlight-card-item-text">
            <p className="main-heading">{item.heading}</p>
            <p className="sub-heading">{item.subheading}</p>
          </div>
          <div>
            <img
              src={item.image}
              alt={item.heading}
              className="highlight-card-item-image"
            />
          </div>
        </div>
      ))}
    </div>
  );
};

export default HighlightCard;
