import React, { useCallback } from 'react';
import { useDropzone } from 'react-dropzone';
import { useLanguage } from '../contexts/LanguageContext';
import './ImageUploader.css';

const ImageUploader = ({ onImageUpload, isLoading }) => {
  const { t } = useLanguage();
  
  const onDrop = useCallback(
    (acceptedFiles) => {
      if (acceptedFiles.length > 0) {
        onImageUpload(acceptedFiles[0]);
      }
    },
    [onImageUpload]
  );

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept: {
      'image/jpeg': [],
      'image/png': [],
      'image/jpg': []
    },
    disabled: isLoading,
    multiple: false
  });

  return (
    <div 
      {...getRootProps()} 
      className={`dropzone ${isDragActive ? 'active' : ''} ${isLoading ? 'disabled' : ''}`}
    >
      <input {...getInputProps()} />
      <div className="dropzone-content">
        <div className="icon-container">
          <i className="upload-icon"></i>
        </div>
        {isDragActive ? (
          <p>{t('home.dropzoneActive')}</p>
        ) : (
          <>
            <p>{t('home.dropzoneIdle')}</p>
            <button className="select-button" type="button" disabled={isLoading}>
              {t('home.selectButton')}
            </button>
            <p className="file-info">{t('home.fileInfo')}</p>
          </>
        )}
      </div>
    </div>
  );
};

export default ImageUploader;
