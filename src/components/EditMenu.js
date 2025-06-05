import React, { useState } from 'react';
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
    // Sprawdź niepoprawną konfigurację przed zastosowaniem
    if (settings.background.type === 'original' && 
        !settings.background.blur && 
        settings.effect.type === 'none') {
      alert('Niepoprawna konfiguracja: oryginalne tło bez rozmazania i efektów jest niedozwolone');
      return;
    }
    onApplySettings();
  };

  return (
    <div className="edit-menu">
      <h3>Opcje edycji</h3>
      
      <div className="edit-sections">
        {/* Model AI */}
        <div className="edit-section">
          <h4>Model AI</h4>
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
              Oryginalny
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
              Własny
            </label>
          </div>
        </div>

        {/* Tło */}
        <div className="edit-section">
          <h4>Tło</h4>
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
              Oryginalne
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
              Inny obraz
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
              Pojedynczy kolor
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
              Brak tła
            </label>
          </div>

          {/* Opcje dla oryginalnego tła */}
          {settings.background.type === 'original' && (
            <div className="sub-options">
              <label className="checkbox-label">
                <input
                  type="checkbox"
                  checked={settings.background.blur}
                  onChange={(e) => handleSettingChange('background', 'blur', e.target.checked)}
                  disabled={isLoading}
                />
                Rozmazanie
              </label>
            </div>
          )}

          {/* Upload obrazu dla nowego tła */}
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
                  Rozmazanie
                </label>
              )}
            </div>
          )}

          {/* Wybór koloru dla jednolitego tła */}
          {settings.background.type === 'color' && (
            <div className="sub-options">
              <label>
                Kolor tła:
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

        {/* Efekty */}
        <div className="edit-section">
          <h4>Efekty</h4>
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
              Brak
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
              Kolorowa obwódka
            </label>
            <label>
              <input
                type="radio"
                name="effect"
                value="shadow"
                checked={settings.effect.type === 'shadow'}
                onChange={(e) => handleSettingChange('effect', 'type', e.target.value)}
                disabled={isLoading}
              />
              Cień
            </label>
          </div>

          {/* Wybór koloru dla obwódki */}
          {settings.effect.type === 'border' && (
            <div className="sub-options">
              <label>
                Kolor obwódki:
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

        {/* Metoda łączenia */}
        <div className="edit-section">
          <h4>Metoda łączenia</h4>
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
              Prosta
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
              Ulepszona
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