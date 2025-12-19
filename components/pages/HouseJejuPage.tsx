
import React, { useEffect } from 'react';
import { NavigationProps } from '../../types';
import { useLanguage } from '../../contexts/LanguageContext';

const HouseJejuPage: React.FC<NavigationProps> = ({ onNavigate }) => {
  const { t } = useLanguage();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-bg text-white pt-24 pb-12 font-sans">
      {/* Header */}
      <div className="container mx-auto px-6 mb-12">
        <button 
          onClick={() => onNavigate('home')}
          className="text-sub hover:text-accent mb-8 text-sm uppercase tracking-widest flex items-center transition-colors"
        >
          &larr; {t("Back to Lounge", "Back to Lounge", "ラウンジに戻る", "Kembali ke Lounge")}
        </button>
        
        <div className="border-l-4 border-accent pl-6 animate-fade-in">
          <h1 className="text-4xl md:text-6xl font-bold uppercase tracking-tighter mb-4">
            Underdogs House Jeju
          </h1>
          <p className="text-xl md:text-2xl text-sub font-light leading-relaxed max-w-4xl">
            {t(
              "글로벌 진출을 고민하는 창업가들이 회사를 멈추지 않은 채,",
              "Founders considering global expansion without stopping their business,",
              "グローバル進出を検討している創業者が事業を止めずに、",
              "Pendiri yang mempertimbangkan ekspansi global tanpa menghentikan bisnis mereka,"
            )}<br/>
            <span className="text-white font-medium">
              {t(
                "함께 살고·일하고·서로의 진출을 대신 고민해주는 글로벌 레지던시",
                "A global residency where you live, work, and brainstorm together.",
                "共に暮らし、働き、互いの進出を共に考えるグローバルレジデンシー",
                "Residensi global tempat Anda tinggal, bekerja, 및 bertukar pikiran bersama."
              )}
            </span>
          </p>
        </div>
      </div>

      <div className="container mx-auto px-6 grid grid-cols-1 lg:grid-cols-3 gap-16">
        
        {/* Left Column: Program Identity & Curriculum */}
        <div className="lg:col-span-2 space-y-20 animate-fade-in" style={{ animationDelay: '0.1s' }}>
          
          {/* Identity Section */}
          <section>
            <h2 className="text-accent text-xs uppercase tracking-[0.3em] mb-6">Program Identity</h2>
            <div className="bg-[#222] border border-white/10 p-8">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="text-center md:text-left border-b md:border-b-0 md:border-r border-white/10 pb-6 md:pb-0 md:pr-6">
                   <div className="text-white/20 text-4xl font-bold mb-4 opacity-50">01</div>
                   <h4 className="font-bold text-white mb-2">Work + Residency Hybrid</h4>
                   <p className="text-xs text-sub leading-relaxed">
                     {t("창업가가 사업을 멈추지 않은 채, 해외 진출이라는 질문을 공동 검증합니다.", "Founders verify global expansion without stopping their daily business.", "創業者が事業を止めずに、海外進出という問いを共同検証します。", "Pendiri memverifikasi ekspansi global tanpa menghentikan bisnis harian mereka.")}
                   </p>
                </div>
                <div className="text-center md:text-left border-b md:border-b-0 md:border-r border-white/10 pb-6 md:pb-0 md:pr-6">
                   <div className="text-white/20 text-4xl font-bold mb-4 opacity-50">02</div>
                   <h4 className="font-bold text-white mb-2">3 Nations Mix (KR/JP/IN)</h4>
                   <p className="text-xs text-sub leading-relaxed">
                     {t("한국, 일본, 인도 3개 국가 창업가들이 항상 동시 참여하여 상호 검증합니다.", "Entrepreneurs from Korea, Japan, and India always participate for mutual verification.", "韓国、日本、インドの3カ国の創業者が常に同時参加し、相互検証します。", "Pengusaha dari Korea, Jepang, 및 India selalu berpartisipasi untuk verifikasi bersama.")}
                   </p>
                </div>
                <div className="text-center md:text-left">
                   <div className="text-white/20 text-4xl font-bold mb-4 opacity-50">03</div>
                   <h4 className="font-bold text-white mb-2">No Lecture, Just Action</h4>
                   <p className="text-xs text-sub leading-relaxed">
                     {t("강의나 정답 제시 대신, 창업가 간의 밀도 있는 피드백과 네트워크를 핵심으로 둡니다.", "Focus on dense feedback and networks between founders, not lectures.", "講義や正答提示の代わりに、創業者間の密度の高いフィードバックとネットワークを核心に置きます。", "Fokus pada umpan balik padat dan jejaring antar pendiri, bukan kuliah.")}
                   </p>
                </div>
              </div>
            </div>
          </section>

          {/* Timeline Section */}
          <section>
            <h2 className="text-accent text-xs uppercase tracking-[0.3em] mb-6">3-Week Structure</h2>
            <div className="space-y-4">
              {/* Week 1 */}
              <div className="group relative border border-white/10 p-8 hover:border-accent transition-all duration-300">
                <span className="text-xs font-mono text-accent mb-2 block tracking-widest uppercase">Week 1. Entrance & Trust</span>
                <h3 className="text-xl font-bold text-white mb-4">{t("제주 도착 & 신뢰 형성", "Arrival & Trust Building", "済州到着 & 信頼形成", "Kedatangan & Membangun Kepercayaan")}</h3>
                <div className="space-y-3 text-sm text-sub">
                  <p className="leading-relaxed">
                    {t(
                      "사업 공유 세션을 통해 서로의 진출 목적을 공유하고, 주말 단체 관광을 통해 솔직한 피드백이 가능한 신뢰 구간을 형성합니다.",
                      "Share expansion goals and build a trust zone for honest feedback through weekend tours.",
                      "事業共有セッションを通じて互いの進出目的を共有し、週末の団体観光を通じて率直なフィードバックが可能な信頼区間を形成します。",
                      "Bagikan tujuan ekspansi dan bangun zona kepercayaan untuk umpan balik jujur melalui tur akhir pekan."
                    )}
                  </p>
                </div>
              </div>

              {/* Week 2 */}
              <div className="group relative border border-accent p-8 bg-accent/5 transition-all duration-300">
                <span className="text-xs font-mono text-accent mb-2 block tracking-widest uppercase">Week 2. Cross-border TF</span>
                <h3 className="text-xl font-bold text-white mb-4">{t("리얼리티 검증 (핵심 구간)", "Reality Verification (Core)", "リアリティ検証 (核心区間)", "Verifikasi Realitas (Inti)")}</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-sm">
                   <div className="bg-black/30 p-4 border border-white/10">
                      <h5 className="font-bold text-white mb-2 underline decoration-accent underline-offset-4">Cross-border Feedback</h5>
                      <p className="text-xs text-sub">{t("“나라면 자국에서 이 서비스를 쓴다 / 안 쓴다” 기준의 솔직하고 불편한 피드백 데이", "Honest and uncomfortable feedback day: \"Would I use this service in my country?\"", "「自分なら自国でこのサービスを使う / 使わない」基準の率直で不便なフィードバックデー", "Hari umpan balik jujur dan tidak nyaman: \"Apakah saya akan menggunakan layanan ini di negara saya?\"")}</p>
                   </div>
                   <div className="bg-black/30 p-4 border border-white/10">
                      <h5 className="font-bold text-white mb-2 underline decoration-accent underline-offset-4">Strategy Re-design</h5>
                      <p className="text-xs text-sub">{t("현지 시선 기반으로 타깃, 가격, 진입 방식을 재설계하고 “조건부 진출 시나리오”를 도출", "Redesign target, price, and entry mode based on local perspectives.", "現地の視点に基づきターゲット、価格、参入方式を再設計し「条件付き進出シナリオ」を導出", "Rancang ulang target, harga, 및 mode masuk berdasarkan perspektif lokal.")}</p>
                   </div>
                </div>
              </div>

              {/* Week 3 */}
              <div className="group relative border border-white/10 p-8 hover:border-accent transition-all duration-300">
                <span className="text-xs font-mono text-accent mb-2 block tracking-widest uppercase">Week 3. Connection & Wrap-up</span>
                <h3 className="text-xl font-bold text-white mb-4">{t("검증에서 연결로", "From Validation to Connection", "検証から繋がりへ", "Dari Verifikasi ke Koneksi")}</h3>
                <div className="space-y-3 text-sm text-sub">
                  <p className="leading-relaxed">
                    {t(
                      "글로벌 VC 밋업을 통해 검증 이후의 변화를 공유하고 실제 네트워크를 확보합니다. 최종적으로 하지 말아야 할 것과 해야 할 것을 정리하며 프로그램을 마무리합니다.",
                      "Share changes after verification with global VCs and secure real networks. Wrap up with a Do's & Don'ts list.",
                      "グローバルVCミートアップを通じて検証以降の変化を共有し、実際のネットワークを確保します。最終的にすべきこととすべきでないことを整理し、プログラムを締めくくります。",
                      "Bagikan perubahan setelah verifikasi dengan VC global dan amankan jejaring nyata. Selesaikan dengan daftar Apa yang Harus Dilakukan & Tidak Boleh Dilakukan."
                    )}
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Operating Principles */}
          <section>
            <h2 className="text-accent text-xs uppercase tracking-[0.3em] mb-6">Operating Principles</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
               <div className="space-y-4">
                  <h4 className="font-bold text-white border-b border-white/10 pb-2">No More Classroom</h4>
                  <ul className="space-y-2 text-sm text-sub list-disc list-inside marker:text-accent">
                    <li>{t("정답을 가르치는 강의 없음", "No lectures teaching answers", "正解を教える講義なし", "Tidak ada kuliah yang mengajarkan jawaban")}</li>
                    <li>{t("자유로운 히피하우스 분위기 지향", "Free hippie house atmosphere", "自由なヒッピーハウスの雰囲気を志向", "Berorientasi pada suasana rumah hippie yang bebas")}</li>
                    <li>{t("강제 네트워킹 대신 자연스러운 대화 유도", "Natural conversation over forced networking", "強制的なネットワーキングの代わりに自然な対話を誘導", "Induksi percakapan alami alih-alih jejaring paksa")}</li>
                  </ul>
               </div>
               <div className="space-y-4">
                  <h4 className="font-bold text-white border-b border-white/10 pb-2">Practical Output</h4>
                  <ul className="space-y-2 text-sm text-sub list-disc list-inside marker:text-accent">
                    <li>{t("해외 진출 전략 시나리오 도출", "Detailed expansion strategy scenarios", "海外進出戦略シナリオの導出", "Penurunan skenario strategi ekspansi")}</li>
                    <li>{t("함께 보낸 글로벌 창업가 네트워크", "Network of global entrepreneurs", "共に過ごしたグローバル創業者ネットワーク", "Jejaring pengusaha global bersama")}</li>
                    <li>{t("글로벌 VC와의 실제 연결 기회", "Actual connection opportunities with global VCs", "グローバルVCとの実際の繋がり機会", "Peluang koneksi nyata dengan VC global")}</li>
                  </ul>
               </div>
            </div>
          </section>

        </div>

        {/* Right Column: Sticky CTA */}
        <div className="lg:col-span-1">
          <div className="sticky top-24 space-y-6">
            <div className="bg-white/5 border border-white/10 p-8 backdrop-blur-md animate-fade-in" style={{ animationDelay: '0.2s' }}>
              <h3 className="text-xl font-bold mb-6 flex items-center">
                <span className="w-2 h-6 bg-accent mr-3"></span>
                Global Residency
              </h3>
              
              <div className="space-y-8">
                 <div>
                   <p className="text-lg text-white font-medium mb-4 leading-relaxed">
                     {t("회차별 3개국 10명 내외", "Approx. 10 founders from 3 nations", "回差別に3カ国10名内外", "Sekitar 10 pendiri dari 3 negara")}<br/>
                     {t("소수 정예 글로벌 레지던시", "Select few global residency", "少数精鋭グローバルレジデンシー", "Residensi global beberapa orang terpilih")}
                   </p>
                   <p className="text-sm text-sub leading-relaxed italic">
                     {t(
                       "“이곳에서 당신의 실패 가능성을 미리 줄이십시오. 조언이 아닌, 다른 국가 동료들의 실제 눈높이로 검증합니다.”",
                       "“Reduce your failure risk in advance. Verify with peers' real eyes, not just advice.”",
                       "「ここであなたの失敗の可能性を予め減らしてください。助言ではなく、他国の仲間の実際の目線で検証します。」",
                       "“Kurangi risiko kegagalan Anda sebelumnya. Verifikasi dengan mata nyata rekan-rekan, bukan sekadar saran.”"
                     )}
                   </p>
                 </div>

                 <div className="space-y-3 text-xs text-sub border-t border-white/10 pt-4">
                    <div className="flex justify-between">
                      <span>Nations</span>
                      <span className="text-white font-bold">KR, JP, IN</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Duration</span>
                      <span className="text-white">3 Weeks (Jeju)</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Category</span>
                      <span className="text-white">Work + Residency</span>
                    </div>
                 </div>

                 <div className="pt-4">
                   <a 
                      href="https://housejeju.vercel.app/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block w-full text-center bg-accent text-white font-bold py-4 text-sm uppercase tracking-widest hover:bg-white hover:text-accent transition-colors shadow-lg shadow-accent/20 cursor-pointer"
                   >
                      {t("Apply for Residency &rarr;", "Apply for Residency &rarr;", "レジデンシーに申し込む &rarr;", "Daftar untuk Residensi &rarr;")}
                   </a>
                   <p className="text-[10px] text-white/30 text-center mt-3">
                      {t("별도 하우스 상세 페이지로 이동합니다.", "Redirects to external house detail page.", "別途ハウス詳細ページに移動します。", "Dialihkan ke halaman detail rumah eksternal.")}
                   </p>
                 </div>
              </div>
            </div>

            <div className="border border-white/10 p-6 bg-black/40">
                <h4 className="text-xs text-accent font-bold uppercase tracking-widest mb-3">Notice</h4>
                <p className="text-[11px] text-sub leading-relaxed">
                    {t(
                      "Underdogs House Jeju는 단순 관광이나 워케이션이 아닙니다. 자신의 사업을 적극적으로 공유하고 피드백을 주고받을 준비가 된 창업가만 참여 가능합니다.",
                      "This is not a simple tour or workation. Only founders ready to share and exchange feedback can participate.",
                      "Underdogs House Jejuは単なる観光やワーケーションではありません。自身の事業を積極的に共有し、フィードバックをやり取りする準備ができた創業者のみ参加可能です。",
                      "Ini bukan sekadar tur atau workation biasa. Hanya pendiri yang siap untuk berbagi 및 bertukar umpan balik yang dapat berpartisipasi."
                    )}
                </p>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default HouseJejuPage;
