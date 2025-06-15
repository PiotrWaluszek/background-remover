import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { LanguageProvider } from './contexts/LanguageContext';
import Header from './components/Header';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import HowItWorks from './pages/HowItWorks';
import AboutUs from './pages/AboutUs';
import Contact from './pages/Contact';
import './App.css';

function App() {
  const [originalImage, setOriginalImage] = useState(null);
  const [processedImage, setProcessedImage] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [imageFile, setImageFile] = useState(null);

  // Domyślne ustawienia edycji
  const [editSettings, setEditSettings] = useState({
    aiModel: 'original',
    background: {
      type: 'none',
      blur: false,
      color: '#ffffff',
      image: null
    },
    effect: {
      type: 'none',
      color: '#000000'
    },
    blendingMethod: 'simple'
  });

  const handleImageUpload = async (file, settings = editSettings) => {
    const imageToProcess = file || imageFile;
    
    if (!imageToProcess) return;

    const validTypes = ['image/jpeg', 'image/png', 'image/jpg'];
    if (!validTypes.includes(imageToProcess.type)) {
      toast.error('Proszę wybrać plik w formacie JPG lub PNG');
      return;
    }

    if (file && settings.background.type === 'original' && 
        !settings.background.blur && 
        settings.effect.type === 'none') {
      toast.error('Niepoprawna konfiguracja: oryginalne tło bez rozmazania i efektów jest niedozwolone');
      return;
    }

    if (file) {
      setOriginalImage(URL.createObjectURL(imageToProcess));
      setImageFile(imageToProcess);
    }
    
    setProcessedImage(null);
    setIsLoading(true);

    const formData = new FormData();
    formData.append('image', imageToProcess);
    formData.append('settings', JSON.stringify(settings));
    
    if (settings.background.type === 'image' && settings.background.image) {
      formData.append('backgroundImage', settings.background.image);
    }

    try {
      const response = await fetch('http://127.0.0.1:8000/api/remove-background', {
        method: 'POST',
        body: formData,
      });

      if (!response.ok) {
        throw new Error('Wystąpił problem z przetwarzaniem obrazu');
      }

      const data = await response.blob();
      setProcessedImage(URL.createObjectURL(data));
      toast.success('Obraz został pomyślnie przetworzony!');
    } catch (error) {
      toast.error(error.message || 'Wystąpił błąd podczas przetwarzania obrazu');
      console.error('Error:', error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleSettingsChange = (newSettings) => {
    setEditSettings(newSettings);
  };

  const handleDownload = () => {
    if (processedImage) {
      const link = document.createElement('a');
      link.href = processedImage;
      link.download = 'obraz-edytowany.png';
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    }
  };

  return (
    <LanguageProvider>
      <Router>
        <div className="app">
          <Header />
          <Routes>
            <Route path="/" element={
              <HomePage 
                originalImage={originalImage} 
                processedImage={processedImage} 
                isLoading={isLoading}
                onImageUpload={handleImageUpload}
                onDownload={handleDownload}
                editSettings={editSettings}
                onSettingsChange={handleSettingsChange}
                onApplySettings={() => imageFile && handleImageUpload(imageFile, editSettings)}
                hasImage={!!originalImage}
              />
            } />
            <Route path="/jak-to-dziala" element={<HowItWorks />} />
            <Route path="/o-nas" element={<AboutUs />} />
            <Route path="/kontakt" element={<Contact />} />
          </Routes>
          <Footer />
          <ToastContainer position="bottom-right" autoClose={5000} />
        </div>
      </Router>
    </LanguageProvider>
  );
}

export default App;