import React from "react";
import { projects } from "../data/resumeData";

export default function Projects() {
  return (
    <section id="projects" className="section-block">
      <div className="section-header">
        <div className="section-label">Selected work</div>
        <p className="section-intro">
          A snapshot of mobile products across Android TV digital signage, AI-assisted audience insights, AR measurement, and NFC-based digital identity.
        </p>
      </div>

      <div className="projects-grid">
        {projects.map((p) => (
          <div className="project-card" key={p.name}>
            <div className="project-header">
              <span className="project-name">
                {p.link ? (
                  <a href={p.link} target="_blank" rel="noreferrer">
                    {p.name}
                  </a>
                ) : (
                  p.name
                )}
              </span>
            </div>
            {p.technologies?.length > 0 && (
              <div className="skills-row" aria-label="Technology stack">
                {p.technologies.map((technology) => (
                  <span className="skill-tag" key={technology}>
                    {technology}
                  </span>
                ))}
              </div>
            )}
            <ul>
              {p.points.map((pt, i) => (
                <li key={i}>{pt}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
