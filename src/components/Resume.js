import React from 'react';
import './Resume.scss';
import { Container, Row, Col } from 'react-bootstrap';
import { faSuitcase, faGraduationCap, faProjectDiagram, faTrophy } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


const workExpData = [
  {
    company:"Appknox",
    designation:"Software Development Engineer (SDE-2)",
    duration:"April 2024 - Present",
    skills:"Python, Applied AI, Docker, Kubernetes, Qdrant, LangGraph",
    details:"Working on mobile application security platforms, focusing on automation of pen-testing, vulnerability validation, and advanced security analysis workflows. Built large-scale fake app detection pipeline processing 3M+ mobile apps using metadata feature engineering, similarity scoring, and vector database search. Developing AI-based validation agents to reduce false positives in SAST/DAST scans and generate remediation guidance."
  },
  {
    company:"LTIMindtree",
    designation:"Senior Software Engineer",
    duration:"July 2021 - April 2024",
    skills:"MEAN Stack, Python, Azure DevOps, Jenkins",
    details:"Delivered 15+ product features using reusable component design, improving development efficiency and maintainability. Optimized APIs and database queries through indexing, query refactoring, caching, reducing response times by ~50%. Integrated Microsoft Graph API, implemented unit testing, and resolved security issues to strengthen application stability. Mentored junior developers and interns."
  },
  {
    company:"LifeSpark Technologies",
    designation:"Embedded System and Machine Learning Intern",
    duration:"Nov 2020 - June 2021",
    skills:"Python, EDA, Embedded C, Peripheral Interfacing",
    details:"Contributed to an ML-based assistive prototype for Parkinson's patients using IMU data and embedded system integration. Built a neural network to predict freezing episodes, enhancing seizure prevention with audiovisual cues."
  }
];

const skillsList = [
  {name: "Python", rating:9},
  {name: "Django", rating:8},
  {name: "NodeJS", rating:8},
  {name: "TypeScript", rating:7},
  {name: "Applied AI/ML", rating:8},
  {name: "LangGraph", rating:7},
  {name: "Vector Databases", rating:7},
  {name: "Docker", rating:8},
  {name: "Kubernetes", rating:7},
  {name: "Application Security", rating:8},
  {name: "Angular", rating:7},
  {name: "React", rating:6},
  {name: "REST APIs", rating:9},
  {name: "CI/CD", rating:7}
];

const educationData = [
  {id:1,institute:"Vidyalankar Instutute Of Technology",degree:"B.E.",perc:"9.42 CGPA",year:"2017-21"},
  {id:2,institute:"Army Public School",degree:"Class 12",perc:"93.6%",year:"2017"},
  {id:3,institute:"Army Public School",degree:"Class 10",perc:"10 CGPA",year:"2015"},
];

const projectsData = [
  {
    id: 1,
    title: "AI-Assisted Mobile App Protection Analysis Tool",
    duration: "Ongoing",
    technologies: "Python, Frida, LLM Workflows, Containerized Sandbox",
    description: "Built automated framework to analyze Android apps for advanced runtime protection mechanisms like RASP, anti-tampering, instrumentation detection for large-scale security assessments. Combined APK analysis, sandboxed run, and LLM-guided UI interaction to trigger and observe protection behavior."
  },
  {
    id: 2,
    title: "CodeHarbour",
    duration: "Dec 2023",
    technologies: "Python, React, Node.js, API Interfacing",
    description: "Developed an interactive web-based code editor with API-based compilation and execution support. Added collaboration-oriented features for sharing solutions and improving developer workflow."
  }
];

const achievementsData = [
  {
    id: 1,
    title: "Project Synergy Award — Appknox",
    year: "2025",
    description: "Versatile contributions and strong collaboration across critical production initiatives."
  },
  {
    id: 2,
    title: "Airflow Fundamentals Certification",
    year: "2024",
    description: "Workflow orchestration and data pipeline concepts."
  },
  {
    id: 3,
    title: "Appreciation Award – Creativity & Innovation",
    year: "2022",
    description: "Recognized for technical contributions and problem-solving at work."
  },
  {
    id: 4,
    title: "HackerEarth Deep Learning Challenge",
    year: "2021",
    description: "Ranked within top 100 participants."
  }
];

