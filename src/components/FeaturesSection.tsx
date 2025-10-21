import { Tv, Clock, CreditCard, Layout } from 'lucide-react';

export default function FeaturesSection() {
  const features = [
    {
      icon: Tv,
      title: 'Matches en direct',
      description: 'HD, sans coupure',
    },
    {
      icon: Clock,
      title: 'Replay 24h',
      description: 'Disponible à tout moment',
    },
    {
      icon: CreditCard,
      title: 'Paiement sécurisé',
      description: 'Carte, PayPal, Apple Pay',
    },
    {
      icon: Layout,
      title: 'Interface intuitive',
      description: 'Simple et sans pub',
    },
  ];

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-[#0E0E10] to-[#1A1A1C]">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
            Fonctionnalités clés
          </h2>
          <p className="text-xl text-[#CCCCCC]">
            Tout ce dont vous avez besoin pour vivre le football
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-gradient-to-br from-[#1A1A1C] to-[#0E0E10] p-6 rounded-xl border border-gray-800 card-hover text-center"
            >
              <div className="inline-flex p-4 bg-[#0057FF]/10 rounded-xl mb-4">
                <feature.icon className="w-8 h-8 text-[#0057FF]" />
              </div>
              <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
              <p className="text-[#CCCCCC]">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
