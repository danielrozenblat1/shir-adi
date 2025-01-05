import logo from './logo.svg';
import './App.css';
import StatsOverlay from './components/special/Special';
import FirstScreen from './screens/FirstScreen';
import SecondScreen from './screens/SecondScreen';
import NavBarNew from './components/NewNav/NavBarNew';
import ByMe from './components/ByMe/ByMe';
import CourseCard from './components/Course/Course';
import ThirdScreen from './screens/ThirdScreen';

import { useState,useEffect } from 'react';
import ForthScreen from './screens/ForthScreen';
function App() {

  
  const [scrolled, setScrolled] = useState(false);


  useEffect(() => {
   


    window.addEventListener("scroll", handleScroll);

    return () => {
        window.removeEventListener("scroll", handleScroll);
    };
}, []);

  const handleScroll = () => {
    if (window.pageYOffset > 0) {
      setScrolled(true);
    } else {
      setScrolled(false);
    }
  };
  return <>
  <NavBarNew/>
  
  <StatsOverlay  scrolled={scrolled}/>
  
  <SecondScreen/>
  {/* <CourseCard/> */}
  <ThirdScreen/>
  <ForthScreen/>
  <ByMe/>
  </>
}

export default App;
