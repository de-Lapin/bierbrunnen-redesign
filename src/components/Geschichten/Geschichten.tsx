import React from 'react';
import styles from './Geschichten.module.css';
import { useScrollReveal } from '../../hooks/useScrollReveal';
import { useLightbox } from '../Lightbox/LightboxContext';

export const Geschichten: React.FC = () => {
  const { ref, isVisible } = useScrollReveal();
  const { openLightbox } = useLightbox();

  const treeImgSrc = '/images/impression-baum.jpg';
  const treeImgAlt = 'Der alte, schatten spendende Baum im Biergarten des Bierbrunnen Baden-Baden';

  return (
    <section id="geschichten" className={styles.section} aria-label="Geschichten aus dem Bierbrunnen">
      <div
        ref={ref}
        className={`container reveal-section ${isVisible ? 'is-visible' : ''}`}
      >
        <div className={styles.header}>
          <span className={styles.eyebrow}>TRADITION & LEGENDE</span>
          <h2 className={styles.heading}>Geschichten aus dem Bierbrunnen</h2>
          <p className={styles.subheading}>Ein Haus mit Geschichten.</p>
        </div>

        <div className={styles.storiesList}>
          {/* Story 01 — Der Baum und der Blitz */}
          <article className={styles.storyCard}>
            <div className={styles.storyGrid}>
              <div className={styles.storyImageWrapper}>
                <img
                  src={treeImgSrc}
                  alt={treeImgAlt}
                  className={`${styles.storyImage} interactive-image`}
                  onClick={() => openLightbox(treeImgSrc, treeImgAlt)}
                  title="Klicken zum Vergrößern"
                />
              </div>

              <div className={styles.storyContent}>
                <span className={styles.storyNumber}>01</span>
                <h3 className={styles.storyTitle}>Der Baum und der Blitz</h3>
                <div className={styles.goldDivider} aria-hidden="true" />
                <p className={styles.storyText}>
                  Im schattigen Biergarten des Bierbrunnen steht ein alter, charakterstarker Baum, der im Laufe der Jahrzehnte zum stummen Zeugen unzähliger Begegnungen wurde. Vor Jahren schlug ein gewaltiges Gewitter in den Baum ein – der Blitz durchfuhr den Stamm und hinterließ ihn im Inneren hohl. Doch statt einzugehen, schlug der Baum in jedem neuen Frühling aufs Neue aus und spendet unseren Gästen bis heute angenehmen Schatten.
                </p>
              </div>
            </div>
          </article>

          {/* Story 02 — Das Pferd, das Bier und die grüne Säule */}
          <article className={styles.storyCardTextLed}>
            <div className={styles.textLedContent}>
              <span className={styles.storyNumber}>02</span>
              <h3 className={styles.storyTitle}>Das Pferd, das Bier und die grüne Säule</h3>
              <div className={styles.goldDivider} aria-hidden="true" />
              <p className={styles.storyText}>
                Wie man sich im Bierbrunnen erzählt, soll vor rund 80 Jahren an dieser Stelle ein Pferd durch den Holzboden eingebrochen sein. Um das verschreckte Tier vor der aufwendigen Bergung zu beruhigen, soll man ihm kurzerhand frisches Bier zu trinken gegeben haben. Nach der erfolgreichen Rettung wurde an der Stelle die grüne Säule zur statischen Absicherung der Decke errichtet, die bis heute als markantes Detail den Gastraum prägt.
              </p>
              <span className={styles.legendBadge}>Mündlich überlieferte Geschichte</span>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
};
