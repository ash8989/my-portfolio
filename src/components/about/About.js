import { Component } from "react";
import html from "./images/html.svg";
import css from "./images/css.svg";
import javascript from "./images/javascript.svg";
import react from "./images/react.svg";
import github from "./images/github.svg";
import "./about.css";

class About extends Component {
  render() {
    return (
      <div className="about-container">
        <div>
          <div className="about-title">About Me</div>
          <div className="about-line"></div>
        </div>
        <p style={{ marginLeft: "15px" }}>
          I'm an Aspiring Web Developer who enjoys writing Code. I have strong
          Technical Skills & an Academic Background in Computer Science
          Engineering. I'm interested in Front-End Web Development. I enjoy
          Developing a Web Design into a beautiful Web Site.
        </p>
        <p style={{ marginLeft: "15px" }}>
          But on a Longer Run my Focus is to be a Full Stack Web Developer & as
          the first step towards my Dream I'm Learning{" "}
          <strong>MERN Stack Development</strong>.
        </p>
        <div className="inside-skill-div">
          <h2>Lanuages/Library/Technology</h2>
          <br />
          <div className="image-style">
            <img src={html} alt={html}></img>
            <img src={css} alt={css}></img>
            <img src={javascript} alt={javascript}></img>
            <img src={react} alt={react}></img>
            <img src={github} alt={github}></img>
          </div>

          {/* <img src={html} alt={html}></img> */}
        </div>
      </div>
    );
  }
}

export default About;
