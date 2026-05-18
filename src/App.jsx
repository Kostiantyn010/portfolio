import React, { useEffect } from 'react';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Education from './components/Education';
import LanguageSelector from './components/LanguageSelector';
import GhostCursor from './components/GhostCursor';
import BlobCursor from './components/BlobCursor';
import FollowCursor from './components/FollowCursor';
import Crosshair from './components/Crosshair';
import { useLanguage } from './context/LanguageContext';
import './App.css';

function App() {
  const { language, accentColor, t } = useLanguage();

  useEffect(() => {
    const titles = {
      en: 'Curriculum Vitae | Kostiantyn Bilokopytov',
      ru: 'Резюме | Константин Билокопытов',
      es: 'Curriculum Vitae | Kostiantyn Bilokopytov',
      ca: 'Curriculum Vitae | Kostiantyn Bilokopytov'
    };
    document.title = titles[language] || titles.en;
    document.documentElement.lang = language;
    
    // Inject accent color as CSS variable for global use
    document.documentElement.style.setProperty('--accent-primary', accentColor);
  }, [language, accentColor]);

  const renderCursor = () => {
    switch (language) {
      case 'en': return <GhostCursor color={accentColor} />;
      case 'ru': return <BlobCursor color={accentColor} />;
      case 'es': return <FollowCursor color={accentColor} />;
      case 'ca': return <Crosshair color={accentColor} />;
      default: return <GhostCursor color={accentColor} />;
    }
  };

  return (
    <div className="app">
      <LanguageSelector />

      {/* Unified Mesh Gradient Background, adapted slightly per theme */}
      <div className="mesh-bg">
        {language !== 'ca' && (
          <>
            <div className="mesh-blob mesh-blob-1" style={{ background: language === 'en' ? 'rgba(0,255,65,0.1)' : '#ffffff' }}></div>
            <div className="mesh-blob mesh-blob-2" style={{ background: accentColor }}></div>
          </>
        )}
      </div>

      {renderCursor()}

      {/* Curriculum Content */}
      <div style={{ position: 'relative', zIndex: 10 }}>
        <Hero />
        <About />
        <Experience />
        <Education />
        <Skills />
        <Projects />
        
        <footer style={{ 
          textAlign: 'center', 
          padding: '4rem 2rem', 
          marginTop: '6rem',
          borderTop: '1px solid var(--border-color)', 
          color: 'var(--text-secondary)', 
          position: 'relative', 
          overflow: 'hidden', 
          background: 'rgba(5,5,5,0.8)', 
          backdropFilter: 'blur(10px)',
          fontFamily: 'var(--font-body)'
        }}>
          <h2 style={{ 
            fontSize: '2rem', 
            marginBottom: '1rem', 
            color: '#fff', 
            fontFamily: 'var(--font-heading)',
            fontWeight: 600
          }}>
            {t.footer.msg}
          </h2>
          <p style={{ fontSize: '0.9rem', opacity: 0.7 }}>
            © {new Date().getFullYear()} Kostiantyn Bilokopytov. {t.footer.rights}
          </p>
        </footer>
      </div>
    </div>
  );
}

export default App;
