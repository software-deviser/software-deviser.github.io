import React from "react";
import { skillGroups } from "../data/resumeData";

export default function Skills() {
  return (
    <section id="skills" className="section-block">
      <div className="section-header">
        <div className="section-label">Core capabilities</div>
        <p className="section-intro">
          My toolkit spans Kotlin, Java, Dart, Flutter, Android SDK, Jetpack Compose, MVVM, Clean Architecture, Firebase, ARCore, and more.
        </p>
      </div>

      <div className="skills-grid">
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
