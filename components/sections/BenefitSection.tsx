import React, { useState } from 'react';
import { Partner } from '../../types';
import Modal from '../ui/Modal';
import { useLanguage } from '../../contexts/LanguageContext';

// Extended Mock Data for "View All" and Slider
const ALL_PARTNERS = [
  { category: "SaaS", name: "AWS Activate", desc: "Cloud Infra", benefit: "$5,000 Credits" },
  { category: "SaaS", name: "Notion", desc: "Workspace & Wiki", benefit: "6 Months Plus" },
  { category: "SaaS", name: "Slack", desc: "Communication", benefit: "30% Off Standard" },
  { category: "SaaS", name: "Stibee", desc: "Email Marketing", benefit: "3 Months Standard" },
  { category: "SaaS", name: "Channel.io", desc: "CRM & Chat", benefit: "3 Months Free" },
  { category: "SaaS", name: "Relate", desc: "B2B Sales CRM", benefit: "Early Bird Access" },
  { category: "SaaS", name: "Figma", desc: "Design Tool", benefit: "Edu Plan Access" },
  
  { category: "Legal/Fin", name: "Law Firm A", desc: "Legal Consulting", benefit: "Free Initial Consult" },
  { category: "Legal/Fin", name: "Accounting B", desc: "Tax & Finance", benefit: "20% Off Yearly" },
  { category: "Legal/Fin", name: "QuotaBook", desc: "Equity Mgmt", benefit: "3 Months Free" },
  { category: "Legal/Fin", name: "ZUZU", desc: "Stock Option", benefit: "Setup Fee Waived" },
  
  { category: "Space", name: "WeWork", desc: "Shared Office", benefit: "15% Off All Access" },
  { category: "Space", name: "Local Stitch", desc: "Co-living/working", benefit: "Member Discount" },
  
  { category: "Dev/Design", name: "Kmong", desc: "Outsourcing", benefit: "Discount Coupon" },
  { category: "Dev/Design", name: "Elancer", desc: "Freelancer Matching", benefit: "Priority Matching" },
];

// Duplicate data to create seamless infinite scroll
const SLIDER_ITEMS = [...ALL_PARTNERS, ...ALL_PARTNERS];

const CATEGORIES = ["All", "SaaS", "Legal/Fin", "Space", "Dev/Design"];

