import React from 'react';
import { ArrowRight } from 'lucide-react';

const Contact = () => {
  return (
    <section id="contact" style={{ borderBottom: 'none' }}>
      <div className="container" style={{ textAlign: 'center', maxWidth: '800px', margin: '0 auto', padding: '6rem 0' }}>
        
        <h2 className="text-4xl md:text-6xl font-light mb-8" style={{ color: 'var(--text-primary)', letterSpacing: '-0.04em' }}>
          Initiate Collaboration.
        </h2>
        
        <p className="text-xl text-secondary mb-12" style={{ lineHeight: '1.8' }}>
          Open to roles in Bioinformatics, Healthcare Data Analytics, and Pharmaceutical QA/QC. Ready to decode the next complex dataset.
        </p>
        
        <a href="mailto:patelsariya25@gmail.com" style={{ 
          display: 'inline-flex', 
          alignItems: 'center', 
          gap: '1rem', 
          fontSize: '1.25rem', 
          color: 'var(--text-primary)', 
          textDecoration: 'none', 
          borderBottom: '2px solid var(--accent-indigo)',
          paddingBottom: '0.5rem',
          transition: 'opacity 0.2s ease'
        }}>
          patelsariya25@gmail.com <ArrowRight size={20} color="var(--accent-indigo)" />
        </a>

        <div className="mt-24 pt-10" style={{ borderTop: '1px solid var(--border-color)' }}>
          <p className="data-text text-secondary">
            &gt; STATUS: ACTIVELY SEEKING OPPORTUNITIES <br/>
            &copy; 2026 Sariya Patel.
          </p>
        </div>

      </div>
    </section>
  );
};

export default Contact;
