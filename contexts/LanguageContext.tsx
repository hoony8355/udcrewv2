import React, { createContext, useState, useContext, ReactNode } from 'react';

type Language = 'ko' | 'en' | 'jp' | 'in';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (ko: string, en: string, jp?: string, indo?: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [language, setLanguage] = useState<Language>('ko');

  const t = (ko: string, en: string, jp?: string, indo?: string) => {
    if (language === 'ko') return ko;
    if (language === 'jp') return jp || en; // Fallback to EN if translation missing
    if (language === 'in') return indo || en; // Fallback to EN if translation missing
    return en;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};