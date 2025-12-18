import React, { useState } from 'react';
import Modal from '../ui/Modal';
import { useLanguage } from '../../contexts/LanguageContext';

// Expanded Mock Data (approx 20 items)
const ALL_CONCERNS_KO = [
  // TEAM
  { tag: "TEAM", time: "2 hours ago", title: "공동창업자가 번아웃으로 퇴사를 고민하고 있습니다.", stats: "💬 5 · 👀 42" },
  { tag: "TEAM", time: "3 days ago", title: "초기 멤버에게 스톡옵션을 얼마나 부여해야 적절할까요?", stats: "💬 12 · 👀 150" },
  { tag: "TEAM", time: "1 week ago", title: "개발자 채용이 너무 어렵습니다. 비개발 대표님들 노하우 있으신가요?", stats: "💬 8 · 👀 98" },
  { tag: "TEAM", time: "1 week ago", title: "팀원 간 불화가 생겼을 때, 대표가 어디까지 개입해야 할까요?", stats: "💬 6 · 👀 77" },
  
  // FUNDING
  { tag: "FUNDING", time: "Yesterday", title: "엔젤 투자 유치 시 초기 밸류에이션 산정 기준이 궁금합니다.", stats: "💬 12 · 👀 108" },
  { tag: "FUNDING", time: "4 days ago", title: "팁스(TIPS) 운영사 컨택 시 콜드메일 팁 공유 부탁드립니다.", stats: "💬 15 · 👀 210" },
  { tag: "FUNDING", time: "2 weeks ago", title: "Pre-A 단계에서 전략적 투자자(SI)를 받는 게 맞을까요?", stats: "💬 9 · 👀 130" },
  { tag: "FUNDING", time: "2 weeks ago", title: "런웨이가 6개월 남았습니다. 지금 브릿지 라운드를 열어야 할까요?", stats: "💬 21 · 👀 405" },

  // PRODUCT & GTM
  { tag: "PRODUCT", time: "5 days ago", title: "초기 유저 리텐션이 10%대에서 오르지 않습니다. 조언 구합니다.", stats: "💬 15 · 👀 210" },
  { tag: "PRODUCT", time: "1 week ago", title: "MVP 개발 시 외주 vs 내부 채용, 어떤 선택을 하셨나요?", stats: "💬 18 · 👀 220" },
  { tag: "GTM", time: "2 days ago", title: "B2B 세일즈 리드 타임이 너무 깁니다. 단축시키는 팁이 있을까요?", stats: "💬 8 · 👀 65" },
  { tag: "GTM", time: "3 days ago", title: "인스타그램 광고 효율이 급락했습니다. 대체 채널 추천 부탁드립니다.", stats: "💬 11 · 👀 140" },
  { tag: "GTM", time: "5 days ago", title: "첫 유료 고객 전환을 만들어낸 결정적인 계기가 무엇이었나요?", stats: "💬 25 · 👀 330" },

  // LEGAL & OPS
  { tag: "LEGAL", time: "3 days ago", title: "주주간계약서 작성 시 독소조항 체크리스트 공유해주실 분?", stats: "💬 4 · 👀 30" },
  { tag: "OPS", time: "1 week ago", title: "법인 설립 등기 셀프로 하신 분 계신가요? 팁 부탁드립니다.", stats: "💬 3 · 👀 45" },

  // MENTAL & PIVOT
  { tag: "PIVOT", time: "1 week ago", title: "지금 아이템을 접고 피벗을 해야 할지, 조금 더 밀어붙여야 할지...", stats: "💬 22 · 👀 350" },
  { tag: "MENTAL", time: "2 days ago", title: "매일 밤 잠이 안 옵니다. 창업가분들 멘탈 관리 어떻게 하시나요?", stats: "💬 30 · 👀 500" },
  { tag: "MENTAL", time: "3 days ago", title: "가족들의 반대와 걱정, 어떻게 설득하고 버티시나요?", stats: "💬 14 · 👀 180" },
  { tag: "PIVOT", time: "2 weeks ago", title: "피벗 후 팀원들을 설득하는 과정이 너무 힘듭니다.", stats: "💬 7 · 👀 90" },
];

