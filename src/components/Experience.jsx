import React from 'react';

const Experience = () => {
  const experiences = [
    {
      role: "Internship in Healthcare & AI",
      company: "SMARTED Innovations",
      period: "2025",
      type: "work",
      description: "Trained and evaluated AI models on healthcare datasets, increasing predictive accuracy to 94% across 5 epochs. Developed secure ETL pipelines for clinical data processing."
    },
    {
      role: "M.Sc. in Microbiology",
      company: "Bharati Vidyapeeth (Deemed to be University), Pune",
      period: "2024 - 2026",
      type: "education",
      description: "Specialized in Molecular Biology, Microbial Genetics, and GMP/GLP compliance. Conducted extensive research on probiotic isolation."
    },
    {
      role: "Advanced Diploma in Bioinformatics",
      company: "Rajiv Gandhi Institute of IT and Biotechnology (RGITBT), Pune",
      period: "2025 - 2026",
      type: "education",
      description: "Mastered sequence alignment (BLAST), phylogenetics, QIIME2 microbiome analysis, and bioinformatics pipeline development (Python/Biopython)."
    },
    {
      role: "B.Sc. in Microbiology",
      company: "Savitribai Phule Pune University",
      period: "2021 - 2024",
      type: "education",
      description: "Foundation in microbial culture, immunology, and biochemistry."
    }
  ];

  return (
    <section id="experience">
      <div className="container editorial-grid">
        
        <div>
          <h2 className="section-title">Timeline</h2>
        </div>
        
        <div className="flex flex-col">
          {experiences.map((exp, index) => (
            <div key={index} className="list-item flex flex-col md:flex-row gap-6 md:gap-12 items-start justify-between">
                
                <div style={{ flex: '1', minWidth: '250px' }}>
                  <span className="data-text text-muted block mb-2">{exp.period}</span>
                  <h3 className="text-2xl font-light mb-1">{exp.role}</h3>
                  <h4 className="text-lg text-secondary">{exp.company}</h4>
                </div>
                
                <div style={{ flex: '2' }}>
                  <p className="text-secondary" style={{ fontSize: '1.15rem', lineHeight: '1.8', maxWidth: '600px' }}>
                    {exp.description}
                  </p>
                </div>
                
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
