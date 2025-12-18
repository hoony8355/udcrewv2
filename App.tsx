
import React, { useState } from 'react';
import { LanguageProvider } from './contexts/LanguageContext';
import Splash from './components/Splash';
import Layout from './components/Layout';
import Hero from './components/sections/Hero';
import CollabSection from './components/sections/CollabSection';
import ProgramSection from './components/sections/ProgramSection';
import BenefitSection from './components/sections/BenefitSection';
import ReviewSection from './components/sections/ReviewSection';
import SurvivorsApplyPage from './components/pages/SurvivorsApplyPage.tsx';
import AimingPage from './components/pages/AimingPage.tsx';
import ReboundPage from './components/pages/ReboundPage.tsx';
import ParticipantsPage from './components/pages/ParticipantsPage.tsx';
import { PageView } from './types.ts';

const AppContent: React.FC = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [currentPage, setCurrentPage] = useState<PageView>('home');

  const handleNavigate = (page: PageView) => {
    setCurrentPage(page);
    window.scrollTo(0, 0);
  };

  return (
    <>
      <div className="grain-overlay" />
      
      {!isAuthenticated ? (
        <Splash onLogin={() => setIsAuthenticated(true)} />
      ) : (
        <>
          {currentPage === 'home' && (
            <Layout>
              <Hero />
              <CollabSection onNavigate={handleNavigate} />
              <ProgramSection onNavigate={handleNavigate} />
              <BenefitSection />
              <ReviewSection />
            </Layout>
          )}

          {currentPage === 'survivors_apply' && (
            <SurvivorsApplyPage onNavigate={handleNavigate} />
          )}

          {currentPage === 'aiming_detail' && (
            <AimingPage onNavigate={handleNavigate} />
          )}

          {currentPage === 'rebound_detail' && (
            <ReboundPage onNavigate={handleNavigate} />
          )}

          {currentPage === 'participants_list' && (
            <ParticipantsPage onNavigate={handleNavigate} />
          )}
        </>
      )}
    </>
  );
};

const App: React.FC = () => {
  return (
    <LanguageProvider>
      <AppContent />
    </LanguageProvider>
  );
};

export default App;
