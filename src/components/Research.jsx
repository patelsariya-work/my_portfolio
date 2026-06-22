import React, { useState } from 'react';

const Research = () => {
  const [activeTab, setActiveTab] = useState('abstract');

  return (
    <section id="research" className="section">
      <div className="container">
        
        <div className="tech-grid mb-8">
          <div className="col-8">
            <h2 className="section-title" style={{ marginBottom: '1rem' }}>research</h2>
            <h3 style={{ fontSize: '1.5rem', marginBottom: '2rem', lineHeight: '1.4' }}>
              Isolation, Characterization and Identification of Probiotics from Indian Grey Wolf (Canis lupus pallipes) Scat Sample: A Bioinformatics-Integrated Approach
            </h3>
            <div className="data-text text-muted mb-4">
              Submitted: April 2026 | Affiliation: Rajiv Gandhi Institute of IT and Biotechnology
            </div>
          </div>
        </div>

        <div className="tech-grid" style={{ borderTop: '1px solid var(--text-primary)', paddingTop: '2rem' }}>
          
          <div className="col-4">
            <div style={{ position: 'sticky', top: '100px' }}>
              <ul style={{ listStyle: 'none', padding: 0 }}>
                {['abstract', 'introduction', 'methodology'].map((tab) => (
                  <li key={tab} className="mb-2">
                    <button 
                      onClick={() => setActiveTab(tab)}
                      className="data-text w-full text-left"
                      style={{ 
                        padding: '1rem', 
                        background: activeTab === tab ? 'var(--text-primary)' : 'transparent',
                        color: activeTab === tab ? 'var(--bg-primary)' : 'var(--text-secondary)',
                        border: 'none',
                        cursor: 'pointer',
                        transition: 'all 0.2s ease',
                        borderLeft: activeTab === tab ? 'none' : '1px solid var(--border-color)'
                      }}
                    >
                      {tab.toUpperCase()}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          
          <div className="col-8">
            <div style={{ padding: '0 2rem' }}>
              {activeTab === 'abstract' && (
                <div>
                  <h4 style={{ fontSize: '1.25rem', marginBottom: '1.5rem' }}>Abstract</h4>
                  <p style={{ fontSize: '1.1rem', lineHeight: '1.8', color: 'var(--text-secondary)' }}>
                    The Indian Grey Wolf (Canis lupus pallipes), an apex predator endemic to the semi-arid ecosystems of peninsular India, faces mounting conservation threats including habitat fragmentation, prey depletion, retaliatory killings, and genetic erosion. Captive management programmes critical for species recovery are frequently undermined by gastrointestinal dysbiosis, a condition characterised by reduced microbial diversity and impaired gut barrier.
                  </p>
                  <p style={{ fontSize: '1.1rem', lineHeight: '1.8', color: 'var(--text-secondary)', marginTop: '1rem' }}>
                    This study pioneers a non-invasive, bioinformatics-driven methodology to isolate and characterize host-specific putative probiotics directly from the scat of free-ranging individuals.
                  </p>
                </div>
              )}

              {activeTab === 'introduction' && (
                <div>
                  <h4 style={{ fontSize: '1.25rem', marginBottom: '1.5rem' }}>Introduction & Ecology</h4>
                  <p style={{ fontSize: '1.1rem', lineHeight: '1.8', color: 'var(--text-secondary)' }}>
                    The mammalian gut microbiome is a complex, dynamic ecosystem fundamentally essential to host physiology, influencing nutrient acquisition, immunomodulation, pathogen resistance, and even behaviour. In wild carnivores, this microbial assemblage is tightly co-evolved with the host’s specific dietary niche, evolutionary history, and environmental exposures.
                  </p>
                </div>
              )}

              {activeTab === 'methodology' && (
                <div>
                  <h4 style={{ fontSize: '1.25rem', marginBottom: '1.5rem' }}>Bioinformatics Pipeline</h4>
                  <ul style={{ listStyleType: 'square', paddingLeft: '1.5rem', color: 'var(--text-secondary)', fontSize: '1.1rem', lineHeight: '1.8' }}>
                    <li className="mb-2"><strong style={{ color: 'var(--text-primary)' }}>Raw read quality control:</strong> Adaptor trimming (Cutadapt), quality filtering (Phred score &gt;= Q20), chimera removal.</li>
                    <li className="mb-2"><strong style={{ color: 'var(--text-primary)' }}>OTU/ASV clustering:</strong> Sequences clustered at 97% sequence identity.</li>
                    <li className="mb-2"><strong style={{ color: 'var(--text-primary)' }}>Taxonomic classification:</strong> Classified against curated reference databases (SILVA v138) using BLAST/VSEARCH.</li>
                    <li className="mb-2"><strong style={{ color: 'var(--text-primary)' }}>Diversity analysis:</strong> Alpha diversity (Shannon, Simpson, Chao1) and beta diversity metrics calculated.</li>
                  </ul>
                </div>
              )}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};

export default Research;
