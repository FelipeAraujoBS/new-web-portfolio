import Navagation from "./components/Navbar";
import Banner from './components/Banner'
import Skills from './components/Skills'
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Education from "./components/Education";

import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className='App'>
        <Navagation/>
        <Banner/>
        <Skills/>
        <Education/>
        <Projects/>
        <Contact/>
        <Footer/>
    </div>
  );
}

export default App;
