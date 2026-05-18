import React from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaEnvelope, FaMapMarkerAlt, FaDownload } from 'react-icons/fa';
import { useLanguage } from '../context/LanguageContext';

const Hero = () => {
  const { t, accentColor } = useLanguage();

  return (
    <section style={{ 
      minHeight: '100vh', 
      display: 'flex', 
      alignItems: 'center',
      justifyContent: 'center',
      position: 'relative',
      padding: '0 5vw',
      paddingTop: '80px'
    }}>
      
      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className="glass-card"
        style={{
          maxWidth: '1000px',
          width: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          textAlign: 'center',
          gap: '2rem',
          padding: '4rem 2rem'
        }}
      >
        <div style={{
          display: 'inline-flex',
          alignItems: 'center',
          gap: '0.75rem',
          padding: '0.5rem 1.5rem',
          background: 'rgba(255,255,255,0.05)',
          borderRadius: '100px',
          border: '1px solid rgba(255,255,255,0.1)',
          fontSize: '0.875rem',
          fontWeight: 500,
          letterSpacing: '1px'
        }}>
          <span style={{ 
            width: '8px', height: '8px', 
            background: accentColor, 
            borderRadius: '50%',
            boxShadow: `0 0 10px ${accentColor}`
          }}></span>
          {t.hero.status || 'AVAILABLE FOR HIRE'}
        </div>

        <h1 style={{ 
          fontSize: 'clamp(3rem, 8vw, 6rem)', 
          lineHeight: 1, 
          letterSpacing: '-0.02em',
          fontWeight: 700
        }}>
          Kostiantyn<br/>
          <span className="text-gradient">Bilokopytov</span>
        </h1>

        <h2 style={{ 
          fontSize: 'clamp(1.2rem, 3vw, 2rem)', 
          color: 'var(--text-secondary)',
          fontWeight: 400,
          maxWidth: '600px'
        }}>
          {t.hero.role}
        </h2>

        <div style={{ 
          display: 'flex', gap: '2rem', flexWrap: 'wrap', justifyContent: 'center',
          color: 'var(--text-tertiary)', fontSize: '1rem', marginTop: '1rem'
        }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            <FaMapMarkerAlt color={accentColor} /> Badalona, Spain
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            <FaEnvelope color={accentColor} /> kostiantyn.bilokopytov7@gmail.com
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            <span style={{ color: accentColor }}>☎</span> +34 691 789 230
          </div>
        </div>

        <div style={{ display: 'flex', gap: '1rem', alignItems: 'center', flexWrap: 'wrap', marginTop: '2rem' }}>
          <a href="mailto:kostiantyn.bilokopytov7@gmail.com" className="btn-primary" style={{ color: '#000', backgroundColor: accentColor }}>
            {t.hero.contact || 'Contact Me'}
          </a>
          
          <div style={{ display: 'flex', gap: '0.5rem', marginLeft: '1rem' }}>
            <a href="https://github.com/kbilokopytov" target="_blank" rel="noreferrer" className="btn-secondary" style={{ padding: '1rem', borderRadius: '50%' }}>
              <FaGithub size={20} />
            </a>
            <a href="https://linkedin.com/in/kostiantyn-bilokopytov" target="_blank" rel="noreferrer" className="btn-secondary" style={{ padding: '1rem', borderRadius: '50%' }}>
              <FaLinkedin size={20} />
            </a>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
