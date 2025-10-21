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
import PaymentPage from './components/PaymentPage';
import SupportPage from './components/SupportPage';

function App() {
  const [scrolled, setScrolled] = useState(false);
  const [currentView, setCurrentView] = useState<'home' | 'payment' | 'support'>('home');
  const [selectedPlan, setSelectedPlan] = useState<string>('');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleSubscribe = (plan: string) => {
    if (plan === 'explore') {
      window.open('https://tokens-click-90714936.figma.site/', '_blank', 'noopener,noreferrer');
    } else {
      setSelectedPlan(plan);
      setCurrentView('payment');
    }
  };

  const handleClosePayment = () => {
    setCurrentView('home');
    setSelectedPlan('');
  };

  const handleOpenSupport = () => {
    setCurrentView('support');
  };

  const handleCloseSupport = () => {
    setCurrentView('home');
  };

  const handleNavigateToWhy = () => {
    setCurrentView('home');
    setTimeout(() => {
      const element = document.getElementById('about');
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }, 100);
  };

  if (currentView === 'payment') {
    return <PaymentPage plan={selectedPlan} onClose={handleClosePayment} />;
  }

  if (currentView === 'support') {
    return <SupportPage onClose={handleCloseSupport} onNavigateToWhy={handleNavigateToWhy} />;
  }

  return (
    <div className="min-h-screen bg-[#0E0E10] text-white">
      <Header scrolled={scrolled} onOpenSupport={handleOpenSupport} />
      <main>
        <HeroSection />
        <HowItWorks />
        <WhySection />
        <PricingSection onSubscribe={handleSubscribe} />
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
