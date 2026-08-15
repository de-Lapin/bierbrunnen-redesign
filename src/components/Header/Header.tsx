import React, { useState, useEffect, useRef } from 'react';
import styles from './Header.module.css';

export const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleBtnRef = useRef<HTMLButtonElement>(null);

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
    if (toggleBtnRef.current) {
      toggleBtnRef.current.focus();
    }
  };

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.classList.add('menu-open');
    } else {
      document.body.classList.remove('menu-open');
    }

    return () => {
      document.body.classList.remove('menu-open');
    };
  }, [isMenuOpen]);

  // Handle Escape key press
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isMenuOpen) {
        closeMenu();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isMenuOpen]);

  return (
    <header className={styles.header}>
      <div className={`container ${styles.inner}`}>
        <a href="#start" className={styles.brand} onClick={closeMenu} aria-label="Bierbrunnen Baden-Baden Startseite">
          <div className={styles.monogram} aria-hidden="true">
            BB
          </div>
          <div className={styles.brandText}>
            <span className={styles.title}>Bierbrunnen</span>
            <span className={styles.subtitle}>Baden-Baden</span>
          </div>
        </a>

        {/* Desktop Navigation */}
        <nav className={styles.desktopNav} aria-label="Hauptnavigation">
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
                Kontakt
              </a>
            </li>
          </ul>

          <a href="tel:+4972213986186" className={styles.phoneCta}>
            <span>📞</span>
            <span>Jetzt anrufen</span>
          </a>
        </nav>

        {/* Mobile Hamburger Toggle */}
        <button
          ref={toggleBtnRef}
          className={styles.menuToggle}
          onClick={toggleMenu}
          aria-expanded={isMenuOpen}
          aria-label={isMenuOpen ? 'Menü schließen' : 'Menü öffnen'}
        >
          {isMenuOpen ? '✕' : '☰'}
        </button>

        {/* Full-Screen Mobile Menu Overlay with Staggered Animation */}
        <div
          className={`${styles.mobileOverlay} ${isMenuOpen ? styles.isOpen : ''}`}
          role="dialog"
          aria-hidden={!isMenuOpen}
          aria-modal="true"
          aria-label="Mobile Navigation"
          onClick={closeMenu}
        >
          <div className={styles.mobileHeader} onClick={(e) => e.stopPropagation()}>
            <div className={styles.brand}>
              <div className={styles.monogram} aria-hidden="true">
                BB
              </div>
              <div className={styles.brandText}>
                <span className={styles.title}>Bierbrunnen</span>
                <span className={styles.subtitle}>Baden-Baden</span>
              </div>
            </div>
            <button className={styles.closeBtn} onClick={closeMenu} aria-label="Menü schließen">
              ✕
            </button>
          </div>

          <ul className={styles.mobileNavList} onClick={(e) => e.stopPropagation()}>
            <li className={styles.mobileNavItem}>
              <a href="#start" className={styles.mobileNavLink} onClick={closeMenu}>
                Start
              </a>
            </li>
            <li className={styles.mobileNavItem}>
              <a href="#wochenmenu" className={styles.mobileNavLink} onClick={closeMenu}>
                Wochenmenü
              </a>
            </li>
            <li className={styles.mobileNavItem}>
              <a href="#speisen-getraenke" className={styles.mobileNavLink} onClick={closeMenu}>
                Speisen & Getränke
              </a>
            </li>
            <li className={styles.mobileNavItem}>
              <a href="#biergarten" className={styles.mobileNavLink} onClick={closeMenu}>
                Biergarten
              </a>
            </li>
            <li className={styles.mobileNavItem}>
              <a href="#feiern-raeume" className={styles.mobileNavLink} onClick={closeMenu}>
                Feiern & Räume
              </a>
            </li>
            <li className={styles.mobileNavItem}>
              <a href="#geschichten" className={styles.mobileNavLink} onClick={closeMenu}>
                Geschichten
              </a>
            </li>
            <li className={styles.mobileNavItem}>
              <a href="#anfahrt" className={styles.mobileNavLink} onClick={closeMenu}>
                Anfahrt
              </a>
            </li>
            <li className={styles.mobileNavItem}>
              <a href="#kontakt" className={styles.mobileNavLink} onClick={closeMenu}>
                Kontakt
              </a>
            </li>
          </ul>

          <div className={styles.mobileCallWrapper} onClick={(e) => e.stopPropagation()}>
            <a href="tel:+4972213986186" className={styles.mobileCallBtn} onClick={closeMenu}>
              <span>📞</span>
              <span>Jetzt anrufen</span>
            </a>
          </div>
        </div>
      </div>
    </header>
  );
};
