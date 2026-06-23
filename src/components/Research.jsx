import React, { useState } from 'react';
import { ArrowRight } from 'lucide-react';

const Research = () => {
  const [activeTab, setActiveTab] = useState('abstract');

  const tabs = [
    { id: 'abstract', label: '01. Abstract' },
    { id: 'ecology', label: '02. Ecology' },
    { id: 'methodology', label: '03. Pipeline' }
  ];

  return (
    <section id="research" style={{ background: 'var(--bg-secondary)' }}>
      <div className="container editorial-grid">
        
        {/* Left Side: Title & Navigation */}
        <div>
          <h2 className="section-title" style={{ fontSize: '2.5rem' }}>Literature Review</h2>
          <p className="text-muted mb-12">
            Isolation & Identification of Probiotics from Indian Grey Wolf Scat: A Bioinformatics-Integrated Approach.
          </p>
          
          <div className="flex flex-col gap-4">
            {tabs.map((tab) => (
              <button 
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                style={{ 
                  background: 'transparent',
                  border: 'none',
                  textAlign: 'left',
                  fontSize: '1.25rem',
                  fontFamily: 'var(--font-mono)',
                  color: activeTab === tab.id ? 'var(--text-primary)' : 'var(--text-tertiary)',
                  cursor: 'pointer',
                  transition: 'color 0.2s ease',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  paddingBottom: '1rem',
                  borderBottom: '1px solid var(--border-color)'
                }}
              >
                {tab.label}
                {activeTab === tab.id && <ArrowRight size={18} color="var(--accent-green)" />}
              </button>
            ))}
          </div>
        </div>

        {/* Right Side: Content Area */}
        <div style={{ paddingTop: '1rem' }}>
            {activeTab === 'abstract' && (
              <div style={{ animation: 'fadeIn 0.4s ease' }}>
                <p style={{ fontSize: '1.25rem', lineHeight: '1.8', color: 'var(--text-secondary)', marginBottom: '2rem' }}>
                  The Indian Grey Wolf (Canis lupus pallipes), an apex predator endemic to the semi-arid ecosystems of peninsular India, faces mounting conservation threats including habitat fragmentation, prey depletion, retaliatory killings, and genetic erosion. 
                </p>
                <p style={{ fontSize: '1.25rem', lineHeight: '1.8', color: 'var(--text-secondary)' }}>
                  Captive management programmes critical for species recovery are frequently undermined by gastrointestinal dysbiosis. This study pioneers a non-invasive, bioinformatics-driven methodology to isolate and characterize host-specific putative probiotics directly from the scat of free-ranging individuals.
                </p>
              </div>
            )}

            {activeTab === 'ecology' && (
              <div style={{ animation: 'fadeIn 0.4s ease' }}>
                <p style={{ fontSize: '1.25rem', lineHeight: '1.8', color: 'var(--text-secondary)' }}>
                  The mammalian gut microbiome is a complex, dynamic ecosystem fundamentally essential to host physiology, influencing nutrient acquisition, immunomodulation, pathogen resistance, and even behaviour. In wild carnivores, this microbial assemblage is tightly co-evolved with the host’s specific dietary niche, evolutionary history, and environmental exposures. Understanding this baseline is crucial before introducing probiotic interventions.
                </p>
              </div>
            )}

            {activeTab === 'methodology' && (
              <div style={{ animation: 'fadeIn 0.4s ease', display: 'flex', flexDirection: 'column', gap: '3rem' }}>
                  <div>
                    <span className="data-text block mb-2" style={{ color: 'var(--accent-indigo)' }}>Step I / Quality Control</span>
                    <p className="text-secondary" style={{ fontSize: '1.1rem' }}>Adaptor trimming (Cutadapt), quality filtering (Phred score &gt;= Q20), and chimera removal.</p>
                  </div>
                  <div>
                    <span className="data-text block mb-2" style={{ color: 'var(--accent-indigo)' }}>Step II / OTU Clustering</span>
                    <p className="text-secondary" style={{ fontSize: '1.1rem' }}>High-precision amplicon sequences clustered at 97% sequence identity mapping.</p>
                  </div>
                  <div>
                    <span className="data-text block mb-2" style={{ color: 'var(--accent-green)' }}>Step III / Taxonomic Classification</span>
                    <p className="text-secondary" style={{ fontSize: '1.1rem' }}>Classified against curated reference databases (SILVA v138) using BLAST/VSEARCH algorithms.</p>
                  </div>
                  <div>
                    <span className="data-text block mb-2" style={{ color: 'var(--accent-amber)' }}>Step IV / Diversity Analytics</span>
                    <p className="text-secondary" style={{ fontSize: '1.1rem' }}>Rigorous alpha diversity (Shannon, Simpson, Chao1) and beta diversity metrics evaluation.</p>
                  </div>
              </div>
            )}
        </div>

      </div>
    </section>
  );
};

export default Research;
