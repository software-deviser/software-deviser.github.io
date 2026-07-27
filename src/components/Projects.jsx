import React from "react";
import { projects } from "../data/resumeData";

export default function Projects() {
  return (
    <section id="projects">
      <div className="section-label">projects</div>
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
              <span className="project-date">{p.date}</span>
            </div>
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
