import React from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../contexts/LanguageContext';
import './Footer.css';

const Footer = () => {
  const { t } = useLanguage();
  
  return (
    <footer className="app-footer">
      <div className="container">
        <p>&copy; {new Date().getFullYear()} BackgroundRemover. {t('footer.rights')}</p>
        <div className="footer-links">
          <Link to="/jak-to-dziala">{t('header.howItWorks')}</Link>
          <Link to="/o-nas">{t('header.aboutUs')}</Link>
          <Link to="/kontakt">{t('header.contact')}</Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
