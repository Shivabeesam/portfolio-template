import React from 'react';
import {
  FaCss3Alt,
  FaReact,
  FaHtml5,
  FaBootstrap,
  FaJava,
} from 'react-icons/fa6';
import {
  SiTypescript,
  SiSpring,
  SiSpringboot,
  SiHibernate,
  SiSpringsecurity,
} from 'react-icons/si';
import { IoLogoJavascript } from 'react-icons/io5';
import { TbBrandMysql } from 'react-icons/tb';
import { BiLogoPostgresql } from 'react-icons/bi';
import { FaGitAlt, FaGitlab } from 'react-icons/fa';
import { Container, Row, Col } from 'react-bootstrap';
import ScrollAnimation from 'react-animate-on-scroll';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDoubleDown } from '@fortawesome/free-solid-svg-icons';
import StrutsImage from '../Assets/Struts_icon.png';

const Skills = () => {
  return (
    <div className="skills" id="skills">
      <Container className="skills-div">
        <div style={{ display: 'flex', justifyContent: 'center' }}>
          <h3 className="title-div" style={{ width: '300px' }}>
            TECHNICAL SKILLS
          </h3>
        </div>
        <ScrollAnimation animateIn="fadeInRight">
          <div className="tech-skills mt-3">
            <h4 className="pt-3">Front-end Skills</h4>
            <Row style={{ padding: '10px 15px' }}>
              <Col md={{ span: 1, offset: 3 }}>
                <div className="skill-icon-div">
                  <FaReact
                    className="skill-icon"
                    title="React JS"
                    style={{ color: 'rgb(0, 255, 255)' }}
                  />
                </div>
              </Col>
              <Col md={1}>
                <div className="skill-icon-div">
                  <IoLogoJavascript
                    className="skill-icon"
                    title="Java Script"
                    style={{ color: 'rgb(221 255 3)' }}
                  />
                </div>
              </Col>
              <Col md={1}>
                <div className="skill-icon-div">
                  <FaHtml5
                    className="skill-icon"
                    title="HTML"
                    style={{ color: 'rgb(255 101 0)' }}
                  />
                </div>
              </Col>
              <Col md={1}>
                <div className="skill-icon-div">
                  <FaCss3Alt
                    className="skill-icon"
                    title="CSS"
                    style={{ color: 'rgb(11 129 183)' }}
                  />
                </div>
              </Col>
              <Col md={1}>
                <div className="skill-icon-div">
                  <FaBootstrap
                    className="skill-icon"
                    title="Bootstrap"
                    style={{ color: 'rgb(136 61 255)' }}
                  />
                </div>
              </Col>
              <Col md={1}>
                <div className="skill-icon-div">
                  <SiTypescript
                    className="skill-icon"
                    title="Type Script"
                    style={{ color: 'rgb(19 53 216)' }}
                  />
                </div>
              </Col>
            </Row>
          </div>
        </ScrollAnimation>
        <ScrollAnimation animateIn="fadeInLeft" delay={0.3 * 1000}>
          <div className="tech-skills mt-4">
            <h4 className="pt-3">Back-end Skills</h4>
            <Row style={{ padding: '10px 15px' }}>
              <Col md={{ span: 1, offset: 3 }}>
                <div className="skill-icon-div">
                  <FaJava
                    className="skill-icon"
                    title="Java"
                    style={{ color: 'rgb(34 112 216)' }}
                  />
                </div>
              </Col>
              <Col md={1}>
                <div className="skill-icon-div">
                  <SiSpring
                    className="skill-icon"
                    title="Spring Framework"
                    style={{ color: '#6cb52d' }}
                  />
                </div>
              </Col>
              <Col md={1}>
                <div className="skill-icon-div">
                  <SiSpringboot
                    className="skill-icon"
                    title="Spring Boot"
                    style={{ color: '#6cb52d' }}
                  />
                </div>
              </Col>
              <Col md={1}>
                <div className="skill-icon-div">
                  <SiHibernate
                    className="skill-icon"
                    title="Hibernate"
                    style={{ color: 'rgb(100 110 60)' }}
                  />
                </div>
              </Col>
              <Col md={1}>
                <div className="skill-icon-div">
                  <SiSpringsecurity
                    className="skill-icon"
                    title="Spring Security"
                    style={{ color: '#6cb52d' }}
                  />
                </div>
              </Col>
              <Col md={1}>
                <div className="skill-icon-div">
                  <img
                    src={StrutsImage}
                    alt="Struts"
                    title="Struts"
                    className="skill-icon"
                  />
                </div>
              </Col>
            </Row>
          </div>
        </ScrollAnimation>
        <ScrollAnimation animateIn="fadeInRight" delay={0.6 * 1000}>
          <div className="tech-skills mt-4">
            <h4 className="pt-3">Database and CI/CD</h4>
            <Row style={{ padding: '10px 10px' }}>
              <Col md={{ span: 1, offset: 4 }}>
                <div className="skill-icon-div">
                  <BiLogoPostgresql
                    className="skill-icon"
                    title="PostgreSQL"
                    style={{ color: '#699eca' }}
                  />
                </div>
              </Col>
              <Col md={1}>
                <div className="skill-icon-div">
                  <TbBrandMysql
                    className="skill-icon"
                    title="MySQL"
                    style={{ color: 'rgb(255 129 0)' }}
                  />
                </div>
              </Col>
              <Col md={1}>
                <div className="skill-icon-div">
                  <FaGitAlt
                    className="skill-icon"
                    title="Git"
                    style={{ color: 'rgb(220 16 22)' }}
                  />
                </div>
              </Col>
              <Col md={1}>
                <div className="skill-icon-div">
                  <FaGitlab
                    className="skill-icon"
                    title="GitLab"
                    style={{ color: 'rgb(226, 67, 41)' }}
                  />
                </div>
              </Col>
            </Row>
          </div>
        </ScrollAnimation>
        <ScrollAnimation
          animateIn="custom-animation"
          initiallyVisible={true}
          animateOnce={false}
          style={{ paddingTop: '1%' }}
        >
          <div className="arrow-icon">
            <a href="#experience">
              <FontAwesomeIcon
                icon={faAngleDoubleDown}
                style={{ color: 'rgb(233 129 78)' }}
              />
            </a>
          </div>
        </ScrollAnimation>
      </Container>
    </div>
  );
};

export default Skills;
