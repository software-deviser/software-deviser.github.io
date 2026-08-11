import React from "react";
import { experience } from "../data/resumeData";

export default function Experience() {
  return (
    <section id="experience" className="section-block">
      <div className="section-header">
        <div className="section-label">Career journey</div>
        <p className="section-intro">
          My journey has evolved from building Android apps to leading cross-platform products and mentoring teams with stronger architecture choices.
        </p>
      </div>

      {experience.map((job) => (
        <div className="entry" key={job.company + job.date}>
          <div className="entry-meta">
            <div className="company">{job.company}</div>
            <div className="date-loc">
              {job.date}
              <br />
              {job.location}
            </div>
          </div>
          <div className="entry-body">
            <div className="job-title">{job.title}</div>
            <ul>
              {job.points.map((pt, i) => (
                <li key={i}>{pt}</li>
              ))}
            </ul>
          </div>
        </div>
      ))}
    </section>
  );
}
