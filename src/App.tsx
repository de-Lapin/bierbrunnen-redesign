import React, { useState } from 'react';
import './styles/global.css';
import appStyles from './App.module.css';
import { LightboxProvider } from './components/Lightbox/LightboxContext';
import { IntroExperience } from './components/IntroExperience/IntroExperience';
import { DemoBanner } from './components/DemoBanner/DemoBanner';
import { Header } from './components/Header/Header';
import { Hero } from './components/Hero/Hero';
import { Highlights } from './components/Highlights/Highlights';
import { Wochenmenu } from './components/Wochenmenu/Wochenmenu';
import { SpeisenGetraenkeMenu } from './components/SpeisenGetraenkeMenu/SpeisenGetraenkeMenu';
import { Biergarten } from './components/Biergarten/Biergarten';
import { FeiernRaeume } from './components/FeiernRaeume/FeiernRaeume';
import { Barzahlung } from './components/Barzahlung/Barzahlung';
import { Geschichten } from './components/Geschichten/Geschichten';
import { Impressionen } from './components/Impressionen/Impressionen';
import { HoursContact } from './components/HoursContact/HoursContact';
import { Anfahrt } from './components/Anfahrt/Anfahrt';
import { Footer } from './components/Footer/Footer';

export const App: React.FC = () => {
  const [introState, setIntroState] = useState<'closed' | 'entering' | 'done'>('closed');

  return (
    <LightboxProvider>
      <div>
        {/* Intro Entrance Experience with Golden BB Gates */}
        <IntroExperience onStateChange={setIntroState} />

        {/* Real Homepage Content with Atmospheric Blur Transition behind Intro */}
        <div
          className={`${appStyles.pageContent} ${
            introState === 'closed' ? appStyles.introClosed : ''
          } ${introState === 'entering' ? appStyles.introEntering : ''}`}
        >
          {/* 1. Demo Notice */}
          <DemoBanner />

          {/* 2. Sticky Header & Animated Mobile Overlay Menu */}
          <Header />

          <main>
            {/* 3. Hero (Desktop Combined Heritage Banner + Split Building Photo Layout) */}
            <Hero />

            {/* 4. Compact Highlights Strip */}
            <Highlights />

            {/* 5. Wochenmenü (Driven by wochenmenu.ts) */}
            <Wochenmenu />

            {/* 6. Speisen & Getränke Full Menu Section (Driven by speisekarte.ts) */}
            <SpeisenGetraenkeMenu />

            {/* 7. Biergarten */}
            <Biergarten />

            {/* 8. Feiern & Gruppen */}
            <FeiernRaeume />

            {/* 9. Original Barzahlungshinweis */}
            <Barzahlung />

            {/* 10. Geschichten aus dem Bierbrunnen */}
            <Geschichten />

            {/* 11. Impressionen Mosaic Photo Strip */}
            <Impressionen />

            {/* 12. Öffnungszeiten & Kontakt */}
            <HoursContact />

            {/* 13. Anfahrt & Google Maps */}
            <Anfahrt />
          </main>

          {/* 14. Compact Footer */}
          <Footer />
        </div>
      </div>
    </LightboxProvider>
  );
};

export default App;
