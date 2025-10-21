import { Star } from 'lucide-react';

export default function TestimonialsSection() {
  const testimonials = [
    {
      name: 'Claire',
      location: 'Paris',
      quote: 'Une plateforme fluide et moderne — très prometteuse !',
      rating: 5,
      avatar: 'https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=200',
    },
    {
      name: 'Théo',
      location: 'Lyon',
      quote: 'Le concept de paiement à la carte est super pratique.',
      rating: 4,
      avatar: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=200',
    },
    {
      name: 'Hugo',
      location: 'Marseille',
      quote: 'Simple, clair et sans engagement. Bravo !',
      rating: 5,
      avatar: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=200',
    },
  ];

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-[#1A1A1C] via-[#0E0E10] to-[#0E0E10] relative overflow-hidden">
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-gradient-to-r from-[#0057FF] via-transparent to-[#0057FF] blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
            Ils découvrent Dailymotion Sport
          </h2>
          <p className="text-xl text-[#CCCCCC]">
            Voici les premiers retours de nos utilisateurs après le lancement de la plateforme.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-gradient-to-br from-[#1A1A1C] to-[#0E0E10] p-8 rounded-xl border border-gray-800 card-hover"
            >
              <div className="flex items-center gap-4 mb-6">
                <img
                  src={testimonial.avatar}
                  alt={testimonial.name}
                  className="w-16 h-16 rounded-full object-cover border-2 border-[#0057FF]"
                />
                <div>
                  <h4 className="font-bold text-lg">{testimonial.name}</h4>
                  <p className="text-sm text-[#CCCCCC]">
                    {testimonial.location}
                  </p>
                </div>
              </div>

              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className={`w-5 h-5 ${
                      i < testimonial.rating
                        ? 'text-[#0057FF] fill-[#0057FF]'
                        : 'text-gray-600'
                    }`}
                  />
                ))}
              </div>

              <p className="text-[#CCCCCC] italic leading-relaxed">
                "{testimonial.quote}"
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
