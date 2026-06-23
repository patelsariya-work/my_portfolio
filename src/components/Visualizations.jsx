import React from 'react';
import { ResponsiveContainer, BarChart, Bar, ScatterChart, Scatter, AreaChart, Area, XAxis, YAxis, Tooltip, CartesianGrid, Legend, ZAxis } from 'recharts';

// Data (same as before, visualizations remain robust)
const taxonomyData = [
  { site: 'Forest', Firmicutes: 45, Bacteroidota: 30, Proteobacteria: 15, Actinobacteriota: 10 },
  { site: 'Scrubland', Firmicutes: 50, Bacteroidota: 25, Proteobacteria: 20, Actinobacteriota: 5 },
  { site: 'Captive', Firmicutes: 65, Bacteroidota: 15, Proteobacteria: 15, Actinobacteriota: 5 },
];

const variantDataBenign = [
  { x: 45, y: 0.1, z: 20 }, { x: 30, y: 0.2, z: 20 }, { x: 50, y: 0.15, z: 20 }, { x: 25, y: 0.3, z: 20 }, { x: 40, y: 0.05, z: 20 }
];
const variantDataVUS = [
  { x: 15, y: 0.4, z: 40 }, { x: 10, y: 0.6, z: 40 }, { x: 20, y: 0.5, z: 40 }, { x: 5, y: 0.7, z: 40 }
];
const variantDataPathogenic = [
  { x: 1, y: 0.95, z: 60 }, { x: 0.5, y: 0.9, z: 60 }, { x: 2, y: 0.85, z: 60 }, { x: 0.1, y: 0.98, z: 60 }
];

const qcData = [
  { month: 'Jan', passRate: 99.2 }, { month: 'Feb', passRate: 98.5 }, { month: 'Mar', passRate: 99.8 },
  { month: 'Apr', passRate: 97.4 }, { month: 'May', passRate: 99.5 }, { month: 'Jun', passRate: 99.9 },
];

