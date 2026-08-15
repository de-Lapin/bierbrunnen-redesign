import React, { useState } from 'react';
import styles from './SpeisenGetraenkeMenu.module.css';
import { speisekarteData } from '../../data/speisekarte';
import { useScrollReveal } from '../../hooks/useScrollReveal';
import { useLightbox } from '../Lightbox/LightboxContext';

export const SpeisenGetraenkeMenu: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'food' | 'drinks'>('food');
  const { ref, isVisible } = useScrollReveal();
  const { openLightbox } = useLightbox();

  const flammkuchenSrc = '/images/speisen-flammkuchen.jpg';
  const flammkuchenAlt = 'Frisch gebackener knuspriger Flammkuchen im Bierbrunnen Baden-Baden';

  return (
    <section id="speisen-getraenke" className={styles.section} aria-label="Speisen und Getränke Speisekarte">
      <div
        ref={ref}
        className={`container reveal-section ${isVisible ? 'is-visible' : ''}`}
      >
        <div className={styles.header}>
          <span className={styles.eyebrow}>UNSER ANGEBOT</span>
          <h2 className={styles.heading}>Speisen & Getränke</h2>
          <p className={styles.subheading}>
            Entdecken Sie unsere Speisen, Biere und weiteren Getränke.
          </p>
        </div>

        {/* Visual Showcase Card with Speisen-Flammkuchen Photo & Lightbox */}
        <div className={styles.showcaseGrid}>
          <div className={styles.showcaseImageWrapper}>
            <img
              src={flammkuchenSrc}
              alt={flammkuchenAlt}
              className={`${styles.showcaseImage} interactive-image`}
              onClick={() => openLightbox(flammkuchenSrc, flammkuchenAlt)}
              title="Klicken zum Vergrößern"
            />
          </div>
          <div className={styles.showcaseContent}>
            <span className={styles.showcaseEyebrow}>HERZHAFT & SÜSS</span>
            <h3 className={styles.showcaseTitle}>Flammkuchen & Frisches Bier</h3>
            <ul className={styles.categoriesList}>
              <li className={styles.categoryItem}>
                <span className={styles.bullet} aria-hidden="true" />
                <span>Große Auswahl an herzhaften Flammkuchen</span>
              </li>
              <li className={styles.categoryItem}>
                <span className={styles.bullet} aria-hidden="true" />
                <span>Süße Flammkuchen</span>
              </li>
              <li className={styles.categoryItem}>
                <span className={styles.bullet} aria-hidden="true" />
                <span>Hausgemachte Salate, darunter der Teufelssalat</span>
              </li>
              <li className={styles.categoryItem}>
                <span className={styles.bullet} aria-hidden="true" />
                <span>8 frisch gezapfte Biere & 6 Flaschenbiere</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Tab Controls */}
        <div className={styles.tabsContainer} role="tablist" aria-label="Speisekarte Kategorien">
          <button
            id="tab-food"
            type="button"
            role="tab"
            aria-selected={activeTab === 'food'}
            aria-controls="panel-food"
            className={`${styles.tabBtn} ${activeTab === 'food' ? styles.active : ''}`}
            onClick={() => setActiveTab('food')}
          >
            Speisen
          </button>
          <button
            id="tab-drinks"
            type="button"
            role="tab"
            aria-selected={activeTab === 'drinks'}
            aria-controls="panel-drinks"
            className={`${styles.tabBtn} ${activeTab === 'drinks' ? styles.active : ''}`}
            onClick={() => setActiveTab('drinks')}
          >
            Getränke
          </button>
        </div>

        {/* Speisen Panel */}
        <div
          id="panel-food"
          role="tabpanel"
          aria-labelledby="tab-food"
          className={`${styles.tabContent} ${activeTab === 'food' ? styles.active : ''}`}
        >
          <div className={styles.categoriesGrid}>
            {speisekarteData.food.map((category) => (
              <div key={category.id} className={styles.categoryBlock}>
                <h3 className={styles.categoryTitle}>{category.title}</h3>
                <ul className={styles.itemsList}>
                  {category.items.map((item) => (
                    <li key={item.id} className={styles.menuItem}>
                      <div className={styles.itemHeaderRow}>
                        <span className={styles.itemName}>{item.name}</span>
                        <span className={styles.dotsLeader} aria-hidden="true" />
                        <span className={styles.itemPrice}>{item.price}</span>
                      </div>
                      <div className={styles.itemMetaRow}>
                        {item.description && <p className={styles.itemDesc}>{item.description}</p>}
                        {item.quantity && <span className={styles.itemQuantity}>{item.quantity}</span>}
                        {item.note && <span className={styles.itemBadge}>{item.note}</span>}
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Getränke Panel */}
        <div
          id="panel-drinks"
          role="tabpanel"
          aria-labelledby="tab-drinks"
          className={`${styles.tabContent} ${activeTab === 'drinks' ? styles.active : ''}`}
        >
          <div className={styles.categoriesGrid}>
            {speisekarteData.drinks.map((category) => (
              <div key={category.id} className={styles.categoryBlock}>
                <h3 className={styles.categoryTitle}>{category.title}</h3>
                <ul className={styles.itemsList}>
                  {category.items.map((item) => (
                    <li key={item.id} className={styles.menuItem}>
                      <div className={styles.itemHeaderRow}>
                        <span className={styles.itemName}>{item.name}</span>
                        <span className={styles.dotsLeader} aria-hidden="true" />
                        <span className={styles.itemPrice}>{item.price}</span>
                      </div>
                      <div className={styles.itemMetaRow}>
                        {item.description && <p className={styles.itemDesc}>{item.description}</p>}
                        {item.quantity && <span className={styles.itemQuantity}>{item.quantity}</span>}
                        {item.note && <span className={styles.itemBadge}>{item.note}</span>}
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Visible Demo Notice */}
        <div className={styles.disclaimerBox}>
          <p className={styles.disclaimerText}>{speisekarteData.disclaimer}</p>
        </div>
      </div>
    </section>
  );
};
