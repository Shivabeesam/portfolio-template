import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { MdEmail } from 'react-icons/md';
import { IoCallSharp } from 'react-icons/io5';
import ContactForm from './ContactForm';
import ScrollAnimation from 'react-animate-on-scroll';
import { FaLocationDot } from 'react-icons/fa6';

const Contact = () => {
  return (
    <div className="contact" id="contact">
      <Container className="contact-div">
        <div style={{ display: 'flex', justifyContent: 'center' }}>
          <h3 className="title-div" style={{ width: '280px' }}>
            GET IN TOUCH
          </h3>
        </div>
        <ScrollAnimation animateIn="fadeInTop" delay={0.2 * 1000}>
          <Row className="text-start mt-3">
            <Col sm={4}>
              <FaLocationDot
                className="contact-icon"
                title="Email"
                style={{ color: '#ffcb2f' }}
              />
              <span style={{ marginLeft: '10px' }}>Your Location</span>
            </Col>
            <Col sm={4}>
              <MdEmail
                className="contact-icon"
                title="Email"
                style={{ color: '#ffcb2f' }}
              />
              <span style={{ marginLeft: '10px' }}>Your Email</span>
            </Col>
            <Col sm={4}>
              <IoCallSharp
                className="contact-icon"
                title="phone number"
                style={{ color: '#ffcb2f' }}
              />
              <span style={{ marginLeft: '10px' }}>Your Phone Numebr</span>
            </Col>
          </Row>
        </ScrollAnimation>
        <ContactForm />
      </Container>
    </div>
  );
};

export default Contact;
