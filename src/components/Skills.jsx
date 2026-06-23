import React from 'react';

const Skills = () => {
  const skillCategories = [
    {
      title: "Bioinformatics & Genomics",
      skills: ["QIIME2", "BLAST", "Nextflow", "16S rRNA", "Alpha/Beta Diversity"]
    },
    {
      title: "Data Science & Languages",
      skills: ["Python", "R", "SQL", "JavaScript", "Pandas", "Matplotlib"]
    },
    {
      title: "Healthcare Analytics",
      skills: ["Power BI", "Excel", "Data Visualization", "ETL Workflows"]
    },
    {
      title: "Molecular Biology",
      skills: ["Microbial Culture", "PCR", "DNA/RNA Extraction", "ELISA"]
    },
    {
      title: "Pharmaceutical QA/QC",
      skills: ["GMP", "GLP", "GxP", "SOP Standards", "CFR Part 11"]
    },
    {
      title: "AI & Machine Learning",
      skills: ["Machine Learning", "Data Mining", "Predictive Analytics"]
    }
  ];

  return (
    <section id="skills">
      <div className="container editorial-grid">
        
        <div>
          <h2 className="section-title">Technical Repertoire</h2>
        </div>
        
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '4rem' }}>
          {skillCategories.map((category, index) => (
            <div key={index}>
              <span className="data-text block mb-4" style={{ 
                color: index <= 1 ? 'var(--accent-indigo)' : 
                       index <= 3 ? 'var(--accent-green)' : 
                       index === 4 ? 'var(--accent-amber)' : 'var(--text-primary)' 
              }}>
                0{index + 1} / {category.title}
              </span>
              <ul style={{ listStyle: 'none' }}>
                {category.skills.map((skill, sIndex) => (
                  <li key={sIndex} className="text-secondary" style={{ 
                    padding: '0.75rem 0', 
                    borderBottom: '1px solid var(--border-color)',
                    fontSize: '1.1rem'
                  }}>
                    {skill}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Skills;
