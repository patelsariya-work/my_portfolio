import React from 'react';

const Projects = () => {
  const projects = [
    {
      id: "01",
      title: "Indian Grey Wolf Microbiome Analysis",
      type: "Academic Research Pipeline",
      description: "Developed a bioinformatics pipeline to analyze 16S rRNA amplicon sequencing data from wolf scat samples across three ecologically distinct sites. The pipeline encompasses raw read quality control, OTU clustering, taxonomic classification against SILVA v138, and rigorous alpha diversity quantification to identify ecologically appropriate probiotic candidates.",
      tags: ["Python", "QIIME2", "16S rRNA", "Biopython"],
      repo: "https://github.com/SariyaPatel/wolf-microbiome-pipeline"
    },
    {
      id: "02",
      title: "Pharma QC Batch Release Dashboard",
      type: "Healthcare Analytics",
      description: "Architected a clinical-grade data visualization dashboard monitoring ETL batch pass rates against USP specifications. Integrated strict GxP and GMP compliance logic to track Out of Specification (OOS) failures, ensuring data integrity.",
      tags: ["Power BI", "SQL", "ETL", "React", "GMP/GxP"],
      repo: "https://github.com/SariyaPatel/pharma-qc-dashboard"
    },
    {
      id: "03",
      title: "Genomic Variant Annotation Service",
      type: "Bioinformatics Tool",
      description: "Built a Python-based annotation engine that processes VCF files, mapping genomic variants to clinical databases (ClinVar). The tool calculates pathogenicity scores and generates highly formatted clinical reports for researchers.",
      tags: ["Python", "Pandas", "ClinVar", "Genomics"],
      repo: "https://github.com/SariyaPatel/variant-annotator"
    }
  ];

  return (
    <section id="projects" className="section">
      <div className="container">
        
        <div className="tech-grid mb-8">
          <div className="col-4">
            <h2 className="section-title">case studies</h2>
          </div>
          <div className="col-8 flex items-end">
             <p className="text-muted" style={{ maxWidth: '400px', marginBottom: '3rem' }}>Selected implementations demonstrating algorithmic rigor and regulatory compliance.</p>
          </div>
        </div>

        <div className="tech-grid">
          {projects.map((project) => (
            <div key={project.id} className="col-12 tech-block">
              <div className="flex flex-col md:flex-row justify-between items-start" style={{ flexDirection: 'row' }}>
                
                <div style={{ width: '10%' }}>
                  <span className="data-text">{project.id}</span>
                </div>
                
                <div style={{ width: '40%' }}>
                  <h3 style={{ fontSize: '1.5rem', marginBottom: '0.5rem' }}>{project.title}</h3>
                  <div className="data-text text-muted mb-4">{project.type}</div>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map(tag => <span key={tag} className="tag">{tag}</span>)}
                  </div>
                </div>

                <div style={{ width: '35%' }}>
                  <p className="text-muted mb-4">{project.description}</p>
                </div>

                <div style={{ width: '15%', textAlign: 'right' }}>
                  <a href={project.repo} target="_blank" rel="noreferrer" className="btn btn-outline" style={{ padding: '0.5rem 1rem' }}>Source</a>
                </div>

              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Projects;
