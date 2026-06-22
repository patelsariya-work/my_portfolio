import React from 'react';

const Experience = () => {
  const experiences = [
    {
      year: "2025",
      role: "Internship in Healthcare & AI",
      company: "SMARTED Innovations",
      description: "Trained and evaluated AI models on healthcare datasets, increasing predictive accuracy to 94% across 5 epochs. Developed secure ETL pipelines for clinical data processing."
    },
    {
      year: "2024 - 26",
      role: "M.Sc. in Microbiology",
      company: "Bharati Vidyapeeth (Deemed to be University), Pune",
      description: "Specialized in Molecular Biology, Microbial Genetics, and GMP/GLP compliance. Conducted extensive research on probiotic isolation."
    },
    {
      year: "2025 - 26",
      role: "Advanced Diploma in Bioinformatics",
      company: "Rajiv Gandhi Institute of IT and Biotechnology (RGITBT)",
      description: "Mastered sequence alignment (BLAST), phylogenetics, QIIME2 microbiome analysis, and bioinformatics pipeline development."
    },
    {
      year: "2021 - 24",
      role: "B.Sc. in Microbiology",
      company: "Savitribai Phule Pune University",
      description: "Foundation in microbial culture, immunology, and biochemistry."
    }
  ];

  return (
    <section id="experience" className="section" style={{ background: 'var(--bg-secondary)' }}>
      <div className="container">
        
        <div className="tech-grid mb-8">
          <div className="col-4">
            <h2 className="section-title">timeline</h2>
          </div>
        </div>

        <div className="tech-grid">
          {experiences.map((exp, index) => (
            <div key={index} className="col-12 tech-block">
              <div className="flex flex-col md:flex-row justify-between items-start" style={{ flexDirection: 'row' }}>
                
                <div style={{ width: '15%' }}>
                  <span className="data-text">{exp.year}</span>
                </div>
                
                <div style={{ width: '40%' }}>
                  <h3 style={{ fontSize: '1.5rem', marginBottom: '0.5rem' }}>{exp.role}</h3>
                  <div className="data-text text-muted mb-4">{exp.company}</div>
                </div>

                <div style={{ width: '45%' }}>
                  <p className="text-muted">{exp.description}</p>
                </div>

              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Experience;
