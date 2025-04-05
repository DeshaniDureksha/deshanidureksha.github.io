// SplashScreen.js
import React, { useEffect, useState } from 'react';
import '../styles/SplashScreen.css';

const SplashScreen = ({ finishLoading }) => {
  const [showLogo, setShowLogo] = useState(false);
  
  useEffect(() => {
    // Show logo with delay
    const logoTimer = setTimeout(() => {
      setShowLogo(true);
    }, 300);
    
    // Finish loading after animation
    const loadingTimer = setTimeout(() => {
      finishLoading();
    }, 2700);
    
    return () => {
      clearTimeout(logoTimer);
      clearTimeout(loadingTimer);
    };
  }, [finishLoading]);

  return (
    <div className="splash-screen">
      <div className={`logo-container ${showLogo ? 'show' : ''}`}>
        <div className="logo">
          <span className="logo-letter">D</span>
          <span className="logo-letter">R</span>
        </div>
        <div className="loading-bar">
          <div className="progress"></div>
        </div>
      </div>
    </div>
  );
};

export default SplashScreen;