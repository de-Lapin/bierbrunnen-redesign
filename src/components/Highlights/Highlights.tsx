import React from 'react';
import styles from './Highlights.module.css';
import { useScrollReveal } from '../../hooks/useScrollReveal';

export const Highlights: React.FC = () => {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section className={styles.section} aria-label="Restaurant Highlights">
      <div
        ref={ref}
        className={`container ${styles.strip} reveal-section ${isVisible ? 'is-visible' : ''}`}
      >
        <div className={styles.item}>
          <svg className={styles.icon} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true">
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v18m9-9H3" />
            <circle cx="12" cy="12" r="9" />
          </svg>
          <span className={styles.label}>Große Flammkuchen-Auswahl</span>
        </div>

        <div className={styles.item}>
          <svg className={styles.icon} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true">
            <path strokeLinecap="round" strokeLinejoin="round" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
          </svg>
          <span className={styles.label}>8 frisch gezapfte Biere</span>
        </div>

        <div className={styles.item}>
          <svg className={styles.icon} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true">
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
          </svg>
          <span className={styles.label}>Gemütlicher Biergarten</span>
        </div>

        <div className={styles.item}>
          <svg className={styles.icon} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true">
            <path strokeLinecap="round" strokeLinejoin="round" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
          </svg>
          <span className={styles.label}>Feiern & Gruppen</span>
        </div>
      </div>
    </section>
  );
};
