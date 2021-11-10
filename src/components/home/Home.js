import { Component } from "react";
import "./home.css";

class Home extends Component {
  render() {
    return (
      <div className="flex1">
        <div>
          <div className="home-content">Hi, I am Ashish Sharma</div>
          <p className="second-paragragh">A front-end Developer</p>
          
          <p className="getReady">
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
