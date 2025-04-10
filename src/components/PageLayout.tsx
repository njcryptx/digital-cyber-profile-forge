
import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Navigation from './Navigation';
import SoundEffects from './SoundEffects';

interface PageLayoutProps {
  children: React.ReactNode;
}

const PageLayout: React.FC<PageLayoutProps> = ({ children }) => {
  const location = useLocation();
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [currentChildren, setCurrentChildren] = useState(children);

  useEffect(() => {
    if (location.pathname) {
      setIsTransitioning(true);
      if (window.playSound) window.playSound('transition');
      
      setTimeout(() => {
        setCurrentChildren(children);
        setIsTransitioning(false);
      }, 300);
    }
  }, [location.pathname, children]);

  return (
    <div className="min-h-screen flex flex-col bg-cyber-dark">
      <div className="flex flex-1">
        <Navigation currentPath={location.pathname} />
        
        <main className="flex-1 ml-20 md:ml-64 relative">
          <div className="absolute inset-0 overflow-y-auto">
            <div 
              className={`transition-all duration-300 min-h-screen ${
                isTransitioning 
                ? 'opacity-0 translate-x-20 scale-95' 
                : 'opacity-100 translate-x-0 scale-100'
              }`}
            >
              {currentChildren}
            </div>
          </div>
        </main>
      </div>
      
      <SoundEffects />
      
      {/* HUD Overlay Elements */}
      <div className="fixed top-4 right-4 text-cyber-green text-xs font-cyber hidden md:block">
        <div className="flex items-center">
          <div className="w-2 h-2 rounded-full bg-cyber-green mr-2 animate-pulse"></div>
          <span>{new Date().toLocaleDateString()}</span>
        </div>
      </div>
      
      {/* Bottom HUD bar */}
      <div className="fixed bottom-0 left-0 right-0 h-1 bg-cyber-dark">
        <div className="h-full w-1/3 bg-cyber-purple animate-pulse"></div>
      </div>
    </div>
  );
};

export default PageLayout;
