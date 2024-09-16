import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { FaRegFolder } from 'react-icons/fa';
import { FaExternalLinkAlt } from 'react-icons/fa';
import ScrollAnimation from 'react-animate-on-scroll';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDoubleDown } from '@fortawesome/free-solid-svg-icons';

const Projects = () => {
  return (
    <div className="projects" id="projects">
      <Container className="projects-div">
        <div style={{ display: 'flex', justifyContent: 'center' }}>
          <h3 className="title-div" style={{ width: '280px' }}>
            Projects
          </h3>
        </div>
        <Row className="mt-3">
          <Col md={4}>
            <ScrollAnimation animateIn="flipInX" delay={0.4 * 1000}>
              <div className="project">
                <div
                  style={{ display: 'flex', justifyContent: 'space-between' }}
                >
                  <FaRegFolder
                    style={{
                      color: 'ffcb2f',
                      height: '40px',
                      width: '40px',
                    }}
                  />
                  <a href="Project Link" target="_blank" rel="noreferrer">
                    <FaExternalLinkAlt
                      title="Link"
                      style={{
                        color: 'ffcb2f',
                        height: '35px',
                        width: '35px',
                      }}
                    />
                  </a>
                </div>
                <div className="text-start mt-4">
                  <h5>Project Name</h5>
                  <p>Project Info/Description</p>
                </div>
                <div
                  style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    margin: '0px 5px',
                  }}
                >
                  <span>
                    <b>Tech Used</b>
                  </span>
                  <span>
                    <b>Tech Used</b>
                  </span>
                  <span>
                    <b>Tech Used</b>
                  </span>
                </div>
              </div>
            </ScrollAnimation>
          </Col>
          <Col md={4}>
            <ScrollAnimation animateIn="flipInX" delay={0.4 * 1000}>
              <div className="project">
                <div
                  style={{ display: 'flex', justifyContent: 'space-between' }}
                >
                  <FaRegFolder
                    style={{
                      color: 'ffcb2f',
                      height: '40px',
                      width: '40px',
                    }}
                  />
                  <a href="Project Link" target="_blank" rel="noreferrer">
                    <FaExternalLinkAlt
                      title="Link"
                      style={{
                        color: 'ffcb2f',
                        height: '35px',
                        width: '35px',
                      }}
                    />
                  </a>
                </div>
                <div className="text-start mt-4">
                  <h5>Project Name</h5>
                  <p>Project Info/Description</p>
                </div>
                <div
                  style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    margin: '0px 5px',
                  }}
                >
                  <span>
                    <b>Tech Used</b>
                  </span>
                  <span>
                    <b>Tech Used</b>
                  </span>
                  <span>
                    <b>Tech Used</b>
                  </span>
                </div>
              </div>
            </ScrollAnimation>
          </Col>
          <Col md={4}>
            <ScrollAnimation animateIn="flipInX" delay={0.4 * 1000}>
              <div className="project">
                <div
                  style={{ display: 'flex', justifyContent: 'space-between' }}
                >
                  <FaRegFolder
                    style={{
                      color: 'ffcb2f',
                      height: '40px',
                      width: '40px',
                    }}
                  />
                  <a href="Project Link" target="_blank" rel="noreferrer">
                    <FaExternalLinkAlt
                      title="Link"
                      style={{
                        color: 'ffcb2f',
                        height: '35px',
                        width: '35px',
                      }}
                    />
                  </a>
                </div>
                <div className="text-start mt-4">
                  <h5>Project Name</h5>
                  <p>Project Info/Description</p>
                </div>
                <div
                  style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    margin: '0px 5px',
                  }}
                >
                  <span>
                    <b>Tech Used</b>
                  </span>
                  <span>
                    <b>Tech Used</b>
                  </span>
                  <span>
                    <b>Tech Used</b>
                  </span>
                </div>
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
            <a href="#contact">
              {' '}
              <FontAwesomeIcon
                icon={faAngleDoubleDown}
                style={{ color: 'white' }}
              />
            </a>
          </div>
        </ScrollAnimation>
      </Container>
    </div>
  );
};

export default Projects;
