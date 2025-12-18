
import React, { useState, useEffect } from 'react';
import { NavigationProps, CrewMember } from '../../types';
import { useLanguage } from '../../contexts/LanguageContext';

const MOCK_PARTICIPANTS: CrewMember[] = [
  {
    id: '1',
    name: 'Arjun Mehta',
    company: 'IndoPay',
    role: 'CEO & Founder',
    industry: 'Fintech',
    stage: 'Series A',
    country: 'India',
    bio: 'Pioneering digital payments for rural India with localized solutions.'
  },
  {
    id: '2',
    name: 'Kim Min-su',
    company: 'DeepLogic AI',
    role: 'Co-founder',
    industry: 'AI / SaaS',
    stage: 'Seed',
    country: 'Korea',
    bio: 'Building next-gen LLM orchestration tools for enterprise compliance.'
  },
  {
    id: '3',
    name: 'Putri Ayu',
    company: 'EcoMart',
    role: 'CEO',
    industry: 'E-commerce',
    stage: 'Series B',
    country: 'Indonesia',
    bio: 'Largest sustainable marketplace connecting local artisans to global markets.'
  },
  {
    id: '4',
    name: 'Kenji Tanaka',
    company: 'ZenRobotics',
    role: 'CTO',
    industry: 'Robotics',
    stage: 'Series A',
    country: 'Japan',
    bio: 'Precision robotics for elderly care and social infrastructure.'
  },
  {
    id: '5',
    name: 'Priyanka Sharma',
    company: 'AgriNext',
    role: 'Founder',
    industry: 'AgriTech',
    stage: 'Seed',
    country: 'India',
    bio: 'Optimizing supply chains for small-scale farmers using blockchain.'
  },
  {
    id: '6',
    name: 'Choi Ji-won',
    company: 'MediSync',
    role: 'CEO',
    industry: 'HealthTech',
    stage: 'Series A',
    country: 'Korea',
    bio: 'Unified data platform for seamless hospital-patient communication.'
  },
  {
    id: '7',
    name: 'Siti Nurhaliza',
    company: 'LogiGo',
    role: 'COO',
    industry: 'Logistics',
    stage: 'Seed',
    country: 'Indonesia',
    bio: 'Hyper-local delivery network focusing on tiered cities.'
  },
  {
    id: '8',
    name: 'Haruki Murakami',
    company: 'StoryLoop',
    role: 'CEO',
    industry: 'Content / Media',
    stage: 'Pre-A',
    country: 'Japan',
    bio: 'Interactive narrative platform using generative AI for creators.'
  }
];

const STAGES = ['All', 'Seed', 'Pre-A', 'Series A', 'Series B'];
const INDUSTRIES = ['All', 'Fintech', 'AI / SaaS', 'E-commerce', 'Robotics', 'AgriTech', 'HealthTech', 'Logistics', 'Content / Media'];