const ALL_CONCERNS_EN = [
  // TEAM
  { tag: "TEAM", time: "2 hours ago", title: "My co-founder is considering quitting due to burnout.", stats: "💬 5 · 👀 42" },
  { tag: "TEAM", time: "3 days ago", title: "How much stock option is appropriate for early members?", stats: "💬 12 · 👀 150" },
  { tag: "TEAM", time: "1 week ago", title: "Hiring devs is too hard. Any tips from non-dev founders?", stats: "💬 8 · 👀 98" },
  { tag: "TEAM", time: "1 week ago", title: "How much should a CEO intervene in team conflicts?", stats: "💬 6 · 👀 77" },
  
  // FUNDING
  { tag: "FUNDING", time: "Yesterday", title: "Curious about early valuation criteria for Angel investment.", stats: "💬 12 · 👀 108" },
  { tag: "FUNDING", time: "4 days ago", title: "Please share tips on cold emailing TIPS operators.", stats: "💬 15 · 👀 210" },
  { tag: "FUNDING", time: "2 weeks ago", title: "Should we accept Strategic Investors (SI) at Pre-A stage?", stats: "💬 9 · 👀 130" },
  { tag: "FUNDING", time: "2 weeks ago", title: "6 months of runway left. Should we open a bridge round?", stats: "💬 21 · 👀 405" },

  // PRODUCT & GTM
  { tag: "PRODUCT", time: "5 days ago", title: "Early user retention stuck at 10%. Need advice.", stats: "💬 15 · 👀 210" },
  { tag: "PRODUCT", time: "1 week ago", title: "MVP development: Outsourcing vs In-house? What was your choice?", stats: "💬 18 · 👀 220" },
  { tag: "GTM", time: "2 days ago", title: "B2B sales lead time is too long. Any tips to shorten it?", stats: "💬 8 · 👀 65" },
  { tag: "GTM", time: "3 days ago", title: "Instagram ad efficiency dropped. Recommend alternative channels?", stats: "💬 11 · 👀 140" },
  { tag: "GTM", time: "5 days ago", title: "What was the decisive moment for your first paid customer conversion?", stats: "💬 25 · 👀 330" },

  // LEGAL & OPS
  { tag: "LEGAL", time: "3 days ago", title: "Anyone willing to share a toxic clause checklist for SHA?", stats: "💬 4 · 👀 30" },
  { tag: "OPS", time: "1 week ago", title: "Has anyone done self-incorporation? Tips please.", stats: "💬 3 · 👀 45" },

  // MENTAL & PIVOT
  { tag: "PIVOT", time: "1 week ago", title: "Should I fold this item and pivot, or push a bit more...", stats: "💬 22 · 👀 350" },
  { tag: "MENTAL", time: "2 days ago", title: "Can't sleep every night. How do you manage mental health?", stats: "💬 30 · 👀 500" },
  { tag: "MENTAL", time: "3 days ago", title: "Family opposition and worry, how do you persuade and endure?", stats: "💬 14 · 👀 180" },
  { tag: "PIVOT", time: "2 weeks ago", title: "Persuading the team after pivot is so hard.", stats: "💬 7 · 👀 90" },
];

