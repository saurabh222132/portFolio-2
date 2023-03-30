import { Container, Row, Col } from "react-bootstrap";
import { ArrowRightCircle } from "react-bootstrap-icons";
import Avatar from "../assets/new/Avatar.jpg";
import Typewriter from "typewriter-effect";

export const Banner = () => {
  return (
    <section className="banner" id="home">
      <Container>
        <Row className="row" id="aboutMe">
          <Col xs={12} md={6} xl={8}>
            <span className="tagline"> Welcome to my PortFolio</span>
            <h1>
              {`Saurabh Vishwakarma`}
              {/* <span className="wrap">a Web developer</span> */}
              <span style={{ color: " rgba(190, 10, 50)" }}>
                <Typewriter
                  onInit={(typewriter) => {
                    typewriter
                      .typeString(" I'm a Web Developer")
                      .pauseFor(2000)
                      .deleteAll()

                      .start();
                  }}
                  options={{
                    autoStart: true,
                    loop: true,
                  }}
                />
              </span>
            </h1>
            <p>
              Hello there! My name is Saurabh Vishwakarma I'm a Web developer
              and a enthusiastic learner. I always excited to learn new
              technologies and super excited to build something innovative and
              unique. Apart from web development I also familiar with embbeded
              system and IoT technologies and builds some projets on IoT. My
              hobby is listening songs and intrested in learning FullStack
              development.
              <a
                href="https://www.linkedin.com/in/saurabhvishwakarma111/"
                target="black"
                style={{ textDecoration: "none" }}
              >
                <button onClick={() => console.log("connect")}>
                  Let's Connect <ArrowRightCircle size={25} />
                </button>
              </a>
            </p>
          </Col>
          <Col xs={12} md={6} xl={4}>
            <img src={Avatar} alt="Header img" />
          </Col>
        </Row>
      </Container>
    </section>
  );
};

//Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iure quidem dolorum nostrum error in vero, unde ab cum excepturi non eaque aliquam quos veritatis, repudiandae ad ea architecto explicabo minima?
