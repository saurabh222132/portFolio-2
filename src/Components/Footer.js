import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const Footer = () => (
  <footer className="bg-dark py-3">
    <Container>
      <Row>
        <Col className="text-center text-white">
          <p className="mb-0">
            Copyright &copy; {new Date().getFullYear()} PortFolio
          </p>
          <p className="mb-0">
            Made by
            <i
              style={{ fontSize: "14px", color: "white" }}
              className="fas fa-heart"
            >
              Saurabh Vishwakarma
            </i>
          </p>
        </Col>
      </Row>
    </Container>
  </footer>
);

export default Footer;