const ALL_CONCERNS_JP = [
  // TEAM
  { tag: "TEAM", time: "2 hours ago", title: "共同創業者が燃え尽き症候群で退職を考えています。", stats: "💬 5 · 👀 42" },
  { tag: "TEAM", time: "3 days ago", title: "初期メンバーにストックオプションをどれくらい付与すべきでしょうか？", stats: "💬 12 · 👀 150" },
  { tag: "TEAM", time: "1 week ago", title: "開発者の採用が難しすぎます。非開発出身の代表の方、ノウハウはありますか？", stats: "💬 8 · 👀 98" },
  { tag: "TEAM", time: "1 week ago", title: "チームメンバー間の不和が生じた時、代表はどこまで介入すべきでしょうか？", stats: "💬 6 · 👀 77" },
  
  // FUNDING
  { tag: "FUNDING", time: "Yesterday", title: "エンジェル投資誘致時の初期バリュエーション算定基準が気になります。", stats: "💬 12 · 👀 108" },
  { tag: "FUNDING", time: "4 days ago", title: "TIPS運営会社へのコンタクト時、コールドメールのコツを共有してください。", stats: "💬 15 · 👀 210" },
  { tag: "FUNDING", time: "2 weeks ago", title: "Pre-A段階で戦略的投資家(SI)を受けるべきでしょうか？", stats: "💬 9 · 👀 130" },
  { tag: "FUNDING", time: "2 weeks ago", title: "ランウェイが残り6ヶ月です。今ブリッジラウンドを開くべきでしょうか？", stats: "💬 21 · 👀 405" },

  // PRODUCT & GTM
  { tag: "PRODUCT", time: "5 days ago", title: "初期ユーザーのリテンションが10%台から上がりません。アドバイスをお願いします。", stats: "💬 15 · 👀 210" },
  { tag: "PRODUCT", time: "1 week ago", title: "MVP開発時、外注 vs 内部採用、どちらを選択しましたか？", stats: "💬 18 · 👀 220" },
  { tag: "GTM", time: "2 days ago", title: "B2Bセールスのリードタイムが長すぎます。短縮するコツはありますか？", stats: "💬 8 · 👀 65" },
  { tag: "GTM", time: "3 days ago", title: "インスタグラム広告の効率が急落しました。代替チャンネルの推薦をお願いします。", stats: "💬 11 · 👀 140" },
  { tag: "GTM", time: "5 days ago", title: "最初の有料顧客転換を生み出した決定的なきっかけは何でしたか？", stats: "💬 25 · 👀 330" },

  // LEGAL & OPS
  { tag: "LEGAL", time: "3 days ago", title: "株主間契約書作成時、毒素条項チェックリストを共有してくださる方？", stats: "💬 4 · 👀 30" },
  { tag: "OPS", time: "1 week ago", title: "法人設立登記を自分で行った方はいらっしゃいますか？", stats: "💬 3 · 👀 45" },

  // MENTAL & PIVOT
  { tag: "PIVOT", time: "1 week ago", title: "今のアイテムを畳んでピボットすべきか、もう少し粘るべきか...", stats: "💬 22 · 👀 350" },
  { tag: "MENTAL", time: "2 days ago", title: "毎晩眠れません。起業家の皆さん、メンタル管理はどうしていますか？", stats: "💬 30 · 👀 500" },
  { tag: "MENTAL", time: "3 days ago", title: "家族の反対や心配、どう説得して耐えていますか？", stats: "💬 14 · 👀 180" },
  { tag: "PIVOT", time: "2 weeks ago", title: "ピボット後、チームメンバーを説得する過程がとても辛いです。", stats: "💬 7 · 👀 90" },
];

