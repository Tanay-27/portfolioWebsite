import React from 'react'
import { Link } from 'react-router-dom';
import './About.scss'
import { profile, principles } from '../data/profile';

function About() {
  return (
    <div className="page about">
      <div className="pageHeader">About</div>

      <section className="summary">
        <p>
          I'm a backend engineer with 5+ years of experience across full-stack and Python backend
          development, now focused on applied AI and application security. I build the right context
          for LLM reasoning and wrap it in agentic harnesses (LangGraph), sandboxes and automated
          verification, turning noisy security signals into validated findings and fixes that
          enterprise teams can act on.
        </p>
        <p>
          My work spans AI-driven vulnerability validation, automated remediation, MCP-based IDE
          integration, an AI-assisted pentesting framework, and a mobile threat intelligence
          pipeline covering 3M+ apps. I'm comfortable owning delivery end to end, from API design
          and async workers to vector search, containerization and deployment, backed by earlier
          MEAN stack experience.
        </p>
      </section>

      <section>
        <div className="section-label">How I work</div>
        <div className="principles">
          {principles.map((p) => (
            <div className="panel" key={p.title}>
              <h3>{p.title}</h3>
              <p>{p.text}</p>
            </div>
          ))}
        </div>
      </section>

      <section>
        <div className="section-label">Beyond work</div>
        <p className="summary-p">
          I like exploring new terrain, in code and in the real world. I learn by building side
          projects: a Rust API client, an agent memory system, a trading backtester.{' '}
          <Link to="/portfolio">See what I've built</Link> or <a href={`mailto:${profile.links.email}`}>say hi</a>.
        </p>
      </section>
    </div>
  )
}

export default About
