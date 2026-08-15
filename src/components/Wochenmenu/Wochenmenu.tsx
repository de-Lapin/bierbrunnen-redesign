import React from 'react';
import styles from './Wochenmenu.module.css';
import { wochenmenuData } from '../../data/wochenmenu';
import { useScrollReveal } from '../../hooks/useScrollReveal';

export const Wochenmenu: React.FC = () => {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section id="wochenmenu" className={styles.section} aria-label="Wochenmenü">
      <div
        ref={ref}
        className={`container reveal-section ${isVisible ? 'is-visible' : ''}`}
      >
        <div className={styles.header}>
          <span className={styles.eyebrow}>{wochenmenuData.validityPeriod}</span>
          <h2 className={styles.heading}>Wochenmenü</h2>
          <p className={styles.subheading}>Jede Woche neu für Sie zusammengestellt.</p>
        </div>

        <div className={styles.menuGrid}>
          {wochenmenuData.items.map((item) => (
            <article key={item.id} className={styles.menuItemCard}>
              <div className={styles.itemInfo}>
                {item.note && <span className={styles.itemBadge}>{item.note}</span>}
                <h3 className={styles.itemTitle}>{item.title}</h3>
                {item.description && <p className={styles.itemDesc}>{item.description}</p>}
              </div>
              {item.price && <div className={styles.itemPrice}>{item.price}</div>}
            </article>
          ))}
        </div>

        <div className={styles.disclaimerBox}>
          <p className={styles.disclaimerText}>{wochenmenuData.disclaimer}</p>
        </div>
      </div>
    </section>
  );
};
