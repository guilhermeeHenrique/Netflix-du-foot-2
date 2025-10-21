import { Play } from 'lucide-react';

export default function HeroSection() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="relative h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.pexels.com/photos/274506/pexels-photo-274506.jpeg?auto=compress&cs=tinysrgb&w=1920"
          alt="Football stadium"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#0E0E10]/70 via-[#0E0E10]/60 to-[#0E0E10]"></div>
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="animate-fade-in-up">
          <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold mb-6 text-shadow leading-tight">
            Regardez vos matchs préférés,<br />
            <span className="text-[#0057FF]">sans abonnement.</span>
          </h1>

          <p className="text-xl sm:text-2xl text-[#CCCCCC] mb-10 max-w-3xl mx-auto text-shadow">
            Une plateforme simple, légale et à la carte — payez uniquement pour ce que vous aimez.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8">
            <button
              data-cta="buy_match_hero"
              onClick={() => scrollToSection('pricing')}
              className="bg-[#0057FF] hover:bg-[#0046CC] text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all transform hover:scale-105 blue-glow flex items-center gap-2 w-full sm:w-auto justify-center"
            >
              <Play className="w-5 h-5" />
              Acheter un match
            </button>

            <a
              href="https://tokens-click-90714936.figma.site/"
              target="_blank"
              rel="noopener noreferrer"
              className="border-2 border-white/80 hover:border-[#0057FF] hover:bg-[#0057FF]/10 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all w-full sm:w-auto text-center"
            >
              Explorer la plateforme
            </a>
          </div>

          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md px-4 py-2 rounded-full text-sm text-[#CCCCCC]">
            <span className="w-2 h-2 bg-[#0057FF] rounded-full animate-pulse"></span>
            Disponible sur ordinateur et mobile
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#0E0E10] to-transparent"></div>
    </section>
  );
}
