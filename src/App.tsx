import React, { useState, useEffect } from 'react';
import { MenuData } from './types';
import { loadMenuData, saveMenuData } from './utils/storage';
import { WelcomeScreen } from './components/WelcomeScreen';
import { MenuBuilder } from './components/MenuBuilder';
import { MenuPreview } from './components/MenuPreview';
import { Footer } from './components/Footer';

function App() {
  const [menuData, setMenuData] = useState<MenuData>(loadMenuData());
  const [currentView, setCurrentView] = useState<'welcome' | 'builder' | 'preview'>('welcome');

  useEffect(() => {
    // Load existing data on mount
    const existing = loadMenuData();
    if (existing.items.length > 0) {
      setCurrentView('builder');
    }
  }, []);

  useEffect(() => {
    saveMenuData(menuData);
  }, [menuData]);

  const handleUpdateMenu = (newData: MenuData) => {
    setMenuData(newData);
  };

  const handleStart = () => {
    setCurrentView('builder');
  };

  const handleShowPreview = () => {
    setCurrentView('preview');
  };

  const handleClosePreview = () => {
    setCurrentView('builder');
  };

  const handleBackToHome = () => {
    setCurrentView('welcome');
  };

  return (
    <>
      {/* Google Fonts Import */}
      <style>
        {`@import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;600;700&family=Inter:wght@300;400;500;600&display=swap');`}
      </style>
      
      {currentView === 'welcome' && (
        <>
          <WelcomeScreen onStart={handleStart} />
          <Footer />
        </>
      )}

      {currentView === 'builder' && (
        <>
          <MenuBuilder
            menuData={menuData}
            onUpdateMenu={handleUpdateMenu}
            onPreview={handleShowPreview}
            onBackToHome={handleBackToHome}
          />
          <Footer />
        </>
      )}

      {currentView === 'preview' && (
        <MenuPreview
          menuData={menuData}
          onClose={handleClosePreview}
          onBackToHome={handleBackToHome}
        />
      )}
    </>
  );
}

export default App;