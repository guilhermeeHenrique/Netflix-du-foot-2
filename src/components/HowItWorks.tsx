import { Search, CreditCard, Tv } from 'lucide-react';

export default function HowItWorks() {
  const steps = [
    {
      icon: Search,
      number: '1',
      title: 'Choisissez votre match',
      description: 'Parcourez les compétitions et clubs.',
    },
    {
      icon: CreditCard,
      number: '2',
      title: 'Payez à la carte',
      description: '1 à 2,99€ seulement.',
    },
    {
      icon: Tv,
      number: '3',
      title: 'Regardez en direct ou en replay',
      description: 'Sur tous vos appareils.',
    },
  ];

  return (
    <section id="how-it-works" className="py-20 px-4 sm:px-6 lg:px-8 bg-[#0E0E10]">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
            Comment ça marche ?
          </h2>
          <p className="text-xl text-[#CCCCCC] max-w-2xl mx-auto">
            Trois étapes simples pour accéder à vos matchs préférés
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <div
              key={index}
              className="relative bg-gradient-to-br from-[#1A1A1C] to-[#0E0E10] p-8 rounded-xl border border-gray-800 card-hover"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="absolute -top-4 -left-4 w-12 h-12 bg-[#0057FF] rounded-full flex items-center justify-center font-bold text-xl blue-glow">
                {step.number}
              </div>

              <div className="mb-6 mt-4">
                <div className="inline-flex p-4 bg-[#0057FF]/10 rounded-xl">
                  <step.icon className="w-8 h-8 text-[#0057FF]" />
                </div>
              </div>

              <h3 className="text-2xl font-bold mb-3">{step.title}</h3>
              <p className="text-[#CCCCCC] text-lg">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
