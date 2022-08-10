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
import MessengerCustomerChat from 'react-messenger-customer-chat';



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
    <MessengerCustomerChat
    pageId="107012672117270"
    appId="586701279704824"
  />,
    <Footer/>
   
      <ToastContainer />
    </div>
  );
}

export default App;
