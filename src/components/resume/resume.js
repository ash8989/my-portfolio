import { Component } from "react";
import resumeImage1 from './resumeImage1.jpg';
import "./resume.css";

export default class Resume extends Component {
  render() {
    return (
      <div className="resume-container">
        <div className="resume-title">
          <div>Resume</div>
          <div className="resume-underline"></div>
        </div>

        <div className="flex3">
          <div className="firstBox">
            <div className="education">Education</div>
            <div className="education-underline"></div>

            <div className="education-container">
              <div className="round-circle"></div>
              <div style={{marginTop:"35px"}}>
                {" "}
                <strong>Degree:- </strong>Bachelor's of Engineering (CSE) <br />
                <strong>College Name:- </strong>Institute Of Technology And
                Management <br />
                <strong>CGPA:- </strong>7.47
              </div>
              <div className="year-box">2016 - 2020</div>
            </div>
            {/* <div className="verticalLine1"></div> */}


            <div className="education-container">
              <div className="round-circle"></div>
              <div style={{marginTop:"35px"}}>
                {" "}
                <strong>Standard:- </strong>Class 12th <br />
                <strong>School Name:- </strong>Blossom Convent Higher Secondary School <br />
                <strong>Percentage:- </strong>66.4
              </div>
              <div className="year-box">2015 - 2016</div>
            </div>
            {/* <div className="verticalLine2"></div> */}

            <div className="education-container">
              <div className="round-circle"></div>
              <div style={{marginTop:"35px"}}>
                {" "}
                <strong>Standard:- </strong>Class 10th <br />
                <strong>School Name:- </strong>Blossom Convent Higher Secondary School <br />
                <strong>Percentage:- </strong>68
              </div>
              <div className="year-box">2013 - 2014</div>
            </div>
            {/* <div className="verticalLine3"></div> */}
            <br/>
            <div>
            <div className="project">Projects</div>
            <div className="project-underline"></div>
            </div>
            <div className="project-flex">
                <p>Backtracking</p>
                <p>Todo-web</p>
                <p>Todo-mobile</p>
                <p>Todo-JS</p>
                <p>Clock</p>
            </div>

            <div>
            <div className="skill">Skills</div>
            <div className="skill-underline"></div>
            </div>
            <div className="skill-flex">
                <p>HTML</p>
                <p>CSS</p>
                <p>JAVACRIPT</p>
                <p>GIT</p>
                <p>Java</p>
            </div>

          </div>

          <div className="parent-second-third">
            <div className="secondBox">
                <img src={resumeImage1} alt={resumeImage1} className="resumeImageClass"></img>
            </div>
            <div className="thirdBox">
                <a href="https://www.linkedin.com/in/ashish-sharma-a23228198" className="fontAwesome"><i className="fab fa-linkedin"></i></a>
                <a href="https://github.com/ash8989" className="fontAwesome"><i className="fab fa-github"></i></a>
                <a href="https://skype.com" className="fontAwesome"><i className="fab fa-skype"></i></a>
            </div>
          </div>

        </div>
      </div>
    );
  }
}
