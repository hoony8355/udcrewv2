import React, { useState } from 'react';
import { Program, NavigationProps } from '../../types';
import Modal from '../ui/Modal';
import { useLanguage } from '../../contexts/LanguageContext';

const PROGRAMS_KO: Program[] = [
  {
    title: "Underdogs Survivors",
    subtitle: "창업 생존율을 높이기 위한 문제 기반 코호트",
    purpose: "“비슷한 고민을 가진 러닝메이트를 만나보세요.”",
    method: "문제 심층 디깅 + 유사 창업자 그룹핑 + 전문 멘토링",
    effects: ["문제 해결 실행 계획(Action Plan) 도출", "비즈니스 동반자 매칭", "심층 문제 해결 경험"],
    details: {
      coreValue: "생존이 곧 성장입니다. 생존을 방해하는 문제들을 함께 해결합니다.",
      structure: [
        { title: "1. 사전 진단 (Diagnosis)", items: ["10가지 위기 유형 정밀 분류", "정확한 기업 문제 분석"] },
        { title: "2. 문제 해결형 코호트 (Cohort)", items: ["비슷한 문제를 가진 기업간의 네트워킹", "전문가 멘토링"] },
        { title: "3. 문제 해결형 Output", items: ["실제 실행 계획 도출", "Follow up을 통한 지속 논의"] }
      ],
      marketingPoint: { label: "내 창업가 유형 진단하기", url: "#" }
    }
  },
  {
    title: "Underdogs Re:bound",
    subtitle: "실패 후의 회복과 재설계",
    purpose: "실패는 마침표가 아니라, 더 단단한 다음 문장의 시작입니다.",
    method: "제주 팝업 캠퍼스에서의 몰입형 회고와 재창업 시뮬레이션",
    effects: ["창업가 회복 탄력성 강화", "실패 경험의 자산화", "재도전 시나리오 완성"],
    details: {
      coreValue: "우리는 실패를 사랑합니다. 한 번 넘어져 본 사람만이 가질 수 있는 단단함을 믿기 때문입니다.",
      structure: [
        { title: "Environment", items: ["제주 팝업 캠퍼스에서의 단절과 몰입"] },
        { title: "Program", items: ["회복, 회고, 재설계의 3단계 프로세스"] },
        { title: "Legacy", items: ["실패 경험을 브랜드 콘텐츠로 기록"] }
      ]
    }
  },
  {
    title: "Underdogs 'A'ming",
    subtitle: "Series A 검증 및 준비 과정",
    purpose: "“‘희망’이 아닌 ‘현실’을 기준으로 다음 라운드를 준비하게 만드는 과정입니다.”",
    method: "VC 대상 피칭 + 실시간 피드백 + 실행/개선 반복 (6~8주)",
    effects: ["IR Deck 재설계", "핵심 KPI 정렬", "실제 투자 검토 및 연계"],
    details: {
      coreValue: "교육이 아닌 검증입니다. VC는 심사위원이 아닌 파트너가 됩니다.",
      structure: [
        { title: "Phase 1. Reality Check", items: ["냉정한 현실 진단 및 KPI 재정렬"] },
        { title: "Phase 2. Iteration", items: ["반복적인 피칭과 피드백 실행"] },
        { title: "Target", items: ["Pre-A 완료 후 Scale-up 단계 팀"] }
      ]
    }
  }
];

