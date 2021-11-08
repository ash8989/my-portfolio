// import logo from './logo.svg';
// import './App.css';
import Home from './components/home/Home';
import About from './components/about/About';
import Portfolio from './components/portfolio/portfolio';
import Resume from './components/resume/resume';
import Navbar from './navbar/Navbar';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Home />
      <About />
      <Portfolio />
      <Resume />
      
    </div>
  );
}

export default App;
