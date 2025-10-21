import { useState } from 'react';
import { ChevronDown } from 'lucide-react';

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      question: 'Comment acheter un match ?',
      answer: 'Parcourez notre catalogue de matchs, sélectionnez celui qui vous intéresse, et procédez au paiement sécurisé. Vous aurez immédiatement accès au streaming en direct ou au replay.',
    },
    {
      question: 'Puis-je regarder sur mobile ?',
      answer: 'Oui, Dailymotion Sport est accessible sur tous vos appareils : desktop, tablette et smartphone. Vous pouvez regarder vos matchs n\'importe où avec une connexion internet.',
    },
    {
      question: 'Est-ce légal ?',
      answer: 'Absolument. Nous diffusons uniquement du contenu sous licence officielle. Dailymotion Sport est 100% légal et respecte tous les droits de diffusion des compétitions.',
    },
    {
      question: 'Comment fonctionne le paiement ?',
      answer: 'Nous acceptons les cartes bancaires, PayPal et Apple Pay. Le paiement est sécurisé et géré par Dailymotion. Pour l\'offre à la carte, vous payez uniquement le match que vous souhaitez voir.',
    },
    {
      question: 'Peut-on revoir un match après le direct ?',
      answer: 'Oui, tous les matchs sont disponibles en replay pendant 24 heures après la fin du direct. Vous pouvez les regarder autant de fois que vous le souhaitez pendant cette période.',
    },
  ];

  return (
    <section id="aide" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-[#0E0E10] to-[#1A1A1C]">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
            Besoin d'aide ?
          </h2>
          <p className="text-xl text-[#CCCCCC]">
            Notre équipe est disponible pour vous accompagner : découvrez comment acheter un match,<br className="hidden sm:block" />
            résoudre un problème de paiement ou en savoir plus sur la plateforme.
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-gradient-to-br from-[#1A1A1C] to-[#0E0E10] rounded-xl border border-gray-800 overflow-hidden"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full flex items-center justify-between p-6 text-left hover:bg-white/5 transition-colors"
              >
                <span className="font-semibold text-lg pr-8">{faq.question}</span>
                <ChevronDown
                  className={`w-6 h-6 text-[#0057FF] flex-shrink-0 transition-transform ${
                    openIndex === index ? 'rotate-180' : ''
                  }`}
                />
              </button>

              {openIndex === index && (
                <div className="px-6 pb-6 text-[#CCCCCC] leading-relaxed">
                  {faq.answer}
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="mt-12 text-center p-8 bg-gradient-to-br from-[#0057FF]/10 to-transparent rounded-xl border border-[#0057FF]/20">
          <h3 className="text-2xl font-bold mb-3">Questions fréquentes</h3>
          <p className="text-[#CCCCCC] mb-6">
            Consultez notre FAQ pour trouver rapidement des réponses
          </p>
          <button
            onClick={() => {
              const element = document.getElementById('aide');
              if (element) element.scrollIntoView({ behavior: 'smooth' });
            }}
            className="inline-block bg-[#0057FF] hover:bg-[#0046CC] text-white px-8 py-3 rounded-lg font-semibold transition-all blue-glow"
          >
            Accéder au support
          </button>
        </div>
      </div>
    </section>
  );
}
