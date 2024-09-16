import React from 'react';
import { FaGithub, FaLinkedin } from 'react-icons/fa6';
import { FaReact } from 'react-icons/fa6';
import { Container } from 'react-bootstrap';

const Footer = () => {
  return (
    <div className="footer" id="footer">
      <Container
        className="footer-div"
        style={{ display: 'flex', justifyContent: 'space-between' }}
      >
        <div style={{ display: 'flex', color: 'white' }}>
          <h5>This website was made with </h5>
          <FaReact
            title="React JS"
            style={{
              color: 'rgb(0, 255, 255)',
              width: '25px',
              height: '25px',
              marginLeft: '10px',
            }}
          />
        </div>
        <div>
          <a href="Your linkedIn URL" target="_blank" rel="noreferrer">
            <FaLinkedin
              title="LinkedIn"
              style={{
                color: 'rgb(34 112 216)',
                width: '25px',
                height: '25px',
              }}
            />
          </a>
          <a
            href="Your Git hub URL"
            target="_blank"
            rel="noreferrer"
            className="ms-2"
          >
            <FaGithub
              title="Github"
              style={{ color: 'white', width: '25px', height: '25px' }}
            />
          </a>
        </div>
      </Container>
    </div>
  );
};

export default Footer;
