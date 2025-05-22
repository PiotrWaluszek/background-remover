import React from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../contexts/LanguageContext';
import LanguageSwitch from './LanguageSwitch';
import './Header.css';

const Header = () => {
  const { t } = useLanguage();

  return (
    <header className="app-header">
      <div className="container">
        <Link to="/" className="logo-link">
          <div className="logo">
            <span className="logo-icon">🖼️</span>
            <h1>BackgroundRemover</h1>
          </div>
        </Link>
        <nav>
          <ul>
            <li><Link to="/">{t('header.home')}</Link></li>
            <li><Link to="/jak-to-dziala">{t('header.howItWorks')}</Link></li>
            <li><Link to="/o-nas">{t('header.aboutUs')}</Link></li>
            <li><Link to="/kontakt">{t('header.contact')}</Link></li>
          </ul>
        </nav>
        <LanguageSwitch />
      </div>
    </header>
  );
};

export default Header;
