import React from 'react';

const Certificates = () => {
  const certificates = [
    {
      id: "CERT-SMR-26",
      title: "Artificial Intelligence Internship",
      issuer: "SMARTED Innovations (Skill India)",
      file: "#"
    },
    {
      id: "CERT-IIT-24",
      title: "Structural Analysis in Bioinformatics",
      issuer: "IIT Kharagpur",
      file: "#"
    },
    {
      id: "CERT-BIO-24",
      title: "Techniques in Pharmaceutical Microbiology",
      issuer: "BioEduXperts",
      file: "#"
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
