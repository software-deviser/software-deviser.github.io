import React from "react";
import { education, languages } from "../data/resumeData";

export default function Education() {
  return (
    <section id="education" className="section-block">
      <div className="section-header">
        <div className="section-label">Background</div>
        <p className="section-intro">
          I hold a B.Tech in Computer Science and combine strong engineering fundamentals with practical product delivery and collaboration.
        </p>
      </div>

      {education.map((edu) => (
        <div className="entry" key={edu.company}>
          <div className="entry-meta">
            <div className="company">{edu.company}</div>
            <div className="date-loc">
              {edu.date}
              <br />
              {edu.score}
            </div>
          </div>
          <div className="entry-body">
            <div className="job-title">{edu.degree}</div>
          </div>
        </div>
      ))}

      <div className="languages-card">
        <div className="skill-group-label">Languages</div>
        <div className="languages-row">
          {languages.map((l) => (
            <span className="skill-tag" key={l}>
              {l}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
