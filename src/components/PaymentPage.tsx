import { useState, useEffect } from 'react';
import { Check, CreditCard, Shield, Star, ExternalLink } from 'lucide-react';

interface PaymentPageProps {
  plan: string;
  onClose: () => void;
}

export default function PaymentPage({ plan, onClose }: PaymentPageProps) {
  const [paymentSuccess, setPaymentSuccess] = useState(false);
  const [showFallbackLink, setShowFallbackLink] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    cardNumber: '',
    expiryDate: '',
    cvv: '',
    acceptTerms: false,
  });

  const FIGMA_URL = 'https://tokens-click-90714936.figma.site/';

  const planDetails = {
    global: {
      name: 'Plan Global',
      price: '20€',
      period: 'par mois',
    },
    elite: {
      name: 'Plan Élite',
      price: '102€',
      period: 'pour 6 mois',
    },
  };

  const currentPlan = planDetails[plan as keyof typeof planDetails];

  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setPaymentSuccess(true);

    setTimeout(() => {
      const win = window.open(FIGMA_URL, '_blank', 'noopener,noreferrer');
      if (!win || win.closed || typeof win.closed === 'undefined') {
        console.warn('Popup blocked – showing fallback link');
        setShowFallbackLink(true);
      }
    }, 2500);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };

  if (paymentSuccess) {
    return (
      <div className="fixed inset-0 bg-[#0E0E10] z-50 flex items-center justify-center p-4">
        <div className="max-w-md w-full text-center animate-fade-in-up">
          <div className="w-20 h-20 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-6">
            <Check className="w-12 h-12 text-white" />
          </div>
          <h2 className="text-3xl font-bold mb-4">Paiement approuvé !</h2>
          <p className="text-xl text-[#CCCCCC] mb-6">
            Merci pour votre confiance. Votre abonnement est maintenant actif.
          </p>
          {!showFallbackLink ? (
            <div className="mt-8">
              <div className="animate-pulse text-[#0057FF]">Ouverture de votre espace...</div>
            </div>
          ) : (
            <div className="mt-8 p-6 bg-gradient-to-br from-[#1A1A1C] to-[#0E0E10] border-2 border-[#0057FF]/30 rounded-lg">
              <p className="text-[#CCCCCC] mb-4">Si rien ne s'ouvre, cliquez ici pour continuer :</p>
              <a
                href={FIGMA_URL}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Continuer vers la plateforme Dailymotion Sport"
                className="inline-flex items-center gap-2 bg-[#0057FF] hover:bg-[#0046CC] text-white px-6 py-3 rounded-lg font-semibold transition-all blue-glow"
              >
                Accéder à la plateforme
                <ExternalLink className="w-5 h-5" />
              </a>
            </div>
          )}
        </div>
      </div>
    );
  }

  return (
    <div className="fixed inset-0 bg-[#0E0E10] z-50 overflow-y-auto">
      <div className="min-h-screen px-4 py-8">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center justify-between mb-8">
            <div className="flex items-center space-x-2">
              <div className="w-10 h-10 bg-gradient-to-br from-[#0057FF] to-[#00A3FF] rounded-lg flex items-center justify-center font-bold text-xl">
                D
              </div>
              <span className="text-xl font-bold">Dailymotion Sport</span>
            </div>
            <button
              onClick={onClose}
              className="text-[#CCCCCC] hover:text-white transition-colors"
            >
              ✕
            </button>
          </div>

          <h1 className="text-3xl md:text-4xl font-bold text-center mb-12">
            Finalisez votre abonnement
          </h1>

          <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
            <div className="space-y-8">
              <div>
                <h2 className="text-2xl font-bold mb-4">
                  Rejoignez la communauté Dailymotion Sport.
                </h2>
                <p className="text-lg text-[#CCCCCC] mb-6">
                  Regardez tous vos matchs sans limite, sans publicité, sur tous vos appareils.
                </p>
              </div>

              <ul className="space-y-4">
                {[
                  'Qualité HD & Full HD',
                  'Direct & replay pour chaque match',
                  'Visionnage multi-appareils',
                  'Accès prioritaire aux matchs importants',
                  'Paiement garanti sécurisé',
                ].map((feature, idx) => (
                  <li key={idx} className="flex items-center gap-3">
                    <Check className="w-6 h-6 text-[#0057FF] flex-shrink-0" />
                    <span className="text-lg">{feature}</span>
                  </li>
                ))}
              </ul>

              <div className="bg-gradient-to-br from-[#1A1A1C] to-[#0E0E10] p-6 rounded-xl border border-gray-800">
                <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
                  <Star className="w-5 h-5 text-yellow-400" />
                  Ce que disent nos utilisateurs
                </h3>
                <div className="space-y-4">
                  <div>
                    <div className="flex gap-1 mb-2">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                      ))}
                    </div>
                    <p className="text-[#CCCCCC] text-sm">
                      "Une expérience premium, fluide et sans coupure !" – Marc, Lyon
                    </p>
                  </div>
                  <div>
                    <div className="flex gap-1 mb-2">
                      {[...Array(4)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                      ))}
                      <Star className="w-4 h-4 text-gray-600" />
                    </div>
                    <p className="text-[#CCCCCC] text-sm">
                      "Je ne rate plus aucun match de mon équipe." – Sarah, Paris
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-[#1A1A1C] to-[#0E0E10] p-8 rounded-xl border-2 border-gray-800">
              <div className="mb-6 pb-6 border-b border-gray-800">
                <h3 className="text-xl font-bold mb-2">{currentPlan?.name}</h3>
                <div className="flex items-baseline gap-2">
                  <span className="text-4xl font-bold">{currentPlan?.price}</span>
                  <span className="text-[#CCCCCC]">{currentPlan?.period}</span>
                </div>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block text-sm font-medium mb-2">Nom complet</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-[#0E0E10] border border-gray-700 rounded-lg focus:border-[#0057FF] focus:outline-none focus:ring-2 focus:ring-[#0057FF]/20 transition-colors"
                    placeholder="Jean Dupont"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">Email</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-[#0E0E10] border border-gray-700 rounded-lg focus:border-[#0057FF] focus:outline-none focus:ring-2 focus:ring-[#0057FF]/20 transition-colors"
                    placeholder="jean.dupont@email.com"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2 flex items-center gap-2">
                    <CreditCard className="w-4 h-4" />
                    Numéro de carte
                  </label>
                  <input
                    type="text"
                    name="cardNumber"
                    value={formData.cardNumber}
                    onChange={handleChange}
                    required
                    maxLength={19}
                    className="w-full px-4 py-3 bg-[#0E0E10] border border-gray-700 rounded-lg focus:border-[#0057FF] focus:outline-none focus:ring-2 focus:ring-[#0057FF]/20 transition-colors"
                    placeholder="1234 5678 9012 3456"
                  />
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium mb-2">Date d'expiration</label>
                    <input
                      type="text"
                      name="expiryDate"
                      value={formData.expiryDate}
                      onChange={handleChange}
                      required
                      maxLength={5}
                      className="w-full px-4 py-3 bg-[#0E0E10] border border-gray-700 rounded-lg focus:border-[#0057FF] focus:outline-none focus:ring-2 focus:ring-[#0057FF]/20 transition-colors"
                      placeholder="MM/AA"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">CVV</label>
                    <input
                      type="text"
                      name="cvv"
                      value={formData.cvv}
                      onChange={handleChange}
                      required
                      maxLength={3}
                      className="w-full px-4 py-3 bg-[#0E0E10] border border-gray-700 rounded-lg focus:border-[#0057FF] focus:outline-none focus:ring-2 focus:ring-[#0057FF]/20 transition-colors"
                      placeholder="123"
                    />
                  </div>
                </div>

                <div className="flex items-center gap-4 py-4">
                  <button
                    type="button"
                    className="flex-1 py-3 px-6 bg-white/10 hover:bg-white/20 rounded-lg font-medium transition-colors flex items-center justify-center gap-2"
                  >
                    PayPal
                  </button>
                  <button
                    type="button"
                    className="flex-1 py-3 px-6 bg-white/10 hover:bg-white/20 rounded-lg font-medium transition-colors flex items-center justify-center gap-2"
                  >
                    Apple Pay
                  </button>
                </div>

                <div className="flex items-start gap-3">
                  <input
                    type="checkbox"
                    name="acceptTerms"
                    checked={formData.acceptTerms}
                    onChange={handleChange}
                    required
                    className="mt-1 w-4 h-4 rounded border-gray-700 bg-[#0E0E10] text-[#0057FF] focus:ring-[#0057FF]"
                  />
                  <label className="text-sm text-[#CCCCCC]">
                    J'accepte les conditions générales de vente.
                  </label>
                </div>

                <button
                  type="submit"
                  disabled={!formData.acceptTerms}
                  className="w-full bg-[#0057FF] hover:bg-[#0046CC] disabled:bg-gray-700 disabled:cursor-not-allowed text-white py-4 rounded-lg font-semibold transition-all blue-glow text-lg"
                >
                  Confirmer le paiement
                </button>

                <div className="flex items-center justify-center gap-2 text-sm text-[#CCCCCC]">
                  <Shield className="w-4 h-4 text-green-500" />
                  Votre paiement est 100% sécurisé par Dailymotion.
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
