import { Menu, X } from 'lucide-react';
import { useState } from 'react';

interface HeaderProps {
  scrolled: boolean;
}

export default function Header({ scrolled }: HeaderProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setMobileMenuOpen(false);
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-[#0E0E10]/95 backdrop-blur-md shadow-lg' : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          <div className="flex items-center space-x-8">
            <button onClick={() => scrollToSection('hero')} className="flex items-center space-x-2">
              <div className="w-10 h-10 bg-gradient-to-br from-[#0057FF] to-[#00A3FF] rounded-lg flex items-center justify-center font-bold text-xl">
                D
              </div>
              <span className="text-xl font-bold hidden sm:block">Dailymotion Sport</span>
            </button>

            <nav className="hidden md:flex items-center space-x-8">
              <button onClick={() => scrollToSection('hero')} className="text-[#CCCCCC] hover:text-[#0057FF] transition-colors">
                Accueil
              </button>
              <button onClick={() => scrollToSection('aide')} className="text-[#CCCCCC] hover:text-[#0057FF] transition-colors">
                Aide
              </button>
              <button onClick={() => scrollToSection('about')} className="text-[#CCCCCC] hover:text-[#0057FF] transition-colors">
                Qui sommes-nous
              </button>
            </nav>
          </div>

          <div className="flex items-center space-x-4">
            <button
              data-cta="buy_match_header"
              onClick={() => scrollToSection('pricing')}
              className="bg-[#0057FF] hover:bg-[#0046CC] text-white px-6 py-2 rounded-lg font-medium transition-all transform hover:scale-105 blue-glow"
            >
              Acheter un match
            </button>

            <button
              className="md:hidden text-white"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {mobileMenuOpen && (
        <div className="md:hidden bg-[#0E0E10] border-t border-gray-800">
          <nav className="px-4 py-4 space-y-3">
            <button onClick={() => scrollToSection('hero')} className="block text-[#CCCCCC] hover:text-[#0057FF] transition-colors py-2 w-full text-left">
              Accueil
            </button>
            <button onClick={() => scrollToSection('aide')} className="block text-[#CCCCCC] hover:text-[#0057FF] transition-colors py-2 w-full text-left">
              Aide
            </button>
            <button onClick={() => scrollToSection('about')} className="block text-[#CCCCCC] hover:text-[#0057FF] transition-colors py-2 w-full text-left">
              Qui sommes-nous
            </button>
          </nav>
        </div>
      )}
    </header>
  );
}
