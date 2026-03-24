import { useEffect, useRef, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Award, BookOpen, Users, Target, Star, Quote, CheckCircle2, GraduationCap, MapPin, School, FileCheck } from 'lucide-react';

const About = () => {
  const { t, i18n } = useTranslation();
  const sectionRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [activeTestimonial, setActiveTestimonial] = useState(0);

  const achievements = [
    { icon: Award, value: "10+", label: t('about.stats.experience') },
    { icon: Users, value: "500+", label: t('about.stats.students') },
    { icon: Target, value: "95%", label: t('about.stats.success') },
    { icon: BookOpen, value: "50+", label: t('about.stats.courses') },
  ];

  const teachingPoints = [
    t('about.teachingPoints.0'),
    t('about.teachingPoints.1'),
    t('about.teachingPoints.2'),
    t('about.teachingPoints.3'),
    t('about.teachingPoints.4'),
    t('about.teachingPoints.5'),
  ];

  const testimonials = [
    {
      name: "Sarah M.",
      role: i18n.language === 'ar' ? "تلميذة باك 2025" : "Élève BAC 2025",
      content: i18n.language === 'ar' 
        ? "بفضل الأستاذ مهيرة، حصلت على شهادة البكالوريا بميزة جيد جداً. طريقته في التدريس استثنائية!"
        : "Grâce au Professeur Mehira, j'ai obtenu une mention Très Bien au BAC. Sa méthode d'enseignement est exceptionnelle !",
      rating: 5,
    },
    {
      name: "Karim B.",
      role: i18n.language === 'ar' ? "تلميذ باك 2024" : "Élève BAC 2024",
      content: i18n.language === 'ar'
        ? "الدروس منظمة جيداً والأستاذ يأخذ الوقت الكافي للشرح حتى يفهم الجميع."
        : "Les cours sont très bien structurés et le professeur prend le temps d'expliquer jusqu'à ce qu'on comprenne.",
      rating: 5,
    },
    {
      name: "Lina A.",
      role: i18n.language === 'ar' ? "تلميذة باك 2026" : "Élève BAC 2026",
      content: i18n.language === 'ar'
        ? "أشعر بثقة أكبر للبكالوريا. البرنامج شامل والحصص مفيدة جداً."
        : "Je me sens beaucoup plus confiante pour le BAC. Le programme est complet et les séances sont très utiles.",
      rating: 5,
    },
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  // Auto-rotate testimonials
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [testimonials.length]);

  return (
    <section 
      ref={sectionRef}
      id="about" 
      className="relative w-full py-16 md:py-24 overflow-hidden bg-gradient-to-b from-[hsl(220,25%,8%)] to-[hsl(220,30%,5%)]"
    >
      {/* Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/3 left-0 w-64 md:w-96 h-64 md:h-96 bg-purple-600/10 rounded-full blur-[80px] md:blur-[120px] animate-pulse" />
        <div className="absolute bottom-1/3 right-0 w-56 md:w-80 h-56 md:h-80 bg-blue-600/10 rounded-full blur-[60px] md:blur-[100px] animate-pulse" style={{ animationDelay: '1s' }} />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 md:px-6 lg:px-12">
        {/* Section Header */}
        <div className={`text-center mb-10 md:mb-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="inline-flex items-center gap-2 px-3 md:px-4 py-2 rounded-full glass border-blue-500/30 mb-4 md:mb-6 hover:border-blue-500/50 transition-all">
            <Star className="w-3 md:w-4 h-3 md:h-4 text-blue-400" />
            <span className="text-xs md:text-sm text-blue-200 font-medium">{t('about.badge')}</span>
          </div>
          <h2 className="text-2xl md:text-4xl lg:text-5xl font-bold mb-3 md:mb-4">
            <span className="text-white">{t('about.title')} </span>
            <span className="text-gradient">{t('about.titleHighlight')}</span>
          </h2>
          <p className="text-sm md:text-base lg:text-lg text-white/60 max-w-2xl mx-auto px-4">
            {t('about.subtitle')}
          </p>
        </div>

        {/* Credentials Card */}
        <div className={`mb-10 md:mb-16 transition-all duration-1000 delay-100 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="glass rounded-2xl md:rounded-3xl p-5 md:p-8 relative overflow-hidden group hover:bg-white/10 transition-all">
            {/* Glow Effect */}
            <div className="absolute top-0 right-0 w-48 md:w-64 h-48 md:h-64 bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-full blur-[60px] md:blur-[80px]" />
            
            <div className="relative">
              <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3 md:gap-4 mb-4 md:mb-6">
                <div className="w-12 h-12 md:w-16 md:h-16 rounded-xl md:rounded-2xl bg-gradient-to-br from-blue-500 to-purple-500 flex items-center justify-center shadow-lg">
                  <GraduationCap className="w-6 h-6 md:w-8 md:h-8 text-white" />
                </div>
                <div>
                  <h3 className="text-lg md:text-2xl font-bold text-white">{t('about.credentials.title')}</h3>
                  <div className="flex items-center gap-2 text-white/50 text-sm">
                    <MapPin className="w-3 md:w-4 h-3 md:h-4" />
                    <span>{t('about.credentials.location')}</span>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 md:gap-4">
                <div className="flex items-center gap-2 md:gap-3 p-3 md:p-4 rounded-lg md:rounded-xl bg-white/5">
                  <School className="w-4 md:w-5 h-4 md:h-5 text-blue-400" />
                  <span className="text-white/80 text-xs md:text-sm">{t('about.credentials.school')}</span>
                </div>
                <div className="flex items-center gap-2 md:gap-3 p-3 md:p-4 rounded-lg md:rounded-xl bg-white/5">
                  <GraduationCap className="w-4 md:w-5 h-4 md:h-5 text-purple-400" />
                  <span className="text-white/80 text-xs md:text-sm">{t('about.credentials.graduate')}</span>
                </div>
                <div className="flex items-center gap-2 md:gap-3 p-3 md:p-4 rounded-lg md:rounded-xl bg-white/5 sm:col-span-2">
                  <FileCheck className="w-4 md:w-5 h-4 md:h-5 text-emerald-400" />
                  <span className="text-white/80 text-xs md:text-sm">{t('about.credentials.corrector')}</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="flex flex-col lg:flex-row gap-8 md:gap-12 items-center mb-16 md:mb-20">
          {/* Left - Image */}
          <div className={`w-full lg:w-1/2 relative transition-all duration-1000 delay-200 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}>
            <div className="relative max-w-sm mx-auto lg:max-w-none">
              {/* Glow Effect */}
              <div className="absolute -inset-4 md:-inset-8 bg-gradient-to-br from-blue-600/20 via-purple-600/20 to-cyan-600/20 rounded-full blur-[60px] md:blur-[80px] animate-pulse-glow" />
              
              {/* Image Container */}
              <div className="relative rounded-2xl md:rounded-3xl overflow-hidden group">
                <div className="glass rounded-2xl md:rounded-3xl p-2 md:p-3">
                  <img 
                    src="/images/prof-photo.jpg"
                    alt="Professeur Mehira"
                    className="w-full rounded-xl md:rounded-2xl transition-transform duration-700 group-hover:scale-105"
                  />
                </div>
              </div>

              {/* Floating Badge - Hidden on mobile */}
              <div className="hidden sm:block absolute -bottom-4 md:-bottom-6 -right-2 md:-right-6 glass rounded-xl md:rounded-2xl p-3 md:p-4 animate-float">
                <div className="flex items-center gap-2 md:gap-3">
                  <div className="w-10 h-10 md:w-12 md:h-12 rounded-lg md:rounded-xl bg-gradient-to-br from-yellow-400 to-orange-500 flex items-center justify-center">
                    <Award className="w-5 h-5 md:w-6 md:h-6 text-white" />
                  </div>
                  <div>
                    <div className="text-xl md:text-2xl font-bold text-gradient">Expert</div>
                    <div className="text-[10px] md:text-xs text-white/60">{i18n.language === 'ar' ? 'علوم الطبيعة' : 'Sciences Naturelles'}</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right - Content */}
          <div className={`w-full lg:w-1/2 space-y-4 md:space-y-6 transition-all duration-1000 delay-400 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}>
            <div>
              <h3 className="text-xl md:text-2xl lg:text-3xl font-bold text-white mb-3 md:mb-4">
                {t('about.approachTitle')}
              </h3>
              <p className="text-white/70 text-sm md:text-base leading-relaxed">
                {t('about.approachDesc')}
              </p>
            </div>

            {/* Teaching Points */}
            <div className="space-y-2 md:space-y-3">
              {teachingPoints.map((point, index) => (
                <div 
                  key={index}
                  className="flex items-center gap-2 md:gap-3 p-2 md:p-3 rounded-lg md:rounded-xl glass hover:bg-white/10 transition-all hover:translate-x-1 md:hover:translate-x-2 cursor-default group"
                >
                  <CheckCircle2 className="w-4 md:w-5 h-4 md:h-5 text-blue-400 group-hover:scale-110 transition-transform flex-shrink-0" />
                  <span className="text-white/80 text-xs md:text-sm">{point}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Stats */}
        <div className={`grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-6 mb-16 md:mb-20 transition-all duration-1000 delay-600 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          {achievements.map((stat, index) => (
            <div 
              key={index}
              className="glass rounded-xl md:rounded-2xl p-4 md:p-6 text-center hover:bg-white/10 transition-all hover:scale-105 group cursor-default"
            >
              <stat.icon className="w-6 h-6 md:w-8 md:h-8 text-blue-400 mx-auto mb-2 md:mb-4 group-hover:scale-110 transition-transform" />
              <div className="text-2xl md:text-4xl font-bold text-gradient mb-1 group-hover:scale-110 transition-transform">{stat.value}</div>
              <div className="text-[10px] md:text-sm text-white/50">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Testimonials */}
        <div className={`transition-all duration-1000 delay-800 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h3 className="text-xl md:text-2xl font-bold text-white text-center mb-6 md:mb-8">
            {t('about.testimonialsTitle')} <span className="text-gradient">{t('about.testimonialsHighlight')}</span>
          </h3>
          
          {/* Desktop Grid */}
          <div className="hidden md:grid md:grid-cols-3 gap-4 md:gap-6">
            {testimonials.map((testimonial, index) => (
              <div 
                key={index}
                className="glass rounded-xl md:rounded-2xl p-5 md:p-6 relative hover:bg-white/10 transition-all hover:scale-105 group cursor-default"
              >
                <Quote className="absolute top-3 md:top-4 right-3 md:right-4 w-6 md:w-8 h-6 md:h-8 text-blue-500/20" />
                
                {/* Rating */}
                <div className="flex gap-1 mb-3 md:mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-3 md:w-4 h-3 md:h-4 text-yellow-400 fill-yellow-400 group-hover:scale-110 transition-transform" />
                  ))}
                </div>
                
                {/* Content */}
                <p className="text-white/70 text-xs md:text-sm mb-4 md:mb-6 leading-relaxed">
                  "{testimonial.content}"
                </p>
                
                {/* Author */}
                <div className="flex items-center gap-2 md:gap-3">
                  <div className="w-8 h-8 md:w-10 md:h-10 rounded-full bg-gradient-to-br from-blue-500 to-purple-500 flex items-center justify-center text-white font-semibold text-xs md:text-sm">
                    {testimonial.name.charAt(0)}
                  </div>
                  <div>
                    <div className="text-white font-medium text-xs md:text-sm">{testimonial.name}</div>
                    <div className="text-white/50 text-[10px] md:text-xs">{testimonial.role}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Mobile Carousel */}
          <div className="md:hidden">
            <div className="glass rounded-xl p-5 relative">
              <Quote className="absolute top-3 right-3 w-6 h-6 text-blue-500/20" />
              
              {/* Rating */}
              <div className="flex gap-1 mb-3">
                {[...Array(testimonials[activeTestimonial].rating)].map((_, i) => (
                  <Star key={i} className="w-3 h-3 text-yellow-400 fill-yellow-400" />
                ))}
              </div>
              
              {/* Content */}
              <p className="text-white/70 text-xs mb-4 leading-relaxed">
                "{testimonials[activeTestimonial].content}"
              </p>
              
              {/* Author */}
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-full bg-gradient-to-br from-blue-500 to-purple-500 flex items-center justify-center text-white font-semibold text-xs">
                  {testimonials[activeTestimonial].name.charAt(0)}
                </div>
                <div>
                  <div className="text-white font-medium text-xs">{testimonials[activeTestimonial].name}</div>
                  <div className="text-white/50 text-[10px]">{testimonials[activeTestimonial].role}</div>
                </div>
              </div>

              {/* Dots */}
              <div className="flex justify-center gap-2 mt-4">
                {testimonials.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => setActiveTestimonial(idx)}
                    className={`w-2 h-2 rounded-full transition-all ${idx === activeTestimonial ? 'w-5 bg-blue-500' : 'bg-white/30'}`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
