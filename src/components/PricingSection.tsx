import { Check } from 'lucide-react';

export default function PricingSection() {
  const plans = [
    {
      name: 'Match unique',
      description: 'Payez seulement le match que vous voulez',
      price: '1,99',
      features: [
        'Un match en direct ou replay',
        'Qualité HD sans coupure',
        'Replay disponible 24h',
        'Multi-appareils',
      ],
    },
    {
      name: 'Abonnement flexible',
      description: 'Suivez vos clubs favoris, sans engagement',
      price: '4,99',
      period: '/mois',
      featured: true,
      features: [
        'Tous les matchs de vos clubs',
        'Qualité HD sans coupure',
        'Replay illimité',
        'Multi-appareils',
        'Annulation à tout moment',
        'Recommandations IA',
      ],
    },
  ];

  return (
    <section id="pricing" className="py-20 px-4 sm:px-6 lg:px-8 bg-[#0E0E10]">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
            Tarifs & Offres
          </h2>
          <p className="text-xl text-[#CCCCCC] max-w-2xl mx-auto">
            Transparence totale. Pas de frais cachés.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto mb-12">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`relative bg-gradient-to-br from-[#1A1A1C] to-[#0E0E10] p-8 rounded-xl border-2 card-hover ${
                plan.featured
                  ? 'border-[#0057FF] shadow-xl shadow-[#0057FF]/20'
                  : 'border-gray-800'
              }`}
            >
              {plan.featured && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-[#0057FF] text-white px-4 py-1 rounded-full text-sm font-semibold">
                  Populaire
                </div>
              )}

              <div className="mb-6">
                <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                <p className="text-[#CCCCCC]">{plan.description}</p>
              </div>

              <div className="mb-8">
                <div className="flex items-baseline gap-1">
                  <span className="text-5xl font-bold">{plan.price}</span>
                  <span className="text-2xl text-[#CCCCCC]">€</span>
                  {plan.period && (
                    <span className="text-lg text-[#CCCCCC]">{plan.period}</span>
                  )}
                </div>
              </div>

              <ul className="space-y-4 mb-8">
                {plan.features.map((feature, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-[#0057FF] flex-shrink-0 mt-0.5" />
                    <span className="text-[#CCCCCC]">{feature}</span>
                  </li>
                ))}
              </ul>

              <button
                data-cta={`buy_${plan.name.toLowerCase().replace(' ', '_')}`}
                className={`w-full py-4 rounded-lg font-semibold transition-all ${
                  plan.featured
                    ? 'bg-[#0057FF] hover:bg-[#0046CC] text-white blue-glow'
                    : 'bg-white/10 hover:bg-white/20 text-white'
                }`}
              >
                Choisir cette offre
              </button>
            </div>
          ))}
        </div>

        <div className="text-center">
          <p className="text-lg text-[#CCCCCC] mb-6">
            Pas d'abonnement inutile. Pas de surprise. <span className="text-white font-semibold">Juste du foot.</span>
          </p>
          <p className="text-sm text-[#CCCCCC]">
            Paiement sécurisé par Dailymotion
          </p>
        </div>
      </div>
    </section>
  );
}