const PROGRAMS_EN: Program[] = [
  {
    title: "Underdogs Survivors",
    subtitle: "Problem-based Cohort to Increase Survival Rate",
    purpose: "“Meet running mates with similar concerns.”",
    method: "Deep Problem Digging + Similar Founder Grouping + Expert Mentoring",
    effects: ["Derivation of Action Plan", "Business Partner Matching", "Deep Problem Solving Experience"],
    details: {
      coreValue: "Survival is growth. We solve problems that hinder survival together.",
      structure: [
        { title: "1. Diagnosis", items: ["Precise classification of 10 crisis types", "Accurate corporate problem analysis"] },
        { title: "2. Cohort", items: ["Networking among companies with similar problems", "Expert mentoring"] },
        { title: "3. Output", items: ["Deriving actual action plans", "Continuous follow-up"] }
      ],
      marketingPoint: { label: "Diagnose My Type", url: "#" }
    }
  },
  {
    title: "Underdogs Re:bound",
    subtitle: "Recovery and Redesign after Failure",
    purpose: "Failure is not a full stop, but the beginning of a stronger next sentence.",
    method: "Immersive retrospective and re-founding simulation at Jeju Popup Campus",
    effects: ["Strengthening Resilience", "Turning failure experience into assets", "Completion of re-challenge scenarios"],
    details: {
      coreValue: "We love failure. We believe in the firmness that only those who have fallen can possess.",
      structure: [
        { title: "Environment", items: ["Disconnection and Immersion at Jeju Campus"] },
        { title: "Program", items: ["3-step process: Recovery, Reflection, Redesign"] },
        { title: "Legacy", items: ["Recording failure experience as brand content"] }
      ]
    }
  },
  {
    title: "Underdogs 'A'ming",
    subtitle: "Series A Validation and Preparation Process",
    purpose: "“A process that prepares you for the next round based on ‘reality’, not ‘hope’.”",
    method: "Pitching to VCs + Real-time Feedback + Execution/Improvement Iteration (6-8 weeks)",
    effects: ["Redesigning IR Deck", "Aligning Core KPIs", "Actual Investment Review"],
    details: {
      coreValue: "Validation, not education. VCs become partners, not judges.",
      structure: [
        { title: "Phase 1. Reality Check", items: ["Cold diagnosis and KPI realignment"] },
        { title: "Phase 2. Iteration", items: ["Repetitive pitching and feedback execution"] },
        { title: "Target", items: ["Teams in Scale-up phase after Pre-A"] }
      ]
    }
  }
];

const PROGRAMS_JP: Program[] = [
  {
    title: "Underdogs Survivors",
    subtitle: "創業生存率を高めるための課題ベースのコホート",
    purpose: "「同じ悩みを持つランニングメイトに出会いましょう。」",
    method: "課題の深掘り + 類似創業者グルーピング + 専門メンタリング",
    effects: ["課題解決実行計画(Action Plan)の導出", "ビジネスパートナーのマッチング", "深い課題解決経験"],
    details: {
      coreValue: "生存こそが成長です。生存を妨げる問題を共に解決します。",
      structure: [
        { title: "1. 事前診断 (Diagnosis)", items: ["10種類の危機タイプの精密分類", "正確な企業問題分析"] },
        { title: "2. 課題解決型コホート (Cohort)", items: ["似た問題を持つ企業間のネットワーキング", "専門家メンタリング"] },
        { title: "3. 課題解決型 Output", items: ["実際の実行計画の導出", "フォローアップを通じた継続的な議論"] }
      ],
      marketingPoint: { label: "起業家タイプ診断", url: "#" }
    }
  },
  {
    title: "Underdogs Re:bound",
    subtitle: "失敗後の回復と再設計",
    purpose: "失敗は終止符ではなく、より強固な次の文章の始まりです。",
    method: "済州ポップアップキャンパスでの没入型回顧と再創業シミュレーション",
    effects: ["起業家の回復弾力性(レジリエンス)強化", "失敗経験の資産化", "再挑戦シナリオの完成"],
    details: {
      coreValue: "私たちは失敗を愛しています。一度転んだ人だけが持てる強さを信じているからです。",
      structure: [
        { title: "Environment", items: ["済州キャンパスでの断絶と没入"] },
        { title: "Program", items: ["回復、回顧、再設計の3段階プロセス"] },
        { title: "Legacy", items: ["失敗経験をブランドコンテンツとして記録"] }
      ]
    }
  },
  {
    title: "Underdogs 'A'ming",
    subtitle: "Series A 検証および準備過程",
    purpose: "「『希望』ではなく『現実』を基準に次のラウンドを準備させる過程です。」",
    method: "VC対象ピッチング + リアルタイムフィードバック + 実行/改善の繰り返し (6~8週間)",
    effects: ["投資家の視点でのIR Deck再設計", "核心KPIの整列", "実際の投資検討および連携"],
    details: {
      coreValue: "教育ではなく検証です。VCは審査員ではなくパートナーになります。",
      structure: [
        { title: "Phase 1. Reality Check", items: ["冷静な現実診断およびKPI再整列"] },
        { title: "Phase 2. Iteration", items: ["反復的なピッチングとフィードバック実行"] },
        { title: "Target", items: ["Pre-A完了後のスケールアップ段階のチーム"] }
      ]
    }
  }
];

