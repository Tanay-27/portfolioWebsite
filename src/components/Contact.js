import React from 'react'
import './Contact.scss';
import { profile } from '../data/profile';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faLinkedin, faGithub, faInstagram } from '@fortawesome/free-brands-svg-icons';

function Contact() {
  const { links } = profile;
  const items = [
    { icon: faEnvelope, label: 'Email', value: links.email, href: `mailto:${links.email}` },
    { icon: faLinkedin, label: 'LinkedIn', value: 'tanayshah27', href: links.linkedin },
    { icon: faGithub, label: 'GitHub', value: 'Tanay-27', href: links.github },
    { icon: faInstagram, label: 'Instagram', value: 'tanay.27', href: links.instagram },
  ];
  return (
    <div className="page contact">
      <div className="pageHeader">Contact</div>
      <p className="lead">
        Happy to talk about AI systems, agent tooling or application security. Email is the
        fastest way to reach me.
      </p>
      <div className="contact-grid">
        {items.map((i) => (
          <a className="panel contact-item" key={i.label} href={i.href}
            target={i.href.startsWith('mailto:') ? undefined : '_blank'} rel="noopener noreferrer">
            <FontAwesomeIcon icon={i.icon} className="contact-icon" />
            <div>
              <div className="contact-label">{i.label}</div>
              <div className="contact-value">{i.value}</div>
            </div>
          </a>
        ))}
      </div>
    </div>
  )
}

export default Contact
