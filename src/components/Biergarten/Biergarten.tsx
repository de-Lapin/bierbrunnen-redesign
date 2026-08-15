import React from 'react';
import styles from './Biergarten.module.css';
import { useScrollReveal } from '../../hooks/useScrollReveal';
import { useLightbox } from '../Lightbox/LightboxContext';

export const Biergarten: React.FC = () => {
  const { ref, isVisible } = useScrollReveal();
  const { openLightbox } = useLightbox();

  const biergartenSrc = '/images/biergarten-main.jpg';
  const biergartenAlt = 'Der begrünte Biergarten des Restaurants Bierbrunnen in Baden-Baden mit Tischen und Sonnenschirmen';

  return (
    <section id="biergarten" className={styles.section} aria-label="Unser Biergarten">
      <div
        ref={ref}
        className={`container ${styles.grid} reveal-section ${isVisible ? 'is-visible' : ''}`}
      >
        <div className={styles.textColumn}>
          <span className={styles.eyebrow}>UNTER FREIEM HIMMEL</span>
          <h2 className={styles.heading}>Unser Biergarten</h2>
          <p className={styles.text}>
            Bis zu 80 Gäste finden in unserem Außenbereich Platz – unter alten Bäumen und in entspannter Atmosphäre.
          </p>
        </div>

        <div className={styles.imageColumn}>
          <img
            src={biergartenSrc}
            alt={biergartenAlt}
            className={`${styles.image} interactive-image`}
            onClick={() => openLightbox(biergartenSrc, biergartenAlt)}
            title="Klicken zum Vergrößern"
          />
        </div>
      </div>
    </section>
  );
};
