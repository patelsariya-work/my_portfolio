import React from 'react';
import { ArrowRight, Database } from 'lucide-react';
import './Hero.css';

const Hero = () => {
  return (
    <section id="home" className="section" style={{ minHeight: '90vh', display: 'flex', alignItems: 'center' }}>
      <div className="container">
        
        <div className="tech-grid">
          <div className="col-8">
            <div className="data-text text-muted mb-4">M.Sc. Microbiology & Bioinformatics</div>
            
            <h1 style={{ 
              fontSize: 'clamp(3rem, 8vw, 6rem)', 
              fontWeight: 500, 
              letterSpacing: '-0.06em',
              lineHeight: 1,
              marginBottom: '2rem'
            }}>
              Computational <br/>
              Biology & Data<span style={{ color: 'var(--accent)' }}>.</span>
            </h1>
            
            <p style={{ 
              fontSize: 'clamp(1rem, 2vw, 1.25rem)', 
              color: 'var(--text-secondary)',
              maxWidth: '600px',
              marginBottom: '3rem',
              lineHeight: 1.6
            }}>
              Bridging the gap between molecular biology and data science. Developing robust bioinformatics pipelines and GMP-compliant healthcare analytics solutions.
            </p>

            <div className="flex flex-col md:flex-row gap-4" style={{ flexDirection: 'row' }}>
              <a href="#visualizations" className="btn btn-primary">
                View Analytics <ArrowRight size={16} />
              </a>
              <a href="#research" className="btn btn-outline">
                Read Research <ArrowRight size={16} />
              </a>
            </div>
          </div>

          <div className="col-4 flex flex-col justify-end">
            <div className="tech-block" style={{ marginBottom: 0 }}>
              <div className="data-text mb-2">Core Competencies</div>
              <ul style={{ listStyle: 'none', padding: 0 }}>
                <li className="flex items-center gap-2 mb-2" style={{ borderBottom: '1px solid var(--border-color)', paddingBottom: '0.5rem' }}>
                  <Database size={14} color="var(--text-tertiary)" />
                  <span>Pipeline Architecture (Nextflow)</span>
                </li>
                <li className="flex items-center gap-2 mb-2" style={{ borderBottom: '1px solid var(--border-color)', paddingBottom: '0.5rem' }}>
                  <Database size={14} color="var(--text-tertiary)" />
                  <span>Microbiome Genomics (QIIME2)</span>
                </li>
                <li className="flex items-center gap-2" style={{ borderBottom: '1px solid var(--border-color)', paddingBottom: '0.5rem' }}>
                  <Database size={14} color="var(--text-tertiary)" />
                  <span>Quality Systems (GMP/CFR 11)</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Hero;
