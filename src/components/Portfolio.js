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
              Authorization: `Bearer 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`, // Replace with your GitHub token if needed
              'X-GitHub-Api-Version': '2022-11-28'
            },
          }
        );

        if (!response.ok) {
          throw new Error(`Error fetching pinned repositories: ${response.statusText}`);
        }
        const toShowProjectsName = ['ML_Hackathons-Projects','HandWritten_OCR','Video_Chat_App','Machine_Vision_Projects','ChatApp'];
        const data = await response.json();
        setPinnedRepos(data.filter(repo => toShowProjectsName.includes(repo.name)));
      } catch (error) {
        console.error(error.message);
      }
    };

    fetchPinnedRepos();
  }, [username]);

  return (
    <div className='reposList'>
        {pinnedRepos.map((repo) => (
      <div className="repo">
        <div className="name"><FontAwesomeIcon icon={faBook} />&nbsp;{repo.name}</div>
        <div className="description">{repo.description}</div>
        <div className="viewMore"><Link to={repo.url}>View More</Link></div>
      </div>
        ))}
    </div>
  );
};
