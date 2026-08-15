import React from 'react';
import styles from './HoursContact.module.css';
import { useScrollReveal } from '../../hooks/useScrollReveal';

export const HoursContact: React.FC = () => {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section id="kontakt" className={styles.section} aria-label="Öffnungszeiten und Kontakt">
      <div className="container">
        <div
          ref={ref}
          className={`${styles.integratedBox} reveal-section ${isVisible ? 'is-visible' : ''}`}
        >
          {/* Left Column: Opening Hours */}
          <div className={`${styles.column} ${styles.leftColumn}`}>
            <h2 className={styles.title}>
              <svg className={styles.titleIcon} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                <circle cx="12" cy="12" r="10" />
                <polyline points="12 6 12 12 16 14" />
              </svg>
              <span>Öffnungszeiten</span>
            </h2>

            <ul className={styles.hoursList}>
              <li className={styles.hoursItem}>
                <span className={styles.dayLabel}>Montag bis Freitag</span>
                <span className={styles.timeLabel}>ab 16:00 Uhr</span>
              </li>
              <li className={styles.hoursItem}>
                <span className={styles.dayLabel}>Samstag</span>
                <span className={styles.closedLabel}>geschlossen</span>
              </li>
              <li className={styles.hoursItem}>
                <span className={styles.dayLabel}>Sonn- und Feiertage</span>
                <span className={styles.timeLabel}>ab 11:30 Uhr</span>
              </li>
            </ul>
          </div>

          {/* Right Column: Contact, Social Media & Telephone CTA */}
          <div className={styles.column}>
            <h2 className={styles.title}>
              <svg className={styles.titleIcon} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                <circle cx="12" cy="10" r="3" />
              </svg>
              <span>Kontakt & Reservierung</span>
            </h2>

            <div className={styles.addressBlock}>
              <p><strong>Bierbrunnen Baden-Baden</strong></p>
              <p>Eisenbahnstr. 9, 76530 Baden-Baden</p>
              <p style={{ marginTop: '0.35rem' }}>
                E-Mail: <a href="mailto:tanja.zorn@bierbrunnen-baden-baden.de" className={styles.emailLink}>tanja.zorn@bierbrunnen-baden-baden.de</a>
              </p>
            </div>

            {/* Social Media Outline Links */}
            <div className={styles.socialRow}>
              <span className={styles.socialLabel}>Folgen Sie uns:</span>
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

            <div className={styles.ownerPhraseBox}>
              <p className={styles.ownerPhrase}>
                „Sie wollen persönlich mit uns sprechen? – Nichts lieber als das!“
              </p>
            </div>

            <div>
              <p style={{ fontSize: '0.85rem', color: 'rgba(251, 249, 244, 0.75)', marginBottom: '0.2rem' }}>
                Telefonische Reservierung:
              </p>
              <p className={styles.phoneDisplay}>07221 / 39 86 186</p>
            </div>

            <a href="tel:+4972213986186" className={styles.phoneBtn}>
              <svg className={styles.btnIcon} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
              </svg>
              <span>Jetzt anrufen</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
