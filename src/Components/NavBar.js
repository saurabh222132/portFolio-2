import { Nav, Navbar, Container } from "react-bootstrap";
import { useState, useEffect } from "react";

import navIcon1 from "../assets/img/nav-icon1.svg";
import navIcon2 from "../assets/img/nav-icon2.svg";
import navIcon3 from "../assets/img/nav-icon3.svg";

function NavBar() {
  const [activeLink, setActiveLink] = useState("Home");
  const [scrolled, seScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY > 50) {
        seScrolled(true);
      } else {
        seScrolled(false);
      }
    };
    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const onUpdateActiveLink = (value) => {
    setActiveLink(value);
  };

  return (
    //  the class name will be "scrolled" is scrolled is true other wise "" emplty : conditonall rendering
    <Navbar expand="lg" className={scrolled ? "scrolled" : ""}>
      <Container>
        <Navbar.Brand
          style={{ color: "white", fontWeight: "700", marginRight: "40px" }}
          href="#home"
        >
          <h2>PortFolio</h2>
        </Navbar.Brand>

        {/* Toggler icon when comes to mobile screen */}
        <Navbar.Toggle aria-controls="basic-navbar-nav">
          <span className="navbar-toggler-icon"></span>
        </Navbar.Toggle>
        {/* Toggler item that appers on mobile  */}
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            {/* class name will be changed according to the state of 'activeLink' variable  */}
            <Nav.Link
              href="#home"
              className={
                activeLink === "home" ? "active navbar-link" : "navbar-link"
              }
              onClick={() => onUpdateActiveLink("home")}
            >
              Home
            </Nav.Link>
            <Nav.Link
              href="#aboutMe"
              className={
                activeLink === "about" ? "active navbar-link" : "navbar-link"
              }
              onClick={() => onUpdateActiveLink("about")}
            >
              AboutMe
            </Nav.Link>

            <Nav.Link
              href="#education"
              className={
                activeLink === "education"
                  ? "active navbar-link"
                  : "navbar-link"
              }
              onClick={() => onUpdateActiveLink("education")}
            >
              Education
            </Nav.Link>
            <Nav.Link
              href="#skills"
              className={
                activeLink === "skill" ? "active navbar-link" : "navbar-link"
              }
              onClick={() => onUpdateActiveLink("skills")}
            >
              Skills
            </Nav.Link>
            <Nav.Link
              href="#projects"
              className={
                activeLink === "projects" ? "active navbar-link" : "navbar-link"
              }
              onClick={() => onUpdateActiveLink("projects")}
            >
              Projects
            </Nav.Link>
          </Nav>

          <span className="navbar-text">
            {/* This is the social icon section : insta github etc */}
            <div className="social-icon">
              <a href="https://www.linkedin.com/in/saurabhvishwakarma111/">
                <img src={navIcon1} alt="" />
              </a>
              <a href="#iconLink2">
                <img src={navIcon2} alt="" />
              </a>
              <a href="https://www.instagram.com/saurabhvishwakarma705/">
                <img src={navIcon3} alt="" />
              </a>
            </div>

            {/* Let's connect button ; this is also inside collaps  */}
            <a href="#connect">
              <button className="vvd" onClick={() => console.log("connect")}>
                <span>Hire Me</span>
              </button>
            </a>
          </span>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;
