import React from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '../context/LanguageContext';
import { FaLaptopCode, FaExternalLinkAlt, FaGithub } from 'react-icons/fa';

const Projects = () => {
  const { t, accentColor } = useLanguage();

  return (
    <section className="section-container" id="projects" style={{ position: 'relative', zIndex: 10, padding: '100px 5vw' }}>
      <div style={{ maxWidth: '1000px', margin: '0 auto' }}>
        <motion.h2 
          className="section-title"
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <FaLaptopCode color={accentColor} size={32} />
          {t.projects.titlePart1} <span style={{ color: accentColor }}>{t.projects.titlePart2}</span>
        </motion.h2>

        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', 
          gap: '2rem',
          marginTop: '4rem'
        }}>
          {t.projects.items.map((project, idx) => (
            <motion.div
              key={idx}
              className="glass-card"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              viewport={{ once: true, margin: "-50px" }}
              style={{
                display: 'flex',
                flexDirection: 'column',
                height: '100%'
              }}
            >
              <div style={{ marginBottom: '1.5rem', flex: 1 }}>
                <h3 style={{ fontSize: '1.5rem', marginBottom: '0.75rem', fontWeight: 700 }}>
                  {project.title}
                </h3>
                <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem', lineHeight: 1.6, marginBottom: '1.5rem' }}>
                  {project.description || project.desc}
                </p>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
                  {project.tags && project.tags.map((tech, i) => (
                    <span key={i} style={{ 
                      fontSize: '0.75rem', 
                      padding: '0.25rem 0.75rem', 
                      background: 'rgba(255,255,255,0.05)',
                      borderRadius: '4px',
                      color: 'var(--text-tertiary)'
                    }}>
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div style={{ display: 'flex', gap: '1rem', marginTop: 'auto', paddingTop: '1.5rem', borderTop: '1px solid rgba(255,255,255,0.05)' }}>
                {project.link && project.link !== "#" && (
                  <a href={project.link} target="_blank" rel="noreferrer" style={{ 
                    display: 'flex', alignItems: 'center', gap: '0.5rem', color: '#fff', textDecoration: 'none', fontSize: '0.9rem', fontWeight: 500, transition: 'color 0.2s'
                  }}
                  onMouseEnter={(e) => e.currentTarget.style.color = accentColor}
                  onMouseLeave={(e) => e.currentTarget.style.color = '#fff'}
                  >
                    <FaExternalLinkAlt /> View Live
                  </a>
                )}
                {project.github && project.github !== "#" && (
                  <a href={project.github} target="_blank" rel="noreferrer" style={{ 
                    display: 'flex', alignItems: 'center', gap: '0.5rem', color: '#fff', textDecoration: 'none', fontSize: '0.9rem', fontWeight: 500, transition: 'color 0.2s'
                  }}
                  onMouseEnter={(e) => e.currentTarget.style.color = accentColor}
                  onMouseLeave={(e) => e.currentTarget.style.color = '#fff'}
                  >
                    <FaGithub /> Source
                  </a>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
