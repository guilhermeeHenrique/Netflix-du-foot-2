import { useState, useEffect } from 'react';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import HowItWorks from './components/HowItWorks';
import WhySection from './components/WhySection';
import PricingSection from './components/PricingSection';
import FeaturesSection from './components/FeaturesSection';
import HighlightsSection from './components/HighlightsSection';
import TestimonialsSection from './components/TestimonialsSection';
import FAQSection from './components/FAQSection';
import Footer from './components/Footer';

function App() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-[#0E0E10] text-white">
      <Header scrolled={scrolled} />
      <main>
        <HeroSection />
        <HowItWorks />
        <WhySection />
        <PricingSection />
        <FeaturesSection />
        <HighlightsSection />
        <TestimonialsSection />
        <FAQSection />
      </main>
      <Footer />
    </div>
  );
}

export default App;
