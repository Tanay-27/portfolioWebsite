import React from 'react'
import { Link } from 'react-router-dom';
import './Home.scss'
import { profile } from '../data/profile';
import self from '../images/homePageSelf.jpeg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';

function Home() {
  const { name, role, headline, intro, links, now, stats } = profile;
  return (
    <div className="page home">
      <section className="hero">
        <div className="hero-text">
          <div className="eyebrow">{role}</div>
          <h1>{headline}</h1>
          <p className="lead">{intro}</p>
          <div className="cta-row">
            <Link className="cta primary" to="/resume">View resume</Link>
            <Link className="cta" to="/portfolio">See projects</Link>
            <a className="icon-link" href={links.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub">
              <FontAwesomeIcon icon={faGithub} />
            </a>
            <a className="icon-link" href={links.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
              <FontAwesomeIcon icon={faLinkedin} />
            </a>
          </div>
        </div>
        <img className="portrait" src={self} alt={name} />
      </section>

      <section className="now panel">
        <div className="eyebrow">Currently · {now.where}</div>
        <p>{now.text}</p>
      </section>

      <section className="stats">
        {stats.map((s) => (
          <div className="stat" key={s.label}>
            <div className="value">{s.value}</div>
            <div className="label">{s.label}</div>
          </div>
        ))}
      </section>
    </div>
  )
}

export default Home
