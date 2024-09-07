import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import "./Footer.css";

const Footer = () => {
  return (
    <Container>
      <Row>
        <Col lg={12}>
          <div className="footer">
            <Row>
              <Col lg={6}>
                <div className="footer_left">
                  <h1>Jai Kishan</h1>
                  <p>
                    I am a frontend developer from, USA with 10 years of
                    experience in companies like Microsoft, Tesla and Apple.
                  </p>
                </div>
              </Col>
              <Col lg={6}>
                <div className="footer_right">
                  <div>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="1em"
                      height="1em"
                      viewBox="0 0 24 24"
                    >
                      <path
                        fill="currentColor"
                        d="M22 6c0-1.1-.9-2-2-2H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2zm-2 0l-8 5l-8-5zm0 12H4V8l8 5l8-5z"
                      />
                    </svg>
                    <input type="email" name="email" placeholder="Enter Your Email"/>
                  </div>
                  <button>Subscribe</button>
                </div>
              </Col>
            </Row>
            <div className="footer_line"></div>
            <Row>
                <Col lg={6} md={6} order-xs-2>
                  <div className="footer_rights">
                      <p>© 2024 Jaikshan. All rights reserved.</p>
                  </div>
                </Col>
                <Col lg={6} md={6} order-xs-1>
                  <div className="footer_terms">
                      <p>Term of Services</p>
                      <p>Privacy Policy</p>
                      <p>Connect with me</p>
                  </div>
                </Col>
            </Row>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default Footer;
