import React from 'react';

const Skills = () => {
  const categories = [
    {
      title: "Bioinformatics",
      skills: ["QIIME2", "BLAST", "Nextflow", "16S rRNA Sequencing", "Biopython"]
    },
    {
      title: "Data Science",
      skills: ["Python", "R", "SQL", "Pandas", "Matplotlib", "Predictive Analytics"]
    },
    {
      title: "Molecular Biology",
      skills: ["Microbial Culture", "PCR", "DNA/RNA Extraction", "ELISA"]
    },
    {
      title: "Quality Systems",
      skills: ["GMP", "GLP", "GxP", "SOP Standards", "CFR Part 11 Compliance"]
    }
  ];

  return (
    <section id="skills" className="section" style={{ background: 'var(--bg-secondary)' }}>
      <div className="container">
        <div className="tech-grid">
          
          <div className="col-4">
            <h2 className="section-title">expertise</h2>
          </div>
          
          <div className="col-8">
            <div className="tech-grid" style={{ gridTemplateColumns: 'repeat(2, 1fr)', gap: '4rem 2rem' }}>
              {categories.map((cat, idx) => (
                <div key={idx}>
                  <h3 style={{ fontSize: '1.25rem', marginBottom: '1.5rem', paddingBottom: '0.5rem', borderBottom: '1px solid var(--text-primary)' }}>
                    {cat.title}
                  </h3>
                  <ul style={{ listStyle: 'none', padding: 0 }}>
                    {cat.skills.map((skill, sIdx) => (
                      <li key={sIdx} className="data-text text-muted mb-2 flex justify-between">
                        <span>{skill}</span>
                        <span>{String(sIdx + 1).padStart(2, '0')}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Skills;
