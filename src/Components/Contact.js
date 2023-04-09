import { useState } from "react";
import { Row, Col } from "react-bootstrap";
import { useRef } from "react";
import emailjs from "@emailjs/browser";
import contactImg from "../assets/img/contact-img.svg";

export const Contact = () => {
  const form = useRef();

  const formInitialDetails = {
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    message: "",
  };

  const [formDetails, setFormDetails] = useState(formInitialDetails);
  // const [buttonText, setButtonText] = useState("Send");
  // const [status, setStatus] = useState({});
  const buttonText = "Send";
  const status = {};

  const onFormUpdate = (category, value) => {
    setFormDetails({ ...formDetails, [category]: value });
  };

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_pz2c3xh",
        "template_r6kcc92",
        form.current,
        "34BniZOK4EZIzs9Ji"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );

    alert(
      "Thanks for connecting me! A system generated mail sent to your email please check your mail."
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
          <form ref={form} onSubmit={sendEmail}>
            <Row>
              <Col sm={6} className="px-1">
                <input
                  type="text"
                  value={formDetails.firstName}
                  name="first_name"
                  placeholder="first name "
                  onChange={(e) => onFormUpdate("firstName", e.target.value)}
                />
              </Col>
              <Col sm={6} className="px-1">
                <input
                  type="text"
                  value={formDetails.lastName}
                  name="last_name"
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
                  name="user_email"
                  placeholder=" Enter you email "
                  onChange={(e) => onFormUpdate("email", e.target.value)}
                />
              </Col>
              <Col sm={6} className="px-1">
                <input
                  type="tel"
                  value={formDetails.phone}
                  name="phone"
                  placeholder="enter you phone"
                  onChange={(e) => onFormUpdate("phone", e.target.value)}
                />
              </Col>
              <Col size={12} className="px-1">
                <textarea
                  rows="6"
                  value={formDetails.message}
                  placeholder="Message"
                  name="message"
                  onChange={(e) => onFormUpdate("message", e.target.value)}
                ></textarea>
                <button type="submit" value="send">
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
