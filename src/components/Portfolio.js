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
          setPinnedRepos(repoData)
        }
        else{
          const data = await response.json();
          setPinnedRepos(data) ; //.filter(repo => toShowProjectsName.includes(repo.name)));
        }
        // const toShowProjectsName = ['ML_Hackathons-Projects','HandWritten_OCR','Video_Chat_App','Machine_Vision_Projects','ChatApp','75_Days_Hard'];
      } catch (error) {
        setPinnedRepos(repoData);
      }
    };

    fetchPinnedRepos();
  }, [username]);

  return (
    <div className='reposList row'>
        {pinnedRepos.map((repo) => (
      <div className="repo col-md-5 col-sm-9 col-xs-11">
        <div className="name"><FontAwesomeIcon icon={faBook} />&nbsp;{repo.name}</div>
        <div className="description">{repo.description}</div>
        <div className="viewMore"><Link to={repo.url}>View More</Link></div>
      </div>
        ))}
    </div>
  );
};


const repoData = [
  {
    "name": "portfolioWebsite",
    "description": "Created Portfolio website using Reactjs, HTML and CSS",
    "url": "https://api.github.com/repos/Tanay-27/portfolioWebsite",
  },
  {
    "name": "Video_Chat_App",
    "description": "A group video calling application that allows all users with the link to video call in real time. Uses WebRTC and socket communication",
    "url": "https://api.github.com/repos/Tanay-27/Video_Chat_App",
  },
  {
    "name": "Machine_Vision_Projects",
    "description": "Machine Vision projects including but not limited to Face Recognition, Gaze Detection, Handwriting Recognition, Smile Detection, Drowsiness Detection, etc",
    "url": "https://api.github.com/repos/Tanay-27/Machine_Vision_Projects",
  },
  {
    "name": "HandWritten_OCR",
    "description": "Handwritten Character Recognition using NIST dataset",
    "url": "https://api.github.com/repos/Tanay-27/HandWritten_OCR",
  },
  {
    "name": "ChatApp",
    "description": "Node.js and MongoDB real-time chat application",
    "url": "https://api.github.com/repos/Tanay-27/ChatApp",
  },
  {
    "name": "75_Days_Hard",
    "description": "Documenting my journey of taking up 75 days non-stop incremental practise/learning of concepts",
    "url": "https://api.github.com/repos/Tanay-27/75_Days_Hard",
  },
  {
    "name": "ML_Hackathons-Projects",
    "description": "A collection of ML models created for different Hackathons and projects. Jupyter notebooks ready to use in Jupyter or VSCode",
    "url": "https://api.github.com/repos/Tanay-27/ML_Hackathons-Projects",
  },
  {
    "name": "paymentapi",
    "description": "Integration of Instamojo Payment API Sandbox into Python Code",
    "url": "https://api.github.com/repos/Tanay-27/paymentapi",
  },
  {
    "name": "send-emails",
    "description": "Python Script to send Emails to multiple recipients",
    "url": "https://api.github.com/repos/Tanay-27/send-emails",
  },
]

