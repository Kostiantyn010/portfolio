import React from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';

const LanguageSelector = () => {
  const { language } = useLanguage();

  const langs = [
    { code: 'en', label: 'EN' },
    { code: 'ru', label: 'RU' },
    { code: 'es', label: 'ES' },
    { code: 'ca', label: 'CA' }
  ];

  // Helper to determine text color on active background
  const getActiveTextColor = () => {
    // Green and Gold are bright -> black text. Blue and Red are dark -> white text.
    if (language === 'en' || language === 'es') return '#000000';
    return '#ffffff';
  };

  return (
    <div style={{
      position: 'fixed',
      top: '30px',
      right: '5vw',
      zIndex: 1000,
      display: 'flex',
      gap: '8px',
      background: 'rgba(0,0,0,0.5)',
      padding: '8px',
      borderRadius: '30px',
      border: '1px solid var(--border-color)',
      backdropFilter: 'blur(10px)',
      boxSizing: 'border-box'
    }}>
      {langs.map((lang) => {
        const isActive = language === lang.code;
        return (
          <Link
            key={lang.code}
            to={`/${lang.code}`}
            style={{
              background: isActive ? 'var(--accent-primary)' : 'transparent',
              color: isActive ? getActiveTextColor() : 'rgba(255,255,255,0.6)',
              padding: '8px 16px',
              borderRadius: '20px',
              cursor: 'pointer',
              fontWeight: 700,
              transition: 'all 0.2s ease',
              fontSize: '0.9rem',
              textDecoration: 'none',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontFamily: 'var(--font-heading)',
              minWidth: '50px',
              boxSizing: 'border-box'
            }}
          >
            {lang.label}
          </Link>
        );
      })}
    </div>
  );
};

export default LanguageSelector;
