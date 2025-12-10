import { React, useEffect } from 'react';
import {
  FaDownload,
  FaGraduationCap,
  FaLaptopCode
} from "react-icons/fa";
import htmlIcon from "../assets/html.png";
import cssIcon from "../assets/css.png";
import reactIcon from "../assets/react.png";
// import sassIcon from "../assets/sass.png";
import javascriptIcon from "../assets/javascript.png";
import bootstrapIcon from "../assets/bootstrap.png";
import node from "../assets/node.png";
import phpIcon from "../assets/php.png";
import python from "../assets/python.png";
import mysql from "../assets/mysql.png";
import jqueryIcon from "../assets/jquery.png";
import larvelIcon from "../assets/larvel.png";
import resume from "../assets/resume.pdf"; 

function About() {

  useEffect(() => {
    window.scrollTo(0, 0)
  }, []);


  const techStack = [
    { icon: python, label: "Python", alt: "pyhtonIcon" },
    { icon: node, label: "Node.js", alt: "nodeIcon" },
    { icon: phpIcon, label: "PHP", alt: "phpIcon" },
    { icon: javascriptIcon, label: "JavaScript", alt: "javascriptIcon" },
    { icon: mysql, label: "MySQL", alt: "MySQLIcon" },
    { icon: reactIcon, label: "React", alt: "reactIcon" },
    { icon: htmlIcon, label: "HTML", alt: "htmlIcon" },
    { icon: cssIcon, label: "CSS", alt: "cssIcon" },
    { icon: jqueryIcon, label: "Jquery", alt: "jqueryIcon" },
    { icon: bootstrapIcon, label: "Bootstrap", alt: "bootstrapIcon" },
    // { icon: sassIcon, label: "Sass", alt: "sassIcon" },
    // { icon: angularIcon, label: "AngularJS", alt: "angularIcon" },
    // { icon: larvelIcon, label: "Laravel", alt: "laravelIcon" },
  ];

  const experinece = [
    { expe: 0.8, para: "Year Of Experience" },
    { expe: 2, para: "Months Of Trainee", },

  ];
  const myexperinece = [
    {com_name:"Nscript Web Studios ", icon: <FaLaptopCode/>, years: "Apr 2025 - Present", field: "Web Developer", para: "As a Software Developer at nScript Technologies, I contributed to enhancing operational efficiency, user experience, and backend performance. I worked across both front-end and back-end components, using PHP, JavaScript, MySQL, HTML, and CSS to build and maintain dynamic, database-driven web applications." },
    

  ];
  const myeducation = [
    { icon: <FaGraduationCap/>, years: "Mar 2016 - Apr 2017", field: "Higher Secondary 12TH", para: "Achieved 50% in the Higher Secondary Board Examination under the Tamil Nadu State Board, India." },
    { icon: <FaGraduationCap/>, years: "Mar 2022 - Apr 2025", field: "BCA Computer Application", para: "Graduated with a Bachelor's degree in BCA, Madras University Chennai" },


  ];
// FaLaptopCode
  return (
    <>
      <section className="about">
        <h1 className="heading">
          {" "}
          about <span> me </span>{" "}
        </h1>
        <div className="row">
          <div className="info-container">
            <h1> personal info </h1>
            <div className="box-container">
              <div className="box">
                <h3> <span> Name : </span>  Naveen Akash J </h3>
                <h3> <span> Age : </span> 25 </h3>
                <h3> <span> Email : </span> akashna049@gmail.com </h3>
                <h3>
                  {" "}
                  <span> Address : </span>
                  No 1, Jinna street, Udayendiram, Vaniyambadi, Tirupattur-635 754{" "}
                </h3>
              </div>
              <div className="box">

                <h3> <span> Skill : </span> Full Stack Developer </h3>
                <h3> <span> Experience : </span> 0.8 </h3>
                <h3> <span> Language : </span> Tamil, English </h3>
              </div>
            </div>
            <div className="aboutMeBtn">
          <a href={resume} download="Naveen Akash JResume" target='_blank'  className="btnAbout" >
            {" "}
            Download CV{" "}
            <span>
              {" "}
              <FaDownload className="downloadBtnIcon" />{" "}
            </span>{" "}
          </a>
        </div>
          </div>
          <div className="count-container">

            {experinece.map((experinece, index) => (
              <div className="box" key={index}>
                <h3> {experinece.expe} </h3>
                <p> {experinece.para} </p>
              </div>
            ))}

          </div>
        </div>
      </section>

      <section className="skills">
        <h1 className="heading"> <span> My </span> Skills </h1>
        <div className="box-container">
          {techStack.map((tech, index) => (
            <div className="box" key={index}>
              <img src={tech.icon} alt={tech.alt} />
              <h3>{tech.label}</h3>
            </div>
          ))}
        </div>
      </section>

      <section className="education">
        <h1 className="heading"><span> my </span> education </h1>
        <div className="box-container">

          {myeducation.map((education, index) => (
            <div className="box" key={index}>
              <i>{education.icon } </i>
              <span> {education.years} </span>
              <h3> {education.field} </h3>
              <p>{education.para}</p>
            </div>
          ))}



          




        </div>

      </section>
      <section className="education">
        <h1 className="heading"><span> my </span> experience </h1>
        <div className="box-container">
          {myexperinece.map((education, index) => (
            <div className="box" key={index}>
              <i>{education.icon } </i>
              <span> {education.com_name} </span>
              <span> {education.years} </span>
              <h3> {education.field} </h3>
              <p>{education.para}</p>
            </div>
          ))}

         



        </div>

      </section>
    </>
  )
}

export default About