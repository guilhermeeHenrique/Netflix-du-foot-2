import { Users, Shield, Globe } from 'lucide-react';

export default function WhySection() {
  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-[#0E0E10] via-[#1A1A1C] to-[#0E0E10]">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6">
            Pourquoi <span className="text-[#0057FF]">Dailymotion Sport</span> ?
          </h2>

          <p className="text-lg sm:text-xl text-[#CCCCCC] max-w-4xl mx-auto leading-relaxed mb-6">
            Dailymotion Sport est né de la volonté de rendre le streaming sportif simple, légal et accessible à tous.
            Notre mission est de permettre à chaque fan de football de regarder ses matchs préférés sans abonnement,
            sur une plateforme fluide et fiable.
          </p>
          <p className="text-lg sm:text-xl text-[#CCCCCC] max-w-4xl mx-auto leading-relaxed">
            Avec plus de <span className="text-white font-semibold">300 millions d'utilisateurs</span> dans le monde,
            Dailymotion est une plateforme éprouvée et européenne.
            <span className="text-[#0057FF] font-semibold"> Dailymotion Sport</span> prolonge cette vision
            en apportant l'innovation au streaming sportif.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 mt-16 mb-12">
          <div className="text-center p-6">
            <div className="inline-flex p-4 bg-[#0057FF]/10 rounded-full mb-4">
              <Users className="w-10 h-10 text-[#0057FF]" />
            </div>
            <h3 className="text-2xl font-bold mb-2">300M+</h3>
            <p className="text-[#CCCCCC]">Utilisateurs dans le monde</p>
          </div>

          <div className="text-center p-6">
            <div className="inline-flex p-4 bg-[#0057FF]/10 rounded-full mb-4">
              <Shield className="w-10 h-10 text-[#0057FF]" />
            </div>
            <h3 className="text-2xl font-bold mb-2">100% Légal</h3>
            <p className="text-[#CCCCCC]">Contenu sous licence officielle</p>
          </div>

          <div className="text-center p-6">
            <div className="inline-flex p-4 bg-[#0057FF]/10 rounded-full mb-4">
              <Globe className="w-10 h-10 text-[#0057FF]" />
            </div>
            <h3 className="text-2xl font-bold mb-2">Européen</h3>
            <p className="text-[#CCCCCC]">Plateforme basée en Europe</p>
          </div>
        </div>

        <div className="text-center mt-8">
          <a
            href="https://tokens-click-90714936.figma.site/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-[#0057FF] hover:bg-[#0046CC] text-white px-8 py-3 rounded-lg font-semibold transition-all blue-glow"
          >
            Explorer la plateforme
          </a>
        </div>
      </div>
    </section>
  );
}
