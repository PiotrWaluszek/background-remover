import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import ImageUploader from '../components/ImageUploader';
import ImagePreview from '../components/ImagePreview';
import EditMenu from '../components/EditMenu';

const HomePage = ({ 
  originalImage, 
  processedImage, 
  isLoading, 
  onImageUpload, 
  onDownload,
  editSettings,
  onSettingsChange 
}) => {
  const { t } = useLanguage();
  
  return (
    <main className="app-content">
      <div className="container">
        <div className="upload-section">
          <h2>{t('home.title')}</h2>
          <p>{t('home.subtitle')}</p>
          <ImageUploader onImageUpload={onImageUpload} isLoading={isLoading} />
        </div>

        <div className="edit-section">
          <EditMenu 
            settings={editSettings}
            onSettingsChange={onSettingsChange}
            isLoading={isLoading}
            onApplySettings={() => originalImage && onImageUpload(null, editSettings)}
            hasImage={!!originalImage}
          />
        </div>

        {(originalImage || processedImage) && (
          <div className="preview-section">
            <ImagePreview 
              originalImage={originalImage} 
              processedImage={processedImage} 
              isLoading={isLoading}
              onDownload={onDownload}
            />
          </div>
        )}
      </div>
    </main>
  );
};

export default HomePage;