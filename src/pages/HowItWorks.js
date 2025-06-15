import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import './HowItWorks.css';

const HowItWorks = () => {
  const { t } = useLanguage();
  
  const technologyList = t('howItWorks.technologyList');
  
  return (
    <div className="page-container how-it-works">
      <div className="container">
        <h1>{t('howItWorks.title')}</h1>
        
        <div className="steps-container">
          <div className="step">
            <div className="step-number">1</div>
            <div className="step-content">
              <h3>{t('howItWorks.step1Title')}</h3>
              <p>{t('howItWorks.step1Description')}</p>
            </div>
          </div>
          
          <div className="step">
            <div className="step-number">2</div>
            <div className="step-content">
              <h3>{t('howItWorks.step2Title')}</h3>
              <p>{t('howItWorks.step2Description')}</p>
            </div>
          </div>
          
          <div className="step">
            <div className="step-number">3</div>
            <div className="step-content">
              <h3>{t('howItWorks.step3Title')}</h3>
              <p>{t('howItWorks.step3Description')}</p>
            </div>
          </div>
        </div>
        
        <div className="tech-info">
          <h2>{t('howItWorks.technologyTitle')}</h2>
          <p>{t('howItWorks.technologyDescription')}</p>
        </div>
        
        <div className="use-cases">
          <h2>{t('howItWorks.useCasesTitle')}</h2>
          <div className="use-cases-grid">
            <div className="use-case">
              <h3>{t('howItWorks.useCase1Title')}</h3>
              <p>{t('howItWorks.useCase1Description')}</p>
            </div>
            
            <div className="use-case">
              <h3>{t('howItWorks.useCase2Title')}</h3>
              <p>{t('howItWorks.useCase2Description')}</p>
            </div>
            
            <div className="use-case">
              <h3>{t('howItWorks.useCase3Title')}</h3>
              <p>{t('howItWorks.useCase3Description')}</p>
            </div>
            
            <div className="use-case">
              <h3>{t('howItWorks.useCase4Title')}</h3>
              <p>{t('howItWorks.useCase4Description')}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HowItWorks;
