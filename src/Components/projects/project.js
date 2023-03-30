import React from "react";
import { Row, Col } from "react-bootstrap";
import ProjectData from "./projectData";

const Projects = () => {
  return (
    <section className="Projects" id="projects">
      <Row>
        <h1 className="heading text-center"> Projects </h1>
        {ProjectData.map((data, index) => {
          return (
            <Col
              key={index}
              sm={6}
              md={4}
              xl={3}
              className="colum p-4 text-center"
            >
              <img src={data.imgUrl} alt="img{index}" />
              <h4>{data.title}</h4>
              <p>{data.description}</p>
              <a href={data.demolink} target="blank">
                <button className="btn btn-primary">Demo</button>{" "}
              </a>
              <a href={data.githublink} target="blank">
                <button className="btn btn-primary">Github</button>
              </a>
            </Col>
          );
        })}
      </Row>
    </section>
  );
};

export default Projects;
