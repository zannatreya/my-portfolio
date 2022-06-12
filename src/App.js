import './App.css';
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Home from './PortfolioContainer/Home/Home';
// import AboutMe from './PortfolioContainer/AboutMe/AboutMe';
import Contact from './PortfolioContainer/Contact/Contact';
import Footer from './PortfolioContainer/Footer';
import MySkills from './PortfolioContainer/MySkills/MySkills';
import Education from './PortfolioContainer/Education/Education';
import Projects from './PortfolioContainer/Projects/Projects';
import AboutMe from './PortfolioContainer/AboutMe/AboutMe';
import Service from './PortfolioContainer/Services/Service';


function App() {
  return (
    <div>
    <Home/>
    <AboutMe/>
    <Service/>
    <MySkills/>
    <Projects/>
    <Education/>
    <Contact/>
    <Footer/>
      <ToastContainer />
    </div>
  );
}

export default App;