const ALL_CONCERNS_IN = [
  // TEAM
  { tag: "TEAM", time: "2 hours ago", title: "Rekan pendiri saya mempertimbangkan untuk berhenti karena burnout.", stats: "💬 5 · 👀 42" },
  { tag: "TEAM", time: "3 days ago", title: "Berapa banyak opsi saham yang wajar untuk anggota awal?", stats: "💬 12 · 👀 150" },
  { tag: "TEAM", time: "1 week ago", title: "Merekrut developer sangat sulit. Ada tips dari pendiri non-teknis?", stats: "💬 8 · 👀 98" },
  { tag: "TEAM", time: "1 week ago", title: "Sejauh mana CEO harus campur tangan dalam konflik tim?", stats: "💬 6 · 👀 77" },
  
  // FUNDING
  { tag: "FUNDING", time: "Yesterday", title: "Penasaran tentang kriteria valuasi awal untuk investasi Angel.", stats: "💬 12 · 👀 108" },
  { tag: "FUNDING", time: "4 days ago", title: "Mohon bagikan tips tentang cold email ke operator TIPS.", stats: "💬 15 · 👀 210" },
  { tag: "FUNDING", time: "2 weeks ago", title: "Haruskah kita menerima Investor Strategis (SI) pada tahap Pre-A?", stats: "💬 9 · 👀 130" },
  { tag: "FUNDING", time: "2 weeks ago", title: "Sisa runway 6 bulan. Haruskah kita membuka putaran bridge?", stats: "💬 21 · 👀 405" },

  // PRODUCT & GTM
  { tag: "PRODUCT", time: "5 days ago", title: "Retensi pengguna awal tertahan di 10%. Butuh saran.", stats: "💬 15 · 👀 210" },
  { tag: "PRODUCT", time: "1 week ago", title: "Pengembangan MVP: Outsourcing vs In-house? Apa pilihan Anda?", stats: "💬 18 · 👀 220" },
  { tag: "GTM", time: "2 days ago", title: "Waktu tunggu penjualan B2B terlalu lama. Ada tips untuk mempersingkatnya?", stats: "💬 8 · 👀 65" },
  { tag: "GTM", time: "3 days ago", title: "Efisiensi iklan Instagram turun drastis. Ada rekomendasi saluran alternatif?", stats: "💬 11 · 👀 140" },
  { tag: "GTM", time: "5 days ago", title: "Apa momen penentu konversi pelanggan berbayar pertama Anda?", stats: "💬 25 · 👀 330" },

  // LEGAL & OPS
  { tag: "LEGAL", time: "3 days ago", title: "Ada yang bersedia membagikan daftar periksa klausul beracun untuk SHA?", stats: "💬 4 · 👀 30" },
  { tag: "OPS", time: "1 week ago", title: "Ada yang pernah melakukan pendirian perusahaan sendiri? Mohon tipsnya.", stats: "💬 3 · 👀 45" },

  // MENTAL & PIVOT
  { tag: "PIVOT", time: "1 week ago", title: "Haruskah saya menutup item ini dan pivot, atau mendorong sedikit lagi...", stats: "💬 22 · 👀 350" },
  { tag: "MENTAL", time: "2 days ago", title: "Tidak bisa tidur setiap malam. Bagaimana Anda mengelola kesehatan mental?", stats: "💬 30 · 👀 500" },
  { tag: "MENTAL", time: "3 days ago", title: "Penolakan dan kekhawatiran keluarga, bagaimana Anda membujuk dan bertahan?", stats: "💬 14 · 👀 180" },
  { tag: "PIVOT", time: "2 weeks ago", title: "Membujuk tim setelah pivot sangat sulit.", stats: "💬 7 · 👀 90" },
];

const CATEGORIES = ["All", "TEAM", "FUNDING", "PRODUCT", "GTM", "LEGAL", "MENTAL", "PIVOT"];

