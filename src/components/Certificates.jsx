import React from 'react';
import { ArrowUpRight } from 'lucide-react';

const Certificates = () => {
  const certificates = [
    {
      title: "Artificial Intelligence Internship",
      issuer: "SMARTED Innovations (Skill India)",
      file: "#", // Replace with actual path if you have the file
      id: "CERT-SMR-2026"
    },
    {
      title: "Structural Analysis in Bioinformatics",
      issuer: "IIT Kharagpur",
      file: "#", // Replace with actual path if you have the file
      id: "CERT-IIT-2024"
    },
    {
      title: "Techniques in Pharmaceutical Microbiology",
      issuer: "BioEduXperts",
      file: "#", // Replace with actual path if you have the file
      id: "CERT-BIO-2024"
    }
  ];

  return (
    <section id="certificates" style={{ background: 'var(--bg-secondary)' }}>
      <div className="container editorial-grid">
        
        <div>
          <h2 className="section-title">Credentials</h2>
          <span className="tag green mb-4">Verified Certifications</span>
        </div>
        
        <div className="flex flex-col">
          {certificates.map((cert, index) => (
            <div key={index} className="list-item flex flex-col md:flex-row justify-between items-center gap-6">
              
              <div>
                <span className="data-text block mb-2" style={{ color: 'var(--accent-green)' }}>ID / {cert.id}</span>
                <h3 className="text-3xl font-light mb-2">{cert.title}</h3>
                <h4 className="text-lg text-secondary">Issued by {cert.issuer}</h4>
              </div>
              
              <div>
                <a href={cert.file} target="_blank" rel="noreferrer" className="btn text-lg">
                  View Document <ArrowUpRight size={16} />
                </a>
              </div>
              
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certificates;
