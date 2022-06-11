import './App.css';
// import PortfolioContainer from "./PortfolioContainer/PortfolioContainer";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Home from './PortfolioContainer/Home/Home';
// import AboutMe from './PortfolioContainer/AboutMe/AboutMe';
import Contact from './PortfolioContainer/Contact/Contact';
import Footer from './PortfolioContainer/Footer';
import Services from './PortfolioContainer/Services/Services';
import MySkills from './PortfolioContainer/MySkills/MySkills';
import Education from './PortfolioContainer/Education/Education';
import About from './PortfolioContainer/AboutMe/About';


function App() {
  return (
    <div>
    <Home/>
    <About/>
    {/* <AboutMe/> */}
    <Services/>
    <MySkills/>
    <Education/>
    <Contact/>
    <Footer/>
      <ToastContainer />
    </div>
  );
}

export default App;
