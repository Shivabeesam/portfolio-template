import React from 'react';
import { Col, Row } from 'react-bootstrap';
import { Container } from 'reactstrap';
import ScrollAnimation from 'react-animate-on-scroll';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDoubleDown } from '@fortawesome/free-solid-svg-icons';
import YourPhoto from '../Assets/User_image.jpg';
import { Button } from 'reactstrap';
import resume from '../Assets/Your_resume.pdf';

const About = () => {
  return (
    <div className="about" id="about">
      <Container className="about-div">
        <div style={{ display: 'flex', justifyContent: 'center' }}>
          <h3 className="title-div" style={{ width: '250px' }}>
            ABOUT ME
          </h3>
        </div>

        <Row className="mt-3">
          <Col md={5}>
            <ScrollAnimation animateIn="fadeInLeft" delay={0.2 * 1000}>
              <img src={YourPhoto} alt="Your name" className="about-image" />
            </ScrollAnimation>
          </Col>
          <Col md={7} className="text-start mt-2">
            <ScrollAnimation animateIn="fadeInRight">
              <p style={{ fontSize: '20px' }}>About You</p>
            </ScrollAnimation>
            <ScrollAnimation animateIn="fadeInRight" delay={0.3 * 1000}>
              <p style={{ fontSize: '20px' }}>About You</p>
            </ScrollAnimation>
            <ScrollAnimation animateIn="fadeInRight" delay={0.6 * 1000}>
              <a href={resume} download>
                <Button color="warning" className="contact-button">
                  Download Resume
                </Button>
              </a>
            </ScrollAnimation>
          </Col>
        </Row>
        <ScrollAnimation
          animateIn="custom-animation"
          initiallyVisible={true}
          animateOnce={false}
          style={{ paddingTop: '5%' }}
        >
          <div className="arrow-icon">
            <a href="#skills">
              {' '}
              <FontAwesomeIcon
                icon={faAngleDoubleDown}
                style={{ color: '#000000' }}
              />
            </a>
          </div>
        </ScrollAnimation>
      </Container>
    </div>
  );
};

export default About;
