import React from 'react';
import styles from './Hero.module.css';
import { useScrollReveal } from '../../hooks/useScrollReveal';
import { useLightbox } from '../Lightbox/LightboxContext';

export const Hero: React.FC = () => {
  const { ref, isVisible } = useScrollReveal();
  const { openLightbox } = useLightbox();

  const heroBuildingSrc = '/images/hero-gebaeude.jpg';
  const heroBuildingAlt =
    'Historisches Gebäude und Eingangsbereich des Restaurants Bierbrunnen in Baden-Baden mit Treppe, Fassade und Dach';

  const heritageSrc = '/images/seit-1920-original.jpg';
  const heritageAlt = 'Bierbrunnen Baden-Baden – Seit 1920';

  return (
    <section id="start" className={styles.section} aria-label="Willkommen">
      <div
        ref={ref}
        className={`${styles.heroOuter} reveal-section ${isVisible ? 'is-visible' : ''}`}
      >
        {/* Authentic Original Seit 1920 Heritage Image */}
        <div className={styles.heritageBanner} data-heritage-banner>
          <img
            src={heritageSrc}
            alt={heritageAlt}
            data-heritage-image
            className={`${styles.heritageImage} interactive-image`}
            onClick={() => openLightbox(heritageSrc, heritageAlt)}
            title="Klicken zum Vergrößern"
          />
        </div>

        {/* Split Hero Composition (44% Text / 56% Building) */}
        <div className={styles.grid} data-hero-grid>
          <div className={styles.textCard}>
            <span className={styles.eyebrow}>BIERBRUNNEN BADEN-BADEN</span>
            <h1 className={styles.headline}>Gemütlich essen. Gemeinsam genießen.</h1>
            <p className={styles.description}>
              Flammkuchen, frisch gezapftes Bier und persönliche Gastfreundschaft in entspannter Atmosphäre.
            </p>
            <div className={styles.ctaGroup}>
              <a href="tel:+4972213986186" className={styles.btnPrimary}>
                <span>📞</span>
                <span>Jetzt anrufen</span>
              </a>
              <a href="#wochenmenu" className={styles.btnSecondary}>
                Wochenmenü ansehen
              </a>
            </div>
          </div>

          <div className={styles.mainImageFrame}>
            <img
              src={heroBuildingSrc}
              alt={heroBuildingAlt}
              className={`${styles.mainImage} interactive-image`}
              onClick={() => openLightbox(heroBuildingSrc, heroBuildingAlt)}
              title="Klicken zum Vergrößern"
            />
          </div>
        </div>
      </div>
    </section>
  );
};
