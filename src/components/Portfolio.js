import React, { useState, useEffect } from 'react';
import './Portfolio.scss';
import { Link } from "react-router-dom";
import { faBook } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const githubUsername='Tanay-27';
function Portfolio() {
  return (
    <div className='portfolio'>
      <div className="pageHeader">Portfolio</div>
      <PinnedRepos username={githubUsername} />
    </div>
  )
}

export default Portfolio

const PinnedRepos = ({ username }) => {
  const [pinnedRepos, setPinnedRepos] = useState([]);

  useEffect(() => {
    const fetchPinnedRepos = async () => {
      try {
        const response = await fetch(
          `https://api.github.com/users/${username}/repos?sort=updated`,
          {
            headers: {
              Authorization: `Bearer ${process.env.REACT_APP_GITREPOREAD}`,
              'X-GitHub-Api-Version': '2022-11-28'
            },
          }
        );

        if (!response.ok) {
          setPinnedRepos(filteredRepoData)
        }
        else{
          const data = await response.json();
          setPinnedRepos(data) ; //.filter(repo => toShowProjectsName.includes(repo.name)));
        }
        // const toShowProjectsName = ['ML_Hackathons-Projects','HandWritten_OCR','Video_Chat_App','Machine_Vision_Projects','ChatApp','75_Days_Hard'];
      } catch (error) {
        setPinnedRepos(filteredRepoData);
      }
    };

    fetchPinnedRepos();
  }, [username]);

  return (
    <div className='reposList row'>
        {pinnedRepos.map((repo, index) => (
      <div key={index} className="repo col-md-5 col-sm-9 col-xs-11">
        <div className="repo-header">
          <div className="name"><FontAwesomeIcon icon={faBook} />&nbsp;{repo.name}</div>
          {repo.status && <div className={`status status-${repo.status.toLowerCase()}`}>{repo.status}</div>}
        </div>
        <div className="description">{repo.description}</div>
        {repo.technologies && (
          <div className="technologies">
            <span className="tech-label">Tech Stack:</span>
            <span className="tech-list">{repo.technologies}</span>
          </div>
        )}
        <div className="viewMore"><Link to={repo.url} target="_blank" rel="noopener noreferrer">View Project</Link></div>
      </div>
        ))}
    </div>
  );
};


const repoData = [
  {
    "name": "AI Mobile Security Analyzer",
    "description": "Automated framework to analyze Android apps for advanced runtime protection mechanisms like RASP, anti-tampering, instrumentation detection. Uses Python, Frida, LLM Workflows, and Containerized Sandbox for large-scale security assessments.",
    "url": "https://github.com/Tanay-27",
    "status": "Ongoing",
    "technologies": "Python, Frida, LLM Workflows, Docker",
    "lastUpdated": "2024-12-01"
  },
  {
    "name": "CodeHarbour",
    "description": "Interactive web-based code editor with API-based compilation and execution support. Features collaboration-oriented tools for sharing solutions and improving developer workflow.",
    "url": "https://github.com/Tanay-27",
    "status": "Completed",
    "technologies": "Python, React, Node.js, API Integration",
    "lastUpdated": "2023-12-01"
  },
  {
    "name": "Portfolio Website",
    "description": "Modern portfolio website built with React, featuring responsive design, dark/light theme toggle, and comprehensive resume showcase.",
    "url": "https://github.com/Tanay-27/portfolioWebsite",
    "status": "Active",
    "technologies": "React, SCSS, Bootstrap",
    "lastUpdated": "2026-02-08"
  },
  {
    "name": "Video Chat App",
    "description": "Group video calling application enabling real-time communication for multiple users. Implements WebRTC and socket communication for seamless video conferencing.",
    "url": "https://github.com/Tanay-27/Video_Chat_App",
    "status": "Completed",
    "technologies": "WebRTC, Socket.io, JavaScript",
    "lastUpdated": "2022-08-15"
  },
  {
    "name": "Computer Vision Suite",
    "description": "Comprehensive collection of computer vision projects including Face Recognition, Gaze Detection, Handwriting Recognition, Smile Detection, and Drowsiness Detection systems.",
    "url": "https://github.com/Tanay-27/Machine_Vision_Projects",
    "status": "Completed",
    "technologies": "Python, OpenCV, TensorFlow, ML",
    "lastUpdated": "2021-11-20"
  },
  {
    "name": "Handwriting OCR System",
    "description": "Advanced handwritten character recognition system using NIST dataset with high accuracy OCR capabilities for document digitization.",
    "url": "https://github.com/Tanay-27/HandWritten_OCR",
    "status": "Completed",
    "technologies": "Python, TensorFlow, OCR, NIST Dataset",
    "lastUpdated": "2021-09-10"
  },
  {
    "name": "Real-Time Chat App",
    "description": "Real-time chat application with modern UI, user authentication, and persistent message storage using Node.js and MongoDB.",
    "url": "https://github.com/Tanay-27/ChatApp",
    "status": "Completed",
    "technologies": "Node.js, MongoDB, Socket.io",
    "lastUpdated": "2022-03-25"
  },
  {
    "name": "ML Competition Solutions",
    "description": "Collection of machine learning models and solutions developed for various hackathons and competitions. Includes Jupyter notebooks ready for deployment.",
    "url": "https://github.com/Tanay-27/ML_Hackathons-Projects",
    "status": "Archive",
    "technologies": "Python, Jupyter, Scikit-learn, Pandas",
    "lastUpdated": "2021-12-15"
  }
];

// Filter projects to show only those active in the past year
const getRecentProjects = (projects) => {
  const oneYearAgo = new Date();
  oneYearAgo.setFullYear(oneYearAgo.getFullYear() - 1);
  
  return projects.filter(project => {
    const lastUpdated = new Date(project.lastUpdated);
    return lastUpdated >= oneYearAgo || project.status === 'Ongoing' || project.status === 'Active';
  }).sort((a, b) => {
    // Sort by status priority (Ongoing > Active > Completed) then by date
    const statusPriority = { 'Ongoing': 3, 'Active': 2, 'Completed': 1, 'Archive': 0 };
    if (statusPriority[a.status] !== statusPriority[b.status]) {
      return statusPriority[b.status] - statusPriority[a.status];
    }
    return new Date(b.lastUpdated) - new Date(a.lastUpdated);
  });
};

const filteredRepoData = getRecentProjects(repoData)

