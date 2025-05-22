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

  const handleImageUpload = async (file) => {
    if (!file) return;

    const validTypes = ['image/jpeg', 'image/png', 'image/jpg'];
    if (!validTypes.includes(file.type)) {
      toast.error('Proszę wybrać plik w formacie JPG lub PNG');
      return;
    }

    // Wyświetl oryginalny obraz
    setOriginalImage(URL.createObjectURL(file));
    setProcessedImage(null);
    setIsLoading(true);

    // Przygotuj dane do wysłania
    const formData = new FormData();
    formData.append('image', file);

    try {
      // Wysyłanie na backend
      const response = await fetch('http://twoj-backend.com/api/remove-background', {
        method: 'POST',
        body: formData,
      });

      if (!response.ok) {
        throw new Error('Wystąpił problem z przetwarzaniem obrazu');
      }

      const data = await response.blob();
      setProcessedImage(URL.createObjectURL(data));
      toast.success('Tło zostało pomyślnie usunięte!');
    } catch (error) {
      toast.error(error.message || 'Wystąpił błąd podczas przetwarzania obrazu');
      console.error('Error:', error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleDownload = () => {
    if (processedImage) {
      const link = document.createElement('a');
      link.href = processedImage;
      link.download = 'obraz-bez-tla.png';
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
