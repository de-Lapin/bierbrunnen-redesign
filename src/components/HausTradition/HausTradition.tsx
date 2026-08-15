import React from 'react';
import styles from './HausTradition.module.css';
import { useScrollReveal } from '../../hooks/useScrollReveal';

export const HausTradition: React.FC = () => {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section className={styles.section} aria-label="Haus und Tradition">
      <div
        ref={ref}
        className={`container reveal-section ${isVisible ? 'is-visible' : ''}`}
      >
        <div className={styles.header}>
          <span className={styles.eyebrow}>SEIT 1920</span>
          <h2 className={styles.heading}>Haus & Tradition</h2>
        </div>

        <div className={styles.grid}>
          {/* Heritage Image */}
          <div className={styles.imageCard}>
            <img
              src="/images/tradition-seit-1920.jpg"
              alt="Bierbrunnen Baden-Baden Tradition seit 1920"
              className={styles.image}
            />
          </div>

          {/* Heritage Story */}
          <div className={styles.textCard}>
            <h3 className={styles.cardTitle}>Eine Adresse mit Geschichte</h3>
            <p className={styles.cardText}>
              Das Restaurant Bierbrunnen in der Eisenbahnstraße steht seit vielen Jahrzehnten für bodenständige Gastronomie, frisch gezapftes Bier und gemütliches Beisammensein im Herzen von Baden-Baden.
            </p>
            <p className={styles.captionText}>„Eine Adresse mit Charakter.“</p>
          </div>
        </div>
      </div>
    </section>
  );
};
