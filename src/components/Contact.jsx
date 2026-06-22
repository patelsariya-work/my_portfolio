import React from 'react';

const Contact = () => {
  return (
    <section id="contact" className="section" style={{ background: 'var(--text-primary)', color: 'var(--bg-primary)' }}>
      <div className="container">
        
        <div className="tech-grid">
          <div className="col-8">
            <h2 style={{ 
              fontSize: 'clamp(3rem, 6vw, 5rem)', 
              fontWeight: 500, 
              letterSpacing: '-0.05em',
              lineHeight: 1,
              marginBottom: '2rem',
              color: 'var(--bg-primary)'
            }}>
              Initiate <br/>
              Connection
            </h2>
            
            <p style={{ 
              fontSize: '1.25rem', 
              color: 'var(--text-tertiary)',
              maxWidth: '500px',
              marginBottom: '3rem'
            }}>
              Currently open to roles in Bioinformatics, Healthcare Data Analytics, and Pharmaceutical QA/QC.
            </p>
            
            <a href="mailto:contact@example.com" className="btn" style={{ 
              background: 'var(--bg-primary)', 
              color: 'var(--text-primary)',
              border: 'none',
              padding: '1.25rem 2.5rem'
            }}>
              contact@example.com
            </a>
          </div>

          <div className="col-4 flex flex-col justify-end">
            <div className="data-text" style={{ color: 'var(--text-tertiary)', borderTop: '1px solid #333', paddingTop: '1.5rem' }}>
              <div>&gt; STATUS: ACTIVELY SEEKING</div>
              <div>&gt; CLEARANCE: PORTFOLIO_V3</div>
              <div style={{ marginTop: '2rem' }}>&copy; 2026 Sariya Patel</div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Contact;