const ReviewSection: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState("All");
  const { t, language } = useLanguage();

  let concerns = ALL_CONCERNS_EN;
  if (language === 'ko') concerns = ALL_CONCERNS_KO;
  else if (language === 'jp') concerns = ALL_CONCERNS_JP;
  else if (language === 'in') concerns = ALL_CONCERNS_IN;

  const filteredConcerns = selectedCategory === "All" 
    ? concerns 
    : concerns.filter(c => c.tag === selectedCategory);

  return (
    <section id="reviews" className="min-h-screen bg-bg py-24 border-t border-white/5">
      <div className="container mx-auto px-6">
        <div className="flex items-baseline space-x-4 mb-16">
          <h2 className="text-6xl font-thin text-accent">%</h2>
          <h2 className="text-3xl font-bold tracking-tighter uppercase">Reviews & Concerns</h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
          
          {/* Left: Concern Board Preview */}
          <div>
            <h3 className="text-xl font-bold mb-4 border-l-4 border-accent pl-4">Member Concerns</h3>
            <p className="text-sm text-sub mb-8 leading-relaxed">
              {t(
                "사업, 팀, 자금, 개인의 고민까지.",
                "Business, Team, Funding, and Personal concerns.",
                "事業、チーム、資金、個人の悩みまで。",
                "Bisnis, Tim, Pendanaan, hingga masalah Pribadi."
              )}<br/>
              {t(
                "ud.crew 멤버들이 솔직하게 나누고 있는 고민들을 확인해보세요.",
                "Check out the honest concerns shared by ud.crew members.",
                "ud.crewメンバーが率直に共有している悩みを確認してみてください。",
                "Lihat kekhawatiran jujur yang dibagikan oleh anggota ud.crew."
              )}
            </p>

            {/* Board List Preview (First 4 items) */}
            <div className="space-y-4 mb-8">
                {concerns.slice(0, 4).map((item, idx) => (
                    <div key={idx} className="bg-white/5 border border-white/5 p-6 hover:border-accent/30 transition-colors cursor-pointer">
                        <div className="flex space-x-2 mb-2">
                            <span className="text-[10px] bg-white/10 px-2 py-0.5 rounded text-sub font-bold">{item.tag}</span>
                            <span className="text-[10px] text-white/30">{item.time}</span>
                        </div>
                        <h4 className="text-white font-medium hover:underline decoration-accent underline-offset-4">
                            {item.title}
                        </h4>
                        <div className="flex items-center space-x-4 mt-3 text-xs text-white/40">
                            <span>{item.stats}</span>
                        </div>
                    </div>
                ))}
            </div>

            <button 
                onClick={() => setIsModalOpen(true)}
                className="bg-accent text-white font-bold py-3 px-8 text-sm uppercase tracking-widest hover:bg-white hover:text-accent transition-colors w-full md:w-auto"
            >
                {t("Go to Board", "Go to Board", "掲示板へ", "Buka Papan")}
            </button>
          </div>

          {/* Right: UDBR Case Study */}
          <div>
            <div className="flex justify-between items-end mb-8">
                <h3 className="text-xl font-bold border-l-4 border-white pl-4">UDBR</h3>
                <span className="text-xs text-sub tracking-widest">Underdogs Business Review</span>
            </div>
            
            <div className="group cursor-pointer">
                {/* Image Placeholder */}
                <div className="w-full h-64 bg-gray-700 mb-6 relative overflow-hidden grayscale group-hover:grayscale-0 transition-all duration-500">
                    <img src="https://picsum.photos/800/400?grayscale" alt="Case Study" className="w-full h-full object-cover opacity-60 group-hover:scale-105 transition-transform duration-700"/>
                    <div className="absolute top-4 left-4 bg-accent text-white text-[10px] font-bold px-2 py-1 uppercase tracking-wider">
                        Case Study #01
                    </div>
                </div>

                <div className="space-y-4">
                    <div className="flex space-x-2 text-[10px] text-accent font-mono uppercase">
                        <span>#매출정체</span>
                        <span>#퍼포먼스마케팅</span>
                        <span>#리텐션</span>
                    </div>
                    <h4 className="text-2xl font-bold leading-tight group-hover:text-accent transition-colors">
                        {t(
                            "월 매출 3천만 원에서 성장이 멈춘 D2C 브랜드, 무엇이 병목이었나",
                            "D2C Brand Stuck at 30M KRW Monthly Revenue: What was the Bottleneck?",
                            "月商3千万ウォンで成長が止まったD2Cブランド、何がボトルネックだったのか",
                            "Merek D2C Terhenti di Pendapatan Bulanan 30 Juta KRW: Apa yang Menjadi Hambatan?"
                        )}
                    </h4>
                    <p className="text-sm text-sub leading-relaxed border-l border-white/20 pl-4">
                        {t(
                            "성공적인 초기 론칭 이후 6개월째 같은 매출을 유지하고 있는 D2C 브랜드의 사례. 퍼포먼스 광고 효율 저하와 함께 '재구매 구조'가 설계되지 않은 채 성장해온 비즈니스의 문제를 정밀 분석합니다.",
                            "A case study of a D2C brand maintaining the same revenue for 6 months after a successful launch. We analyze the issues of a business growing without a 'repurchase structure' alongside declining ad efficiency.",
                            "成功的な初期ローンチ後、6ヶ月間同じ売上を維持しているD2Cブランドの事例。パフォーマンス広告効率の低下とともに「再購入構造」が設計されないまま成長してきたビジネスの問題を精密分析します。",
                            "Studi kasus merek D2C yang mempertahankan pendapatan yang sama selama 6 bulan setelah peluncuran awal yang sukses. Kami menganalisis masalah bisnis yang tumbuh tanpa 'struktur pembelian ulang' di samping penurunan efisiensi iklan."
                        )}
                    </p>
                    <div className="pt-4">
                        <span className="text-xs border-b border-accent pb-1">Read Full Case &rarr;</span>
                    </div>
                </div>
            </div>

            {/* List Item 2 (Small) */}
            <div className="mt-12 pt-8 border-t border-white/10 flex items-start space-x-4 opacity-60 hover:opacity-100 transition-opacity cursor-pointer">
                <div className="w-24 h-16 bg-gray-800 flex-shrink-0"></div>
                <div>
                    <h5 className="font-bold text-sm mb-1 hover:text-accent">
                        {t("초기 팀 빌딩, 지분 구조 설계의 함정", "Pitfalls of Early Team Building and Equity Structure", "初期チームビルディング、持分構造設計の落とし穴", "Jebakan Pembangunan Tim Awal dan Struktur Ekuitas")}
                    </h5>
                    <p className="text-xs text-sub">
                        {t("공동창업자 간 갈등을 미연에 방지하는 계약 가이드", "Contract guide to prevent co-founder conflicts", "共同創業者間の葛藤を未然に防ぐ契約ガイド", "Panduan kontrak untuk mencegah konflik antar pendiri")}
                    </p>
                </div>
            </div>
          </div>
        </div>

        {/* Board Modal */}
        <Modal 
            isOpen={isModalOpen} 
            onClose={() => setIsModalOpen(false)}
            title="Concern Board"
        >
            <div className="space-y-6">
                <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-4 border-b border-white/10 pb-4">
                     {/* Category Filter */}
                    <div className="flex flex-wrap gap-2">
                        {CATEGORIES.map(cat => (
                            <button
                                key={cat}
                                onClick={() => setSelectedCategory(cat)}
                                className={`px-3 py-1.5 text-[10px] uppercase tracking-wider transition-colors rounded ${
                                    selectedCategory === cat 
                                    ? 'bg-accent text-white font-bold' 
                                    : 'bg-white/5 text-sub hover:bg-white/10'
                                }`}
                            >
                                {cat}
                            </button>
                        ))}
                    </div>
                    
                    <button 
                        onClick={() => alert(t("고민 작성 폼이 열립니다.", "Concern form will open.", "悩み作成フォームが開きます。", "Formulir kekhawatiran akan terbuka."))}
                        className="text-xs border border-accent text-accent px-4 py-2 hover:bg-accent hover:text-white transition-colors flex-shrink-0"
                    >
                        {t("Write a Concern", "Write a Concern", "悩みを書く", "Tulis Kekhawatiran")}
                    </button>
                </div>

                <div className="space-y-1">
                    <div className="text-xs text-sub mb-2 text-right">Total {filteredConcerns.length} posts</div>
                    {filteredConcerns.map((item, idx) => (
                        <div key={idx} className="group flex flex-col md:flex-row md:items-center justify-between p-4 border-b border-white/5 hover:bg-white/5 transition-colors cursor-pointer">
                            <div className="flex-1">
                                <div className="flex items-center space-x-3 mb-1">
                                    <span className="text-[10px] text-accent font-bold bg-accent/10 px-1.5 py-0.5 rounded min-w-[50px] text-center">{item.tag}</span>
                                    <span className="text-[10px] text-white/30">{item.time}</span>
                                </div>
                                <h4 className="text-base font-medium text-white group-hover:text-accent transition-colors">
                                    {item.title}
                                </h4>
                            </div>
                            <div className="mt-2 md:mt-0 md:ml-4 text-xs text-white/40 min-w-[120px] text-right">
                                {item.stats}
                            </div>
                        </div>
                    ))}
                    
                    {filteredConcerns.length === 0 && (
                        <div className="text-center text-sub py-12">
                            {t("게시물이 없습니다.", "No posts found.", "投稿がありません。", "Tidak ada postingan.")}
                        </div>
                    )}
                </div>
            </div>
        </Modal>
    </section>
  );
};

export default ReviewSection;