import React from 'react';
import data from './data/data.json';
import Hero from './components/Hero.jsx';
import FeaturedOSS from './components/FeaturedOSS.jsx';
import Experience from './components/Experience.jsx';
import Projects from './components/Projects.jsx';
import Skills from './components/Skills.jsx';
import EducationCerts from './components/EducationCerts.jsx';
import Articles from './components/Articles.jsx';
import Footer from './components/Footer.jsx';
import NavDots from './components/NavDots.jsx';
import './App.css';

const SECTIONS = [
  { id: 'oss', label: 'Open Source' },
  { id: 'experience', label: 'Experience' },
  { id: 'projects', label: 'Projects' },
  { id: 'skills', label: 'Skills' },
  { id: 'background', label: 'Background' },
  { id: 'articles', label: 'Writing' }
];

export default function App() {
  return (
    <div className="app-shell">
      <NavDots sections={SECTIONS} />
      <Hero personal={data.personal} />
      <main>
        <div id="oss">
          <FeaturedOSS projects={data.projects} />
        </div>
        <div id="experience">
          <Experience experience={data.experience} />
        </div>
        <div id="projects">
          <Projects projects={data.projects} />
        </div>
        <div id="skills">
          <Skills skills={data.skills} />
        </div>
        <div id="background">
          <EducationCerts education={data.education} certificates={data.certificates} />
        </div>
        <div id="articles">
          <Articles articles={data.articles} />
        </div>
      </main>
      <Footer personal={data.personal} social={data.social} />
    </div>
  );
}
