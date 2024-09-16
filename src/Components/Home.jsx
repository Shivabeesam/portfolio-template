import React from 'react';
import { Container } from 'react-bootstrap';
import ScrollAnimation from 'react-animate-on-scroll';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDoubleDown } from '@fortawesome/free-solid-svg-icons';
import { FaGithub, FaLinkedin } from 'react-icons/fa6';
import Photo from '../Assets/Home_image.jpg';
import { Button } from 'reactstrap';

const Home = () => {
  return (
    <div className="home" id="home">
      <Container className="home-content-div">
        <div>
          <img
            src={Photo}
            alt="Your Name"
            style={{ width: '130px', height: '130px', borderRadius: '50%' }}
          />
        </div>
        <h1 className="mt-2" style={{ color: 'white' }}>
          Your Name
        </h1>
        <p style={{ fontSize: '22px', color: 'white' }}>Your Intro</p>
        <div>
          <a href="#contact">
            <Button color="warning" className="contact-button">
              Contact
            </Button>
          </a>
          <div className="pt-2">
            <a href="Your LinkedIn Profile" target="_blank" rel="noreferrer">
              <FaLinkedin
                className="contact-icon "
                title="LinkedIn"
                style={{ color: 'rgb(34 112 216)' }}
              />
            </a>
            <a
              href="Your Git Hub profile"
              target="_blank"
              rel="noreferrer"
              className="ms-3"
            >
              <FaGithub
                className="contact-icon "
                title="Github"
                style={{ color: 'white' }}
              />
            </a>
          </div>
        </div>

        <ScrollAnimation
          animateIn="custom-animation"
          initiallyVisible={true}
          animateOnce={false}
          style={{ paddingTop: '15%' }}
        >
          <div className="arrow-icon">
            <a href="#about">
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

export default Home;
