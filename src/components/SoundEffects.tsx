
import React, { useEffect } from 'react';

declare global {
  interface Window {
    playSound?: (sound: string) => void;
  }
}

const SoundEffects = () => {
  useEffect(() => {
    // Create audio elements for each sound effect
    const bootSound = new Audio('/sounds/boot.mp3');
    const clickSound = new Audio('/sounds/click.mp3');
    const hoverSound = new Audio('/sounds/hover.mp3');
    const notificationSound = new Audio('/sounds/notification.mp3');
    const transitionSound = new Audio('/sounds/transition.mp3');
    
    // Make them load
    bootSound.load();
    clickSound.load();
    hoverSound.load();
    notificationSound.load();
    transitionSound.load();
    
    // Configure volume levels
    bootSound.volume = 0.4;
    clickSound.volume = 0.2;
    hoverSound.volume = 0.1;
    notificationSound.volume = 0.3;
    transitionSound.volume = 0.3;
    
    // Add playSound to window object
    window.playSound = (sound: string) => {
      switch (sound) {
        case 'boot':
          bootSound.currentTime = 0;
          bootSound.play().catch(e => console.log('Audio play error:', e));
          break;
        case 'click':
          clickSound.currentTime = 0;
          clickSound.play().catch(e => console.log('Audio play error:', e));
          break;
        case 'hover':
          hoverSound.currentTime = 0;
          hoverSound.play().catch(e => console.log('Audio play error:', e));
          break;
        case 'notification':
          notificationSound.currentTime = 0;
          notificationSound.play().catch(e => console.log('Audio play error:', e));
          break;
        case 'transition':
          transitionSound.currentTime = 0;
          transitionSound.play().catch(e => console.log('Audio play error:', e));
          break;
      }
    };
    
    // Play boot sound when component mounts
    bootSound.play().catch(e => console.log('Audio play error:', e));
    
    return () => {
      // Clean up function
      window.playSound = undefined;
    };
  }, []);

  return (
    <div className="hidden">
      {/* This component doesn't render anything visible */}
    </div>
  );
};

export default SoundEffects;
