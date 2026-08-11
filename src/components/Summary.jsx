import React from "react";
import { summary } from "../data/resumeData";

export default function Summary() {
  return (
    <section id="summary" className="section-block">
      <div className="section-header">
        <div className="section-label">What I bring</div>
        <p className="section-intro">
          I focus on building mobile products that are reliable in production, practical for users, and strong enough to scale with real business needs.
        </p>
      </div>

      <div className="summary-grid">
        <div className="summary-panel">
          <h3>Hands-on delivery</h3>
          <p>
            I work across app architecture, feature development, debugging, performance tuning, and team support so products ship faster and stay stable after launch.
          </p>
          <div className="summary-pills">
            <span>Android & Flutter</span>
            <span>Technical leadership</span>
            <span>Production support</span>
          </div>
        </div>

        <ul className="summary-list">
          {summary.map((line, i) => (
            <li key={i}>{line}</li>
          ))}
        </ul>
      </div>
    </section>
  );
}
