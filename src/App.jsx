import React from "react";
import Hero from "./components/Hero";
import TabBar from "./components/TabBar";
import Summary from "./components/Summary";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Experience from "./components/Experience";
import Education from "./components/Education";
import Footer from "./components/Footer";
import ReachOut from "./components/ReachOut";

export default function App() {
  return (
    <div className="app">
      <Hero />
      <TabBar />
      <Summary />
      <Skills />
      <Projects />
      <Experience />
      <Education />
      <ReachOut />
      <Footer />
    </div>
  );
}