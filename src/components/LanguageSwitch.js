import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import './LanguageSwitch.css';

const LanguageSwitch = () => {
  const { language, toggleLanguage, t } = useLanguage();

  return (
    <div className="language-switch">
      <button 
        className={`language-btn ${language === 'pl' ? 'active' : ''}`} 
        onClick={toggleLanguage}
      >
        {language === 'pl' ? t('languageSwitch.en') : t('languageSwitch.pl')}
      </button>
    </div>
  );
};

export default LanguageSwitch;
