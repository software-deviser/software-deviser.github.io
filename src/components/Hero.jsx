import React from "react";
import { profile } from "../data/resumeData";

export default function Hero() {
  return (
    <header className="hero" id="top">
      <div className="hero-copy">
        <div className="status-pill">Open to exciting opportunities- Mobile App Developer | Software Engineer</div>

        <h1 className="hero-name">{profile.name}</h1>

        <div className="hero-title">{profile.title}</div>

        <p className="hero-summary">
          I bring 6 years of experience building customer-facing Android and Flutter apps, owning architecture and delivery, mentoring engineers, and building with agentic tools such as Claude Code and MCP.
        </p>

        <div className="hero-actions">
          <a className="primary-action" href="#projects">
            See selected work
          </a>
          <a className="secondary-action" href="#reach-out">
            Let&apos;s connect
          </a>
        </div>

        <div className="hero-contact">
          <span>{profile.location}</span>
          <a href={`mailto:${profile.email}`}>{profile.email}</a>
          <a href={`tel:${profile.phone.replace(/\s/g, "")}`}>{profile.phone}</a>
          <a href={profile.linkedin} target="_blank" rel="noreferrer">
            LinkedIn
          </a>
          <a href={profile.medium} target="_blank" rel="noreferrer">
            Medium
          </a>
        </div>
      </div>

      <div className="hero-visual" aria-hidden="true">
        <div className="hero-card">
          <div className="card-pill">Impact snapshot</div>
          <div className="hero-highlights">
            <div className="highlight-item">
              <strong>500K+</strong>
              <span>install base supported</span>
            </div>
            <div className="highlight-item">
              <strong>1,000+</strong>
              <span>Android TV screens deployed</span>
            </div>
            <div className="highlight-item">
              <strong>20–35%</strong>
              <span>crash reduction delivered</span>
            </div>
            <div className="highlight-item">
              <strong>4+ yrs</strong>
              <span>in Flutter development</span>
            </div>
          </div>
          <div className="hero-quote">
            From architecture to rollout, I help teams ship products that stay dependable under real-world pressure.
          </div>
        </div>
      </div>
    </header>
  );
}
