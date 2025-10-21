import { Play, Flame, Trophy } from 'lucide-react';

export default function HighlightsSection() {
  const highlights = [
    {
      image: 'https://images.pexels.com/photos/274506/pexels-photo-274506.jpeg?auto=compress&cs=tinysrgb&w=800',
      title: 'PSG vs Barcelona',
      tag: 'Highlight',
      icon: Flame,
      duration: '3:45',
    },
    {
      image: 'https://images.pexels.com/photos/46798/the-ball-stadion-football-the-pitch-46798.jpeg?auto=compress&cs=tinysrgb&w=800',
      title: 'But incroyable de Mbappé',
      tag: 'Top But',
      icon: Trophy,
      duration: '0:47',
    },
    {
      image: 'https://images.pexels.com/photos/399187/pexels-photo-399187.jpeg?auto=compress&cs=tinysrgb&w=800',
      title: 'Arrêt décisif',
      tag: 'Arrêt du match',
      icon: Trophy,
      duration: '1:12',
    },
    {
      image: 'https://images.pexels.com/photos/114296/pexels-photo-114296.jpeg?auto=compress&cs=tinysrgb&w=800',
      title: 'Real Madrid vs Manchester City',
      tag: 'Highlight',
      icon: Flame,
      duration: '4:23',
    },
  ];

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-[#1A1A1C]">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
            Moments forts de la semaine
          </h2>
          <p className="text-xl text-[#CCCCCC]">
            Revivez les meilleurs moments du football européen
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {highlights.map((highlight, index) => (
            <div
              key={index}
              className="group relative bg-[#0E0E10] rounded-xl overflow-hidden card-hover cursor-pointer"
            >
              <div className="relative aspect-video overflow-hidden">
                <img
                  src={highlight.image}
                  alt={highlight.title}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>

                <div className="absolute top-3 left-3 flex items-center gap-2 bg-black/60 backdrop-blur-sm px-3 py-1 rounded-full">
                  <highlight.icon className="w-4 h-4 text-[#0057FF]" />
                  <span className="text-xs font-semibold">{highlight.tag}</span>
                </div>

                <div className="absolute bottom-3 right-3 bg-black/60 backdrop-blur-sm px-2 py-1 rounded text-xs font-semibold">
                  {highlight.duration}
                </div>

                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                  <div className="w-16 h-16 bg-[#0057FF] rounded-full flex items-center justify-center blue-glow">
                    <Play className="w-8 h-8 text-white ml-1" fill="white" />
                  </div>
                </div>
              </div>

              <div className="p-4">
                <h3 className="font-semibold text-lg group-hover:text-[#0057FF] transition-colors">
                  {highlight.title}
                </h3>
              </div>

              <div className="absolute inset-0 shimmer opacity-0 group-hover:opacity-100 pointer-events-none"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
