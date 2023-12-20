import React from "react";

const CourseCard = ({ data }) => {
  return (
    <div className="course-detail-card">
      {data.map((item, index) => (
        <div key={index}>
          <div className="card-course-heading">
            <h3>{item.heading}</h3>
          </div>
          <div>
            {item.items.map((course, ind) => (
              <div key={ind} className="course-item">
                <img src={course.images} alt={course.name} className="course-item-image" />
                <h5>{course.name}</h5>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default CourseCard;
