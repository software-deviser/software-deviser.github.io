import React, { useState } from "react";
import { profile } from "../data/resumeData";

const initialFormState = {
  email: "",
  subject: "",
  message: "",
};

export default function ReachOut() {
  const [formData, setFormData] = useState(initialFormState);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (event) => {
  event.preventDefault();

  const senderEmail = (formData.email || "").trim();
  const subject = (formData.subject || "").trim();
  const message = (formData.message || "").trim();

  if (!senderEmail || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(senderEmail)) {
    alert("Please enter a valid email.");
    return;
  }

  if (!subject) {
    alert("Please enter a subject.");
    return;
  }

  if (!message) {
    alert("Please enter a message.");
    return;
  }

  const mailtoLink = `mailto:jeetviz90@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(message)}`;

  window.location.href = mailtoLink;
};

  return (
    <section id="reach-out" className="reach-out-section">
      <div className="section-label">reach out</div>
      <div className="reach-out-card">
        <div className="reach-out-copy">
          <h3>Let’s build something meaningful.</h3>
          <p>Open to collaborations, leadership opportunities, and mobile product conversations.</p>
        </div>

        <div className="reach-out-actions">
          <a
            className="primary-action"
            href={`mailto:${profile.email}?subject=${encodeURIComponent("Portfolio inquiry")}&body=${encodeURIComponent("Hi Amarjit,\n\nI came across your portfolio and would love to connect.\n\nBest regards,\n")}`}
          >
            Start a conversation
          </a>
          <a className="secondary-action" href="/Amarjit_Singh_Sodhi_Resume.pdf" download>
            Download Resume
          </a>
        </div>

        <form className="reach-out-form" onSubmit={handleSubmit}>
          <label>
            <span>Email</span>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="you@example.com"
              required
            />
          </label>
          <label>
            <span>Subject</span>
            <input
              type="text"
              name="subject"
              value={formData.subject}
              onChange={handleChange}
              placeholder="Project idea / opportunity"
            />
          </label>
          <label>
            <span>Message</span>
            <textarea
              rows="4"
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Tell me a bit about the project or opportunity..."
              required
            />
          </label>
          <button type="submit">Let’s Connect</button>
        </form>
      </div>
    </section>
  );
}
