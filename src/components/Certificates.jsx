import React from 'react';

const Certificates = () => {
  const certificates = [
    {
      id: "CERT-DEL-25",
      title: "Data Visualization & Dashboards",
      issuer: "Deloitte",
      file: "/certificates/Deloitte.pdf"
    },
    {
      id: "CERT-PFI-25",
      title: "Pharmaceutical Quality Systems",
      issuer: "Pfizer",
      file: "/certificates/Pfizer.pdf"
    },
    {
      id: "CERT-SMR-25",
      title: "Artificial Intelligence in Healthcare",
      issuer: "SMARTED Innovations",
      file: "/certificates/ARTIFICIAL_INTELLIGENCE-SariyaPatel.pdf"
    }
  ];

  return (
    <section id="certificates" className="section">
      <div className="container">
        
        <div className="tech-grid mb-8">
          <div className="col-4">
            <h2 className="section-title">credentials</h2>
          </div>
          <div className="col-8 flex items-end">
             <div className="data-text text-muted mb-4 text-right w-full">GMP/GxP COMPLIANT VALIDATION</div>
          </div>
        </div>

        <div className="tech-grid">
          {certificates.map((cert) => (
            <div key={cert.id} className="col-12 tech-block">
              <div className="flex flex-col md:flex-row justify-between items-center" style={{ flexDirection: 'row' }}>
                
                <div style={{ width: '20%' }}>
                  <span className="data-text">{cert.id}</span>
                </div>
                
                <div style={{ width: '40%' }}>
                  <h3 style={{ fontSize: '1.25rem' }}>{cert.title}</h3>
                </div>

                <div style={{ width: '20%' }}>
                  <span className="text-muted">{cert.issuer}</span>
                </div>

                <div style={{ width: '20%', textAlign: 'right' }}>
                  <a href={cert.file} target="_blank" rel="noreferrer" className="btn btn-outline" style={{ padding: '0.5rem 1rem' }}>Verify Document</a>
                </div>

              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Certificates;
