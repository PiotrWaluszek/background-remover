import React, { createContext, useState, useContext, useEffect } from 'react';
import pl from '../translations/pl';
import en from '../translations/en';

const translations = { pl, en };

const LanguageContext = createContext();

export const LanguageProvider = ({ children }) => {
  // Sprawdź, czy w localStorage jest zapisany język, jeśli nie, użyj polskiego
  const [language, setLanguage] = useState(() => {
    const savedLanguage = localStorage.getItem('language');
    return savedLanguage || 'pl';
  });

  // Aktualizuj localStorage przy zmianie języka
  useEffect(() => {
    localStorage.setItem('language', language);
  }, [language]);

  const toggleLanguage = () => {
    setLanguage(prevLang => prevLang === 'pl' ? 'en' : 'pl');
  };

  const t = (key) => {
    // Funkcja do pobierania tłumaczeń na podstawie klucza, np. t('header.home')
    const keys = key.split('.');
    let value = translations[language];
    
    for (const k of keys) {
      if (value && value[k] !== undefined) {
        value = value[k];
      } else {
        console.warn(`Translation key not found: ${key}`);
        return key;
      }
    }
    
    return value;
  };

  return (
    <LanguageContext.Provider value={{ language, toggleLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

// Hook do używania kontekstu języka
export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
