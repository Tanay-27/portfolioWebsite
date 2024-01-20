import React from 'react';
import './Resume.scss';
import { Container, Row, Col } from 'react-bootstrap';
import { faSuitcase, faGraduationCap } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


const workExpData = [
  {
    company:"LTIMindtree",
    designation:"Senior Software Engineer",
    duration:"July 2021 - Present",
    skills:"Angular, NodeJS, MySQL, Python, Azure DevOps, Jenkins",
    details:"Developing the frontend UI with Angular for code reusability, I implemented 15+ key functionalities, reducing development time by 40%. Translated client requirements into new features, conducted unit testing, and addressed security vulnerabilities, significantly enhancing functionality and security. Upgraded Angular, optimized performance for a 54% load time reduction, and addressed security. Mentored two interns, contributing to their skill development and project success"
  },
  {
    company:"LifeSpark Technologies",
    designation:"Embedded System and Machine Learning Intern",
    duration:"Jan 2021 - April 2021",
    skills:"Python, EDA, Embedded C, Peripheral Interfacing",
    details:"Contributed to an assistive solution for Parkinson's patients, designing an ML algorithm for IMU sensor data analysis. Built a neural network to predict freezing episodes, enhancing seizure prevention with audiovisual cues. Also, contributed to developing a laser pointer as a line source for visual simulation."
  }
];

const skillsList = [
  {name: "Angular", rating:8},
  {name: "NodeJS", rating:9},
  {name: "ReactJS", rating:4},
  {name: "Python", rating:9},
  {name: "MySQL", rating:9},
  {name: "Machine Learning", rating:6},
  {name: "Machine Vision", rating:7}
];

const educationData = [
  {id:1,institute:"Vidyalankar Instutute Of Technology",degree:"B.E.",perc:"9.42 CGPA",year:"2017-21"},
  {id:2,institute:"Army Public School",degree:"Class 12",perc:"93.6%",year:"2017"},
  {id:3,institute:"Army Public School",degree:"Class 10",perc:"10 CGPA",year:"2015"},
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

export default Resume