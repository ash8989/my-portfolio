import { Component } from "react";
import "./navbar.css";

class Navbar extends Component {
  render() {
    return (
      <nav className="nav">
        <div className="container flex items-center justify-between">
          <h2>Ashish Sharma</h2>
          <div className="navbar flex items-center justify-end">
            <p className="home">Home &nbsp;&nbsp;&nbsp; </p>
            <p className="about">About &nbsp;&nbsp;&nbsp;&nbsp;</p>
            <p className="portfolio">Portfolio &nbsp;&nbsp;&nbsp;&nbsp;</p>
            <p className="resume">Resume &nbsp;&nbsp;&nbsp;&nbsp;</p>
            <p className="contact">Contact</p>
          </div>
        </div>
      </nav>
    );
  }
}

export default Navbar;
