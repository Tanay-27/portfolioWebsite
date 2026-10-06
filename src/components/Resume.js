import React from 'react';
import './Resume.scss';
import { experience, skills, education, achievements } from '../data/profile';

function Resume() {
  return (
    <div className="page resume">
      <div className="pageHeader">Resume</div>

      <section>
        <div className="section-label">Experience</div>
        {experience.map((job) => (
          <article className="role" key={job.company}>
            <div className="role-meta">
              <div className="period">{job.period}</div>
              <div className="company">{job.company}</div>
            </div>
            <div className="role-body">
              <h3>{job.role}</h3>
              <ul>
                {job.highlights.map((h) => <li key={h}>{h}</li>)}
              </ul>
              <div className="chips">
                {job.stack.map((t) => <span className="chip" key={t}>{t}</span>)}
              </div>
            </div>
          </article>
        ))}
      </section>

      <section>
        <div className="section-label">Skills</div>
        <div className="skill-groups">
          {skills.map((g) => (
            <div className="skill-group" key={g.group}>
              <div className="group-name">{g.group}</div>
              <div className="chips">
                {g.items.map((t) => <span className="chip" key={t}>{t}</span>)}
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="two-col">
        <div>
          <div className="section-label">Education</div>
          {education.map((e) => (
            <div className="entry" key={e.school}>
              <div className="entry-title">{e.school}</div>
              <div className="entry-sub">{e.degree} · {e.detail}</div>
              <div className="entry-date">{e.period}</div>
            </div>
          ))}
        </div>
        <div>
          <div className="section-label">Recognition</div>
          {achievements.map((a) => (
            <div className="entry" key={a.title}>
              <div className="entry-title">{a.title} <span className="entry-date">· {a.year}</span></div>
              <div className="entry-sub">{a.text}</div>
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}

export default Resume
