import React from "react";
import { summary } from "../data/resumeData";

export default function Summary() {
  return (
    <section id="summary">
      <div className="section-label">professional summary</div>
      <ul className="summary-list">
        {summary.map((line, i) => (
          <li key={i}>{line}</li>
        ))}
      </ul>
    </section>
  );
}
