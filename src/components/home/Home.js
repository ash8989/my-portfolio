import { Component } from "react";
import "./home.css";

class Home extends Component {
  render() {
    return (
      <div className="flex1">
        <div>
          <h1 className="home-content">Hi, I am Ashish Sharma</h1>
          <p className="second-paragragh">A front-end Developer</p>
          
          <p style={{ color: "white", fontSize: "20px", marginLeft: "80px" }}>
            Get ready to turn ideas into reality.
          </p>
          <div>
            <button className="buttonClass1">Hire Me</button> &nbsp;&nbsp;&nbsp;&nbsp; 
            <button className="buttonClass2">Get Resume</button>
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