const ParticipantsPage: React.FC<NavigationProps> = ({ onNavigate }) => {
  const { t } = useLanguage();
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedStage, setSelectedStage] = useState('All');
  const [selectedIndustry, setSelectedIndustry] = useState('All');

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const filteredMembers = MOCK_PARTICIPANTS.filter(member => {
    const matchesSearch = member.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
                         member.company.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesStage = selectedStage === 'All' || member.stage === selectedStage;
    const matchesIndustry = selectedIndustry === 'All' || member.industry === selectedIndustry;
    return matchesSearch && matchesStage && matchesIndustry;
  });

  return (
    <div className="min-h-screen bg-bg text-white pt-24 pb-24 font-sans">
      {/* Header */}
      <div className="container mx-auto px-6 mb-12">
        <button 
          onClick={() => onNavigate('home')}
          className="text-sub hover:text-accent mb-8 text-sm uppercase tracking-widest flex items-center transition-colors"
        >
          &larr; {t("Back to Lounge", "Back to Lounge", "ラウンジに戻る", "Kembali ke Lounge")}
        </button>
        
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 border-l-4 border-accent pl-6">
          <div>
            <h1 className="text-4xl md:text-6xl font-bold uppercase tracking-tighter mb-4">
              The Crew
            </h1>
            <p className="text-xl text-sub font-light max-w-2xl leading-relaxed">
              {t(
                "전 세계에서 계속 플레이 중인 ud.crew 창업가들을 만나보세요.",
                "Meet the ud.crew founders who keep playing across the globe.",
                "世界中で挑戦し続けるud.crewの創業者たちに出会いましょう。",
                "Temui para pendiri ud.crew yang terus bermain di seluruh dunia."
              )}
            </p>
          </div>
          <div className="text-accent text-sm font-mono tracking-widest pb-1">
            MEMBER DIRECTORY [240+]
          </div>
        </div>
      </div>

      {/* Filters Bar */}
      <div className="container mx-auto px-6 mb-12">
        <div className="bg-black/20 border border-white/10 p-6 space-y-6">
          <div className="flex flex-col lg:flex-row gap-6">
            {/* Search */}
            <div className="flex-1">
              <label className="block text-[10px] uppercase tracking-widest text-accent mb-2">Search</label>
              <input 
                type="text" 
                placeholder={t("Name or Company...", "Name or Company...", "名前または会社名...", "Nama atau Perusahaan...")}
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full bg-white/5 border border-white/10 p-3 text-sm focus:border-accent outline-none text-white transition-colors"
              />
            </div>
            
            {/* Stage Filter */}
            <div className="w-full lg:w-48">
              <label className="block text-[10px] uppercase tracking-widest text-accent mb-2">Stage</label>
              <select 
                value={selectedStage}
                onChange={(e) => setSelectedStage(e.target.value)}
                className="w-full bg-white/5 border border-white/10 p-3 text-sm focus:border-accent outline-none text-white transition-colors"
              >
                {STAGES.map(s => <option key={s} value={s}>{s}</option>)}
              </select>
            </div>

            {/* Industry Filter */}
            <div className="w-full lg:w-64">
              <label className="block text-[10px] uppercase tracking-widest text-accent mb-2">Industry</label>
              <select 
                value={selectedIndustry}
                onChange={(e) => setSelectedIndustry(e.target.value)}
                className="w-full bg-white/5 border border-white/10 p-3 text-sm focus:border-accent outline-none text-white transition-colors"
              >
                {INDUSTRIES.map(i => <option key={i} value={i}>{i}</option>)}
              </select>
            </div>
          </div>
        </div>
      </div>

      {/* Results Grid */}
      <div className="container mx-auto px-6">
        {filteredMembers.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredMembers.map((member) => (
              <div key={member.id} className="group relative bg-[#222] border border-white/5 p-8 hover:border-accent transition-all duration-300 flex flex-col justify-between h-full overflow-hidden">
                {/* Background Decoration */}
                <div className="absolute -top-10 -right-10 w-24 h-24 bg-accent/5 rounded-full blur-3xl group-hover:bg-accent/10 transition-all"></div>
                
                <div>
                  <div className="flex justify-between items-start mb-6">
                    <div className="w-12 h-12 bg-white/5 flex items-center justify-center border border-white/10 group-hover:border-accent transition-colors">
                      <span className="text-xl font-bold text-white/20 group-hover:text-accent transition-colors">
                        {member.name.charAt(0)}
                      </span>
                    </div>
                    <div className="text-right">
                      <span className="block text-[10px] text-accent uppercase tracking-widest font-bold mb-1">{member.country}</span>
                      <span className="text-[10px] text-white/40 border border-white/10 px-1.5 py-0.5 rounded uppercase">{member.stage}</span>
                    </div>
                  </div>
                  
                  <h3 className="text-xl font-bold text-white mb-1 group-hover:text-accent transition-colors">{member.name}</h3>
                  <p className="text-sm text-sub font-medium mb-4">{member.role} @ <span className="text-white italic">{member.company}</span></p>
                  
                  <div className="mb-6">
                    <span className="text-[10px] bg-white/10 px-2 py-1 text-white/60 rounded-full font-mono">{member.industry}</span>
                  </div>
                  
                  <p className="text-xs text-sub/70 leading-relaxed mb-8 border-l-2 border-white/10 pl-4 italic">
                    "{member.bio}"
                  </p>
                </div>

                <button className="w-full border border-white/10 py-3 text-[10px] uppercase tracking-widest font-bold text-sub group-hover:bg-white group-hover:text-black transition-all">
                  Request Connection
                </button>
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-24 border border-dashed border-white/10 bg-white/5">
            <p className="text-sub italic">No members found matching your criteria.</p>
            <button 
              onClick={() => {setSearchTerm(''); setSelectedStage('All'); setSelectedIndustry('All');}}
              className="mt-4 text-accent text-xs underline underline-offset-4"
            >
              Clear all filters
            </button>
          </div>
        )}
      </div>

      {/* Footer Notice */}
      <div className="container mx-auto px-6 mt-16 text-center">
        <p className="text-[10px] text-white/20 tracking-widest uppercase">
          {t(
            "* 프라이빗 커뮤니티 정책에 따라 상세 프로필은 멤버 로그인 후 확인 가능합니다.",
            "* Detailed profiles are visible only to logged-in members per private policy.",
            "* プライベートコミュニティポリシーにより、詳細プロフィールはログイン後に確認可能です。",
            "* Profil terperinci hanya dapat dilihat oleh anggota yang masuk sesuai kebijakan privasi."
          )}
        </p>
      </div>
    </div>
  );
};

export default ParticipantsPage;
