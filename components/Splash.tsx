import React, { useState } from 'react';
import { VIDEO_BG_URL } from '../constants';
import { useLanguage } from '../contexts/LanguageContext';

interface SplashProps {
  onLogin: () => void;
}

const Splash: React.FC<SplashProps> = ({ onLogin }) => {
  const [code, setCode] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(false);
  const [isFadingOut, setIsFadingOut] = useState(false);
  const { language, setLanguage, t } = useLanguage();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (code === '11' && password === '22') {
      setIsFadingOut(true);
      setTimeout(() => {
        onLogin();
      }, 800); // Wait for fade out
    } else {
      setError(true);
      setTimeout(() => setError(false), 500); // Reset shake
    }
  };

  if (isFadingOut) {
    return (
      <div className="fixed inset-0 bg-black z-[100] transition-opacity duration-1000 opacity-0 pointer-events-none" />
    );
  }

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center bg-bg overflow-hidden">
      {/* Background Video */}
      <div className="absolute inset-0 z-0">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover filter grayscale brightness-50 contrast-125"
        >
          <source src={VIDEO_BG_URL} type="video/mp4" />
        </video>
        {/* Grain Overlay */}
        <div className="grain-overlay opacity-30"></div>
        {/* Blur Overlay */}
        <div className="absolute inset-0 backdrop-blur-[2px] bg-black/40"></div>
      </div>

      {/* Login Card */}
      <div className="relative z-10 w-full max-w-md px-8">
        <div className={`backdrop-blur-md bg-black/40 border border-white/10 p-10 shadow-2xl ${error ? 'animate-shake border-red-500/50' : ''}`}>
          
          <div className="text-center mb-10">
            <h1 className="text-4xl font-bold tracking-tighter mb-2 text-white">ud.crew</h1>
            <p className="text-xs uppercase tracking-[0.2em] text-accent">only the ones who keep playing.</p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="space-y-1">
              <label className="text-[10px] uppercase tracking-widest text-sub">Code</label>
              <input
                type="text"
                value={code}
                onChange={(e) => setCode(e.target.value)}
                className="w-full bg-transparent border-b border-white/30 py-2 text-lg focus:outline-none focus:border-accent text-center tracking-widest transition-colors rounded-none placeholder-white/10"
                placeholder={t("ACCESS CODE", "ACCESS CODE", "アクセスコード", "KODE AKSES")}
                autoComplete="off"
              />
            </div>

            <div className="space-y-1">
              <label className="text-[10px] uppercase tracking-widest text-sub">Password</label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full bg-transparent border-b border-white/30 py-2 text-lg focus:outline-none focus:border-accent text-center tracking-widest transition-colors rounded-none placeholder-white/10"
                placeholder={t("PASSWORD", "PASSWORD", "パスワード", "KATA SANDI")}
              />
            </div>

            <button
              type="submit"
              className="w-full mt-8 bg-accent/90 hover:bg-accent text-white font-bold py-4 text-sm tracking-widest uppercase transition-all duration-300 hover:shadow-[0_0_20px_rgba(240,85,25,0.4)] hover:scale-[1.02]"
            >
              {t("Enter Lounge", "Enter Lounge", "ラウンジに入場", "Masuk Lounge")}
            </button>
          </form>

          {error && (
            <div className="mt-6 text-center">
              <p className="text-red-500 text-xs tracking-widest">ACCESS DENIED</p>
            </div>
          )}
        </div>

        {/* Language Toggle */}
        <div className="absolute top-[-80px] right-8 flex text-xs font-bold tracking-widest">
          <span 
            onClick={() => setLanguage('ko')}
            className={`cursor-pointer hover:text-accent transition-colors ${language === 'ko' ? 'text-white' : 'text-white/50'}`}
          >
            KR
          </span>
          <span className="mx-2 text-white/50">|</span>
          <span 
            onClick={() => setLanguage('en')}
            className={`cursor-pointer hover:text-accent transition-colors ${language === 'en' ? 'text-white' : 'text-white/50'}`}
          >
            EN
          </span>
          <span className="mx-2 text-white/50">|</span>
          <span 
            onClick={() => setLanguage('jp')}
            className={`cursor-pointer hover:text-accent transition-colors ${language === 'jp' ? 'text-white' : 'text-white/50'}`}
          >
            JP
          </span>
          <span className="mx-2 text-white/50">|</span>
          <span 
            onClick={() => setLanguage('in')}
            className={`cursor-pointer hover:text-accent transition-colors ${language === 'in' ? 'text-white' : 'text-white/50'}`}
          >
            IN
          </span>
        </div>
      </div>
    </div>
  );
};

export default Splash;