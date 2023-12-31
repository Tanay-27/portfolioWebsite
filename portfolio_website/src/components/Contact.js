import React from 'react'
import { useState } from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import './Contact.scss';
import { faPaperPlane,faPhone, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faLinkedin, faGithub, faInstagram } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
function Contact() {
    return (
        <div className="contactContent">
            <div className="pageHeader">Contact</div>
            <Container fluid>
                <Row>
                    <Col><ContactMe /></Col>
                    <Col><ContactInfo /></Col>
                </Row>    
            </Container>
        </div>
    )
}


function ContactMe() {
    const [inputs, setInputs] = useState({});

    const handleChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setInputs(values => ({ ...values, [name]: value }))
    }

    const handleSubmit = (event) => {
        event.preventDefault();
    }

    return (
        <div className="formContact">
            <form>
                <div className="inputField">
                <input type="text" name="name" placeholder='Name'
                            value={inputs.name || ""}
                            onChange={handleChange}
                     />
                </div>
                <div className="inputField">
                <input type="email" name="email" placeholder='Email'
                            value={inputs.email || ""}
                            onChange={handleChange}
                        /> 
                </div>
                <div className="inputField">
                <textarea name='message' placeholder='Message'
                            value={inputs.message || ""} rows={5} cols={18}
                            onChange={handleChange}
                        />
                </div>
                <div className="btn btn-primary sendBtn" onClick={handleSubmit}>
                    Send Message <FontAwesomeIcon icon={faPaperPlane} />
                </div>
            </form>
        </div>
    )
}

function ContactInfo() {
  return (
    <div className="contactInfo">
        <ContactItem icon={faPhone} details={9653198978} />
        <ContactItem icon={faEnvelope} details={'tanayshah027@gmail.com'} />
        <div className='socialBtns'>
      <SocialButton
        href="https://www.linkedin.com/in/tanayshah27"
        imgSrc={faLinkedin}
        alt="LinkedIn"
        text="LinkedIn"
      />
      <SocialButton
        href="https://github.com/Tanay-27"
        imgSrc={faGithub}
        alt="GitHub"
        text="GitHub"
      />
      <SocialButton
        href="https://www.instagram.com/tanay.27"
        imgSrc={faInstagram}
        alt="Instagram"
        text="Instagram"
      />
    </div>
    </div>
  )
}

function ContactItem(props) {
  return (
    <div className="contactItem">
        <span className="icon"><FontAwesomeIcon icon={props.icon} /></span>
        <span className="info">{props.details}</span>
    </div>
  )
}

const SocialButton = ({ href, imgSrc, alt, text }) => {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer" className="social-button">
        <FontAwesomeIcon icon={imgSrc} className="social-icon" />
        <span className="social-text">{text}</span>
      </a>
    );
  };

  

export default Contact