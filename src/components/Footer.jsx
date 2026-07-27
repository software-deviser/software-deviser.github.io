import React from "react";
import { profile } from "../data/resumeData";

export default function Footer() {
  return (
    <footer className="footer">
      built by {profile.name} · last synced {new Date().getFullYear()}
    </footer>
  );
}
