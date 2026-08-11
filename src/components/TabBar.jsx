import React, { useEffect, useRef, useState } from "react";

const TABS = [
  { id: "summary", label: "Vision" },
  { id: "skills", label: "Stack" },
  { id: "projects", label: "Work" },
  { id: "experience", label: "Journey" },
  { id: "education", label: "Background" },
  { id: "reach-out", label: "Contact" },
];

export default function TabBar() {
  const [active, setActive] = useState("summary");
  const tabRefs = useRef({});
  const navRef = useRef(null);

  useEffect(() => {
    const sections = TABS.map((t) => document.getElementById(t.id)).filter(Boolean);

    if (sections.length === 0) return;

    const updateActiveSection = () => {
      const scrollY = window.scrollY + 140;
      let current = sections[0].id;

      sections.forEach((section) => {
        const sectionTop = section.offsetTop;
        if (scrollY >= sectionTop) {
          current = section.id;
        }
      });

      setActive(current);
    };

    updateActiveSection();
    window.addEventListener("scroll", updateActiveSection, { passive: true });
    window.addEventListener("resize", updateActiveSection);

    return () => {
      window.removeEventListener("scroll", updateActiveSection);
      window.removeEventListener("resize", updateActiveSection);
    };
  }, []);

  useEffect(() => {
    const activeTab = tabRefs.current[active];
    const nav = navRef.current;

    if (!activeTab || !nav) return;

    const navRect = nav.getBoundingClientRect();
    const tabRect = activeTab.getBoundingClientRect();

    if (tabRect.left < navRect.left || tabRect.right > navRect.right) {
      activeTab.scrollIntoView({ behavior: "smooth", block: "nearest", inline: "center" });
    }
  }, [active]);

  return (
    <nav ref={navRef} className="tabbar" aria-label="Section navigation">
      {TABS.map((t) => (
        <a
          ref={(node) => {
            tabRefs.current[t.id] = node;
          }}
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
