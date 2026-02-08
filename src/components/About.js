import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import './About.scss'

function About() {
  return (
    <div className='about'>
      <div className="pageHeader">About Me</div>
      <Container>
        <Row>
          <Col md={12}>
            <div className="about-content">
              <div className="professional-summary">
                <h3>Professional Summary</h3>
                <p>
                  Experienced software engineer with 4.5+ years of experience mainly in Python backend development, 
                  recently focused on applied AI and application security. I've worked on AI-driven systems including 
                  large-scale mobile app detection pipelines, assisted security testing workflows, and tools to validate 
                  vulnerabilities and reduce false positives.
                </p>
                <p>
                  Comfortable with Django, API design, containerized environments, vector databases, and ML-based feature 
                  engineering. My prior MEAN stack experience enables end-to-end product development when required.
                </p>
              </div>
              
              <div className="expertise-areas">
                <h3>Areas of Expertise</h3>
                <div className="expertise-grid">
                  <div className="expertise-item">
                    <h4>Backend Development</h4>
                    <p>Python, Django, Node.js, REST APIs, TypeScript</p>
                  </div>
                  <div className="expertise-item">
                    <h4>Applied AI & ML</h4>
                    <p>LLM Application Development, LangGraph, Gemini API, Feature Engineering, Vector Databases</p>
                  </div>
                  <div className="expertise-item">
                    <h4>Application Security</h4>
                    <p>SAST/DAST Concepts, Mobile App Security, Pentesting Automation, Vulnerability Analysis</p>
                  </div>
                  <div className="expertise-item">
                    <h4>Infrastructure & DevOps</h4>
                    <p>Docker, Kubernetes, CI/CD Integrations, Azure DevOps, Jenkins</p>
                  </div>
                </div>
              </div>
              
              <div className="skills-section">
                <h3>Technical Skills</h3>
                <div className="skills-categories">
                  <div className="skill-category">
                    <h4>Backend & Languages</h4>
                    <div className="skills-grid">
                      <SkillBar name="Python" level={9} />
                      <SkillBar name="Django" level={8} />
                      <SkillBar name="Node.js" level={8} />
                      <SkillBar name="TypeScript" level={7} />
                      <SkillBar name="REST APIs" level={9} />
                    </div>
                  </div>
                  
                  <div className="skill-category">
                    <h4>Applied AI & ML</h4>
                    <div className="skills-grid">
                      <SkillBar name="LLM Development" level={8} />
                      <SkillBar name="LangGraph" level={7} />
                      <SkillBar name="Vector Databases" level={7} />
                      <SkillBar name="Feature Engineering" level={8} />
                      <SkillBar name="Gemini API" level={7} />
                    </div>
                  </div>
                  
                  <div className="skill-category">
                    <h4>Infrastructure & DevOps</h4>
                    <div className="skills-grid">
                      <SkillBar name="Docker" level={8} />
                      <SkillBar name="Kubernetes" level={7} />
                      <SkillBar name="CI/CD" level={7} />
                      <SkillBar name="Azure DevOps" level={7} />
                      <SkillBar name="Jenkins" level={6} />
                    </div>
                  </div>
                  
                  <div className="skill-category">
                    <h4>Application Security</h4>
                    <div className="skills-grid">
                      <SkillBar name="SAST/DAST" level={8} />
                      <SkillBar name="Mobile App Security" level={8} />
                      <SkillBar name="Pentesting Automation" level={7} />
                      <SkillBar name="Vulnerability Analysis" level={8} />
                    </div>
                  </div>
                  
                  <div className="skill-category">
                    <h4>Frontend (Prior Experience)</h4>
                    <div className="skills-grid">
                      <SkillBar name="Angular" level={7} />
                      <SkillBar name="React" level={6} />
                      <SkillBar name="JavaScript" level={7} />
                      <SkillBar name="SCSS/CSS" level={7} />
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="personal-info">
                <h3>Beyond Code</h3>
                <p>
                  I thrive on exploring new and challenging terrains—both in code and the real world. 
                  When I'm not building secure, scalable systems, you'll find me exploring new technologies, 
                  contributing to open-source projects, or planning my next adventure.
                </p>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  )
}

function SkillBar({ name, level }) {
  return (
    <div className="skill-bar">
      <div className="skill-info">
        <span className="skill-name">{name}</span>
        <span className="skill-level">{level}/10</span>
      </div>
      <div className="skill-progress">
        <div className="skill-progress-bg"></div>
        <div 
          className="skill-progress-fill" 
          style={{ width: `${level * 10}%` }}
        ></div>
      </div>
    </div>
  );
}

export default About