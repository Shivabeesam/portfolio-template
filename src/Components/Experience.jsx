import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import ScrollAnimation from 'react-animate-on-scroll';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDoubleDown } from '@fortawesome/free-solid-svg-icons';

const Experience = () => {
  return (
    <div className="experience" id="experience">
      <Container className="experience-div">
        <div style={{ display: 'flex', justifyContent: 'center' }}>
          <h3 className="title-div" style={{ width: '280px' }}>
            EXPERIENCE
          </h3>
        </div>
        <Row className="mt-3">
          <Col md={6}>
            <ScrollAnimation animateIn="fadeInLeft">
              <div className="exps text-start">
                <div
                  style={{ display: 'flex', justifyContent: 'space-between' }}
                >
                  <div>
                    <h5>
                      <b>Your Role</b>
                    </h5>
                    <h6>Your Organization Name</h6>
                  </div>
                  <div className="exp-time-div text-center">Year</div>
                </div>
                <p className="mt-4">What have you done</p>
              </div>
            </ScrollAnimation>
          </Col>
          <Col md={6}>
            <ScrollAnimation animateIn="fadeInRight">
              <div className="exps text-start">
                <div
                  style={{ display: 'flex', justifyContent: 'space-between' }}
                >
                  <div>
                    <h5>
                      <b>Your Role</b>
                    </h5>
                    <h6>Your Organization Name</h6>
                  </div>
                  <div className="exp-time-div text-center">Year</div>
                </div>
                <p className="mt-4">What have you done</p>
              </div>
            </ScrollAnimation>
          </Col>
        </Row>
        <ScrollAnimation
          animateIn="custom-animation"
          initiallyVisible={true}
          animateOnce={false}
          style={{ paddingTop: '3%' }}
        >
          <div className="arrow-icon">
            <a href="#projects">
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

export default Experience;
