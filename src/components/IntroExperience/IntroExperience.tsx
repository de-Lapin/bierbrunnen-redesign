import React, { useState, useEffect } from 'react';
import styles from './IntroExperience.module.css';

interface IntroExperienceProps {
  onStateChange?: (state: 'closed' | 'entering' | 'done') => void;
}

export const IntroExperience: React.FC<IntroExperienceProps> = ({ onStateChange }) => {
  const [isDone, setIsDone] = useState(false);
  const [hasClicked, setHasClicked] = useState(false);
  const [isOpening, setIsOpening] = useState(false);
  const [isFadingOut, setIsFadingOut] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    checkMobile();
    window.addEventListener('resize', checkMobile);

    // Check if intro has already been completed in this session
    const hasSeenIntro = sessionStorage.getItem('bierbrunnen_intro_seen');
    if (hasSeenIntro) {
      setIsDone(true);
      if (onStateChange) onStateChange('done');
    }

    // Respect prefers-reduced-motion
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      sessionStorage.setItem('bierbrunnen_intro_seen', 'true');
      setIsDone(true);
      if (onStateChange) onStateChange('done');
    }

    return () => {
      window.removeEventListener('resize', checkMobile);
    };
  }, [onStateChange]);

  const handleStageClick = () => {
    if (hasClicked) return;

    setHasClicked(true);
    setIsOpening(true);

    if (onStateChange) {
      onStateChange('entering');
    }

    const gateTravelDuration = isMobile ? 3400 : 4000;

    // Immediately after gates travel completely off-screen, remove overlay cleanly
    setTimeout(() => {
      sessionStorage.setItem('bierbrunnen_intro_seen', 'true');
      setIsDone(true);
      if (onStateChange) onStateChange('done');
    }, gateTravelDuration);
  };

  const skipIntro = (e: React.MouseEvent) => {
    e.stopPropagation();
    setIsFadingOut(true);
    if (onStateChange) {
      onStateChange('entering');
    }
    setTimeout(() => {
      sessionStorage.setItem('bierbrunnen_intro_seen', 'true');
      setIsDone(true);
      if (onStateChange) onStateChange('done');
    }, 300);
  };

  if (isDone) {
    return null;
  }

  // Use mobile webp asset up to 768px, and approved desktop closed gates asset above 768px
  const desktopGateImgSrc = '/images/intro-bb-gates-closed.jpg';
  const mobileGateImgSrc = '/images/intro-bb-gates-mobile.webp';
  const gateImgSrc = isMobile ? mobileGateImgSrc : desktopGateImgSrc;

  return (
    <div
      className={`${styles.overlay} ${isFadingOut ? styles.isFadingOut : ''}`}
      onClick={handleStageClick}
      aria-label="Willkommens-Entrée Bierbrunnen Baden-Baden"
      role="region"
    >
      <button className={styles.skipBtn} onClick={skipIntro} aria-label="Intro überspringen">
        Überspringen
      </button>

      <div className={`${styles.gatesContainer} ${isOpening ? styles.isOpening : ''}`}>
        <div className={styles.leftGate}>
          <img src={gateImgSrc} alt="Geschlossenes BB Entrée Tor Links" className={styles.gateImgLeft} />
        </div>
        <div className={styles.rightGate}>
          <img src={gateImgSrc} alt="Geschlossenes BB Entrée Tor Rechts" className={styles.gateImgRight} />
        </div>
      </div>

      {!hasClicked && (
        <p className={`${styles.instructionText} ${hasClicked ? styles.fadeOut : ''}`}>
          {isMobile ? 'Zum Eintreten tippen' : 'Zum Eintreten klicken'}
        </p>
      )}
    </div>
  );
};
