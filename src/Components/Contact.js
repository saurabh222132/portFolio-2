import { useState } from "react";
import { Row, Col } from "react-bootstrap";
import contactImg from "../assets/img/contact-img.svg";

export const Contact = () => {
  const formInitialDetails = {
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    message: "",
  };

  const [formDetails, setFormDetails] = useState(formInitialDetails);
  const [buttonText, setButtonText] = useState("Send");
  const [status, setStatus] = useState({});

  const onFormUpdate = (category, value) => {
    setFormDetails({ ...formDetails, [category]: value });
  };
  const handleSubmit = () => {
    alert(
      "We have regrate!.We are working on the mailing feature. You can connect me on linkedIN."
    );
  };
  return (
    <section className="contact" id="connect">
      <Row className="align-items-center px-3">
        {/* coloum 1 is for image on left side */}
        <Col size={12} md={6}>
          <img src={contactImg} alt="contact" />
        </Col>
        {/* Coloum 2 is for input details on rightside */}
        <Col size={12} md={6}>
          <h2>Get In Touch</h2>
          <form onSubmit={handleSubmit}>
            <Row>
              <Col sm={6} className="px-1">
                <input
                  type="text"
                  value={formDetails.firstName}
                  placeholder="first name "
                  onChange={(e) => onFormUpdate("firstName", e.target.value)}
                />
              </Col>
              <Col sm={6} className="px-1">
                <input
                  type="text"
                  value={formDetails.lastName}
                  placeholder="last name "
                  onChange={(e) => onFormUpdate("lastName", e.target.value)}
                />
              </Col>
            </Row>
            <Row>
              <Col sm={6} className="px-1">
                <input
                  type="email"
                  value={formDetails.email}
                  placeholder=" Enter you email "
                  onChange={(e) => onFormUpdate("email", e.target.value)}
                />
              </Col>
              <Col sm={6} className="px-1">
                <input
                  type="tel"
                  value={formDetails.phone}
                  placeholder="enter you phone"
                  onChange={(e) => onFormUpdate("phone", e.target.value)}
                />
              </Col>
              <Col size={12} className="px-1">
                <textarea
                  rows="6"
                  value={formDetails.message}
                  placeholder="Message"
                  onChange={(e) => onFormUpdate("message", e.target.value)}
                ></textarea>
                <button type="submit">
                  <span>{buttonText}</span>
                </button>
              </Col>
              {status.message && (
                <Col>
                  <p
                    className={status.success === false ? "danger" : "success"}
                  ></p>
                </Col>
              )}
            </Row>
          </form>
        </Col>
      </Row>
    </section>
  );
};
