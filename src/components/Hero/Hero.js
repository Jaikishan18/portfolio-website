import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "./Hero.css";
import crop_profile from "../../assets/crop_profile.png";
import jaikishan_updated from "../../assets/jaikishan_updated.pdf"

const Hero = () => {
  return (
    <Container>
      <Row>
        <Col lg={12}>
          <div className="hero_section" id="home">
            <div className="profile_image">
              <img src={crop_profile} alt="profile_image" />
            </div>
            <h1>
              <span>I'm Jai kishan,</span>
              Front End Developer
            </h1>
            <p>
              Passionate Front-End Developer crafting responsive and visually
              appealing web experiences. Skilled in HTML, CSS, JavaScript, and
              modern frameworks to bring creative designs to life.
            </p>
            <div className="hero_buttons">
              <div>
                <a href="#contact">Connect with me</a>
              </div>
              <div>
                <a href={jaikishan_updated} target="_blank" rel="noopener noreferrer">My resume</a>
              </div>
            </div>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default Hero;
