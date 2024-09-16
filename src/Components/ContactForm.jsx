import React from 'react';
import { useState, useEffect } from 'react';
import { Row, Col } from 'react-bootstrap';
import { Button } from 'reactstrap';
import { toast, ToastContainer } from 'react-toastify';
import { useForm, ValidationError } from '@formspree/react';
import ScrollAnimation from 'react-animate-on-scroll';
import 'react-toastify/dist/ReactToastify.css';

const ContactForm = () => {
  const [state, handleSubmit] = useForm('myform'); //Specify your form id in place of myform get it from @formspree/react
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [validName, setValidName] = useState(true);
  const [validEmail, setValidEmail] = useState(true);
  const [nameError, setNameError] = useState('');
  const [emailError, setEmailError] = useState('');
  const [message, setMessage] = useState('');

  const resetForm = () => {
    setName('');
    setEmail('');
    setMessage('');
  };

  const validateName = (name) => {
    const namePattern = /^[A-Z][a-zA-Z\s]*$/;

    const trimmedName = name.trim();

    if (!trimmedName) {
      setValidName(false);
      setNameError('Name cannot be empty.');
    } else if (name !== trimmedName) {
      setValidName(false);
      setNameError('No leading or trailing spaces are allowed.');
    } else if (!namePattern.test(trimmedName)) {
      setValidName(false);
      setNameError(
        'Name should start with a capital letter and contain only alphabets and spaces.'
      );
    } else {
      setValidName(true);
      setNameError('');
    }
  };

  const validateEmail = (email) => {
    const trimmedEmail = email.trim();

    if (!trimmedEmail) {
      setValidEmail(false);
      setEmailError('Name cannot be empty.');
    } else if (email !== trimmedEmail) {
      setValidEmail(false);
      setEmailError('No leading or trailing spaces are allowed.');
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(trimmedEmail)) {
      setValidEmail(false);
      setEmailError('Invalid email address.');
    } else {
      setValidEmail(true);
      setEmailError('');
    }
  };

  useEffect(() => {
    if (state.succeeded) {
      toast.success('Email successfully sent!');
      resetForm();
    }
  }, [state.succeeded]);

  return (
    <form onSubmit={handleSubmit} className="mt-5">
      <ToastContainer
        position="top-center"
        autoClose={5000}
        hideProgressBar={false}
        closeOnClick
        pauseOnHover
        draggable
        progress={undefined}
      />
      <ScrollAnimation animateIn="fadeInLeft" delay={0.3 * 1000}>
        <Row>
          <Col sm={6}>
            <input
              id="name"
              type="text"
              name="name"
              value={name}
              placeholder="Name"
              style={{ outline: 'none' }}
              className="form-control"
              onChange={(e) => {
                setName(e.target.value);
                validateName(e.target.value);
              }}
              required
            />
            {!validName && <span style={{ color: 'red' }}>{nameError}</span>}
          </Col>
          <Col sm={6}>
            <input
              id="email"
              type="email"
              name="email"
              value={email}
              required
              className="form-control"
              placeholder="Email"
              onChange={(e) => {
                setEmail(e.target.value);
                validateEmail(e.target.value);
              }}
            />
            {!validEmail && (
              <span style={{ color: 'red' }} className="text-start">
                {emailError}
              </span>
            )}
          </Col>
        </Row>
      </ScrollAnimation>
      <ScrollAnimation animateIn="fadeInRight" delay={0.3 * 1000}>
        <Row>
          <Col sm={12}>
            <textarea
              id="message"
              name="message"
              className="form-control mt-3"
              required
              value={message}
              placeholder="Enter your message here..."
              style={{ height: '150px' }}
            />
            <ValidationError
              prefix="Message"
              field="message"
              errors={state.errors}
            />
          </Col>
        </Row>
        <Row className="pt-3">
          <Col sm={12}>
            <Button
              color="warning"
              className="contact-button mt-4"
              type="submit"
              disabled={state.submitting || !validName}
            >
              Submit
            </Button>
          </Col>
        </Row>
      </ScrollAnimation>
    </form>
  );
};

export default ContactForm;
