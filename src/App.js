import "./App.css";
import NavBar from "./Components/NavBar";
import { Banner } from "./Components/Banner";
import "bootstrap/dist/css/bootstrap.min.css";
import { Skill } from "./Components/skill.js";
import Education from "./Components/Education/Education.js";
import { Contact } from "./Components/Contact";
import Footer from "./Components/Footer";
import Projects from "./Components/projects/project";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Banner />
      <Education />
      <Skill />
      <Projects />
      <Contact />

      <Footer />
    </div>
  );
}

export default App;
