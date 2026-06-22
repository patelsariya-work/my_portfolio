import React from 'react';

const About = () => {
  return (
    <section id="about" className="section">
      <div className="container">
        
        <div className="tech-grid">
          <div className="col-4">
            <h2 className="section-title" style={{ marginBottom: '2rem' }}>about</h2>
            <div className="data-text text-muted mb-8">
              Location: Pune, India <br/>
              Status: Active
            </div>
          </div>
          
          <div className="col-8">
            <div className="flex flex-col md:flex-row gap-8" style={{ flexDirection: 'row' }}>
              
              <div style={{ flex: '1' }}>
                <p style={{ fontSize: '1.25rem', marginBottom: '2rem', lineHeight: '1.6', color: 'var(--text-secondary)' }}>
                  I am an M.Sc. Microbiology graduate with an Advanced Diploma in Bioinformatics. My work strictly focuses on the intersection of molecular biology, genomics, and computational data analytics.
                </p>
                <p style={{ fontSize: '1rem', marginBottom: '2rem', lineHeight: '1.6', color: 'var(--text-secondary)' }}>
                  With hands-on experience in microbiology research, healthcare analytics, and pharmaceutical quality systems, I develop robust bioinformatics pipelines (Nextflow, QIIME2), ETL workflows, and advanced data visualizations that adhere rigorously to GMP, GLP, and GxP standards.
                </p>
                <div className="flex gap-4">
                  <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="btn btn-outline" style={{ padding: '0.5rem 1rem' }}>
                    LinkedIn
                  </a>
                  <a href="https://github.com" target="_blank" rel="noreferrer" className="btn btn-outline" style={{ padding: '0.5rem 1rem' }}>
                    GitHub
                  </a>
                  <a href="mailto:contact@example.com" className="btn btn-primary" style={{ padding: '0.5rem 1rem' }}>
                    Email
                  </a>
                </div>
              </div>

              {/* Ultra-premium editorial image treatment */}
              <div style={{ width: '300px', flexShrink: 0 }}>
                <div style={{
                  width: '100%',
                  aspectRatio: '3/4',
                  overflow: 'hidden',
                  background: 'var(--border-color)',
                  position: 'relative'
                }}>
                  <img 
                    src="/profile.jpg" 
                    alt="Sariya Patel" 
                    style={{ width: '100%', height: '100%', objectFit: 'cover', filter: 'grayscale(100%) contrast(1.1)' }}
                  />
                </div>
                <div className="data-text mt-2 text-muted text-right">Fig 1. Sariya Patel</div>
              </div>

            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default About;
