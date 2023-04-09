import "react-multi-carousel/lib/styles.css";
import { Row, Col, Nav, Tab } from "react-bootstrap";

import { Container } from "react-bootstrap";
import SkillCards from "./skillCards";

export const Skill = () => {
  return (
    <section className="skill" id="skills">
      <Container className="skl">
        <Row>
          <h1 className="h1 text-center">Skills</h1>
        </Row>

        <Tab.Container id="left-tabs-example" defaultActiveKey="first">
          <Row>
            <Col>
              <Nav variant="tabs" className="flex-row justify-content-center">
                <Nav.Item>
                  <Nav.Link eventKey="first">Software Skills</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="second">Other Skills</Nav.Link>
                </Nav.Item>
              </Nav>

              <Tab.Content>
                {/* Software Skills -> first tab */}
                <Tab.Pane eventKey="first">
                  <Row className="p-2" mb-3>
                    <h3 className=" heading text-center mb-4">
                      Programming language
                    </h3>
                    <SkillCards tool="C/C++" percentage={79} />
                  </Row>
                  <Row className="p-2 mb-3">
                    <h3 className=" heading text-center mb-4">
                      FrontEnd Tools
                    </h3>
                    <SkillCards tool="HTML" percentage={79} />
                    <SkillCards tool="CSS" percentage={87} />
                    <SkillCards tool="Bootstrap-5" percentage={89} />
                    <SkillCards tool="Javascript" percentage={80} />
                    <SkillCards tool="ReactJs" percentage={85} />
                    {/* <SkillCards tool="Rdux/Redux-Toolkit" percentage={60} /> */}
                    <SkillCards tool="React-Bootstrap" percentage={65} />
                  </Row>
                  <Row className="p-2">
                    <h3 className="heading text-center mb-4">BackEnd Tools</h3>
                    <SkillCards tool="NodeJs" percentage={80} />
                    <SkillCards tool="Express" percentage={77} />
                    <SkillCards tool="MongoDB" percentage={80} />
                    <SkillCards tool="Mongoose" percentage={87} />
                  </Row>
                </Tab.Pane>
                {/* others -> second tab */}
                <Tab.Pane eventKey="second">
                  <Row>
                    <h3 className="heading text-center mb-2">
                      Electronics skills
                    </h3>
                    <p className="mb-2">
                      Apart from the Software skill I also familiar with the
                      designing.
                    </p>
                    <SkillCards tool="Embedded System" percentage={40} />
                    <SkillCards tool="ArduinoIDE" percentage={45} />
                    <SkillCards tool="IoT" percentage="30" />
                  </Row>
                </Tab.Pane>
              </Tab.Content>
            </Col>
          </Row>
        </Tab.Container>
      </Container>
    </section>
  );
};
