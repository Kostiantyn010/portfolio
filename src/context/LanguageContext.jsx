import React, { createContext, useContext, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { translations } from '../data/translations';

const LanguageContext = createContext();

export const themes = {
  en: '#00ff41', // Hacker Green
  ru: '#0066ff', // Deep Cyber Blue
  es: '#D4AF37', // Royal Gold
  ca: '#E60026'  // Brutalist Red
};

const VALID_LANGS = ['en', 'ru', 'es', 'ca'];

export const LanguageProvider = ({ children }) => {
  const { lang } = useParams();
  const navigate = useNavigate();

  const language = VALID_LANGS.includes(lang) ? lang : 'en';

  useEffect(() => {
    if (!VALID_LANGS.includes(lang)) {
      navigate('/en', { replace: true });
    }
  }, [lang, navigate]);

  useEffect(() => {
    document.body.className = `theme-${language}`;
  }, [language]);

  const setLanguage = (newLang) => {
    if (VALID_LANGS.includes(newLang)) {
      navigate(`/${newLang}`);
    }
  };

  const t = translations[language] || translations['en'];
  const accentColor = themes[language];

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t, accentColor }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => useContext(LanguageContext);
