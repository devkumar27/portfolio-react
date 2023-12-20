import Home from "./components/Home";
import Navbar from "./components/Navbar";
import SocialLinks from "./components/SocialLinks";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Coding from "./components/Coding";
import Education from "./components/Education";
import Experience from "./components/Experience";


function App() {
  return (
    <div>
      <Navbar/>
      <Home/>
      <SocialLinks/>
      <Education />
      <Skills/>
      <Projects/>
      <coding_profile/>
      <Coding/>
      <Experience />
      <SocialLinks/>
    </div>
  );
}

export default App;
