import React, { useState } from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { toast } from 'react-toastify';
import './EditMenu.css';

const EditMenu = ({ settings, onSettingsChange, isLoading, onApplySettings, hasImage }) => {
  const [backgroundImageFile, setBackgroundImageFile] = useState(null);

  const handleSettingChange = (category, key, value) => {
    const newSettings = {
      ...settings,
      [category]: {
        ...settings[category],
        [key]: value
      }
    };
    onSettingsChange(newSettings);
  };

  const handleDirectSettingChange = (key, value) => {
    const newSettings = {
      ...settings,
      [key]: value
    };
    onSettingsChange(newSettings);
  };

  const handleBackgroundImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      setBackgroundImageFile(file);
      handleSettingChange('background', 'image', file);
    }
  };

  const handleApplyClick = () => {
    if (settings.background.type === 'original' && 
        !settings.background.blur && 
        settings.effect.type === 'none') {
      toast.error('Niepoprawna konfiguracja: oryginalne tło bez rozmazania i efektów jest niedozwolone');
      return;
    }
    onApplySettings();
  };

  const { t } = useLanguage();

  return (
    <div className="edit-menu">
      <h3>{t('edit.title')}</h3>
      
      <div className="edit-sections">
        <div className="edit-section">
          <h4>{t('edit.model')}</h4>
          <div className="radio-group">
            <label>
              <input
                type="radio"
                name="aiModel"
                value="original"
                checked={settings.aiModel === 'original'}
                onChange={(e) => handleDirectSettingChange('aiModel', e.target.value)}
                disabled={isLoading}
              />
              {t('edit.model_original')}
            </label>
            <label>
              <input
                type="radio"
                name="aiModel"
                value="custom"
                checked={settings.aiModel === 'custom'}
                onChange={(e) => handleDirectSettingChange('aiModel', e.target.value)}
                disabled={isLoading}
              />
              {t('edit.model_custom')}
            </label>
          </div>
        </div>

        <div className="edit-section">
          <h4>{t('edit.background')}</h4>
          <div className="radio-group">
            <label>
              <input
                type="radio"
                name="background"
                value="original"
                checked={settings.background.type === 'original'}
                onChange={(e) => handleSettingChange('background', 'type', e.target.value)}
                disabled={isLoading}
              />
              {t('edit.background_original')}
            </label>
            <label>
              <input
                type="radio"
                name="background"
                value="image"
                checked={settings.background.type === 'image'}
                onChange={(e) => handleSettingChange('background', 'type', e.target.value)}
                disabled={isLoading}
              />
              {t('edit.background_new')}
            </label>
            <label>
              <input
                type="radio"
                name="background"
                value="color"
                checked={settings.background.type === 'color'}
                onChange={(e) => handleSettingChange('background', 'type', e.target.value)}
                disabled={isLoading}
              />
              {t('edit.background_color')}
            </label>
            <label>
              <input
                type="radio"
                name="background"
                value="none"
                checked={settings.background.type === 'none'}
                onChange={(e) => handleSettingChange('background', 'type', e.target.value)}
                disabled={isLoading}
              />
              {t('edit.background_none')}
            </label>
          </div>

          {settings.background.type === 'original' && (
            <div className="sub-options">
              <label className="checkbox-label">
                <input
                  type="checkbox"
                  checked={settings.background.blur}
                  onChange={(e) => handleSettingChange('background', 'blur', e.target.checked)}
                  disabled={isLoading}
                />
                {t('edit.blur')}
              </label>
            </div>
          )}

          {settings.background.type === 'image' && (
            <div className="sub-options">
              <input
                type="file"
                accept="image/*"
                onChange={handleBackgroundImageUpload}
                className="file-input"
                disabled={isLoading}
              />
              {backgroundImageFile && (
                <label className="checkbox-label">
                  <input
                    type="checkbox"
                    checked={settings.background.blur}
                    onChange={(e) => handleSettingChange('background', 'blur', e.target.checked)}
                    disabled={isLoading}
                  />
                  {t('edit.blur')}
                </label>
              )}
            </div>
          )}

          {settings.background.type === 'color' && (
            <div className="sub-options">
              <label>
                {t('edit.color_choice')}
                <input
                  type="color"
                  value={settings.background.color}
                  onChange={(e) => handleSettingChange('background', 'color', e.target.value)}
                  disabled={isLoading}
                />
              </label>
            </div>
          )}
        </div>

        <div className="edit-section">
          <h4>{t('edit.effects')}</h4>
          <div className="radio-group">
            <label>
              <input
                type="radio"
                name="effect"
                value="none"
                checked={settings.effect.type === 'none'}
                onChange={(e) => handleSettingChange('effect', 'type', e.target.value)}
                disabled={isLoading}
              />
              {t('edit.effects_none')}
            </label>
            <label>
              <input
                type="radio"
                name="effect"
                value="border"
                checked={settings.effect.type === 'border'}
                onChange={(e) => handleSettingChange('effect', 'type', e.target.value)}
                disabled={isLoading}
              />
              {t('edit.effects_border')}
            </label>
          </div>

          {settings.effect.type === 'border' && (
            <div className="sub-options">
              <label>
                {t('edit.color_choice')}
                <input
                  type="color"
                  value={settings.effect.color}
                  onChange={(e) => handleSettingChange('effect', 'color', e.target.value)}
                  disabled={isLoading}
                />
              </label>
            </div>
          )}
        </div>

        <div className="edit-section">
          <h4>{t('edit.blend_method')}</h4>
          <div className="radio-group">
            <label>
              <input
                type="radio"
                name="blendingMethod"
                value="simple"
                checked={settings.blendingMethod === 'simple'}
                onChange={(e) => handleDirectSettingChange('blendingMethod', e.target.value)}
                disabled={isLoading}
              />
              {t('edit.blend_method_simple')}
            </label>
            <label>
              <input
                type="radio"
                name="blendingMethod"
                value="advanced"
                checked={settings.blendingMethod === 'advanced'}
                onChange={(e) => handleDirectSettingChange('blendingMethod', e.target.value)}
                disabled={isLoading}
              />
              {t('edit.blend_method_advanced')}
            </label>
          </div>
        </div>
      </div>

      {hasImage && (
        <div className="apply-section">
          <button 
            className="apply-button"
            onClick={handleApplyClick}
            disabled={isLoading}
          >
            <svg className="arrow-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor">
              <path d="M5 12h14M12 5l7 7-7 7" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>
        </div>
      )}
    </div>
  );
};

export default EditMenu;