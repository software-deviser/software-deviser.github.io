import React, { useEffect, useState } from "react";

const TABS = [
  { id: "summary", label: "summary.md" },
  { id: "experience", label: "experience.kt" },
  { id: "projects", label: "projects.dart" },
  { id: "skills", label: "skills.json" },
  { id: "education", label: "education.md" },
  { id: "reach-out", label: "reach-out.txt" },
];

export default function TabBar() {
  const [active, setActive] = useState("summary");

  useEffect(() => {
    const sections = TABS.map((t) => document.getElementById(t.id)).filter(Boolean);
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id);
        });
      },
      { rootMargin: "-30% 0px -60% 0px" }
    );
    sections.forEach((s) => observer.observe(s));
    return () => observer.disconnect();
  }, []);

  return (
    <nav className="tabbar" aria-label="Section navigation">
      {TABS.map((t) => (
        <a
          key={t.id}
          href={`#${t.id}`}
          className={`tab${active === t.id ? " active" : ""}`}
        >
          <span className="dot">●</span>
          {t.label}
        </a>
      ))}
    </nav>
  );
}