const BenefitSection: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState("All");
  const { t } = useLanguage();

  const filteredPartners = selectedCategory === "All" 
    ? ALL_PARTNERS 
    : ALL_PARTNERS.filter(p => p.category === selectedCategory);

  return (
    <section id="benefits" className="min-h-screen bg-[#323332] py-24 border-t border-white/5 flex flex-col justify-center">
      <div className="container mx-auto px-6 mb-12">
        <div className="flex items-baseline space-x-4 mb-8">
          <h2 className="text-6xl font-thin text-accent">-</h2>
          <h2 className="text-3xl font-bold tracking-tighter uppercase">Partners & Benefits</h2>
        </div>
        <p className="text-sub max-w-2xl leading-relaxed">
          {t(
            "ud.crew 멤버에게만 열려 있는 파트너십과 혜택들입니다.",
            "Partnerships and benefits exclusively for ud.crew members.",
            "ud.crewメンバーだけに開かれているパートナーシップと特典です。",
            "Kemitraan dan manfaat eksklusif untuk anggota ud.crew."
          )}
          <br/>
          {t(
            "비즈니스에 필요한 필수 SaaS부터 법률, 공간 혜택까지 크루원들을 위해 준비했습니다.",
            "From essential SaaS for business to legal and space benefits, we have prepared them for crew members.",
            "ビジネスに必要な必須SaaSから法律、空間の特典まで、クルーのために用意しました。",
            "Dari SaaS penting untuk bisnis hingga manfaat hukum dan ruang, kami telah menyiapkannya untuk anggota kru."
          )}
        </p>
      </div>

      {/* Infinite Slider */}
      <div className="relative w-full overflow-hidden mb-16">
        {/* Gradient Fade Masks */}
        <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-[#323332] to-transparent z-10 pointer-events-none"></div>
        <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-[#323332] to-transparent z-10 pointer-events-none"></div>

        <div className="flex w-max animate-scroll pause-animation">
          {SLIDER_ITEMS.map((partner, index) => (
            <div 
              key={index} 
              className="group relative bg-bg border border-white/10 p-8 w-[320px] mx-4 hover:border-accent transition-all duration-300 flex-shrink-0 cursor-pointer"
              onClick={() => alert(t("로그인한 멤버에게 별도 코드가 발급됩니다.", "A separate code will be issued to logged-in members.", "ログインしたメンバーに別途コードが発行されます。", "Kode terpisah akan diberikan kepada anggota yang masuk."))}
            >
               <div className="absolute top-0 right-0 w-0 h-0 border-t-[40px] border-t-accent/10 border-l-[40px] border-l-transparent group-hover:border-t-accent transition-colors"></div>
              
              <div className="flex justify-between items-start mb-6">
                <div className="w-10 h-10 bg-white/10 flex items-center justify-center text-xs text-white/30 font-bold rounded-sm">
                    {partner.name.substring(0, 2).toUpperCase()}
                </div>
                <span className="text-[10px] border border-white/10 px-2 py-1 text-white/40 rounded-full">{partner.category}</span>
              </div>
              
              <h3 className="text-lg font-bold text-white mb-1 group-hover:text-accent transition-colors truncate">{partner.name}</h3>
              <p className="text-xs text-sub uppercase tracking-wider mb-6 opacity-70">{partner.desc}</p>
              
              <div className="border-t border-white/10 pt-4">
                <span className="text-accent font-medium text-sm block truncate">{partner.benefit}</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="container mx-auto px-6">
        {/* Action Buttons */}
        <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-6 justify-center">
            <button 
                onClick={() => alert(t("제휴 제안 폼이 열립니다.", "Partnership proposal form will open.", "提携提案フォームが開きます。", "Formulir proposal kemitraan akan terbuka."))}
                className="px-8 py-4 border border-accent text-accent hover:bg-accent hover:text-white transition-all uppercase text-sm tracking-widest font-bold"
            >
                {t("제휴 등록 신청", "Apply for Partnership", "提携登録申請", "Daftar Kemitraan")}
            </button>
            <button 
                onClick={() => setIsModalOpen(true)}
                className="px-8 py-4 border border-white/20 text-sub hover:bg-white hover:text-bg transition-all uppercase text-sm tracking-widest"
            >
                {t("전체 제휴 리스트 보기", "View All Partners", "全提携リストを見る", "Lihat Semua Mitra")}
            </button>
        </div>
        <p className="text-center text-white/30 text-xs mt-6">
            {t("혜택을 크루원들에게 나누고 싶다면 언제든 등록해주세요.", "If you want to share benefits with crew members, please register anytime.", "特典をクルーに分けたい場合はいつでも登録してください。", "Jika Anda ingin berbagi manfaat dengan anggota kru, silakan daftar kapan saja.")}
        </p>
      </div>

      {/* Partners List Modal */}
      <Modal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        title="All Partners"
      >
        <div className="space-y-6">
            {/* Category Filter */}
            <div className="flex flex-wrap gap-2 border-b border-white/10 pb-4">
                {CATEGORIES.map(cat => (
                    <button
                        key={cat}
                        onClick={() => setSelectedCategory(cat)}
                        className={`px-4 py-2 text-xs uppercase tracking-wider transition-colors ${
                            selectedCategory === cat 
                            ? 'bg-accent text-white font-bold' 
                            : 'bg-white/5 text-sub hover:bg-white/10'
                        }`}
                    >
                        {cat}
                    </button>
                ))}
            </div>

            {/* List */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {filteredPartners.map((item, idx) => (
                    <div key={idx} className="bg-[#222] border border-white/5 p-4 hover:border-accent/50 transition-colors flex justify-between items-center group">
                        <div>
                            <div className="flex items-center space-x-2 mb-1">
                                <span className="text-[10px] text-white/40 border border-white/10 px-1 rounded">{item.category}</span>
                                <h4 className="font-bold text-white group-hover:text-accent">{item.name}</h4>
                            </div>
                            <p className="text-xs text-sub mb-2">{item.desc}</p>
                            <span className="text-xs text-accent font-medium">{item.benefit}</span>
                        </div>
                        <button className="text-[10px] border border-white/20 px-3 py-1 text-white hover:bg-white hover:text-black transition-colors">
                            VIEW
                        </button>
                    </div>
                ))}
            </div>
            
            {filteredPartners.length === 0 && (
                <div className="text-center text-sub py-12">
                    {t("해당 카테고리의 제휴사가 없습니다.", "No partners in this category.", "該当カテゴリーの提携先がありません。", "Tidak ada mitra dalam kategori ini.")}
                </div>
            )}
        </div>
      </Modal>
    </section>
  );
};

export default BenefitSection;