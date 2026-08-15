import React from 'react';
import styles from './Anfahrt.module.css';
import { useScrollReveal } from '../../hooks/useScrollReveal';

export const Anfahrt: React.FC = () => {
  const { ref, isVisible } = useScrollReveal();

  const googleMapsUrl =
    'https://www.google.com/maps/search/?api=1&query=Bierbrunnen+Eisenbahnstraße+9+76530+Baden-Baden';
  const mapsEmbedUrl =
    'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2629.814522941014!2d8.2323868!3d48.7650392!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47971d87178a9c2b%3A0x6b2e1b1b1b1b1b1b!2sEisenbahnstra%C3%9Fe%209%2C%2076530%20Baden-Baden!5e0!3m2!1sde!2sde!4v1700000000000';

  return (
    <section id="anfahrt" className={styles.section} aria-label="Anfahrt und Lage">
      <div
        ref={ref}
        className={`container reveal-section ${isVisible ? 'is-visible' : ''}`}
      >
        <div className={styles.grid}>
          {/* Left Text Column */}
          <div className={styles.textColumn}>
            <span className={styles.eyebrow}>ANFAHRT</span>
            <h2 className={styles.heading}>Mitten in Baden-Baden. Einfach zu finden.</h2>

            <div className={styles.addressCard}>
              <h3 className={styles.restaurantName}>Bierbrunnen Baden-Baden</h3>
              <p className={styles.addressText}>
                Eisenbahnstraße 9<br />
                76530 Baden-Baden
              </p>
              <p className={styles.noteText}>
                Zentral in der Baden-Badener Innenstadt gelegen – nur wenige Minuten vom Festspielhaus und der Fußgängerzone entfernt.
              </p>
            </div>

            <a
              href={googleMapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.mapsBtn}
              aria-label="Bierbrunnen Route in Google Maps öffnen (öffnet in neuem Tab)"
            >
              <span>🗺️</span>
              <span>Route in Google Maps öffnen</span>
            </a>
          </div>

          {/* Right Map Column */}
          <div className={styles.mapColumn}>
            <div className={styles.mapFrame}>
              <iframe
                src={mapsEmbedUrl}
                className={styles.mapIframe}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Google Maps – Bierbrunnen Baden-Baden"
                aria-label="Interaktive Karte von Bierbrunnen Baden-Baden"
              />
            </div>
          </div>
        </div>

        {/* Editorial Cross-link to Apartments Zorn */}
        <div className={styles.accommodationBox}>
          <div className={styles.accContent}>
            <h4 className={styles.accQuestion}>Noch auf der Suche nach einer Unterkunft in Baden-Baden?</h4>
            <p className={styles.accSubtext}>Entdecken Sie die Apartments Zorn.</p>
          </div>
          <a
            href="https://apartment-zorn.pages.dev/"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.accCta}
            aria-label="Zu Apartments Zorn öffnen (öffnet in neuem Tab)"
          >
            <span>Zu Apartments Zorn</span>
            <span aria-hidden="true">→</span>
          </a>
        </div>
      </div>
    </section>
  );
};