const Visualizations = () => {
  return (
    <section id="visualizations">
      <div className="container">
        
        <div className="editorial-grid mb-16">
          <div>
            <h2 className="section-title">Data Analytics</h2>
          </div>
          <div>
            <p className="text-muted" style={{ fontSize: '1.2rem', maxWidth: '600px' }}>
              Standard data methodologies deployed across ecological microbiome analysis, genomic variant annotation, and strictly-regulated pharmaceutical quality control pipelines.
            </p>
          </div>
        </div>

        {/* 1. Taxonomic Abundance */}
        <div className="list-item" style={{ borderTop: '1px solid var(--border-strong)', padding: '4rem 0' }}>
          <div className="editorial-grid">
            <div>
              <span className="data-text mb-4 block">01 / Diversity Modeling</span>
              <h3 className="text-2xl mb-4 font-light">16S rRNA Taxonomic Abundance</h3>
              <p className="text-muted text-sm max-w-sm">Relative abundance of major bacterial phyla across distinct Indian Grey Wolf habitats. Used to identify dysbiosis in captive populations.</p>
            </div>
            <div style={{ height: '350px', width: '100%' }}>
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={taxonomyData} margin={{ top: 20, right: 0, left: -20, bottom: 0 }}>
                  <CartesianGrid strokeDasharray="3 3" stroke="var(--border-color)" vertical={false} />
                  <XAxis dataKey="site" stroke="var(--text-secondary)" tick={{fontFamily: 'var(--font-sans)', fontSize: 12}} axisLine={false} tickLine={false} dy={10} />
                  <YAxis stroke="var(--text-secondary)" tick={{fontFamily: 'var(--font-sans)', fontSize: 12}} axisLine={false} tickLine={false} />
                  <Tooltip cursor={{fill: 'var(--bg-secondary)'}} contentStyle={{ borderRadius: '4px', border: '1px solid var(--border-color)', boxShadow: 'none' }} />
                  <Legend wrapperStyle={{ paddingTop: '20px', fontSize: '12px', fontFamily: 'var(--font-mono)' }} />
                  <Bar dataKey="Firmicutes" stackId="a" fill="var(--accent-indigo)" />
                  <Bar dataKey="Bacteroidota" stackId="a" fill="var(--accent-green)" />
                  <Bar dataKey="Proteobacteria" stackId="a" fill="var(--accent-amber)" />
                  <Bar dataKey="Actinobacteriota" stackId="a" fill="#CBD5E1" />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </div>
        </div>

        {/* 2. Variant Pathogenicity */}
        <div className="list-item" style={{ padding: '4rem 0' }}>
          <div className="editorial-grid">
            <div>
              <span className="data-text mb-4 block">02 / Variant Annotation</span>
              <h3 className="text-2xl mb-4 font-light">Genomic Pathogenicity</h3>
              <p className="text-muted text-sm max-w-sm">Pathogenicity Score vs. Allele Frequency. Visualizing the inverse relationship typical of pathogenic variants mapped via ClinVar.</p>
            </div>
            <div style={{ height: '300px', width: '100%' }}>
              <ResponsiveContainer width="100%" height="100%">
                <ScatterChart margin={{ top: 20, right: 0, bottom: 0, left: -20 }}>
                  <CartesianGrid strokeDasharray="3 3" stroke="var(--border-color)" vertical={false} />
                  <XAxis type="number" dataKey="x" name="Allele Freq (%)" stroke="var(--text-secondary)" tick={{fontSize: 12}} axisLine={false} tickLine={false} />
                  <YAxis type="number" dataKey="y" name="Pathogenicity" stroke="var(--text-secondary)" tick={{fontSize: 12}} axisLine={false} tickLine={false} />
                  <ZAxis type="number" dataKey="z" range={[50, 150]} />
                  <Tooltip cursor={{strokeDasharray: '3 3'}} contentStyle={{ borderRadius: '4px', border: '1px solid var(--border-color)', boxShadow: 'none' }} />
                  <Scatter name="Benign" data={variantDataBenign} fill="var(--accent-green)" />
                  <Scatter name="VUS" data={variantDataVUS} fill="var(--accent-amber)" />
                  <Scatter name="Pathogenic" data={variantDataPathogenic} fill="var(--accent-indigo)" />
                </ScatterChart>
              </ResponsiveContainer>
            </div>
          </div>
        </div>

        {/* 3. Pharma QC Compliance */}
        <div className="list-item" style={{ padding: '4rem 0' }}>
          <div className="editorial-grid">
            <div>
              <span className="data-text mb-4 block">03 / Quality Systems</span>
              <h3 className="text-2xl mb-4 font-light">Pharma QC Batch Compliance</h3>
              <p className="text-muted text-sm max-w-sm">ETL Pass Rate tracking against a strict USP compliance threshold. Crucial for GMP/GxP Out of Specification (OOS) monitoring.</p>
            </div>
            <div style={{ height: '300px', width: '100%' }}>
              <ResponsiveContainer width="100%" height="100%">
                <AreaChart data={qcData} margin={{ top: 20, right: 0, bottom: 0, left: -20 }}>
                  <CartesianGrid strokeDasharray="3 3" stroke="var(--border-color)" vertical={false} />
                  <XAxis dataKey="month" stroke="var(--text-secondary)" tick={{fontSize: 12}} axisLine={false} tickLine={false} dy={10} />
                  <YAxis domain={[95, 100]} stroke="var(--text-secondary)" tick={{fontSize: 12}} axisLine={false} tickLine={false} />
                  <Tooltip contentStyle={{ borderRadius: '4px', border: '1px solid var(--border-color)', boxShadow: 'none' }} />
                  <CartesianGrid stroke="var(--accent-amber)" strokeDasharray="5 5" horizontalPoints={[100, 100, 100]} /> 
                  <Area type="monotone" dataKey="passRate" name="ETL Pass Rate (%)" stroke="var(--accent-green)" fill="rgba(16, 185, 129, 0.1)" strokeWidth={2} />
                </AreaChart>
              </ResponsiveContainer>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Visualizations;
