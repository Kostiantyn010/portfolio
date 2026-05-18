import React from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '../context/LanguageContext';
import { FaUserAlt } from 'react-icons/fa';

const About = () => {
  const { t, accentColor } = useLanguage();

  return (
    <section className="section-container" id="about" style={{ position: 'relative', zIndex: 10, padding: '100px 5vw' }}>
      <div style={{ maxWidth: '1000px', margin: '0 auto' }}>
        <motion.h2 
          className="section-title"
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <FaUserAlt color={accentColor} size={28} />
          {t.about.titlePart1} <span style={{ color: accentColor }}>{t.about.titlePart2}</span>
        </motion.h2>
        
        <motion.div 
          className="glass-card"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          style={{ 
            marginTop: '3rem',
            position: 'relative'
          }}
        >
          <p style={{ 
            marginBottom: '2rem', 
            fontSize: 'clamp(1.2rem, 2vw, 1.8rem)', 
            color: '#fff', 
            fontWeight: 500,
            lineHeight: 1.4
          }}>
            {t.about.p1}
          </p>
          
          <div style={{ 
            width: '60px', 
            height: '4px', 
            background: accentColor, 
            marginBottom: '2rem', 
            borderRadius: '2px' 
          }}></div>

          <p style={{ 
            lineHeight: 1.8, 
            fontSize: '1.1rem',
            color: 'var(--text-secondary)'
          }}>
            {t.about.p2}
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
