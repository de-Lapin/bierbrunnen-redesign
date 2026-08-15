import React from 'react';
import styles from './Impressionen.module.css';
import { useScrollReveal } from '../../hooks/useScrollReveal';
import { useLightbox } from '../Lightbox/LightboxContext';

export const Impressionen: React.FC = () => {
  const { ref, isVisible } = useScrollReveal();
  const { openLightbox } = useLightbox();

  // Render exactly two authentic location photographs
  const photos = [
    {
      src: '/images/impression-terrasse.jpg',
      alt: 'Sonnenterrasse des Restaurants Bierbrunnen in Baden-Baden',
    },
    {
      src: '/images/impression-garten.jpg',
      alt: 'Begrünter Gartenbereich im Bierbrunnen Baden-Baden',
    },
  ];

  return (
    <section className={styles.section} aria-label="Impressionen">
      <div
        ref={ref}
        className={`container reveal-section ${isVisible ? 'is-visible' : ''}`}
      >
        <div className={styles.header}>
          <span className={styles.eyebrow}>ATMOSPHÄRE</span>
          <h2 className={styles.heading}>Impressionen</h2>
        </div>

        <div className={styles.galleryGrid}>
          {photos.map((photo, index) => (
            <div key={index} className={styles.photoCard}>
              <img
                src={photo.src}
                alt={photo.alt}
                className={`${styles.image} interactive-image`}
                onClick={() => openLightbox(photo.src, photo.alt)}
                title="Klicken zum Vergrößern"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
