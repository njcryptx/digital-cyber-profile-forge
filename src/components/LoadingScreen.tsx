
import React, { useEffect, useState } from 'react';

interface LoadingScreenProps {
  onComplete: () => void;
}

const LoadingScreen: React.FC<LoadingScreenProps> = ({ onComplete }) => {
  const [progress, setProgress] = useState(0);
  const [statusText, setStatusText] = useState('Initializing security protocols...');

  useEffect(() => {
    const texts = [
      'Initializing security protocols...',
      'Establishing secure connection...',
      'Decrypting user profile...',
      'Scanning for vulnerabilities...',
      'Building interface...',
      'Loading complete. Welcome!'
    ];

    const loadingInterval = setInterval(() => {
      setProgress((prev) => {
        const newProgress = prev + Math.random() * 10;
        
        if (newProgress >= 100) {
          clearInterval(loadingInterval);
          setStatusText('Access granted. Entering system...');
          
          setTimeout(() => {
            onComplete();
            if (window.playSound) window.playSound('boot');
          }, 500);
          
          return 100;
        }
        
        // Update status text based on progress
        const textIndex = Math.min(
          Math.floor((newProgress / 100) * texts.length),
          texts.length - 1
        );
        setStatusText(texts[textIndex]);
        
        return newProgress;
      });
    }, 150);

    return () => clearInterval(loadingInterval);
  }, [onComplete]);

  return (
    <div className="fixed inset-0 bg-cyber-dark flex flex-col items-center justify-center z-50 transition-opacity duration-500">
      <div className="w-full max-w-md mx-auto px-4">
        <h1 className="font-futura text-2xl mb-2 text-cyber-blue">System Access</h1>
        
        <div className="cyber-panel">
          <p className="text-sm mb-6 text-cyber-light flex items-center">
            <span className="inline-block w-3 h-3 rounded-full bg-cyber-green mr-2 animate-pulse"></span>
            {statusText}
          </p>
          
          <div className="w-full h-2 bg-cyber-dark mb-2 relative overflow-hidden">
            <div 
              className="h-full bg-cyber-purple transition-all duration-200 relative"
              style={{ width: `${progress}%` }}
            >
              <div className="absolute inset-0 bg-cyber-blue opacity-50 animate-pulse"></div>
            </div>
          </div>
          
          <div className="flex justify-between text-xs text-cyber-light/70">
            <span>PROGRESS: {Math.round(progress)}%</span>
            <span>{Math.floor(Date.now() / 1000)}</span>
          </div>
        </div>
        
        <div className="mt-8 text-xs text-cyber-light/50 font-cyber">
          <p className="animate-text-flicker">[SYSTEM]: Validating access credentials...</p>
        </div>
      </div>
    </div>
  );
};

export default LoadingScreen;
