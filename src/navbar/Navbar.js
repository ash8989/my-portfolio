import { Component } from "react";
import "./navbar.css";
import { Routes,Route, Link} from "react-router-dom";
import Home from "../components/home/Home";
import About from "../components/about/About";
import Portfolio from "../components/portfolio/portfolio";
import Resume from "../components/resume/resume";
import Contact from "../components/contact/contact";

class Navbar extends Component {
  render() {
    return (
      <div>
        <nav className="nav">
          <div className="container flex items-center justify-between">
            <div className="name-div">Ashish Sharma</div>
            <div className="navbar flex items-center justify-end display-none">
              <Link to="/" className="home">Home &nbsp;&nbsp;&nbsp; </Link>
              <Link to="/about" className="about" >About &nbsp;&nbsp;&nbsp;&nbsp;</Link>
              <Link to="/portfolio" className="portfolio">Portfolio &nbsp;&nbsp;&nbsp;&nbsp;</Link>
              <Link to="/resume"className="resume" >Resume &nbsp;&nbsp;&nbsp;&nbsp;</Link>
              <Link to="/contact" className="contact" >Contact</Link>
            </div>
          </div>
        </nav>

        <Routes>
          <Route path="/" exact={true} element={<Home />}>
          </Route>

          <Route path="/about" element={<About />}>
          </Route>

          <Route path="/portfolio" element={<Portfolio />}>
          </Route>

          <Route path="/resume" element={<Resume />}>
          </Route>

          <Route path="/contact" element={<Contact />}>
          </Route>
        </Routes>
      </div>
    );
  }
}

export default Navbar;
