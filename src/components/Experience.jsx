import React from "react";
import { experience } from "../data/resumeData";

export default function Experience() {
  return (
    <section id="experience">
      <div className="section-label">work experience</div>
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
