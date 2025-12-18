import React, { useEffect } from 'react';
import { NavigationProps } from '../../types';
import { useLanguage } from '../../contexts/LanguageContext';

const SurvivorsApplyPage: React.FC<NavigationProps> = ({ onNavigate }) => {
  const { t } = useLanguage();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-bg text-white pt-24 pb-12">
      {/* Header */}
      <div className="container mx-auto px-6 mb-12">
        <button 
          onClick={() => onNavigate('home')}
          className="text-sub hover:text-accent mb-8 text-sm uppercase tracking-widest flex items-center"
        >
          &larr; {t("Back to Lounge", "Back to Lounge", "ラウンジに戻る", "Kembali ke Lounge")}
        </button>
        
        <div className="border-l-4 border-accent pl-6">
          <h1 className="text-4xl md:text-6xl font-bold uppercase tracking-tighter mb-4">
            UD Survivors
          </h1>
          <p className="text-xl text-sub font-light">
            {t(
              "비슷한 고민을 가진 러닝메이트를 만나보세요.",
              "Meet running mates with similar concerns.",
              "同じ悩みを持つランニングメイトに出会いましょう。",
              "Temui rekan seperjuangan dengan kekhawatiran serupa."
            )}<br/>
            {t(
              "당신은 혼자가 아닙니다.",
              "You are not alone.",
              "あなたは一人ではありません。",
              "Anda tidak sendirian."
            )}
          </p>
        </div>
      </div>

      <div className="container mx-auto px-6 grid grid-cols-1 lg:grid-cols-3 gap-16">
        
        {/* Left: Service Blueprint */}
        <div className="lg:col-span-2 space-y-16">
          
          {/* Blueprint Intro */}
          <section>
            <h2 className="text-accent text-xs uppercase tracking-[0.3em] mb-6">Service Blueprint</h2>
            <div className="bg-[#222] border border-white/10 p-8 space-y-8">
              
              {/* Step 1 */}
              <div className="relative border-l border-white/20 pl-8 pb-8">
                <div className="absolute left-[-5px] top-0 w-2.5 h-2.5 bg-accent rounded-full"></div>
                <h3 className="text-xl font-bold mb-2">
                  {t("STEP 1. 입구: 문제 진단 & 깊은 인터뷰", "STEP 1. Entrance: Diagnosis & Deep Interview", "STEP 1. 入口: 問題診断 & 深層インタビュー", "STEP 1. Masuk: Diagnosis & Wawancara Mendalam")}
                </h3>
                <p className="text-sub text-sm leading-relaxed mb-4">
                  {t(
                    "단순한 신청서가 아닙니다. AI 기반의 1차 문제 분류와 PM의 2차 심층 전화 인터뷰를 통해 창업자의 '진짜 문제'를 정의하고, 겉으로 드러나지 않은 구조적 요인을 파헤칩니다.",
                    "It's not just an application form. Through AI-based primary problem classification and a secondary in-depth phone interview with PM, we define the founder's 'real problem' and dig into structural factors that are not visible on the surface.",
                    "単なる申請書ではありません。AIベースの1次問題分類とPMの2次深層電話インタビューを通じて、創業者の「本当の問題」を定義し、表面化していない構造的要因を掘り下げます。",
                    "Ini bukan sekadar formulir aplikasi. Melalui klasifikasi masalah primer berbasis AI dan wawancara telepon mendalam sekunder dengan PM, kami mendefinisikan 'masalah nyata' pendiri dan menggali faktor struktural yang tidak terlihat di permukaan."
                  )}
                </p>
                <div className="bg-white/5 p-4 rounded text-xs text-white/70">
                  <span className="text-accent font-bold">Output:</span> 
                  {t(
                    " 문제 재정의를 통한 면확한 원인 분석, 정밀한 코호트 매칭",
                    " Clear cause analysis through problem redefinition, precise cohort matching",
                    " 問題再定義を通じた明確な原因分析、精密なコホートマッチング",
                    " Analisis penyebab yang jelas melalui redefinisi masalah, pencocokan kohort yang presisi"
                  )}
                </div>
              </div>

              {/* Step 2 */}
              <div className="relative border-l border-white/20 pl-8 pb-8">
                <div className="absolute left-[-5px] top-0 w-2.5 h-2.5 bg-white/50 rounded-full"></div>
                <h3 className="text-xl font-bold mb-2">
                  {t("STEP 2. 그룹 매칭: 문제 기반 그룹핑", "STEP 2. Group Matching: Problem-based Grouping", "STEP 2. グループマッチング: 問題ベースのグルーピング", "STEP 2. Pencocokan Grup: Pengelompokan Berbasis Masalah")}
                </h3>
                <p className="text-sub text-sm leading-relaxed mb-4">
                  {t(
                    "업종이 아닌 '문제'를 기준으로 모입니다. 기업 MBTI와 문제의 시급성, 리소스 상황을 복합적으로 분석하여 최적의 동료들을 매칭합니다.",
                    "We gather based on 'problems', not industries. We match the best colleagues by analyzing corporate MBTI, urgency of the problem, and resource situation.",
                    "業種ではなく「問題」を基準に集まります。企業MBTIと問題の緊急性、リソース状況を複合的に分析し、最適な仲間をマッチングします。",
                    "Kami berkumpul berdasarkan 'masalah', bukan industri. Kami mencocokkan rekan terbaik dengan menganalisis MBTI perusahaan, urgensi masalah, dan situasi sumber daya."
                  )}
                </p>
                <ul className="list-disc list-inside text-xs text-sub space-y-1">
                  <li>{t("최소 4명 ~ 최대 5개 그룹", "Min 4 people ~ Max 5 groups", "最小4名 ~ 最大5グループ", "Min 4 orang ~ Maks 5 grup")}</li>
                  <li>{t("각 그룹 전담 멘토 배정", "Dedicated mentor assigned to each group", "各グループ専担メンター配置", "Mentor khusus ditugaskan untuk setiap grup")}</li>
                </ul>
              </div>

              {/* Step 3 */}
              <div className="relative border-l border-white/20 pl-8 pb-8">
                <div className="absolute left-[-5px] top-0 w-2.5 h-2.5 bg-white/50 rounded-full"></div>
                <h3 className="text-xl font-bold mb-2">
                  {t("STEP 3. 본 프로그램: Deep Dive & Feedback", "STEP 3. Main Program: Deep Dive & Feedback", "STEP 3. 本プログラム: Deep Dive & Feedback", "STEP 3. Program Utama: Deep Dive & Feedback")}
                </h3>
                <p className="text-sub text-sm leading-relaxed mb-4">
                  {t(
                    "\"고민 공유 = 가장 깊은 네트워킹\". 자신의 문제를 케이스화하여 발표하고, 동료들과 치열하게 토론합니다. 전문 멘토는 이 과정을 중재하며 프레임워크를 제공합니다.",
                    "\"Sharing concerns = Deepest networking\". You present your problem as a case and discuss it intensely with colleagues. Expert mentors mediate this process and provide frameworks.",
                    "「悩みの共有 = 最も深いネットワーキング」。自身の問題をケース化して発表し、仲間たちと熾烈に討論します。専門メンターはこの過程を仲裁し、フレームワークを提供します。",
                    "\"Berbagi kekhawatiran = Jejaring terdalam\". Anda mempresentasikan masalah Anda sebagai kasus dan mendiskusikannya secara intensif dengan rekan-rekan. Mentor ahli menengahi proses ini dan menyediakan kerangka kerja."
                  )}
                </p>
                <div className="grid grid-cols-2 gap-2 mt-4">
                   <div className="bg-black/40 p-3 border border-white/5 text-xs text-center">Blind Deep-dive</div>
                   <div className="bg-black/40 p-3 border border-white/5 text-xs text-center">Cross Feedback</div>
                </div>
              </div>

              {/* Step 4 */}
              <div className="relative pl-8">
                <div className="absolute left-[-5px] top-0 w-2.5 h-2.5 bg-white/50 rounded-full"></div>
                <h3 className="text-xl font-bold mb-2">
                  {t("STEP 4. 사후 Follow-up", "STEP 4. Follow-up", "STEP 4. 事後フォローアップ", "STEP 4. Tindak Lanjut")}
                </h3>
                <p className="text-sub text-sm leading-relaxed mb-4">
                   {t(
                     "1개월 뒤 문제가 해결되었는지 추적합니다. 해결된 케이스는 UDBR 아티클로 발행되며, 해결되지 않았다면 다음 시즌 우선 매칭권이 부여됩니다.",
                     "We track if the problem is solved after 1 month. Solved cases are published as UDBR articles; if not, priority matching for the next season is granted.",
                     "1ヶ月後に問題が解決されたか追跡します。解決されたケースはUDBRアーティクルとして発行され、解決されなかった場合は次シーズンの優先マッチング権が付与されます。",
                     "Kami melacak apakah masalah terpecahkan setelah 1 bulan. Kasus yang terpecahkan diterbitkan sebagai artikel UDBR; jika tidak, hak pencocokan prioritas untuk musim berikutnya diberikan."
                   )}
                </p>
              </div>

            </div>
          </section>

          {/* Operating Model */}
          <section>
            <h2 className="text-accent text-xs uppercase tracking-[0.3em] mb-6">Operating Model</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="border border-white/10 p-6 hover:border-accent transition-colors">
                    <h4 className="font-bold mb-2">{t("정교한 문제 프로파일링", "Precise Problem Profiling", "精巧な問題プロファイリング", "Pemrofilan Masalah Presisi")}</h4>
                    <p className="text-xs text-sub">{t(
                      "매출 정체형, 인력 문제형, PMF 미완성형 등 10개 이상의 분류 체계로 당신의 상태를 진단합니다.",
                      "Diagnose your status with over 10 classification systems including revenue stagnation, HR issues, incomplete PMF, etc.",
                      "売上停滞型、人材問題型、PMF未完成型など10個以上の分類体系であなたの状態を診断します。",
                      "Mendiagnosis status Anda dengan lebih dari 10 sistem klasifikasi termasuk stagnasi pendapatan, masalah SDM, PMF tidak lengkap, dll."
                    )}</p>
                </div>
                <div className="border border-white/10 p-6 hover:border-accent transition-colors">
                    <h4 className="font-bold mb-2">{t("실전 멘토풀 (Mentor DB)", "Practical Mentor Pool", "実戦メンタープール", "Kumpulan Mentor Praktis")}</h4>
                    <p className="text-xs text-sub">{t(
                      "이론가가 아닌, 동일한 문제를 해결해 본 경험이 있는 '생존 선배'들이 멘토로 참여합니다.",
                      "'Survival Seniors' who have experienced solving the same problems, not theorists, participate as mentors.",
                      "理論家ではなく、同じ問題を解決した経験がある「生存の先輩」たちがメンターとして参加します。",
                      "'Senior Bertahan Hidup' yang berpengalaman memecahkan masalah yang sama, bukan teoritikus, berpartisipasi sebagai mentor."
                    )}</p>
                </div>
            </div>
          </section>

        </div>

        {/* Right: Application Call to Action */}
        <div className="lg:col-span-1">
          <div className="sticky top-24 bg-white/5 border border-white/10 p-8 backdrop-blur-md">
            <h3 className="text-xl font-bold mb-6 flex items-center">
              <span className="w-2 h-6 bg-accent mr-3"></span>
              Join the Cohort
            </h3>
            
            <div className="space-y-8">
               <div>
                 <p className="text-lg text-white font-medium mb-4 leading-relaxed">
                   {t("지금, 당신의 문제를", "Are you ready to", "今、あなたの問題を", "Apakah Anda siap untuk")}<br/>
                   {t("해결할 준비가 되셨나요?", "solve your problem now?", "解決する準備はできましたか？", "memecahkan masalah Anda sekarang?")}
                 </p>
                 <p className="text-sm text-sub leading-relaxed">
                   {t("Survivors는 단순한 교육 프로그램이 아닙니다.", "Survivors is not just an education program.", "Survivorsは単なる教育プログラムではありません。", "Survivors bukan sekadar program pendidikan.")}<br/>
                   {t("치열하게 고민하고, 서로의 생존을 돕는", "It is a ", "熾烈に悩み、お互いの生存を助ける", "Ini adalah ")}<br/> 
                   <span className="text-white font-bold">{t("실전 문제 해결 커뮤니티", "practical problem-solving community", "実戦問題解決コミュニティ", "komunitas pemecahan masalah praktis")}</span>
                   {t("입니다.", " where we think intensely and help each other survive.", "です。", " di mana kami berpikir keras dan saling membantu bertahan hidup.")}
                 </p>
               </div>

               <div className="bg-black/30 p-5 border border-white/10">
                 <div className="flex items-start space-x-3">
                    <svg className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                    <div>
                        <h4 className="text-sm font-bold text-white mb-1">Estimated Time: 15 min</h4>
                        <p className="text-xs text-sub leading-relaxed">
                            {t(
                              "정확한 코호트 매칭을 위해 신청서 작성에는 평균적으로 ",
                              "It takes about ",
                              "正確なコホートマッチングのため、申請書作成には平均的に",
                              "Dibutuhkan sekitar "
                            )}
                            <span className="text-accent font-bold underline">15 min</span>
                            {t(
                              "가 소요됩니다.",
                              " to complete the application for precise cohort matching.",
                              "所要されます。",
                              " untuk menyelesaikan aplikasi demi pencocokan kohort yang presisi."
                            )}
                        </p>
                        <p className="text-xs text-sub mt-2 opacity-70">
                            {t(
                              "단순한 지원이 아닌, 내 사업의 상태를 스스로 진단하는 과정입니다. 충분한 시간을 가지고 작성해주세요.",
                              "It is a process of self-diagnosing the state of your business. Please take enough time.",
                              "単なる志願ではなく、自分の事業の状態を自ら診断する過程です。十分な時間をかけて作成してください。",
                              "Ini adalah proses mendiagnosis sendiri keadaan bisnis Anda. Mohon luangkan waktu yang cukup."
                            )}
                        </p>
                    </div>
                 </div>
               </div>

               <div className="pt-4">
                 <a 
                    href="https://hoony8355.github.io/resumeexample/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block w-full text-center bg-accent text-white font-bold py-4 text-sm uppercase tracking-widest hover:bg-white hover:text-accent transition-colors shadow-lg shadow-accent/20"
                 >
                    {t("Start Application &rarr;", "Start Application &rarr;", "申請を開始する &rarr;", "Mulai Aplikasi &rarr;")}
                 </a>
                 <p className="text-[10px] text-white/30 text-center mt-3">
                    {t("외부 신청 페이지로 이동합니다.", "Redirects to external application page.", "外部申請ページに移動します。", "Dialihkan ke halaman aplikasi eksternal.")}
                 </p>
               </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default SurvivorsApplyPage;