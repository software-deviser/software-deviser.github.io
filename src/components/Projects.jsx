import React from "react";
import { projects } from "../data/resumeData";

export default function Projects() {
  return (
    <section id="projects" className="section-block">
      <div className="section-header">
        <div className="section-label">Selected work</div>
        <p className="section-intro">
          A snapshot of building experiences across AR, AI, Android TV, NFC, logistics, media, and community-focused products.
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
