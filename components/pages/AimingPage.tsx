import React, { useEffect } from 'react';
import { NavigationProps } from '../../types';
import { useLanguage } from '../../contexts/LanguageContext';

const AimingPage: React.FC<NavigationProps> = ({ onNavigate }) => {
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
            UD A'iming
          </h1>
          <p className="text-xl md:text-2xl text-sub font-light leading-relaxed max-w-3xl">
            {t(
              "Pre-A 투자를 받았지만 다음 단계가 막막하신가요?",
              "Stuck after Pre-A investment?",
              "Pre-A投資を受けたものの、次の段階が不安ですか？",
              "Terjebak setelah investasi Pre-A?"
            )}<br/>
            <span className="text-white font-medium">{t("'희망'이 아닌 '검증'을 통해", "Through 'Validation', not 'Hope'", "「希望」ではなく「検証」を通じて", "Melalui 'Validasi', bukan 'Harapan'")}</span><br/>
            {t(
              "가장 현실적인 Series A 로드맵을 설계합니다.",
              "We design the most realistic Series A roadmap.",
              "最も現実的なSeries Aロードマップを設計します。",
              "Kami merancang peta jalan Seri A yang paling realistis."
            )}
          </p>
        </div>
      </div>

      <div className="container mx-auto px-6 grid grid-cols-1 lg:grid-cols-3 gap-16">
        
        {/* Left Column: Content Blueprint */}
        <div className="lg:col-span-2 space-y-16 animate-fade-in" style={{ animationDelay: '0.1s' }}>
          
          {/* Section 1: Philosophy */}
          <section>
            <h2 className="text-accent text-xs uppercase tracking-[0.3em] mb-6">Why A'iming?</h2>
            <div className="bg-[#222] border border-white/10 p-8 space-y-8">
              
              <div className="border-b border-white/10 pb-8 mb-8">
                <h3 className="text-2xl font-bold mb-4">
                  {t(
                    "\"열심히 하는 것만으로는 Series A의 문턱을 넘을 수 없습니다.\"",
                    "\"Hard work alone is not enough to cross the Series A threshold.\"",
                    "「頑張るだけではSeries Aの敷居を越えることはできません。」",
                    "\"Kerja keras saja tidak cukup untuk melewati ambang batas Seri A.\""
                  )}
                </h3>
                <p className="text-sub text-sm leading-relaxed">
                   {t(
                     "지표는 우상향하는데 투자자는 고개를 젓습니다. 우리 사업의 비전이 그들에게는 '리스크'로 보이기 때문입니다. A'iming은 당신의 언어를 투자자의 언어(Risk & Return)로 번역하고, 실제 투자 유치가 가능한 수준으로 비즈니스 구조를 검증합니다.",
                     "Metrics go up, but investors say no. Your vision looks like 'risk' to them. A'iming translates your language into investor's language (Risk & Return) and validates your business structure to an investable level.",
                     "指標は右肩上がりなのに投資家は首を横に振ります。私たちの事業ビジョンが彼らには「リスク」に見えるからです。A'imingはあなたの言語を投資家の言語(Risk & Return)に翻訳し、実際に投資誘致が可能なレベルにビジネス構造を検証します。",
                     "Metrik naik, tetapi investor menolak. Visi Anda terlihat seperti 'risiko' bagi mereka. A'iming menerjemahkan bahasa Anda ke bahasa investor (Risiko & Pengembalian) dan memvalidasi struktur bisnis Anda ke tingkat yang layak investasi."
                   )}
                </p>
              </div>

              {/* Point 1 */}
              <div className="relative border-l border-white/20 pl-8 pb-4">
                <div className="absolute left-[-5px] top-0 w-2.5 h-2.5 bg-accent rounded-full"></div>
                <h3 className="text-lg font-bold mb-2">No More 'Mock' Pitching</h3>
                <p className="text-sub text-sm leading-relaxed">
                   {t(
                     "단순한 피칭 연습은 그만두십시오. 실제 VC 심사역들이 참여하여 당신의 IR Deck을 냉정하게 해체합니다. \"좋네요\"라는 듣기 좋은 칭찬 대신, \"이래서는 투자가 불가능합니다\"라는 진짜 피드백을 듣게 됩니다.",
                     "Stop simple pitch practice. Real VCs participate to dissect your IR Deck coldly. Instead of \"Nice\", you will hear real feedback like \"Investment is impossible like this\".",
                     "単なるピッチング練習はやめてください。実際のVC審査役が参加し、あなたのIR Deckを冷静に解体します。「いいですね」という耳触りの良い賞賛の代わりに、「これでは投資不可能です」という本物のフィードバックを聞くことになります。",
                     "Hentikan latihan pitching sederhana. VC sungguhan berpartisipasi untuk membedah IR Deck Anda dengan dingin. Alih-alih \"Bagus\", Anda akan mendengar umpan balik nyata seperti \"Investasi tidak mungkin seperti ini\"."
                   )}
                </p>
              </div>

              {/* Point 2 */}
              <div className="relative border-l border-white/20 pl-8 pb-4">
                <div className="absolute left-[-5px] top-0 w-2.5 h-2.5 bg-white/50 rounded-full"></div>
                <h3 className="text-lg font-bold mb-2">Problem Solving, Not Teaching</h3>
                <p className="text-sub text-sm leading-relaxed">
                   {t(
                     "강의를 듣는 시간이 아닙니다. 지적받은 약점을 해결하는 시간입니다. 지표 관리, 팀 빌딩, GTM 전략 등 발견된 문제를 해결하기 위해 해당 분야를 경험한 선배 창업가가 붙습니다.",
                     "It's not time for lectures. It's time to solve pointed weaknesses. Senior entrepreneurs join to help solve problems in metrics, team building, GTM strategy, etc.",
                     "講義を聞く時間ではありません。指摘された弱点を解決する時間です。指標管理、チームビルディング、GTM戦略など発見された問題を解決するために、該当分野を経験した先輩創業者がつきます。",
                     "Ini bukan waktunya kuliah. Ini waktunya memecahkan kelemahan yang ditunjukkan. Pengusaha senior bergabung untuk membantu memecahkan masalah dalam metrik, pembangunan tim, strategi GTM, dll."
                   )}
                </p>
              </div>

            </div>
          </section>

          {/* Section 2: Process */}
          <section>
            <h2 className="text-accent text-xs uppercase tracking-[0.3em] mb-6">Process: 6-8 Weeks</h2>
            <div className="bg-[#222] border border-white/10 p-8 space-y-8">
                <div className="flex items-center space-x-4 mb-6">
                    <span className="text-4xl font-bold text-white">2</span>
                    <span className="text-sm text-sub uppercase tracking-wider">Sprints<br/>(Cycles)</span>
                </div>
                
                <div className="space-y-6">
                    <div className="flex flex-col md:flex-row gap-4">
                         <div className="flex-1 bg-white/5 p-4 border border-white/5 relative group hover:border-accent transition-colors">
                            <span className="text-accent font-bold block mb-2 text-xs uppercase">Step 1</span>
                            <h4 className="font-bold text-white mb-2">VC Diagnosis</h4>
                            <p className="text-xs text-sub leading-snug">
                              {t(
                                "실제 VC 대상 피칭 후, 투자 불가 사유(Red Flag) 및 핵심 보완점(Key Question) 도출",
                                "After pitching to real VCs, derive Red Flags and Key Questions.",
                                "実際のVC対象ピッチング後、投資不可事由(Red Flag)および核心補完点(Key Question)導出",
                                "Setelah pitching ke VC sungguhan, turunkan Red Flag dan Key Questions."
                              )}
                            </p>
                         </div>
                         <div className="flex items-center justify-center text-white/20">→</div>
                         <div className="flex-1 bg-white/5 p-4 border border-white/5 relative group hover:border-accent transition-colors">
                            <span className="text-accent font-bold block mb-2 text-xs uppercase">Step 2</span>
                            <h4 className="font-bold text-white mb-2">Mentor Solution</h4>
                            <p className="text-xs text-sub leading-snug">
                              {t(
                                "VC 피드백을 기반으로, 해당 문제를 해결해 본 경험이 있는 전담 멘토와 함께 실행 계획 수립",
                                "Establish action plans with dedicated mentors who have experience solving those problems based on VC feedback.",
                                "VCフィードバックを基盤に、該当問題を解決した経験がある専担メンターと共に実行計画樹立",
                                "Tetapkan rencana tindakan dengan mentor khusus yang berpengalaman memecahkan masalah tersebut berdasarkan umpan balik VC."
                              )}
                            </p>
                         </div>
                         <div className="flex items-center justify-center text-white/20">→</div>
                         <div className="flex-1 bg-white/5 p-4 border border-white/5 relative group hover:border-accent transition-colors">
                            <span className="text-accent font-bold block mb-2 text-xs uppercase">Step 3</span>
                            <h4 className="font-bold text-white mb-2">Re-Pitching</h4>
                            <p className="text-xs text-sub leading-snug">
                              {t(
                                "개선된 지표와 논리로 다시 VC 앞에 섭니다. 변화된 속도를 증명하십시오.",
                                "Stand before VCs again with improved metrics and logic. Prove your speed of change.",
                                "改善された指標と論理で再びVCの前に立ちます。変化した速度を証明してください。",
                                "Berdiri di depan VC lagi dengan metrik dan logika yang ditingkatkan. Buktikan kecepatan perubahan Anda."
                              )}
                            </p>
                         </div>
                    </div>
                </div>

                <p className="text-sm text-sub border-t border-white/10 pt-6 mt-2">
                    {t(
                      "* 멘토진은 VC가 지적한 문제를 실제로 해결하고, Series A 이상을 달성한 언더독스 알럼나이 및 파트너로 구성됩니다.",
                      "* Mentors consist of Underdogs alumni and partners who have actually solved problems pointed out by VCs and achieved Series A or higher.",
                      "* メンター陣はVCが指摘した問題を実際に解決し、Series A以上を達成したアンダードッグスアルムナイおよびパートナーで構成されます。",
                      "* Mentor terdiri dari alumni dan mitra Underdogs yang telah benar-benar memecahkan masalah yang ditunjukkan oleh VC dan mencapai Seri A atau lebih tinggi."
                    )}
                </p>
            </div>
          </section>

          {/* Section 3: Target & Outcomes */}
          <section>
            <h2 className="text-accent text-xs uppercase tracking-[0.3em] mb-6">Who Should Apply</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                
                {/* Target Audience */}
                <div className="border border-white/10 p-6 hover:border-accent transition-colors">
                    <h4 className="font-bold mb-4 flex items-center">
                        <span className="w-2 h-2 bg-accent rounded-full mr-2"></span>
                        Target Profile
                    </h4>
                    <ul className="space-y-3 text-sm text-sub">
                        <li className="flex items-start">
                            <span className="text-white mr-2">✓</span> {t("Pre-A 투자 유치 완료 기업", "Companies with Pre-A funding", "Pre-A投資誘致完了企業", "Perusahaan dengan pendanaan Pre-A")}
                        </li>
                        <li className="flex items-start">
                            <span className="text-white mr-2">✓</span> {t("또는 Pre-A ~ Series A 라운드 준비 중", "Or preparing for Pre-A ~ Series A", "またはPre-A ~ Series Aラウンド準備中", "Atau bersiap untuk Pre-A ~ Seri A")}
                        </li>
                        <li className="flex items-start">
                            <span className="text-white mr-2">✓</span> {t("PMF 검증 후 Scale-up 단계 진입", "Entering Scale-up phase after PMF", "PMF検証後スケールアップ段階進入", "Memasuki fase Scale-up setelah PMF")}
                        </li>
                        <li className="flex items-start">
                            <span className="text-white mr-2">✓</span> {t("뼈아픈 피드백을 수용하고 바뀔 준비가 된 팀", "Teams ready to accept painful feedback", "痛烈なフィードバックを受け入れ変わる準備ができたチーム", "Tim yang siap menerima umpan balik menyakitkan")}
                        </li>
                    </ul>
                    <div className="mt-6 pt-4 border-t border-white/10">
                        <h5 className="text-xs text-white/50 font-bold mb-2 uppercase">Who is NOT for</h5>
                        <p className="text-xs text-sub opacity-50 leading-relaxed">
                          {t(
                            "아직 매출/트래픽 지표가 없는 초기 팀, 이미 Series A 이상 투자를 유치한 팀",
                            "Early teams without revenue/traffic metrics, or teams already funded Series A+",
                            "まだ売上/トラフィック指標がない初期チーム、すでにSeries A以上の投資を誘致したチーム",
                            "Tim awal tanpa metrik pendapatan/trafik, atau tim yang sudah didanai Seri A+"
                          )}
                        </p>
                    </div>
                </div>

                {/* Outcomes */}
                <div className="border border-white/10 p-6 hover:border-accent transition-colors bg-white/5">
                    <h4 className="font-bold mb-4 flex items-center">
                        <span className="w-2 h-2 bg-white rounded-full mr-2"></span>
                        What You Get
                    </h4>
                    <ul className="space-y-3 text-sm text-sub">
                        <li className="flex items-start">
                            <span className="text-accent mr-2">→</span> <strong>Investment Readiness:</strong><br/>{t("즉시 투자 라운드 돌입이 가능한 IR Deck", "IR Deck ready for investment round", "即時投資ラウンド突入が可能なIR Deck", "IR Deck siap untuk putaran investasi")}
                        </li>
                        <li className="flex items-start">
                            <span className="text-accent mr-2">→</span> <strong>Risk Clearing:</strong><br/>{t("VC가 거절할 핑계를 미리 제거한 사업 구조", "Business structure clearing VC rejection reasons", "VCが断る口実を予め除去した事業構造", "Struktur bisnis yang menghapus alasan penolakan VC")}
                        </li>
                        <li className="flex items-start">
                            <span className="text-accent mr-2">→</span> <strong>Network:</strong><br/>{t("실제 투자 의향이 있는 VC와의 네트워킹", "Networking with active VCs", "実際の投資意向があるVCとのネットワーキング", "Jejaring dengan VC aktif")}
                        </li>
                    </ul>
                    <p className="mt-6 text-xs text-white/60 leading-relaxed">
                        {t(
                          "\"이 과정을 완주하면, 투자를 받거나, 받지 못한다면 무엇을 고쳐야 하는지 명확한 답을 얻게 됩니다.\"",
                          "\"Upon completion, you will either get funded or get a clear answer on what to fix if not.\"",
                          "「この過程を完走すれば、投資を受けるか、受けられないなら何を直すべきか明確な答えを得ることになります。」",
                          "\"Setelah selesai, Anda akan didanai atau mendapatkan jawaban jelas tentang apa yang harus diperbaiki jika tidak.\""
                        )}
                    </p>
                </div>
            </div>
          </section>

        </div>

        {/* Right Column: Sticky CTA */}
        <div className="lg:col-span-1">
          <div className="sticky top-24 bg-white/5 border border-white/10 p-8 backdrop-blur-md animate-fade-in" style={{ animationDelay: '0.2s' }}>
            <h3 className="text-xl font-bold mb-6 flex items-center">
              <span className="w-2 h-6 bg-accent mr-3"></span>
              Join the League
            </h3>
            
            <div className="space-y-8">
               <div>
                 <p className="text-lg text-white font-medium mb-4 leading-relaxed">
                   {t("준비되지 않은 상태로", "Don't go to market", "準備されていない状態で", "Jangan pergi ke pasar")}<br/>
                   {t("시장에 나가지 마십시오.", "unprepared.", "市場に出ないでください。", "tanpa persiapan.")}
                 </p>
                 <p className="text-sm text-sub leading-relaxed">
                   {t(
                     "한 번 거절당한 VC에게 다시 미팅을 요청하는 것은 매우 어렵습니다. A'iming에서 완벽하게 준비된 상태로 라운드를 시작하십시오.",
                     "It is very hard to ask for a meeting again from a VC who rejected you once. Start your round perfectly prepared at A'iming.",
                     "一度断られたVCに再びミーティングを要請するのは非常に難しいです。A'imingで完璧に準備された状態でラウンドを開始してください。",
                     "Sangat sulit untuk meminta pertemuan lagi dari VC yang pernah menolak Anda. Mulailah putaran Anda dengan persiapan sempurna di A'iming."
                   )}
                 </p>
               </div>

               <div className="space-y-3 text-xs text-sub border-t border-white/10 pt-4">
                  <div className="flex justify-between">
                    <span>Target</span>
                    <span className="text-white font-bold">Pre-A ~ Series A Prep</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Duration</span>
                    <span className="text-white">6 ~ 8 Weeks (Intensive)</span>
                  </div>
               </div>

               <div className="pt-4">
                 <a 
                    href="https://underdogs.co.kr"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block w-full text-center bg-white text-black font-bold py-4 text-sm uppercase tracking-widest hover:bg-accent hover:text-white transition-colors shadow-lg cursor-pointer"
                 >
                    {t("Apply for Next Batch", "Apply for Next Batch", "次期バッチに申し込む", "Daftar untuk Batch Berikutnya")}
                 </a>
                 <p className="text-[10px] text-white/30 text-center mt-3">
                    {t("선발 과정을 통해 소수 정예로 운영됩니다.", "Operated as a select few through selection.", "選抜過程を通じて少数精鋭で運営されます。", "Dioperasikan sebagai beberapa orang terpilih melalui seleksi.")}
                 </p>
               </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default AimingPage;