
import Expertise from "./components/Expertise/Expertise";
import Footer from "./components/Fotter/Footer";
import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";
import People from "./components/People/People";
import Portfolio from "./components/Portfolio/Portfolio";
import Works from "./components/Works/Works";
import css from './styles/app.module.scss'

import Contact from "./components/contact/Contact";
const App = () => {
 
  return (
    <>
    <div className={`bg-primary ${css.container}`}>
          
         <Header/>
         <Hero/>
         <Expertise/>
         <Works/>
         <Portfolio/>
         <People/>
         
         <Footer/>
    </div>
    </>
  );
};

export default App;
