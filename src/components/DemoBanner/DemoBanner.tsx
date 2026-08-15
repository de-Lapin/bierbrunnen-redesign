import React from 'react';
import styles from './DemoBanner.module.css';

export const DemoBanner: React.FC = () => {
  return (
    <aside className={styles.banner} aria-label="Hinweis zum Designentwurf">
      Unverbindlicher Designentwurf – keine offizielle Website von Bierbrunnen Baden-Baden.
    </aside>
  );
};
