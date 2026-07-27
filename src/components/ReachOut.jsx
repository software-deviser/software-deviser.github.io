import React from "react";
import { profile } from "../data/resumeData";

export default function ReachOut() {
  const subject = encodeURIComponent("Portfolio inquiry");
  const body = encodeURIComponent(`Hi Amarjit,\n\nI came across your portfolio and would love to connect.\n\nBest regards,\n`);

  return (
    <section id="reach-out" className="reach-out-section">
      <div className="section-label">reach out</div>
      <div className="reach-out-card">
        <div className="reach-out-copy">
          <h3>Let’s build something meaningful.</h3>
          <p>Open to collaborations, leadership opportunities, and mobile product conversations.</p>
        </div>

        <div className="reach-out-actions">
          <a className="primary-action" href={`mailto:${profile.email}?subject=${subject}&body=${body}`}>
            Start a conversation
          </a>
          <a className="secondary-action" href="/Amarjit_Singh_Sodhi_Resume.pdf" download>
            Download Resume
          </a>
        </div>

        <form className="reach-out-form" onSubmit={(e) => e.preventDefault()}>
          <label>
            <span>Email</span>
            <input type="email" placeholder="you@example.com" />
          </label>
          <label>
            <span>Subject</span>
            <input type="text" placeholder="Project idea / opportunity" />
          </label>
          <label>
            <span>Message</span>
            <textarea rows="4" placeholder="Tell me a bit about the project or opportunity..." />
          </label>
          <button type="submit">Let’s Connect</button>
        </form>
      </div>
    </section>
  );
}
