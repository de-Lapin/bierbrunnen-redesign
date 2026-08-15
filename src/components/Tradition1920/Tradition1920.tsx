import React from 'react';
import styles from './Tradition1920.module.css';

export const Tradition1920: React.FC = () => {
  return (
    <section className={styles.section} aria-label="Tradition seit 1920">
      <div className={styles.containerRefined}>
        <div className={styles.wrapper}>
          <img
            src="/images/tradition-seit-1920.jpg"
            alt="Bierbrunnen Baden-Baden Tradition seit 1920"
            className={styles.image}
          />
        </div>
        <p className={styles.captionText}>Eine Adresse mit Charakter.</p>
      </div>
    </section>
  );
};
