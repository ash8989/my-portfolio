// import Home from './components/home/Home';
import About from './components/about/About';
import Portfolio from './components/portfolio/portfolio';
import Resume from './components/resume/resume';
import Contact from './components/contact/contact';
import Footer from './components/footer/footer';
import Navbar from './navbar/Navbar';
import { BrowserRouter } from 'react-router-dom';
// import  Router  from './components/route/route.js';
// import { BrowserRouter } from 'react-router-dom'

function App() {
  return (
    <BrowserRouter className="App">
    
      <Navbar />
      {/* <Home /> */}
      <About />
      <Portfolio />
      <Resume />
      <Contact />
      <Footer />
      
    </BrowserRouter>
  );
}

export default App;
