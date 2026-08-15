import React from 'react';
import styles from './Footer.module.css';
import { useScrollReveal } from '../../hooks/useScrollReveal';

export const Footer: React.FC = () => {
  const { ref, isVisible } = useScrollReveal();

  return (
    <footer className={styles.footer}>
      <div
        ref={ref}
        className={`container ${styles.content} reveal-section ${isVisible ? 'is-visible' : ''}`}
      >
        <div>
          <h2 className={styles.brandTitle}>Bierbrunnen Baden-Baden</h2>
          <p className={styles.brandText}>
            Gutbürgerliche Küche, Flammkuchen, frisches Bier vom Fass und persönliche Gastfreundschaft im Herzen von Baden-Baden.
          </p>

          <div className={styles.socialRow}>
            <a
              href="https://www.instagram.com/bierbrunnen.badenbaden/"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.socialLink}
              aria-label="Bierbrunnen auf Instagram"
            >
              <svg className={styles.socialIcon} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
              </svg>
            </a>
            <a
              href="https://www.facebook.com/bierbrunnen.badenbaden/"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.socialLink}
              aria-label="Bierbrunnen auf Facebook"
            >
              <svg className={styles.socialIcon} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
              </svg>
            </a>
          </div>
        </div>

        <div>
          <h3 className={styles.columnTitle}>Navigation</h3>
          <ul className={styles.navList}>
            <li>
              <a href="#start" className={styles.navLink}>
                Start
              </a>
            </li>
            <li>
              <a href="#wochenmenu" className={styles.navLink}>
                Wochenmenü
              </a>
            </li>
            <li>
              <a href="#speisen-getraenke" className={styles.navLink}>
                Speisen & Getränke
              </a>
            </li>
            <li>
              <a href="#biergarten" className={styles.navLink}>
                Biergarten
              </a>
            </li>
            <li>
              <a href="#feiern-raeume" className={styles.navLink}>
                Feiern & Räume
              </a>
            </li>
            <li>
              <a href="#geschichten" className={styles.navLink}>
                Geschichten
              </a>
            </li>
            <li>
              <a href="#anfahrt" className={styles.navLink}>
                Anfahrt
              </a>
            </li>
            <li>
              <a href="#kontakt" className={styles.navLink}>
                Öffnungszeiten & Kontakt
              </a>
            </li>
          </ul>
        </div>

        <div>
          <h3 className={styles.columnTitle}>Kontakt</h3>
          <p style={{ fontSize: '0.875rem', color: 'rgba(251, 249, 244, 0.85)', lineHeight: '1.5' }}>
            Eisenbahnstr. 9<br />
            76530 Baden-Baden<br />
            Tel: <a href="tel:+4972213986186" style={{ color: 'var(--color-gold)', textDecoration: 'underline' }}>07221 / 39 86 186</a>
          </p>
        </div>
      </div>

      <div className={`container ${styles.bottom}`}>
        <p>Designentwurf 2026 – keine offizielle Website.</p>
        <div className={styles.legalLinks}>
          <a
            href="https://apartment-zorn.pages.dev/"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.partnerLink}
            aria-label="Apartments Zorn in neuem Tab öffnen"
          >
            Apartments Zorn
          </a>
          <a href="/impressum.html" className={styles.legalLink}>
            Impressum
          </a>
          <a href="/datenschutz.html" className={styles.legalLink}>
            Datenschutz
          </a>
        </div>
      </div>
    </footer>
  );
};
