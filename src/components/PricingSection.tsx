import { Check, AlertCircle } from 'lucide-react';

interface PricingSectionProps {
  onSubscribe: (plan: string) => void;
}

export default function PricingSection({ onSubscribe }: PricingSectionProps) {
  const plans = [
    {
      name: 'Standard',
      description: 'Accédez gratuitement à la plateforme et payez vos matchs à la carte (de 1 à 3 €). Idéal pour les fans occasionnels.',
      price: '0',
      period: '/ mois',
      badge: 'Découverte',
      ctaText: 'Explorer la plateforme',
      ctaAction: 'explore',
      features: [
        'Accès gratuit à la plateforme',
        'Paiement à la carte par match',
        'De 1 à 3 € par match',
        'Replay disponible',
      ],
    },
    {
      name: 'Global',
      description: 'Regardez tous les matchs, toutes les ligues, sans limite. Accès complet en direct et en replay, HD/Full HD inclus.',
      price: '20',
      period: '/ mois',
      ctaText: 'Souscrire maintenant',
      ctaAction: 'global',
      features: [
        'Tous les matchs, toutes les ligues',
        'Accès illimité sans restriction',
        'Direct et replay complet',
        'Qualité HD/Full HD',
        'Multi-appareils',
      ],
    },
    {
      name: 'Élite',
      description: 'L\'expérience ultime : Accès illimité à toutes les compétitions, Avantages exclusifs (contenus VIP, avant-premières), Économisez environ 15 % (par rapport au plan mensuel)',
      price: '102',
      period: '/ 6 mois',
      featured: true,
      badge: 'Populaire',
      ctaText: 'Rejoindre maintenant',
      ctaAction: 'elite',
      features: [
        'Accès illimité à toutes les compétitions',
        'Contenus VIP et avant-premières',
        'Qualité HD/Full HD',
        'Multi-appareils',
        'Économisez ~15%',
        'Avantages exclusifs',
      ],
    },
  ];

  return (
    <section id="pricing" className="py-20 px-4 sm:px-6 lg:px-8 bg-[#0E0E10]">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-8">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
            Tarifs & Offres
          </h2>
          <p className="text-xl text-[#CCCCCC] max-w-2xl mx-auto">
            Transparence totale. Pas de frais cachés.
          </p>
        </div>

        <div className="max-w-4xl mx-auto mb-12 bg-gradient-to-r from-[#0057FF]/20 via-[#0057FF]/10 to-[#0057FF]/20 border border-[#0057FF]/30 rounded-lg p-6 text-center">
          <div className="flex items-center justify-center gap-2 mb-2">
            <AlertCircle className="w-5 h-5 text-[#0057FF]" />
            <h3 className="text-lg font-bold text-white">Offre exclusive : disponible jusqu'au 25 octobre !</h3>
          </div>
          <p className="text-[#CCCCCC]">
            Profitez d'une opportunité unique réservée aux premiers abonnés.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 max-w-7xl mx-auto mb-12">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`relative p-8 rounded-xl border-2 card-hover flex flex-col ${
                plan.featured
                  ? 'bg-gradient-to-br from-[#0057FF] to-[#0046CC] border-[#0057FF] shadow-xl shadow-[#0057FF]/30'
                  : 'bg-gradient-to-br from-[#1A1A1C] to-[#0E0E10] border-gray-800'
              }`}
            >
              {plan.badge && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-[#0057FF] text-white px-4 py-1 rounded-full text-sm font-semibold">
                  {plan.badge}
                </div>
              )}

              <div className="mb-6">
                <h3 className="text-2xl font-bold mb-3">Plan {plan.name}</h3>
                <p className={`text-sm leading-relaxed ${
                  plan.featured ? 'text-white/90' : 'text-[#CCCCCC]'
                }`}>
                  {plan.description}
                </p>
              </div>

              <div className="mb-8">
                <div className="flex items-baseline gap-1">
                  <span className="text-5xl font-bold">{plan.price}</span>
                  <span className="text-2xl text-[#CCCCCC]">€</span>
                  <span className={`text-base ${
                    plan.featured ? 'text-white/80' : 'text-[#CCCCCC]'
                  }`}>
                    {plan.period}
                  </span>
                </div>
              </div>

              <ul className="space-y-3 mb-8 flex-grow">
                {plan.features.map((feature, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <Check className={`w-5 h-5 flex-shrink-0 mt-0.5 ${
                      plan.featured ? 'text-white' : 'text-[#0057FF]'
                    }`} />
                    <span className={`text-sm ${
                      plan.featured ? 'text-white/90' : 'text-[#CCCCCC]'
                    }`}>
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>

              <button
                onClick={() => onSubscribe(plan.ctaAction)}
                data-cta={`buy_${plan.name.toLowerCase()}`}
                className={`w-full py-4 rounded-lg font-semibold transition-all ${
                  plan.featured
                    ? 'bg-white text-[#0057FF] hover:bg-gray-100'
                    : plan.ctaAction === 'explore'
                    ? 'border-2 border-gray-600 text-white hover:border-[#0057FF] hover:text-[#0057FF]'
                    : 'bg-[#0057FF] hover:bg-[#0046CC] text-white blue-glow'
                }`}
              >
                {plan.ctaText}
              </button>
            </div>
          ))}
        </div>

        <div className="text-center space-y-4">
          <p className="text-sm text-[#CCCCCC] max-w-2xl mx-auto">
            D'autres offres spécifiques sont disponibles sur la plateforme : abonnements par ligue et par club.
          </p>
          <p className="text-sm text-[#CCCCCC]">
            Paiement sécurisé par Dailymotion.
          </p>
        </div>
      </div>
    </section>
  );
}