const PROGRAMS_IN: Program[] = [
  {
    title: "Underdogs Survivors",
    subtitle: "Kohort Berbasis Masalah untuk Meningkatkan Tingkat Kelangsungan Hidup",
    purpose: "“Temui rekan seperjuangan dengan kekhawatiran serupa.”",
    method: "Penggalian Masalah Mendalam + Pengelompokan Pendiri Serupa + Mentoring Ahli",
    effects: ["Derivasi Rencana Tindakan (Action Plan)", "Pencocokan Mitra Bisnis", "Pengalaman Pemecahan Masalah Mendalam"],
    details: {
      coreValue: "Bertahan hidup adalah pertumbuhan. Kami memecahkan masalah yang menghambat kelangsungan hidup bersama.",
      structure: [
        { title: "1. Diagnosis", items: ["Klasifikasi presisi dari 10 jenis krisis", "Analisis masalah perusahaan yang akurat"] },
        { title: "2. Kohort", items: ["Jejaring antar perusahaan dengan masalah serupa", "Mentoring ahli"] },
        { title: "3. Output", items: ["Menurunkan rencana tindakan nyata", "Diskusi berkelanjutan melalui tindak lanjut"] }
      ],
      marketingPoint: { label: "Diagnosis Tipe Pengusaha Saya", url: "#" }
    }
  },
  {
    title: "Underdogs Re:bound",
    subtitle: "Pemulihan dan Perancangan Ulang setelah Kegagalan",
    purpose: "Kegagalan bukanlah titik akhir, tetapi awal dari kalimat berikutnya yang lebih kuat.",
    method: "Retrospektif imersif dan simulasi pendirian ulang di Kampus Pop-up Jeju",
    effects: ["Memperkuat Resiliensi", "Mengubah pengalaman kegagalan menjadi aset", "Penyelesaian skenario tantangan ulang"],
    details: {
      coreValue: "Kami mencintai kegagalan. Kami percaya pada keteguhan yang hanya bisa dimiliki oleh mereka yang pernah jatuh.",
      structure: [
        { title: "Environment", items: ["Pemutusan hubungan dan Imersi di Kampus Jeju"] },
        { title: "Program", items: ["Proses 3 langkah: Pemulihan, Refleksi, Perancangan Ulang"] },
        { title: "Legacy", items: ["Merekam pengalaman kegagalan sebagai konten merek"] }
      ]
    }
  },
  {
    title: "Underdogs 'A'ming",
    subtitle: "Validasi Seri A dan Proses Persiapan",
    purpose: "“Sebuah proses yang mempersiapkan Anda untuk putaran berikutnya berdasarkan ‘realitas’, bukan ‘harapan’.”",
    method: "Pitching ke VC + Umpan Balik Real-time + Iterasi Eksekusi/Perbaikan (6-8 minggu)",
    effects: ["Merancang Ulang IR Deck", "Menyelaraskan KPI Inti", "Tinjauan Investasi Aktual"],
    details: {
      coreValue: "Validasi, bukan pendidikan. VC menjadi mitra, bukan juri.",
      structure: [
        { title: "Phase 1. Reality Check", items: ["Diagnosis dingin dan penyelarasan ulang KPI"] },
        { title: "Phase 2. Iteration", items: ["Pitching berulang dan eksekusi umpan balik"] },
        { title: "Target", items: ["Tim dalam tahap Scale-up setelah Pre-A"] }
      ]
    }
  }
];

