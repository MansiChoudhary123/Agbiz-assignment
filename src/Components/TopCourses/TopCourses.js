import React from "react";
import backgorund from "./../../Images/TopCourse/background_image.png";
import bca from "./../../Images/TopCourse/BCA.jpg";
import CourseCard from "./CourseCard";
import "./../../Style/TopCourses.css";
import B from "./../../Images/TopCourse/B.Arch.jpg"
import Mca from"./../../Images/TopCourse/Mca.jpg";
import BDS from "./../../Images/TopCourse/BDS.jpg";
import MBBS from  "./../../Images/TopCourse/MBBS.jpg";
import MD from  "./../../Images/TopCourse/MD.jpg";
import BBA from  "./../../Images/TopCourse/BBA.jpg";
import MBA from  "./../../Images/TopCourse/MBA.jpg";
import Btech from  "./../../Images/TopCourse/B.Tech.jpg";
import MTech from  "./../../Images/TopCourse/MTech.jpg";
import BE from  "./../../Images/TopCourse/B.E..jpg";
import ME from  "./../../Images/TopCourse/ME.jpg";


const card1_data = [
  {
    heading: "Computer Courses",
    items: [
      {
        name: "BCA",
        images: bca,
      },
      {
        name: "MCA",
        images: Mca,
      },
    ],
  },
  {
    heading: "Medical Courses",
    items: [
      {
        name: "BDS",
        images: BDS,
      },
      {
        name: "MBBS",
        images: MBBS,
      },
      {
        name: "MD/MS",
        images: MD,
      },
    ],
  },
];
const card2_data = [
  {
    heading: "Management Courses",
    items: [
      {
        name: "BBA",
        images: BBA,
      },
      {
        name: "MBA",
        images: MBA,
      },
    ],
  },
  {
    heading: "Engineering Courses",
    items: [
      {
        name: "B.Tech",
        images: Btech,
      },
      {
        name: "B.Arch",
        images: B,
      },
      {
        name: "M.Tech",
        images: MTech,
      },
      {
        name: "B.E",
        images: BE,
      },
      {
        name: "M.E",
        images: ME,
      },
    ],
  },
];
const TopCourses = () => {
  return (
    <div className="container-top-courses">
      <div>
        <h2>Top Courses To Study India</h2>
      </div>
      <div className="top-card-intro">
        <p>
          India has high economy and high acadmic system. As a result, it is a
          good choice for students to study India.Selecting the right course
          after the intermediate is an important decision for students. Among
          all the courses, Engineering is on top of the list among Indian
          students. Candidates can search for best Engineering colleges in India
          and apply there easily.
        </p>
        <p>
          There are so many under graduate and post gradudate programs available
          in engineering, management, and medical for students.
        </p>
      </div>
      <div className="images-cards-wrapper">
        <div className="card-inside-container">
          <img src={backgorund} />
          <div className="overlapping-card">
            <CourseCard data={card1_data} />
          </div>
          <CourseCard data={card2_data} />
        </div>
        <div></div>
      </div>
    </div>
  );
};

export default TopCourses;
