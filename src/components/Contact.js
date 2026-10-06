import React, { useState } from 'react'
import './Contact.scss';
import { profile } from '../data/profile';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faCopy, faCheck } from '@fortawesome/free-solid-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';

function Contact() {
  const { links } = profile;
  const [copied, setCopied] = useState(false);

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(links.email);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (e) {
      // clipboard unavailable: the address is visible and selectable anyway
    }
  };

  return (
    <div className="page contact">
      <div className="pageHeader">Contact</div>
      <p className="lead">
        Happy to talk about AI systems, agent tooling or application security. Email is the
        fastest way to reach me.
      </p>
      <div className="contact-grid">
        <div className="panel contact-item">
          <FontAwesomeIcon icon={faEnvelope} className="contact-icon" />
          <div className="contact-text">
            <div className="contact-label">Email</div>
            <a className="contact-value" href={`mailto:${links.email}`}>{links.email}</a>
          </div>
          <button className="copy-btn" onClick={copyEmail} aria-label="Copy email address">
            <FontAwesomeIcon icon={copied ? faCheck : faCopy} /> {copied ? 'Copied' : 'Copy'}
          </button>
        </div>
        <a className="panel contact-item" href={links.github} target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faGithub} className="contact-icon" />
          <div className="contact-text">
            <div className="contact-label">GitHub</div>
            <div className="contact-value">Tanay-27</div>
          </div>
        </a>
      </div>
    </div>
  )
}

export default Contact
