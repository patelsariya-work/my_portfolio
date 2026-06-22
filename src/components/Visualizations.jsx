import React from 'react';
import { ResponsiveContainer, BarChart, Bar, XAxis, YAxis, Tooltip, CartesianGrid } from 'recharts';

const data = [
  { name: 'Jan', compliance: 98, oos: 2 },
  { name: 'Feb', compliance: 99, oos: 1 },
  { name: 'Mar', compliance: 97, oos: 3 },
  { name: 'Apr', compliance: 100, oos: 0 },
  { name: 'May', compliance: 98, oos: 2 },
];

const CustomTooltip = ({ active, payload, label }) => {
  if (active && payload && payload.length) {
    return (
      <div style={{ 
        background: 'var(--bg-primary)', 
        border: '1px solid var(--text-primary)', 
        padding: '1rem',
        fontFamily: 'var(--font-mono)'
      }}>
        <p style={{ margin: 0, fontWeight: 700 }}>{label}</p>
        <p style={{ margin: 0, color: 'var(--text-secondary)' }}>Compliance: {payload[0].value}%</p>
        <p style={{ margin: 0, color: 'var(--accent)' }}>OOS: {payload[1].value}%</p>
      </div>
    );
  }
  return null;
};

const Visualizations = () => {
  return (
    <section id="visualizations" className="section" style={{ background: 'var(--bg-secondary)' }}>
      <div className="container">
        
        <div className="tech-grid mb-8">
          <div className="col-4">
            <h2 className="section-title">analytics</h2>
          </div>
          <div className="col-8">
             <p className="text-muted" style={{ maxWidth: '600px' }}>
               Example visualization of Pharmaceutical QC Batch Release compliance over a 5-month period. Demonstrates integration of D3.js/Recharts for GxP data monitoring.
             </p>
          </div>
        </div>

        <div className="tech-grid mt-8">
          <div className="col-12 tech-block" style={{ borderTop: 'none' }}>
             <div style={{ height: '400px', width: '100%', padding: '2rem', border: '1px solid var(--border-color)', background: 'var(--bg-primary)' }}>
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart data={data} margin={{ top: 20, right: 30, left: 0, bottom: 0 }}>
                    <CartesianGrid strokeDasharray="3 3" stroke="var(--border-color)" vertical={false} />
                    <XAxis dataKey="name" stroke="var(--text-secondary)" tick={{fontFamily: 'var(--font-mono)', fontSize: 12}} />
                    <YAxis stroke="var(--text-secondary)" tick={{fontFamily: 'var(--font-mono)', fontSize: 12}} />
                    <Tooltip content={<CustomTooltip />} cursor={{fill: 'var(--bg-secondary)'}} />
                    <Bar dataKey="compliance" fill="var(--text-primary)" stackId="a" />
                    <Bar dataKey="oos" fill="var(--accent)" stackId="a" />
                  </BarChart>
                </ResponsiveContainer>
             </div>
             <div className="data-text mt-4 text-center text-muted">Fig 2. GMP Batch Compliance Rate (USP Standards)</div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Visualizations;
