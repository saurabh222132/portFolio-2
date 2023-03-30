import React from "react";
import { Row, Col } from "react-bootstrap";
import "./edu.css";

const Education = () => {
  return (
    <>
      <section className="edu" id="education">
        <Row className="row pb-sm-5 pt-3">
          <h1 className="Heading text-center "> Education </h1>
          <Col sm={4} xs={12} xl={4} className="px-4 pb-3">
            <div className="highSchool text-center h-100 ">
              <h2> High School</h2>
              <p> percentage: 78.5%</p>
              <p> Passing Year: 2017</p>
            </div>
          </Col>
          <Col sm={4} xs={12} xl={4} className="px-4 pb-3">
            <div className="highSchool text-center h-100">
              <h2> Diploma</h2>
              <p>Electronics Engineering</p>
              <p> percentage: 82.26%</p>
              <p> Passing Year: 2021</p>
            </div>
          </Col>
          <Col sm={4} xs={12} xl={4} className="px-4 pb-3">
            <div className="highSchool text-center h-100">
              <h2>B.Tech</h2>
              <p>Electronics and Communication Engineering</p>
              <p> percentage: 82.27%</p>
              <p> Passing Year: 2024</p>
            </div>
          </Col>
        </Row>
      </section>
    </>
  );
};

export default Education;