const ProgramSection: React.FC<NavigationProps> = ({ onNavigate }) => {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);
  const [selectedProgram, setSelectedProgram] = useState<Program | null>(null);
  const { language, t } = useLanguage();

  let programs = PROGRAMS_EN;
  if (language === 'ko') programs = PROGRAMS_KO;
  else if (language === 'jp') programs = PROGRAMS_JP;
  else if (language === 'in') programs = PROGRAMS_IN;

  const handleOpenDetail = (program: Program) => {
    setSelectedProgram(program);
  };

  const handleCloseDetail = () => {
    setSelectedProgram(null);
  };

  const handleApply = (program: Program) => {
    if (program.title === "Underdogs Survivors") {
        onNavigate('survivors_apply');
    } else if (program.title === "Underdogs 'A'ming") {
        onNavigate('aiming_detail');
    } else if (program.title === "Underdogs Re:bound") {
        onNavigate('rebound_detail');
    } else {
        alert(t(
          "해당 프로그램은 현재 모집 기간이 아닙니다.\n알림을 신청하시겠습니까?",
          "This program is currently not open for application.\nWould you like to subscribe for notifications?",
          "該当プログラムは現在募集期間ではありません。\n通知を申し込みますか？",
          "Program ini saat ini tidak dibuka untuk pendaftaran.\nApakah Anda ingin berlangganan notifikasi?"
        ));
    }
  };

  return (
    <section id="programs" className="min-h-screen bg-bg py-24 border-t border-white/5 relative">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-baseline md:space-x-4 mb-16">
          <div className="flex items-baseline space-x-4">
            <h2 className="text-6xl font-thin text-accent">+</h2>
            <h2 className="text-3xl font-bold tracking-tighter uppercase">Programs</h2>
          </div>
          <p className="text-sub mt-4 md:mt-0 md:ml-8 text-sm tracking-wide border-l border-accent pl-4">
            Programs that keep you in the game.
          </p>
        </div>

        <div className="space-y-6 max-w-4xl mx-auto">
          {programs.map((program, index) => (
            <div 
              key={index} 
              className={`border border-white/10 transition-all duration-500 overflow-hidden ${
                expandedIndex === index ? 'bg-black/20 border-accent shadow-[0_0_15px_rgba(240,85,25,0.15)]' : 'bg-transparent hover:border-white/30'
              }`}
            >
              {/* Card Header */}
              <div 
                className="p-8 cursor-pointer flex justify-between items-center"
                onClick={() => setExpandedIndex(expandedIndex === index ? null : index)}
              >
                <div>
                  <h3 className={`text-2xl font-bold uppercase tracking-tight mb-2 transition-colors ${expandedIndex === index ? 'text-accent' : 'text-white'}`}>
                    {program.title}
                  </h3>
                  <p className="text-sub text-sm font-light">{program.subtitle}</p>
                </div>
                <div className={`text-2xl font-thin text-white/50 transition-transform duration-300 ${expandedIndex === index ? 'rotate-45 text-accent' : ''}`}>
                  +
                </div>
              </div>

              {/* Expanded Content Preview */}
              <div 
                className={`transition-all duration-500 ease-in-out ${
                  expandedIndex === index ? 'max-h-[500px] opacity-100 border-t border-white/5' : 'max-h-0 opacity-0'
                }`}
              >
                <div className="p-8 grid grid-cols-1 md:grid-cols-2 gap-8 text-sm">
                  <div>
                    <h4 className="text-accent uppercase text-xs tracking-widest mb-2">Why Join?</h4>
                    <p className="text-white mb-6 leading-relaxed font-medium text-lg">{program.purpose}</p>
                    
                    <h4 className="text-accent uppercase text-xs tracking-widest mb-2">How?</h4>
                    <p className="text-sub leading-relaxed">{program.method}</p>
                  </div>
                  <div className="flex flex-col justify-between">
                    <div>
                        <h4 className="text-accent uppercase text-xs tracking-widest mb-2">Key Benefits</h4>
                        <ul className="list-disc list-inside text-sub space-y-1 marker:text-accent">
                        {program.effects.map((effect, i) => (
                            <li key={i}>{effect}</li>
                        ))}
                        </ul>
                    </div>
                    
                    <button 
                        onClick={(e) => {
                            e.stopPropagation();
                            handleOpenDetail(program);
                        }}
                        className="mt-8 md:mt-0 w-full md:w-auto border border-white/20 text-white px-6 py-3 uppercase text-xs tracking-widest hover:bg-white hover:text-black transition-colors self-start"
                    >
                        {t("View Details", "View Details", "詳細を見る", "Lihat Detail")}
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Detail Modal */}
      <Modal
        isOpen={!!selectedProgram}
        onClose={handleCloseDetail}
        title={selectedProgram?.title || ''}
        footer={
            <div className="w-full flex flex-col md:flex-row gap-4 items-center justify-between">
                <p className="text-xs text-sub hidden md:block">
                   {t(
                     "* 선발 과정을 통해 참여가 확정됩니다.", 
                     "* Participation is confirmed through a selection process.",
                     "* 選抜過程を通じて参加が確定します。",
                     "* Partisipasi dikonfirmasi melalui proses seleksi."
                   )}
                </p>
                <button 
                    className="w-full md:w-auto bg-accent text-white font-bold py-4 px-12 text-sm uppercase tracking-widest hover:bg-white hover:text-accent transition-colors shadow-lg shadow-accent/20"
                    onClick={() => selectedProgram && handleApply(selectedProgram)}
                >
                    {t("Apply for Next Batch", "Apply for Next Batch", "次期バッチに申し込む", "Daftar untuk Batch Berikutnya")}
                </button>
            </div>
        }
      >
        {selectedProgram && (
            <div className="space-y-12 text-white">
                {/* Core Value */}
                <div className="relative pl-8">
                    <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-accent to-transparent"></div>
                    <h3 className="text-accent text-xs uppercase tracking-[0.3em] mb-4">Core Philosophy</h3>
                    <p className="text-xl md:text-2xl font-light leading-relaxed text-white/90">
                        "{selectedProgram.details.coreValue}"
                    </p>
                </div>

                {/* Structure */}
                <div className="space-y-8">
                    <h3 className="text-accent text-xs uppercase tracking-[0.3em] border-b border-white/10 pb-4">Curriculum Structure</h3>
                    <div className="grid grid-cols-1 gap-6">
                        {selectedProgram.details.structure.map((struct, idx) => (
                            <div key={idx} className="bg-[#222] p-8 border-l-4 border-white/10 hover:border-accent transition-colors">
                                <h4 className="font-bold text-xl mb-4 text-white">{struct.title}</h4>
                                <ul className="space-y-3">
                                    {struct.items.map((item, i) => (
                                        <li key={i} className="text-sub text-sm flex items-start leading-relaxed">
                                            <span className="text-accent mr-3 mt-1.5 w-1 h-1 bg-accent rounded-full block flex-shrink-0"></span>
                                            {item}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Differentiation / Philosophy */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {selectedProgram.details.differentiation && (
                         <div className="space-y-4">
                            <h3 className="text-accent text-xs uppercase tracking-[0.3em] border-b border-white/10 pb-2">Why Different?</h3>
                            <ul className="space-y-3">
                                {selectedProgram.details.differentiation.map((item, i) => (
                                    <li key={i} className="text-sm text-sub border border-white/10 p-4 bg-white/5">
                                        {item}
                                    </li>
                                ))}
                            </ul>
                         </div>
                    )}

                    {selectedProgram.details.philosophies && (
                         <div className="space-y-4">
                            <h3 className="text-accent text-xs uppercase tracking-[0.3em] border-b border-white/10 pb-2">Keywords</h3>
                            <div className="flex flex-wrap gap-3">
                                {selectedProgram.details.philosophies.map((item, i) => (
                                    <span key={i} className="border border-accent/50 text-accent px-4 py-2 text-sm tracking-wide bg-accent/5">
                                        #{item}
                                    </span>
                                ))}
                            </div>
                         </div>
                    )}
                </div>

                {/* References / Marketing Points */}
                {(selectedProgram.details.marketingPoint || selectedProgram.details.references) && (
                    <div className="bg-gradient-to-r from-accent/10 to-transparent p-6 border-l-4 border-accent mt-8">
                         {selectedProgram.details.marketingPoint && (
                            <div className="mb-6">
                                <span className="block text-xs text-accent uppercase tracking-widest mb-2 font-bold">Recommended</span>
                                <a href={selectedProgram.details.marketingPoint.url} target="_blank" rel="noreferrer" className="inline-flex items-center text-lg text-white font-bold hover:text-accent transition-colors">
                                    {selectedProgram.details.marketingPoint.label} 
                                    <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
                                </a>
                            </div>
                         )}
                         {selectedProgram.details.references && (
                            <div>
                                <span className="block text-xs text-accent uppercase tracking-widest mb-2 font-bold">Data & References</span>
                                <ul className="space-y-2">
                                    {selectedProgram.details.references.map((ref, i) => (
                                        <li key={i}>
                                            <a href={ref.url} className="text-xs text-sub hover:text-white transition-colors flex items-center">
                                                <span className="w-1 h-1 bg-white/50 rounded-full mr-2"></span>
                                                {ref.title}
                                            </a>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                         )}
                    </div>
                )}
            </div>
        )}
      </Modal>
    </section>
  );
};

export default ProgramSection;