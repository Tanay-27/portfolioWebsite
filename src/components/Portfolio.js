import React from 'react';
import './Portfolio.scss';
import { projects } from '../data/profile';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowUpRightFromSquare } from '@fortawesome/free-solid-svg-icons';

function Portfolio() {
  return (
    <div className="page portfolio">
      <div className="pageHeader">Projects</div>
      <div className="project-grid">
        {projects.map((p) => (
          <article className="panel project" key={p.name}>
            <div className="project-head">
              <h3>{p.name}</h3>
              <span className={`badge badge-${p.status.toLowerCase()}`}>{p.status}</span>
            </div>
            <p>{p.description}</p>
            <div className="chips">
              {p.tech.map((t) => <span className="chip" key={t}>{t}</span>)}
            </div>
            {p.url && (
              <a className="project-link" href={p.url} target="_blank" rel="noopener noreferrer">
                View on GitHub <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
              </a>
            )}
          </article>
        ))}
      </div>
    </div>
  )
}

export default Portfolio
