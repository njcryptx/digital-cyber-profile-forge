
import React, { useEffect, useRef, useState } from 'react';

type SoundType = 'click' | 'hover' | 'transition' | 'notification' | 'boot';

const SoundEffects = () => {
  const [enabled, setEnabled] = useState(false);
  const soundsRef = useRef<Record<SoundType, HTMLAudioElement | null>>({
    click: null,
    hover: null,
    transition: null,
    notification: null,
    boot: null
  });

  useEffect(() => {
    // Initialize sounds
    soundsRef.current = {
      click: new Audio('/sounds/click.mp3'),
      hover: new Audio('/sounds/hover.mp3'),
      transition: new Audio('/sounds/transition.mp3'),
      notification: new Audio('/sounds/notification.mp3'),
      boot: new Audio('/sounds/boot.mp3')
    };

    // Preload sounds
    Object.values(soundsRef.current).forEach(audio => {
      if (audio) {
        audio.load();
        audio.volume = 0.2;
      }
    });

    // Create global sound function
    window.playSound = (type: SoundType) => {
      if (enabled && soundsRef.current[type]) {
        soundsRef.current[type]?.play().catch(e => console.log('Sound play failed:', e));
      }
    };

    return () => {
      // Cleanup
      Object.values(soundsRef.current).forEach(audio => {
        if (audio) {
          audio.pause();
          audio.src = '';
        }
      });
      delete window.playSound;
    };
  }, [enabled]);

  return (
    <div className="fixed bottom-4 right-4 z-50">
      <button 
        onClick={() => setEnabled(!enabled)}
        className="cyber-button text-sm px-3 py-1"
        onMouseEnter={() => enabled && window.playSound('hover')}
        onClick={() => {
          setEnabled(!enabled);
          if (!enabled) {
            setTimeout(() => window.playSound('boot'), 100);
          }
        }}
      >
        {enabled ? '🔊 Sound: ON' : '🔇 Sound: OFF'}
      </button>
    </div>
  );
};

// Extend Window interface to include our sound function
declare global {
  interface Window {
    playSound: (type: SoundType) => void;
  }
}

export default SoundEffects;
