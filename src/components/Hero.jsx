import React from "react";
import { profile, projects } from "../data/resumeData";

export default function Hero() {
  return (
    <header className="hero" id="top">
      <div className="hero-copy">
        <div className="status-line">
          <span className="status-dot" />
          <span>available for opportunities</span>
        </div>

        <h1 className="hero-name">{profile.name}</h1>

        <div className="hero-title">
          Team Lead <span className="sep">/</span> Senior Android &amp; Flutter Developer
        </div>

        <p className="hero-summary">
          5+ years of experience in Mobile App Development with Android and Flutter, building scalable products with strong architecture and refined user experiences.
        </p>

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
          <div className="card-pill">Mobile app engineering</div>
          <img src="./mobile-app-illustration.svg" alt="Illustration representing Android and Flutter mobile app development" />
        </div>
      </div>
    </header>
  );
}
