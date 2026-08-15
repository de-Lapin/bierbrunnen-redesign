import React from 'react';
import styles from './SpeisenGetraenke.module.css';
import { useScrollReveal } from '../../hooks/useScrollReveal';
import { useLightbox } from '../Lightbox/LightboxContext';

export const SpeisenGetraenke: React.FC = () => {
  const { ref, isVisible } = useScrollReveal();
  const { openLightbox } = useLightbox();

  const flammkuchenSrc = '/images/flammkuchen.jpg';
  const flammkuchenAlt = 'Frisch gebackener knuspriger Flammkuchen im Bierbrunnen Baden-Baden';

  return (
    <section id="speisen-getraenke" className={styles.section} aria-label="Speisen und Getränke">
      <div
        ref={ref}
        className={`container ${styles.grid} reveal-section ${isVisible ? 'is-visible' : ''}`}
      >
        <div className={styles.imageWrapper}>
          <img
            src={flammkuchenSrc}
            alt={flammkuchenAlt}
            className={`${styles.image} interactive-image`}
            onClick={() => openLightbox(flammkuchenSrc, flammkuchenAlt)}
            title="Klicken zum Vergrößern"
          />
        </div>

        <div className={styles.content}>
          <span className={styles.eyebrow}>HERZHAFT & SÜSS</span>
          <h2 className={styles.heading}>Flammkuchen & Frisches Bier</h2>

          <ul className={styles.categoriesList}>
            <li className={styles.categoryItem}>
              <span className={styles.bullet} aria-hidden="true" />
              <span>Große Auswahl an herzhaften Flammkuchen</span>
            </li>
            <li className={styles.categoryItem}>
              <span className={styles.bullet} aria-hidden="true" />
              <span>Süße Flammkuchen</span>
            </li>
            <li className={styles.categoryItem}>
              <span className={styles.bullet} aria-hidden="true" />
              <span>Hausgemachte Salate, darunter der Teufelssalat</span>
            </li>
            <li className={styles.categoryItem}>
              <span className={styles.bullet} aria-hidden="true" />
              <span>8 frisch gezapfte Biere</span>
            </li>
            <li className={styles.categoryItem}>
              <span className={styles.bullet} aria-hidden="true" />
              <span>6 Flaschenbiere</span>
            </li>
            <li className={styles.categoryItem}>
              <span className={styles.bullet} aria-hidden="true" />
              <span>Kleine Weinauswahl</span>
            </li>
            <li className={styles.categoryItem}>
              <span className={styles.bullet} aria-hidden="true" />
              <span>Alkoholfreie Getränke</span>
            </li>
          </ul>

          <div className={styles.noticeBox}>
            <p className={styles.noticeText}>
              Weitere Informationen zu unserem Angebot erhalten Sie gerne telefonisch oder direkt bei uns vor Ort.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
