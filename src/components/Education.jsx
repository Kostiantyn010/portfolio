import React from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '../context/LanguageContext';
import { FaGraduationCap } from 'react-icons/fa';

const Education = () => {
  const { t, accentColor } = useLanguage();

  return (
    <section className="section-container" id="education" style={{ position: 'relative', zIndex: 10, padding: '100px 5vw' }}>
      <div style={{ maxWidth: '1000px', margin: '0 auto' }}>
        <motion.h2 
          className="section-title"
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <FaGraduationCap color={accentColor} size={32} />
          {t.education.titlePart1} <span style={{ color: accentColor }}>{t.education.titlePart2}</span>
        </motion.h2>

        <div style={{ 
          position: 'relative', 
          paddingLeft: '40px', 
          borderLeft: '2px solid rgba(255,255,255,0.1)',
          display: 'flex',
          flexDirection: 'column',
          gap: '3rem',
          marginTop: '4rem'
        }}>
          
          {[t.education.edu1, t.education.edu2].map((school, idx) => {
            if (!school) return null;
            return (
              <motion.div 
                key={idx}
                className="glass-card"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                viewport={{ once: true, margin: "-50px" }}
                style={{ position: 'relative' }}
              >
                {/* Timeline Connector Dot */}
                <div style={{ 
                  position: 'absolute', 
                  top: '40px', 
                  left: '-41px', 
                  width: '20px', 
                  height: '20px', 
                  borderRadius: '50%', 
                  background: 'var(--bg-color)', 
                  border: `4px solid ${idx === 0 ? accentColor : 'var(--border-color)'}`,
                  boxShadow: idx === 0 ? `0 0 15px ${accentColor}` : 'none',
                  zIndex: 10
                }}></div>
                
                <div>
                  <h3 style={{ 
                    fontSize: '1.75rem', 
                    marginBottom: '0.5rem', 
                    fontWeight: 700
                  }}>
                    {school.title}
                  </h3>
                  
                  <h4 style={{ 
                    marginBottom: '1rem', 
                    fontWeight: 500, 
                    fontSize: '1rem',
                    color: idx === 0 ? accentColor : 'var(--text-secondary)'
                  }}>
                    {school.loc} <span style={{ opacity: 0.5 }}>| {school.year}</span>
                  </h4>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Education;
