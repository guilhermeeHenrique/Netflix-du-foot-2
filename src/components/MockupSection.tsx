import { ExternalLink, Monitor, Smartphone } from 'lucide-react';

export default function MockupSection() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-[#0E0E10]">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
            Découvrez l'expérience <span className="text-[#0057FF]">Dailymotion Sport</span>
          </h2>
          <p className="text-xl text-[#CCCCCC] max-w-3xl mx-auto">
            Une interface moderne, intuitive et optimisée pour tous vos appareils
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-12">
          <div className="space-y-6">
            <div className="flex items-start gap-4 p-6 bg-gradient-to-br from-[#1A1A1C] to-[#0E0E10] rounded-xl border border-gray-800">
              <div className="p-3 bg-[#0057FF]/10 rounded-lg">
                <Monitor className="w-6 h-6 text-[#0057FF]" />
              </div>
              <div>
                <h3 className="font-bold text-xl mb-2">Interface Desktop</h3>
                <p className="text-[#CCCCCC]">
                  Navigation fluide, recherche intelligente et visionnage en plein écran
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4 p-6 bg-gradient-to-br from-[#1A1A1C] to-[#0E0E10] rounded-xl border border-gray-800">
              <div className="p-3 bg-[#0057FF]/10 rounded-lg">
                <Smartphone className="w-6 h-6 text-[#0057FF]" />
              </div>
              <div>
                <h3 className="font-bold text-xl mb-2">Application Mobile</h3>
                <p className="text-[#CCCCCC]">
                  Regardez vos matchs n'importe où, avec une qualité optimisée
                </p>
              </div>
            </div>

            <a
              href="https://www.figma.com/proto/your-mockup-link"
              target="_blank"
              rel="noopener noreferrer"
              data-cta="view_prototype"
              className="inline-flex items-center gap-3 bg-[#0057FF] hover:bg-[#0046CC] text-white px-8 py-4 rounded-lg font-semibold transition-all blue-glow group"
            >
              <span>Voir le prototype interactif</span>
              <ExternalLink className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </a>
          </div>

          <div className="relative">
            <div className="relative bg-gradient-to-br from-[#1A1A1C] to-[#0E0E10] p-8 rounded-2xl border-2 border-[#0057FF]/30 shadow-2xl shadow-[#0057FF]/20">
              <div className="aspect-video bg-[#0E0E10] rounded-lg overflow-hidden border border-gray-800">
                <img
                  src="https://images.pexels.com/photos/114296/pexels-photo-114296.jpeg?auto=compress&cs=tinysrgb&w=1200"
                  alt="Dailymotion Sport Preview"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0E0E10]/90 via-transparent to-transparent"></div>
              </div>

              <div className="absolute -bottom-6 -right-6 w-48 aspect-[9/16] bg-gradient-to-br from-[#1A1A1C] to-[#0E0E10] p-3 rounded-2xl border-2 border-[#0057FF]/30 shadow-xl">
                <div className="w-full h-full bg-[#0E0E10] rounded-lg overflow-hidden border border-gray-800">
                  <img
                    src="https://images.pexels.com/photos/46798/the-ball-stadion-football-the-pitch-46798.jpeg?auto=compress&cs=tinysrgb&w=400"
                    alt="Mobile Preview"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>

            <div className="absolute -top-8 -left-8 w-32 h-32 bg-[#0057FF] rounded-full blur-3xl opacity-20 animate-pulse"></div>
            <div className="absolute -bottom-8 -right-8 w-40 h-40 bg-[#0057FF] rounded-full blur-3xl opacity-20 animate-pulse" style={{ animationDelay: '1s' }}></div>
          </div>
        </div>

        <div className="text-center">
          <p className="text-sm text-[#CCCCCC]">
            Design moderne • Interface intuitive • Optimisé pour tous les écrans
          </p>
        </div>
      </div>
    </section>
  );
}
