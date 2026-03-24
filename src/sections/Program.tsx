import { useEffect, useRef, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Calendar, Download, Eye, X, ChevronLeft, ChevronRight, Clock, BookOpen, GraduationCap } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Dialog, DialogContent } from '@/components/ui/dialog';

interface ProgramPoster {
  id: number;
  title: string;
  subtitle: string;
  image: string;
  type: string;
  date: string;
}

const Program = () => {
  const { t, i18n } = useTranslation();
  const sectionRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [selectedPoster, setSelectedPoster] = useState<ProgramPoster | null>(null);
  const [currentPosterIndex, setCurrentPosterIndex] = useState(0);
  const [hoveredPoster, setHoveredPoster] = useState<number | null>(null);

  const posters: ProgramPoster[] = [
    {
      id: 1,
      title: i18n.language === 'ar' ? "برنامج العطلة" : "Programme des Vacances",
      subtitle: i18n.language === 'ar' ? "الأسبوع الأول" : "Première Semaine",
      image: "/images/poster1.jpg",
      type: i18n.language === 'ar' ? "برنامج أسبوعي" : "Programme Hebdomadaire",
      date: i18n.language === 'ar' ? "الأسبوع 1" : "Semaine 1"
    },
    {
      id: 2,
      title: i18n.language === 'ar' ? "برنامج العطلة" : "Programme des Vacances",
      subtitle: i18n.language === 'ar' ? "الأسبوع الثاني" : "Deuxième Semaine",
      image: "/images/poster2.jpg",
      type: i18n.language === 'ar' ? "برنامج أسبوعي" : "Programme Hebdomadaire",
      date: i18n.language === 'ar' ? "الأسبوع 2" : "Semaine 2"
    }
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const nextPoster = () => {
    setCurrentPosterIndex((prev) => (prev + 1) % posters.length);
  };

  const prevPoster = () => {
    setCurrentPosterIndex((prev) => (prev - 1 + posters.length) % posters.length);
  };

  return (
    <section 
      ref={sectionRef}
      id="program" 
      className="relative w-full py-16 md:py-24 overflow-hidden bg-gradient-to-b from-[hsl(220,30%,5%)] to-[hsl(220,25%,8%)]"
    >
      {/* Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 right-1/4 w-64 md:w-96 h-64 md:h-96 bg-cyan-600/10 rounded-full blur-[60px] md:blur-[120px] animate-pulse" />
        <div className="absolute bottom-0 left-1/4 w-56 md:w-80 h-56 md:h-80 bg-blue-600/10 rounded-full blur-[50px] md:blur-[100px] animate-pulse" style={{ animationDelay: '1s' }} />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 md:px-6 lg:px-12">
        {/* Section Header */}
        <div className={`text-center mb-10 md:mb-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="inline-flex items-center gap-2 px-3 md:px-4 py-2 rounded-full glass border-cyan-500/30 mb-4 md:mb-6 hover:border-cyan-500/50 transition-all">
            <Calendar className="w-3 md:w-4 h-3 md:h-4 text-cyan-400" />
            <span className="text-xs md:text-sm text-cyan-200 font-medium">{t('program.badge')}</span>
          </div>
          <h2 className="text-2xl md:text-4xl lg:text-5xl font-bold mb-3 md:mb-4">
            <span className="text-white">{t('program.title')} </span>
            <span className="text-gradient">{t('program.titleHighlight')}</span>
          </h2>
          <p className="text-sm md:text-base lg:text-lg text-white/60 max-w-2xl mx-auto px-4">
            {t('program.description')}
          </p>
        </div>

        {/* Posters Display */}
        <div className={`grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8 lg:gap-12 transition-all duration-1000 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          {posters.map((poster) => (
            <div 
              key={poster.id}
              onMouseEnter={() => setHoveredPoster(poster.id)}
              onMouseLeave={() => setHoveredPoster(null)}
              className="group relative"
            >
              {/* Card Container */}
              <div className="relative rounded-2xl md:rounded-3xl overflow-hidden">
                {/* Glow Effect */}
                <div className={`absolute -inset-2 bg-gradient-to-r from-blue-600/30 via-purple-600/30 to-cyan-600/30 rounded-2xl md:rounded-3xl blur-xl transition-opacity duration-500 ${hoveredPoster === poster.id ? 'opacity-100' : 'opacity-0'}`} />
                
                {/* Main Card */}
                <div className="relative glass rounded-2xl md:rounded-3xl overflow-hidden transition-all duration-500 group-hover:shadow-2xl group-hover:shadow-blue-500/20">
                  {/* Image */}
                  <div className="relative aspect-[3/4] overflow-hidden">
                    <img 
                      src={poster.image}
                      alt={poster.title}
                      className="w-full h-full object-cover transition-all duration-700 group-hover:scale-110"
                    />
                    
                    {/* Overlay Gradient */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent" />
                    
                    {/* Content Overlay */}
                    <div className="absolute bottom-0 left-0 right-0 p-4 md:p-6">
                      <div className="flex items-center gap-2 mb-2 md:mb-3">
                        <span className="px-2 md:px-3 py-1 rounded-full bg-blue-500/30 backdrop-blur-md text-[10px] md:text-xs text-blue-200 font-medium border border-blue-500/30">
                          {poster.type}
                        </span>
                        <span className="px-2 md:px-3 py-1 rounded-full bg-white/10 backdrop-blur-md text-[10px] md:text-xs text-white/70 font-medium border border-white/10">
                          {poster.date}
                        </span>
                      </div>
                      <h3 className="text-lg md:text-2xl font-bold text-white mb-0 md:mb-1">{poster.title}</h3>
                      <p className="text-white/60 text-xs md:text-sm">{poster.subtitle}</p>
                    </div>

                    {/* Hover Actions */}
                    <div className="absolute inset-0 flex items-center justify-center gap-3 md:gap-4 opacity-0 group-hover:opacity-100 transition-all duration-500 bg-black/50 backdrop-blur-sm">
                      <Button
                        onClick={() => setSelectedPoster(poster)}
                        className="bg-white/20 hover:bg-white/30 text-white backdrop-blur-md border border-white/20 rounded-lg md:rounded-xl px-4 md:px-6 py-2 md:py-3 text-sm md:text-base hover:scale-105 transition-transform"
                      >
                        <Eye className="w-4 h-4 md:w-5 md:h-5 mr-1 md:mr-2" />
                        {i18n.language === 'ar' ? 'معاينة' : 'Aperçu'}
                      </Button>
                      <a 
                        href={poster.image}
                        download
                        className="inline-flex items-center bg-blue-600 hover:bg-blue-500 text-white rounded-lg md:rounded-xl px-4 md:px-6 py-2 md:py-3 text-sm md:text-base transition-all hover:scale-105"
                      >
                        <Download className="w-4 h-4 md:w-5 md:h-5 mr-1 md:mr-2" />
                        {i18n.language === 'ar' ? 'تحميل' : 'Télécharger'}
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Mobile Carousel Navigation */}
        <div className="md:hidden mt-6 flex justify-center gap-4">
          <button 
            onClick={prevPoster}
            className="w-10 h-10 rounded-full glass flex items-center justify-center text-white/70 hover:text-white hover:bg-white/10 transition-all"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          <div className="flex items-center gap-2">
            {posters.map((_, idx) => (
              <div 
                key={idx}
                className={`h-2 rounded-full transition-all ${idx === currentPosterIndex ? 'w-6 bg-blue-500' : 'w-2 bg-white/30'}`}
              />
            ))}
          </div>
          <button 
            onClick={nextPoster}
            className="w-10 h-10 rounded-full glass flex items-center justify-center text-white/70 hover:text-white hover:bg-white/10 transition-all"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>

        {/* Info Cards */}
        <div className={`mt-10 md:mt-16 grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 transition-all duration-1000 delay-400 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          {[
            { icon: Clock, title: t('program.infoCards.schedule.title'), desc: t('program.infoCards.schedule.desc'), color: 'from-blue-500 to-cyan-500' },
            { icon: BookOpen, title: t('program.infoCards.content.title'), desc: t('program.infoCards.content.desc'), color: 'from-purple-500 to-pink-500' },
            { icon: GraduationCap, title: t('program.infoCards.bac.title'), desc: t('program.infoCards.bac.desc'), color: 'from-emerald-500 to-teal-500' },
          ].map((card, index) => (
            <div 
              key={index}
              className="glass rounded-xl md:rounded-2xl p-5 md:p-6 hover:bg-white/10 transition-all hover:scale-105 group cursor-default"
            >
              <div className={`w-10 h-10 md:w-14 md:h-14 rounded-lg md:rounded-xl bg-gradient-to-br ${card.color} flex items-center justify-center mb-3 md:mb-4 shadow-lg group-hover:shadow-xl group-hover:scale-110 transition-all`}>
                <card.icon className="w-5 h-5 md:w-7 md:h-7 text-white" />
              </div>
              <h4 className="text-white font-semibold text-base md:text-lg mb-1 md:mb-2">{card.title}</h4>
              <p className="text-white/60 text-xs md:text-sm">{card.desc}</p>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className={`mt-8 md:mt-12 text-center transition-all duration-1000 delay-600 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <p className="text-white/60 mb-3 md:mb-4 text-sm md:text-base">{t('program.cta')}</p>
          <Button 
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-500 hover:to-purple-500 text-white px-6 md:px-8 py-5 md:py-6 text-base md:text-lg font-semibold rounded-xl shadow-lg shadow-blue-600/25 transition-all hover:scale-105"
          >
            {t('program.ctaButton')}
          </Button>
        </div>
      </div>

      {/* Lightbox Dialog - Clean without text overlay */}
      <Dialog open={!!selectedPoster} onOpenChange={() => setSelectedPoster(null)}>
        <DialogContent className="max-w-4xl w-[95vw] bg-black/95 border-white/10 p-0 overflow-hidden">
          <button 
            onClick={() => setSelectedPoster(null)}
            className="absolute top-3 right-3 z-50 w-8 h-8 md:w-10 md:h-10 rounded-full bg-white/10 flex items-center justify-center text-white hover:bg-white/20 transition-colors"
          >
            <X className="w-4 h-4 md:w-5 md:h-5" />
          </button>
          {selectedPoster && (
            <div className="relative">
              <img 
                src={selectedPoster.image}
                alt={selectedPoster.title}
                className="w-full h-auto max-h-[85vh] object-contain"
              />
            </div>
          )}
        </DialogContent>
      </Dialog>
    </section>
  );
};

export default Program;
