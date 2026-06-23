import React from 'react';
import { ArrowUpRight } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: "Indian Grey Wolf Microbiome Analysis",
      type: "Academic Research Pipeline",
      description: "Developed a comprehensive bioinformatics pipeline to analyze 16S rRNA amplicon sequencing data from wolf scat samples across three ecologically distinct sites. The pipeline encompasses raw read quality control, OTU clustering, and alpha diversity quantification.",
      tags: ["Python", "QIIME2", "16S rRNA", "Biopython"],
      link: "#visualizations",
      repo: "https://github.com/SariyaPatel/wolf-microbiome-pipeline"
    },
    {
      title: "Pharma QC Batch Release Dashboard",
      type: "Healthcare Analytics",
      description: "Architected a clinical-grade data visualization dashboard monitoring ETL batch pass rates against USP specifications. Integrated strict GxP and GMP compliance logic to track Out of Specification (OOS) failures.",
      tags: ["Power BI", "SQL", "ETL", "React", "GMP/GxP"],
      link: "#visualizations",
      repo: "https://github.com/SariyaPatel/pharma-qc-dashboard"
    },
    {
      title: "Genomic Variant Annotation Service",
      type: "Bioinformatics Tool",
      description: "Built a Python-based annotation engine that processes VCF files, mapping genomic variants to clinical databases (ClinVar). The tool calculates pathogenicity scores and generates highly formatted clinical reports.",
      tags: ["Python", "Pandas", "ClinVar", "Genomics"],
      link: "#",
      repo: "https://github.com/SariyaPatel/variant-annotator"
    }
  ];

  return (
    <section id="projects" style={{ background: 'var(--bg-secondary)' }}>
      <div className="container editorial-grid">
        
        <div>
          <h2 className="section-title">Case Studies</h2>
        </div>
        
        <div className="flex flex-col">
          {projects.map((project, index) => (
            <div key={index} className="list-item">
              <div className="editorial-grid" style={{ gap: '2rem' }}>
                
                <div style={{ flex: '1' }}>
                  <span className="data-text block mb-2" style={{ 
                    color: index === 0 ? 'var(--accent-green)' : 
                           index === 1 ? 'var(--accent-amber)' : 'var(--accent-indigo)' 
                  }}>
                    {project.type}
                  </span>
                  <h3 className="text-3xl font-light mb-6">{project.title}</h3>
                  <div className="flex gap-4">
                    <a href={project.repo} target="_blank" rel="noreferrer" className="btn">
                      Source Code <ArrowUpRight size={14} />
                    </a>
                    {project.link !== "#" && (
                       <a href={project.link} className="btn">
                         View Analytics <ArrowUpRight size={14} />
                       </a>
                    )}
                  </div>
                </div>
                
                <div style={{ flex: '1.5' }}>
                  <p className="text-secondary" style={{ fontSize: '1.15rem', marginBottom: '2rem', lineHeight: '1.8' }}>
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag, tIndex) => (
                      <span key={tIndex} className="tag">
                        {tag}
                      </span>
                    ))}
                  </div>
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
