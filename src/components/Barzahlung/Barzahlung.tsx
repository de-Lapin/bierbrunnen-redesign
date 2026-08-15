import React from 'react';
import styles from './Barzahlung.module.css';
import { useScrollReveal } from '../../hooks/useScrollReveal';

export const Barzahlung: React.FC = () => {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section className={styles.section} aria-label="Zahlungshinweis">
      <div className="container">
        <div
          ref={ref}
          className={`${styles.box} reveal-section ${isVisible ? 'is-visible' : ''}`}
        >
          <svg className={styles.icon} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true">
            <rect x="2" y="5" width="20" height="14" rx="2" />
            <line x1="2" y1="10" x2="22" y2="10" />
          </svg>
          <h2 className={styles.heading}>Hinweis zu Barzahlung</h2>
          <p className={styles.text}>
            „Wir bitten von Kartenzahlungen abzusehen und höflichst um Barzahlung, da durch die ohnehin steigenden Preise wir nicht noch die Kreditkartenfirmen bereichern wollen. Herzlichen Dank!“
          </p>
        </div>
      </div>
    </section>
  );
};
