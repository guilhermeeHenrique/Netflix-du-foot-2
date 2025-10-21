import { Facebook, Instagram, Twitter } from 'lucide-react';

export default function Footer() {
  const partners = [
    {
      name: 'Nike',
      url: 'https://www.nike.com/fr/',
      logo: 'https://upload.wikimedia.org/wikipedia/commons/a/a6/Logo_NIKE.svg',
    },
    {
      name: 'Red Bull',
      url: 'https://www.redbull.com/',
      logo: 'https://upload.wikimedia.org/wikipedia/en/e/e4/Red_Bull_Racing_logo.svg',
    },
    {
      name: 'EA SPORTS FC',
      url: 'https://www.ea.com/fr-fr/games/ea-sports-fc',
      text: 'EA SPORTS FC',
    },
  ];

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-[#0E0E10] border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="py-12 border-b border-gray-800">
          <div className="text-center mb-8">
            <h3 className="text-lg font-semibold text-[#CCCCCC] mb-6">Nos partenaires</h3>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-8 md:gap-12">
            {partners.map((partner, index) => (
              <a
                key={index}
                href={partner.url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`Visiter le site de ${partner.name}`}
                className="group transition-all hover:scale-110"
              >
                {partner.logo ? (
                  <img
                    src={partner.logo}
                    alt={partner.name}
                    className="h-8 opacity-60 group-hover:opacity-100 transition-opacity filter brightness-0 invert group-hover:brightness-100 group-hover:invert-0"
                    style={{ filter: 'brightness(0) invert(1)' }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.filter = 'none';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.filter = 'brightness(0) invert(1)';
                    }}
                  />
                ) : (
                  <span className="text-lg font-bold text-[#CCCCCC] group-hover:text-[#0057FF] transition-colors">
                    {partner.text}
                  </span>
                )}
              </a>
            ))}
          </div>
        </div>

        <div className="py-12">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8 mb-8">
            <div className="text-center md:text-left">
              <div className="flex items-center justify-center md:justify-start space-x-2 mb-4">
                <div className="w-10 h-10 bg-gradient-to-br from-[#0057FF] to-[#00A3FF] rounded-lg flex items-center justify-center font-bold text-xl">
                  D
                </div>
                <span className="text-xl font-bold">Dailymotion Sport</span>
              </div>
              <p className="text-[#CCCCCC] mb-6 max-w-md">
                La plateforme de streaming sportif qui révolutionne votre façon de regarder le football.
                Payez uniquement pour ce que vous aimez.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row items-center gap-6">
              <button
                onClick={() => scrollToSection('about')}
                className="text-[#CCCCCC] hover:text-[#0057FF] transition-colors text-sm"
              >
                Qui sommes-nous
              </button>
              <button
                onClick={() => scrollToSection('aide')}
                className="text-[#CCCCCC] hover:text-[#0057FF] transition-colors text-sm"
              >
                Support
              </button>
              <div className="flex gap-4">
                <a
                  href="https://www.instagram.com/dailymotion"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Suivre Dailymotion Sport sur Instagram"
                  className="w-10 h-10 bg-white/10 hover:bg-[#0057FF] rounded-full flex items-center justify-center transition-all"
                >
                  <Instagram className="w-5 h-5" />
                </a>
                <a
                  href="https://www.facebook.com/Dailymotion"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Suivre Dailymotion Sport sur Facebook"
                  className="w-10 h-10 bg-white/10 hover:bg-[#0057FF] rounded-full flex items-center justify-center transition-all"
                >
                  <Facebook className="w-5 h-5" />
                </a>
                <a
                  href="https://x.com/Dailymotion_FR"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Suivre Dailymotion Sport sur Twitter/X"
                  className="w-10 h-10 bg-white/10 hover:bg-[#0057FF] rounded-full flex items-center justify-center transition-all"
                >
                  <Twitter className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>

          <div className="pt-6 border-t border-gray-800 text-center text-sm text-[#CCCCCC]">
            <p>© 2025 Dailymotion Sport – Tous droits réservés.</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