function Resume() {
  return (
    <div className='resume'>
      <div className="pageHeader">Resume</div>
      <Container>
        <Row>
          <Col  xs={12} md={3} sm={12} className="order-md-first order-sm-last">
            <SkillsComponent skills={skillsList} />
          </Col>
          <Col  xs={12} md={9} sm={12} className="order-md-last order-sm-first">
            <div className="section">
            <ResumeHeader header="Work Experience" icon={faSuitcase} />
            <div className="sectionContent">
              {workExpData.map( item => <WorkExp key={item.company} {...item} />)}
            </div>
            </div>
            <div className="section">
            <ResumeHeader header="Education" icon={faGraduationCap} />
            <div className="sectionContent">
              {educationData.map( item => <Education key={item.id} {...item} />)}
            </div>
            </div>
            
            <div className="section">
            <ResumeHeader header="Projects" icon={faProjectDiagram} />
            <div className="sectionContent">
              {projectsData.map( item => <Project key={item.id} {...item} />)}
            </div>
            </div>
            
            <div className="section">
            <ResumeHeader header="Achievements & Certifications" icon={faTrophy} />
            <div className="sectionContent">
              {achievementsData.map( item => <Achievement key={item.id} {...item} />)}
            </div>
            </div>
            
          </Col>
        </Row>
        
      </Container>
    </div>
  )
}

function WorkExp({company,designation,duration,skills,details}) {
  return (
    <div className='workExpItem'>
      <div className="headerLine">
        <div className="company">{company}</div>
        <div className="duration">{duration}</div>
      </div>
      <div className="designationSkills">
        <span className="designation">{designation}</span>
        &nbsp;|&nbsp;
        <span className="skills">{skills}</span>
      </div>
      <div className="details">{details}</div>
    </div>
  )
}

function Education({institute,degree,perc,year}) {
  return (
    <div className='eduItem'>
      <div className="p1">
        <span className="institute">{institute}</span>
        <span className="degree">{degree}</span>
        <span className="perc">{perc}</span>
      </div>
      <div className="p2">
      <span className="year">{year}</span>
      </div>
    </div>
  )
}

function ResumeHeader({header,icon}) {
  return (
    <div className='sectionHeader'>
      <FontAwesomeIcon icon={icon} /> &nbsp;{header}
    </div>
  )
}


function SkillsComponent({skills}) {
  return (
    <div className='skillsComponent'>
      <div className="sectionHeader">Skills</div>
      {skills.map( skill => <Skills key={skill.name} {...skill} />)}
    </div>
  )
}

function Skills({name,rating}) {
  return (
    <div className="skill-bar">
      <div className='nameNPerc'>
        <div className="name">{name}</div>
        <div className="perc">{rating}</div>
      </div>
      <div className="progress-bar">
        <div className="background"></div>
        <div className="filler" style={{ width: `${rating}0%` }}></div>
      </div>
    </div>
  );
}

function Project({title, duration, technologies, description}) {
  return (
    <div className='projectItem'>
      <div className="headerLine">
        <div className="projectTitle">{title}</div>
        <div className="duration">{duration}</div>
      </div>
      <div className="technologies">
        <span className="techLabel">Technologies:</span>
        <span className="techList">{technologies}</span>
      </div>
      <div className="description">{description}</div>
    </div>
  )
}

function Achievement({title, year, description}) {
  return (
    <div className='achievementItem'>
      <div className="headerLine">
        <div className="achievementTitle">{title}</div>
        <div className="year">{year}</div>
      </div>
      <div className="description">{description}</div>
    </div>
  )
}

export default Resume