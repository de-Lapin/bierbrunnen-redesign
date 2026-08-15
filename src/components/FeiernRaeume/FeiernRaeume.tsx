import React from 'react';
import styles from './FeiernRaeume.module.css';
import { useScrollReveal } from '../../hooks/useScrollReveal';
import { useLightbox } from '../Lightbox/LightboxContext';

export const FeiernRaeume: React.FC = () => {
  const { ref, isVisible } = useScrollReveal();
  const { openLightbox } = useLightbox();

  const interiorSrc = '/images/feiern-raum.jpg';
  const interiorAlt = 'Heller Gastraum im Bierbrunnen Baden-Baden mit Fenstern, Kronleuchter und historischer Holzarchitektur';

  return (
    <section id="feiern-raeume" className={styles.section} aria-label="Feiern und Gruppen">
      <div
        ref={ref}
        className={`container ${styles.grid} reveal-section ${isVisible ? 'is-visible' : ''}`}
      >
        <div className={styles.content}>
          <span className={styles.eyebrow}>PERSÖNLICH FEIERN</span>
          <h2 className={styles.heading}>Feiern & Gruppen</h2>

          <ul className={styles.bulletsList}>
            <li className={styles.bulletItem}>
              <span className={styles.checkIcon}>✓</span>
              <span>45 Plätze im Innenbereich</span>
            </li>
            <li className={styles.bulletItem}>
              <span className={styles.checkIcon}>✓</span>
              <span>Separater Raum</span>
            </li>
            <li className={styles.bulletItem}>
              <span className={styles.checkIcon}>✓</span>
              <span>Geburtstage und andere Feiern</span>
            </li>
            <li className={styles.bulletItem}>
              <span className={styles.checkIcon}>✓</span>
              <span>Veranstaltungen und Feiern sind nach telefonischer Absprache auch außerhalb der regulären Öffnungszeiten möglich.</span>
            </li>
          </ul>

          <a href="tel:+4972213986186" className={styles.ctaBtn}>
            <span>📞</span>
            <span>Feier telefonisch besprechen</span>
          </a>
        </div>

        <div className={styles.imageWrapper}>
          <img
            src={interiorSrc}
            alt={interiorAlt}
            className={`${styles.image} interactive-image`}
            onClick={() => openLightbox(interiorSrc, interiorAlt)}
            title="Klicken zum Vergrößern"
          />
        </div>
      </div>
    </section>
  );
};
