import React, { useEffect } from 'react';
import { NavigationProps } from '../../types';
import { useLanguage } from '../../contexts/LanguageContext';

const ReboundPage: React.FC<NavigationProps> = ({ onNavigate }) => {
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
            UD Re:bound
          </h1>
          <p className="text-xl md:text-2xl text-sub font-light leading-relaxed max-w-3xl">
            {t(
              "실패는 마침표가 아니라",
              "Failure is not a full stop,",
              "失敗は終止符ではなく",
              "Kegagalan bukanlah titik akhir,"
            )}<br className="md:hidden"/>
            <span className="text-white font-medium">{t("'가장 밀도 높은 학습'입니다.", "but 'the most dense learning'.", "「最も密度の高い学習」です。", "tetapi 'pembelajaran paling padat'.")}</span><br/>
            {t(
              "다시 도전할 수 있는 '상태(State)'를 회복하십시오.",
              "Recover the 'State' to challenge again.",
              "再挑戦できる「状態(State)」を回復してください。",
              "Pulihkan 'Keadaan (State)' untuk menantang lagi."
            )}
          </p>
        </div>
      </div>

      <div className="container mx-auto px-6 grid grid-cols-1 lg:grid-cols-3 gap-16">
        
        {/* Left Column: Content */}
        <div className="lg:col-span-2 space-y-16 animate-fade-in" style={{ animationDelay: '0.1s' }}>
          
          {/* Section 1: Philosophy */}
          <section>
            <h2 className="text-accent text-xs uppercase tracking-[0.3em] mb-6">Philosophy</h2>
            <div className="bg-[#222] border border-white/10 p-8 space-y-8">
              
              <div className="border-b border-white/10 pb-8 mb-8">
                <h3 className="text-2xl font-bold mb-4">
                  {t(
                    "\"능력의 문제가 아니라, 상태의 문제입니다.\"",
                    "\"It's not a matter of ability, but of state.\"",
                    "「能力の問題ではなく、状態の問題です。」",
                    "\"Ini bukan masalah kemampuan, tapi masalah keadaan.\""
                  )}
                </h3>
                <p className="text-sub text-sm leading-relaxed">
                   {t(
                     "많은 창업자가 실패 후 다시 움직이지 못합니다. 그것은 당신의 능력이 부족해서가 아닙니다. 아직 마음의 엔진이 꺼져있기 때문입니다. REBOUND는 무리한 재창업을 강요하지 않습니다. 먼저 다시 달릴 수 있는 상태로 당신을 돌려놓습니다.",
                     "Many founders can't move after failure. It's not because you lack ability. It's because your mental engine is off. REBOUND does not force reckless re-founding. We first return you to a state where you can run again.",
                     "多くの起業家が失敗後に再び動けません。それはあなたの能力が不足しているからではありません。まだ心のエンジンが消えているからです。REBOUNDは無理な再創業を強要しません。まず再び走れる状態にあなたを戻します。",
                     "Banyak pendiri tidak bisa bergerak setelah gagal. Itu bukan karena Anda kurang kemampuan. Itu karena mesin mental Anda mati. REBOUND tidak memaksakan pendirian ulang yang sembrono. Kami pertama-tama mengembalikan Anda ke keadaan di mana Anda bisa berlari lagi."
                   )}
                </p>
              </div>

              {/* Core Values Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-white/5 p-6 border border-white/5">
                    <div className="text-accent text-lg mb-2">Not Healing</div>
                    <p className="text-xs text-sub leading-relaxed">
                        {t(
                          "단순한 위로가 아닙니다. 처절한 회고와 성찰을 위한 시간입니다.",
                          "Not just comfort. It is time for desperate retrospective and reflection.",
                          "単なる慰めではありません。凄絶な回顧と省察のための時間です。",
                          "Bukan sekadar kenyamanan. Ini adalah waktu untuk retrospektif dan refleksi yang putus asa."
                        )}
                    </p>
                </div>
                <div className="bg-white/5 p-6 border border-white/5">
                    <div className="text-accent text-lg mb-2">Not Education</div>
                    <p className="text-xs text-sub leading-relaxed">
                        {t(
                          "창업 이론을 배우는 게 아닙니다. 실패를 자산으로 바꾸는 관점을 배웁니다.",
                          "Not learning startup theory. You learn the perspective of turning failure into assets.",
                          "起業理論を学ぶのではありません。失敗を資産に変える観点を学びます。",
                          "Bukan belajar teori startup. Anda mempelajari perspektif mengubah kegagalan menjadi aset."
                        )}
                    </p>
                </div>
              </div>

            </div>
          </section>

          {/* Section 2: Journey (3R) */}
          <section>
            <h2 className="text-accent text-xs uppercase tracking-[0.3em] mb-6">The Journey: 3 Steps</h2>
            <div className="space-y-4">
                
                {/* Step 1: Recovery */}
                <div className="group relative border border-white/10 p-8 hover:border-accent transition-all duration-300">
                    <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-100 transition-opacity">
                        <span className="text-6xl font-black text-accent">01</span>
                    </div>
                    <h3 className="text-xl font-bold text-white mb-2">Recovery {t("(회복)", "", "(回復)", "(Pemulihan)")}</h3>
                    <p className="text-accent text-xs uppercase tracking-widest mb-4">Disconnect to Connect</p>
                    <p className="text-sm text-sub leading-relaxed max-w-lg">
                        {t(
                          "실패 이후 쌓인 패배감과 자기 의심에서 벗어납니다. 비교와 성과가 없는 제주의 자연 속에서 오직 나에게만 집중하며 정서적 에너지를 채웁니다.",
                          "Escape from defeatism and self-doubt. Focus only on yourself in Jeju's nature without comparison and performance pressure, filling up emotional energy.",
                          "失敗以降に積もった敗北感と自己疑心から抜け出します。比較と成果のない済州の自然の中で、ただ自分だけに集中し情緒的エネルギーを満たします。",
                          "Lari dari rasa kalah dan keraguan diri. Fokus hanya pada diri sendiri di alam Jeju tanpa perbandingan dan tekanan kinerja, mengisi energi emosional."
                        )}
                    </p>
                    <div className="mt-4 flex gap-2 text-[10px] text-white/50">
                        <span className="border border-white/20 px-2 py-1">Meditation</span>
                        <span className="border border-white/20 px-2 py-1">Nature</span>
                        <span className="border border-white/20 px-2 py-1">Safety Zone</span>
                    </div>
                </div>

                {/* Step 2: Reflection */}
                <div className="group relative border border-white/10 p-8 hover:border-accent transition-all duration-300">
                    <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-100 transition-opacity">
                        <span className="text-6xl font-black text-accent">02</span>
                    </div>
                    <h3 className="text-xl font-bold text-white mb-2">Reflection {t("(회고)", "", "(回顧)", "(Refleksi)")}</h3>
                    <p className="text-accent text-xs uppercase tracking-widest mb-4">Experience to Asset</p>
                    <p className="text-sm text-sub leading-relaxed max-w-lg">
                        {t(
                          "지난 사업을 감정이 아닌 '경험'으로 정리합니다. \"왜 망했는가\"가 아니라 \"무엇을 배웠는가\"를 언어화합니다. 당신의 실패는 부끄러운 기록이 아니라 값비싼 수업료가 됩니다.",
                          "Organize past business as 'experience', not emotion. Verbalize \"What I learned\" instead of \"Why I failed\". Your failure becomes expensive tuition, not a shameful record.",
                          "過去の事業を感情ではなく「経験」として整理します。「なぜ失敗したか」ではなく「何を学んだか」を言語化します。あなたの失敗は恥ずかしい記録ではなく、高価な授業料になります。",
                          "Organisir bisnis masa lalu sebagai 'pengalaman', bukan emosi. Verbalisasikan \"Apa yang saya pelajari\" bukan \"Kenapa saya gagal\". Kegagalan Anda menjadi biaya kuliah yang mahal, bukan catatan memalukan."
                        )}
                    </p>
                    <div className="mt-4 flex gap-2 text-[10px] text-white/50">
                         <span className="border border-white/20 px-2 py-1">Deep Retrospective</span>
                         <span className="border border-white/20 px-2 py-1">Cohort Sharing</span>
                    </div>
                </div>

                {/* Step 3: Reframing */}
                <div className="group relative border border-white/10 p-8 hover:border-accent transition-all duration-300">
                     <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-100 transition-opacity">
                        <span className="text-6xl font-black text-accent">03</span>
                    </div>
                    <h3 className="text-xl font-bold text-white mb-2">Reframing {t("(관점 전환)", "", "(観点転換)", "(Pembingkaian Ulang)")}</h3>
                    <p className="text-accent text-xs uppercase tracking-widest mb-4">Ready to Restart</p>
                    <p className="text-sm text-sub leading-relaxed max-w-lg">
                        {t(
                          "새로운 환경(제주 로컬 스타트업 씬)과 동료들의 시선을 통해 \"다음에는 다르게 할 수 있겠다\"는 감각을 깨웁니다. '실패한 창업자'에서 '한 번 배운 창업자'로 정체성을 전환합니다.",
                          "Awaken the sense that \"I can do differently next time\" through new environments (Jeju local startup scene) and peers. Shift identity from 'failed founder' to 'experienced founder'.",
                          "新しい環境(済州ローカルスタートアップシーン)と仲間たちの視線を通じて「次は違うやり方ができる」という感覚を目覚めさせます。「失敗した創業者」から「一度学んだ創業者」へアイデンティティを転換します。",
                          "Bangkitkan rasa bahwa \"Saya bisa melakukan secara berbeda lain kali\" melalui lingkungan baru (adegan startup lokal Jeju) dan rekan-rekan. Ubah identitas dari 'pendiri gagal' menjadi 'pendiri berpengalaman'."
                        )}
                    </p>
                    <div className="mt-4 flex gap-2 text-[10px] text-white/50">
                         <span className="border border-white/20 px-2 py-1">Insight Tour</span>
                         <span className="border border-white/20 px-2 py-1">New Perspective</span>
                    </div>
                </div>

            </div>
        </section>

          {/* Section 3: Target Audience */}
          <section>
            <h2 className="text-accent text-xs uppercase tracking-[0.3em] mb-6">Is this for you?</h2>
            <div className="border border-white/10 bg-[#222] p-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div>
                        <h4 className="font-bold mb-4 flex items-center text-white">
                            <span className="w-2 h-2 bg-accent rounded-full mr-2"></span>
                            We are looking for
                        </h4>
                        <ul className="space-y-3 text-sm text-sub">
                            <li className="flex items-start">
                                <span className="text-white mr-2">✓</span> {t("사업 중단 경험이 있는 창업자 (폐업, 팀 해체 등)", "Founders with business discontinuation experience", "事業中断経験がある創業者(廃業、チーム解散など)", "Pendiri dengan pengalaman penghentian bisnis")}
                            </li>
                            <li className="flex items-start">
                                <span className="text-white mr-2">✓</span> {t("실패에 대해 솔직하게 회고할 준비가 된 분", "Ready to reflect honestly on failure", "失敗について率直に回顧する準備ができた方", "Siap merenungkan kegagalan secara jujur")}
                            </li>
                            <li className="flex items-start">
                                <span className="text-white mr-2">✓</span> {t("다시 시작하고 싶지만 막연한 두려움이 있는 분", "Want to restart but have vague fears", "再開したいが漠然とした恐れがある方", "Ingin memulai kembali tetapi memiliki ketakutan yang samar")}
                            </li>
                        </ul>
                    </div>
                    <div className="opacity-50">
                        <h4 className="font-bold mb-4 flex items-center text-white">
                            <span className="w-2 h-2 bg-white rounded-full mr-2"></span>
                            Not suitable for
                        </h4>
                        <ul className="space-y-3 text-sm text-sub">
                            <li className="flex items-start">
                                <span className="text-white mr-2">✕</span> {t("실패의 원인을 외부(남 탓)로만 돌리는 분", "Blaming external factors only", "失敗の原因を外部(他人のせい)にだけする方", "Hanya menyalahkan faktor eksternal")}
                            </li>
                            <li className="flex items-start">
                                <span className="text-white mr-2">✕</span> {t("자신의 이야기를 공유하고 싶지 않은 분", "Not willing to share their story", "自分の話を共有したくない方", "Tidak bersedia membagikan kisah mereka")}
                            </li>
                            <li className="flex items-start">
                                <span className="text-white mr-2">✕</span> {t("단순 휴식이나 여행이 목적인 분", "Just for rest or travel", "単なる休息や旅行が目的の方", "Hanya untuk istirahat atau perjalanan")}
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
          </section>

        </div>

        {/* Right Column: Sticky CTA */}
        <div className="lg:col-span-1">
          <div className="sticky top-24 bg-white/5 border border-white/10 p-8 backdrop-blur-md animate-fade-in" style={{ animationDelay: '0.2s' }}>
            <h3 className="text-xl font-bold mb-6 flex items-center">
              <span className="w-2 h-6 bg-accent mr-3"></span>
              Reset Your State
            </h3>
            
            <div className="space-y-8">
               <div>
                 <p className="text-lg text-white font-medium mb-4 leading-relaxed">
                   {t("다시 시작해도 괜찮습니다.", "It's okay to restart.", "また始めても大丈夫です。", "Tidak apa-apa untuk memulai kembali.")}
                 </p>
                 <p className="text-sm text-sub leading-relaxed">
                   {t(
                     "REBOUND는 언더독스가 \"성공뿐만 아니라 실패까지 책임지는 브랜드\"임을 증명하는 프로그램입니다.",
                     "REBOUND proves that Underdogs is a brand that takes responsibility not only for success but also for failure.",
                     "REBOUNDはアンダードッグスが「成功だけでなく失敗まで責任を負うブランド」であることを証明するプログラムです。",
                     "REBOUND membuktikan bahwa Underdogs adalah merek yang bertanggung jawab tidak hanya atas kesuksesan tetapi juga atas kegagalan."
                   )}<br/><br/>
                   {t(
                     "이곳에서 가장 안전하게 실패하고, 가장 단단하게 돌아오십시오.",
                     "Fail most safely here, and come back strongest.",
                     "ここで最も安全に失敗し、最も強固に戻ってきてください。",
                     "Gagallah dengan paling aman di sini, dan kembalilah paling kuat."
                   )}
                 </p>
               </div>

               <div className="space-y-3 text-xs text-sub border-t border-white/10 pt-4">
                  <div className="flex justify-between">
                    <span>Location</span>
                    <span className="text-white font-bold">Jeju Pop-up Campus</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Duration</span>
                    <span className="text-white">3 ~ 5 Days (Camp)</span>
                  </div>
               </div>

               <div className="pt-4">
                 <a 
                    href="https://underdogs.co.kr"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block w-full text-center bg-white text-black font-bold py-4 text-sm uppercase tracking-widest hover:bg-accent hover:text-white transition-colors shadow-lg cursor-pointer"
                 >
                    {t("Apply for Re:bound", "Apply for Re:bound", "Re:boundに申し込む", "Daftar untuk Re:bound")}
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

export default ReboundPage;