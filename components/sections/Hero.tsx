import React from 'react';
import { NAV_ITEMS } from '../../constants';
import { useLanguage } from '../../contexts/LanguageContext';

const Hero: React.FC = () => {
  const { t } = useLanguage();

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  const getSymbolClass = (symbol: string) => {
    switch (symbol) {
      case '×': return 'text-4xl';
      case '+': return 'text-5xl -mt-1';
      case '-': return 'text-5xl -mt-2';
      case '%': return 'text-3xl mt-1';
      default: return 'text-4xl';
    }
  };

  return (
    <section id="home" className="min-h-screen pt-24 pb-12 flex flex-col justify-center relative overflow-hidden">
      {/* Decorative neon line */}
      <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-accent to-transparent opacity-50"></div>
      
      <div className="container mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        
        {/* Left: Title */}
        <div className="space-y-8 animate-fade-in">
          <h1 className="text-6xl md:text-8xl font-black tracking-tighter leading-[0.9]">
            ud.crew
            <span className="block text-2xl md:text-3xl font-light tracking-wide mt-4 text-sub italic font-serif opacity-80">
              "only the ones who<br/>keep playing."
            </span>
          </h1>
        </div>

        {/* Right: Description */}
        <div className="space-y-8 border-l border-accent/30 pl-8 md:pl-12 py-4 animate-fade-in" style={{ animationDelay: '0.2s' }}>
          <p className="text-lg md:text-xl text-sub leading-relaxed font-light">
            {t(
              "언더독스와 함께 창업의 다음 라운드를 준비하는",
              "A private crew preparing for the next round of entrepreneurship",
              "アンダードッグスと共に起業の次のラウンドを準備する",
              "Sebuah kru privat yang mempersiapkan putaran kewirausahaan berikutnya"
            )}
            <br className="hidden md:block"/>
            {t(
              "사람들을 위한 프라이빗 크루.",
              "with Underdogs.",
              "人々のためのプライベートクルー。",
              "bersama Underdogs."
            )}
            <br/><br/>
            <span className="text-white font-normal">
              {t(
                "프로그램이 끝나도, 사업이 흔들려도, 다시 시작해도.",
                "Even after the program ends, whether business wavers or restarts.",
                "プログラムが終わっても、事業が揺らいでも、再出発しても。",
                "Bahkan setelah program berakhir, bisnis goyah, atau dimulai kembali."
              )}
              <br/>
              {t(
                "계속 플레이하는 사람만 이 자리를 지킵니다.",
                "Only those who keep playing belong here.",
                "プレーし続ける者だけがこの場所を守ります。",
                "Hanya mereka yang terus bermain yang pantas di sini."
              )}
            </span>
          </p>
        </div>
      </div>

      {/* WE ARE / WHAT Sections */}
      <div className="container mx-auto px-6 mt-24 space-y-24">
        
        {/* WE ARE */}
        <div className="border-t border-white/10 pt-12">
          <h3 className="text-xs uppercase tracking-[0.3em] text-accent mb-8">WE ARE</h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="text-2xl font-light leading-relaxed text-white">
              {t(
                "우리는 서로를 지키고, 존중하며,",
                "We protect each other, respect one another,",
                "私たちはお互いを守り、尊重し、",
                "Kami saling melindungi, menghormati satu sama lain,"
              )}
              <br/>
              <span className="text-accent">
                {t(
                  "끝까지 함께 가는 사람들",
                  "and go together until the end.",
                  "最後まで共に行く人々",
                  "dan pergi bersama hingga akhir."
                )}
              </span>
              {t("입니다.", "", "です。", "")}
            </div>

            <div className="space-y-8 text-sm text-sub leading-relaxed">
              <div>
                <h4 className="text-white font-bold mb-2">{t("우리는 약속합니다.", "We Promise.", "私たちは約束します。", "Kami Berjanji.")}</h4>
                <p>{t(
                  "이곳에서 나누는 모든 이야기와 데이터는 외부로 공유하지 않습니다. 보안 서약을 기반으로 서로의 안전을 지키는 것부터 시작합니다.",
                  "All stories and data shared here are confidential. We start by ensuring each other's safety based on a security pledge.",
                  "ここで共有されるすべての話とデータは外部に共有されません。セキュリティ誓約に基づき、お互いの安全を守ることから始めます。",
                  "Semua cerita dan data yang dibagikan di sini bersifat rahasia. Kami mulai dengan memastikan keamanan satu sama lain berdasarkan janji keamanan."
                )}</p>
              </div>
              
              <div>
                <h4 className="text-white font-bold mb-2">{t("우리는 존중합니다.", "We Respect.", "私たちは尊重します。", "Kami Menghormati.")}</h4>
                <p>{t(
                  "다른 창업가의 길과 선택을 판단하지 않고, 서로의 배경·상황·방식의 차이를 이해하며 대합니다.",
                  "We do not judge the paths and choices of other entrepreneurs, but understand the differences in background, situation, and methods.",
                  "他の起業家の道と選択を判断せず、お互いの背景・状況・方式の違いを理解し接します。",
                  "Kami tidak menghakimi jalan dan pilihan pengusaha lain, tetapi memahami perbedaan latar belakang, situasi, dan metode."
                )}</p>
              </div>

              <div>
                <h4 className="text-white font-bold mb-2">{t("우리는 동반자입니다.", "We are Companions.", "私たちは同伴者です。", "Kami adalah Sahabat.")}</h4>
                <p>{t(
                  "빠른 조언이 아닌, 정직한 피드백을 건넵니다. 함께 해결책을 찾기 위해 적극적으로 묻고 듣고 제안합니다.",
                  "We offer honest feedback, not quick advice. We actively ask, listen, and propose to find solutions together.",
                  "安易な助言ではなく、正直なフィードバックを渡します。共に解決策を見つけるために積極的に問い、聞き、提案します。",
                  "Kami menawarkan umpan balik yang jujur, bukan saran cepat. Kami secara aktif bertanya, mendengarkan, dan mengusulkan untuk menemukan solusi bersama."
                )}</p>
              </div>

              <div>
                <h4 className="text-white font-bold mb-2">{t("우리는 ‘계속 플레이하는 사람들’의 크루입니다.", "We are the Crew who 'Keep Playing'.", "私たちは「プレーし続ける人々」のクルーです。", "Kami adalah Kru yang 'Terus Bermain'.")}</h4>
                <p>{t(
                  "넘어져도 다시 일어서고, 혼자보다 함께일 때 더 멀리 갈 수 있음을 믿습니다.",
                  "We believe in rising again after falling, and that we can go further together than alone.",
                  "転んでもまた立ち上がり、一人より共にある時、より遠くへ行けると信じています。",
                  "Kami percaya pada bangkit kembali setelah jatuh, dan bahwa kami bisa pergi lebih jauh bersama daripada sendirian."
                )}</p>
              </div>
            </div>
          </div>
        </div>

        {/* WHAT (Linked to Nav) */}
        <div className="border-t border-white/10 pt-12 pb-24">
          <h3 className="text-xs uppercase tracking-[0.3em] text-accent mb-8">WHAT</h3>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
            {NAV_ITEMS.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollTo(item.id)}
                className="group border border-white/10 p-6 text-left hover:border-accent transition-all duration-300 hover:bg-white/5"
              >
                <div className={`font-light mb-4 group-hover:text-accent transition-colors ${getSymbolClass(item.symbol)}`}>
                  {item.symbol}
                </div>
                <div className="text-sm font-bold uppercase tracking-widest">{t(item.label, item.labelEn || item.label, item.labelJp, item.labelIn)}</div>
                <div className="text-xs text-sub mt-2 opacity-60 group-hover:opacity-100">{t(item.description, item.descriptionEn || item.description, item.descriptionJp, item.descriptionIn)}</div>
              </button>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default Hero;