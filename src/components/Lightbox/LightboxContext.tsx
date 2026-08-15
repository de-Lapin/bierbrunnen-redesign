import React, { createContext, useContext, useState, useEffect } from 'react';
import type { ReactNode } from 'react';
import styles from './Lightbox.module.css';

interface LightboxItem {
  src: string;
  alt: string;
}

interface LightboxContextType {
  openLightbox: (src: string, alt: string) => void;
  closeLightbox: () => void;
}

const LightboxContext = createContext<LightboxContextType | undefined>(undefined);

export const LightboxProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [activeItem, setActiveItem] = useState<LightboxItem | null>(null);
  const [triggerEl, setTriggerEl] = useState<HTMLElement | null>(null);

  const openLightbox = (src: string, alt: string) => {
    setTriggerEl(document.activeElement as HTMLElement);
    setActiveItem({ src, alt });
  };

  const closeLightbox = () => {
    setActiveItem(null);
    if (triggerEl) {
      triggerEl.focus();
    }
  };

  // Lock body scroll when open
  useEffect(() => {
    if (activeItem) {
      document.body.classList.add('lightbox-open');
    } else {
      document.body.classList.remove('lightbox-open');
    }
    return () => {
      document.body.classList.remove('lightbox-open');
    };
  }, [activeItem]);

  // Handle Escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && activeItem) {
        closeLightbox();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [activeItem]);

  return (
    <LightboxContext.Provider value={{ openLightbox, closeLightbox }}>
      {children}

      <div
        className={`${styles.overlay} ${activeItem ? styles.isOpen : ''}`}
        onClick={closeLightbox}
        role="dialog"
        aria-modal="true"
        aria-label="Vergrößerte Bildansicht"
      >
        {activeItem && (
          <div className={styles.modal} onClick={(e) => e.stopPropagation()}>
            <button
              className={styles.closeBtn}
              onClick={closeLightbox}
              aria-label="Bildansicht schließen"
            >
              ✕
            </button>
            <img
              src={activeItem.src}
              alt={activeItem.alt}
              className={styles.image}
              onClick={closeLightbox}
            />
            {activeItem.alt && <p className={styles.caption}>{activeItem.alt}</p>}
          </div>
        )}
      </div>
    </LightboxContext.Provider>
  );
};

export const useLightbox = () => {
  const context = useContext(LightboxContext);
  if (!context) {
    throw new Error('useLightbox must be used within a LightboxProvider');
  }
  return context;
};
