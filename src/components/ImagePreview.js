import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import './ImagePreview.css';

const ImagePreview = ({ originalImage, processedImage, isLoading, onDownload }) => {
  const { t } = useLanguage();
  
  return (
    <div className="image-preview-container">
      <div className="images-wrapper">
        <div className="image-card">
          <h3>{t('home.originalImage')}</h3>
          <div className="image-container">
            {originalImage && <img src={originalImage} alt={t('home.originalImage')} />}
          </div>
        </div>

        <div className="image-card result">
          <h3>{t('home.processedImage')}</h3>
          <div className="image-container">
            {isLoading ? (
              <div className="loader-container">
                <div className="loader"></div>
                <p>{t('home.loading')}</p>
              </div>
            ) : processedImage ? (
              <>
                <img src={processedImage} alt={t('home.processedImage')} />
                <button className="download-button" onClick={onDownload}>
                  {t('home.download')}
                </button>
              </>
            ) : (
              <div className="placeholder">
                <p>{t('home.placeholder')}</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ImagePreview;
