import React from "react";
import Hero from "./components/Hero";
import TabBar from "./components/TabBar";
import Summary from "./components/Summary";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Education from "./components/Education";
import Footer from "./components/Footer";
import ReachOut from "./components/ReachOut";

export default function App() {
  return (
    <div className="app">
      <Hero />
      <TabBar />
      <Summary />
      <Experience />
      <Projects />
      <Skills />
      <Education />
      <ReachOut />
      <Footer />
    </div>
  );
}