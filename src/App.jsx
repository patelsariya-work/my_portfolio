import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Visualizations from './components/Visualizations';
import Research from './components/Research';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Certificates from './components/Certificates';
import Contact from './components/Contact';
import './index.css';

function App() {
  return (
    <div className="app">
      <Header />
      <main>
        <Hero />
        <Visualizations />
        <Research />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Certificates />
        <Contact />
      </main>
    </div>
  );
}

export default App;
