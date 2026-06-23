import React from 'react';
import { ArrowUpRight } from 'lucide-react';

const About = () => {
  return (
    <section id="about" style={{ background: 'var(--bg-secondary)' }}>
      <div className="container editorial-grid">
        
        {/* Left Side: Profile & Links */}
        <div className="flex flex-col gap-8">
          <h2 className="section-title">Profile</h2>
          
          <div style={{
            width: '100%',
            maxWidth: '300px',
            aspectRatio: '3/4',
            overflow: 'hidden',
            filter: 'grayscale(20%)' // Slightly desaturated for elegance, but still colorful
          }}>
            <img 
              src="/profile.jpg" 
              alt="Sariya Patel" 
              style={{ width: '100%', height: '100%', objectFit: 'cover' }}
            />
          </div>

          <div className="flex flex-col gap-4 mt-4" style={{ maxWidth: '300px' }}>
            <a href="https://www.linkedin.com/in/sariya-patel-776333223" target="_blank" rel="noreferrer" className="flex justify-between border-b items-center text-sm pb-2" style={{ borderBottom: '1px solid var(--border-color)', color: 'var(--text-primary)', textDecoration: 'none' }}>
              LinkedIn <ArrowUpRight size={14} />
            </a>
            <a href="https://github.com/patelsariya-work" target="_blank" rel="noreferrer" className="flex justify-between border-b items-center text-sm pb-2" style={{ borderBottom: '1px solid var(--border-color)', color: 'var(--text-primary)', textDecoration: 'none' }}>
              GitHub <ArrowUpRight size={14} />
            </a>
            <a href="mailto:patelsariya25@gmail.com" className="flex justify-between border-b items-center text-sm pb-2" style={{ borderBottom: '1px solid var(--border-color)', color: 'var(--text-primary)', textDecoration: 'none' }}>
              patelsariya25@gmail.com <ArrowUpRight size={14} />
            </a>
          </div>
        </div>

        {/* Right Side: Biography */}
        <div className="flex flex-col justify-center pt-8 md:pt-24">
          <div className="tag green mb-8">M.Sc. Microbiology</div>
          
          <div style={{ fontSize: 'clamp(1.2rem, 2vw, 1.5rem)', color: 'var(--text-primary)', lineHeight: '1.6', fontWeight: 300 }}>
            <p className="mb-8">
              I am a passionate graduate with an <strong>Advanced Diploma in Bioinformatics</strong>. My career focuses intensely on the intersection of molecular biology, ecology, and computational data analytics.
            </p>
            
            <p className="mb-12 text-muted">
              With hands-on experience spanning microbiology research, healthcare analytics, and pharmaceutical quality systems, I specialise in developing robust bioinformatics pipelines (Nextflow, QIIME2), precise ETL workflows, and advanced data visualizations that strictly adhere to GMP, GLP, GxP, and SOP standards.
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2rem', borderTop: '1px solid var(--border-strong)', paddingTop: '2rem' }}>
            <div>
              <span className="data-text text-muted mb-2 block">Base Location</span>
              <p>Pune, India</p>
            </div>
            <div>
              <span className="data-text text-muted mb-2 block">Role Focus</span>
              <p>Bioinformatics Engineer</p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default About;
