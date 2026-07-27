import React from "react";
import { skillGroups } from "../data/resumeData";

export default function Skills() {
  return (
    <section id="skills">
      <div className="section-label">technical skills</div>
      <div className="skills-matrix">
        {skillGroups.map((group) => (
          <div className="skill-card" key={group.label}>
            <div className="skill-group-label">{group.label}</div>
            <div className="skills-row">
              {group.skills.map((s) => (
                <span className="skill-tag" key={s}>
                  {s}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
