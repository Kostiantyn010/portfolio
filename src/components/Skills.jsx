import React from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '../context/LanguageContext';
import { FaCode } from 'react-icons/fa';

const Skills = () => {
  const { t, accentColor } = useLanguage();

  return (
    <section className="section-container" id="skills" style={{ position: 'relative', zIndex: 10, padding: '100px 5vw' }}>
      <div style={{ maxWidth: '1000px', margin: '0 auto' }}>
        <motion.h2 
          className="section-title"
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <FaCode color={accentColor} size={32} />
          {t.skills.titlePart1} <span style={{ color: accentColor }}>{t.skills.titlePart2}</span>
        </motion.h2>

        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', 
          gap: '2rem',
          marginTop: '4rem'
        }}>
          {t.skills.categories.map((category, idx) => (
            <motion.div
              key={idx}
              className="glass-card"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              viewport={{ once: true, margin: "-50px" }}
            >
              <h3 style={{ 
                fontSize: '1.25rem', 
                marginBottom: '1.5rem', 
                fontWeight: 600,
                color: '#fff',
                display: 'flex',
                alignItems: 'center',
                gap: '0.5rem'
              }}>
                <span style={{ width: '8px', height: '8px', background: accentColor, borderRadius: '50%' }}></span>
                {category.name}
              </h3>
              
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.75rem' }}>
                {category.items.map((skill, i) => (
                  <div key={i} style={{ 
                    padding: '0.5rem 1rem', 
                    background: 'rgba(255,255,255,0.05)', 
                    border: '1px solid rgba(255,255,255,0.1)',
                    borderRadius: '100px',
                    fontSize: '0.9rem',
                    color: 'var(--text-secondary)',
                    transition: 'all 0.3s ease',
                    cursor: 'default'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.borderColor = accentColor;
                    e.currentTarget.style.color = '#fff';
                    e.currentTarget.style.transform = 'translateY(-2px)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.borderColor = 'rgba(255,255,255,0.1)';
                    e.currentTarget.style.color = 'var(--text-secondary)';
                    e.currentTarget.style.transform = 'translateY(0)';
                  }}
                  >
                    {skill}
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
