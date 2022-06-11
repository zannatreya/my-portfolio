import './App.css';
// import PortfolioContainer from "./PortfolioContainer/PortfolioContainer";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Home from './PortfolioContainer/Home/Home';
import Testimonial from './PortfolioContainer/Testimonial/Testimonial';
import Resume from './PortfolioContainer/Resume/Resume';
import AboutMe from './PortfolioContainer/AboutMe/AboutMe';
import Contact from './PortfolioContainer/Contact/Contact';
import Footer from './PortfolioContainer/Footer';
import Services from './PortfolioContainer/Services/Services';
import ProgressBar from './PortfolioContainer/ProgressBar/ProgressBar';


function App() {
  return (
    <div>
    <Home/>
    <AboutMe/>
    <Services/>
    <ProgressBar/>
    <Resume/>
    <Testimonial/>
    <Contact/>
    <Footer/>
      <ToastContainer />
    </div>
  );
}

export default App;
