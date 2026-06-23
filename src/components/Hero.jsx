import React from 'react';
import { ArrowRight } from 'lucide-react';

const Hero = () => {
  return (
    <section id="home" style={{ minHeight: '90vh', display: 'flex', alignItems: 'center', paddingTop: '10rem' }}>
      <div className="container editorial-grid">
        
        {/* Left Side: Massive Typography */}
        <div>
          <div className="tag indigo mb-8">Sariya Patel / Portfolio</div>
          <h1 style={{ 
            fontSize: 'clamp(3.5rem, 7vw, 6rem)', 
            fontWeight: 400, 
            letterSpacing: '-0.05em',
            lineHeight: 1,
            marginBottom: '2rem'
          }}>
            Computational Biology & Data.
          </h1>
        </div>

        {/* Right Side: Elegant Details */}
        <div className="flex flex-col justify-end" style={{ paddingBottom: '1rem' }}>
          <p style={{ 
            fontSize: 'clamp(1.1rem, 1.5vw, 1.25rem)', 
            color: 'var(--text-secondary)',
            maxWidth: '500px',
            marginBottom: '4rem',
            lineHeight: 1.6
          }}>
            Developing robust bioinformatics pipelines and GMP-compliant healthcare analytics solutions. Bridging the critical gap between molecular biology research and precision data science.
          </p>

          {/* Hairline structural list */}
          <div style={{ borderTop: '1px solid var(--border-color)', paddingTop: '2rem', display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
            <div className="flex justify-between items-center" style={{ borderBottom: '1px solid var(--border-color)', paddingBottom: '1.5rem' }}>
              <span className="data-text">01 // Architecture</span>
              <span className="text-muted text-sm">Nextflow, Snakemake Workflows</span>
            </div>
            <div className="flex justify-between items-center" style={{ borderBottom: '1px solid var(--border-color)', paddingBottom: '1.5rem' }}>
              <span className="data-text">02 // Genomics</span>
              <span className="text-muted text-sm">QIIME2, 16S rRNA Diversity Modeling</span>
            </div>
            <div className="flex justify-between items-center" style={{ borderBottom: '1px solid var(--border-color)', paddingBottom: '1.5rem' }}>
              <span className="data-text">03 // Compliance</span>
              <span className="text-muted text-sm">GMP, GLP, CFR Part 11 Analytics</span>
            </div>
          </div>

          <div className="mt-12">
            <a href="#visualizations" className="btn">
              Explore Analytics <ArrowRight size={16} />
            </a>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Hero;
