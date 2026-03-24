import { useEffect, useRef, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Users, Clock, MapPin, ChevronRight } from 'lucide-react';

interface Group {
  id: number;
  name: string;
  location: string;
  sessions: { day: string; time: string }[];
  color: string;
  icon: string;
}

const Groups = () => {
  const { t, i18n } = useTranslation();
  const sectionRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [hoveredGroup, setHoveredGroup] = useState<number | null>(null);

  const groupsData: Group[] = [
    {
      id: 1,
      name: "Les Jasmins School",
      location: "École Les Jasmins",
      sessions: [
        { day: i18n.language === 'ar' ? "السبت" : "Samedi", time: "11:00" },
        { day: i18n.language === 'ar' ? "الأربعاء" : "Mercredi", time: "21:00" }
      ],
      color: "from-blue-500 to-cyan-500",
      icon: "🏫"
    },
    {
      id: 2,
      name: "Groupe 01 Castor",
      location: "Centre Castor",
      sessions: [
        { day: i18n.language === 'ar' ? "الجمعة" : "Vendredi", time: "15:00" },
        { day: i18n.language === 'ar' ? "الثلاثاء" : "Mardi", time: "15:30" }
      ],
      color: "from-purple-500 to-pink-500",
      icon: "📚"
    },
    {
      id: 3,
      name: "Groupe 02 Castor",
      location: "Centre Castor",
      sessions: [
        { day: i18n.language === 'ar' ? "السبت" : "Samedi", time: "14:30" },
        { day: i18n.language === 'ar' ? "الثلاثاء" : "Mardi", time: "21:00" }
      ],
      color: "from-emerald-500 to-teal-500",
      icon: "🎯"
    },
    {
      id: 4,
      name: "Groupe 03 Castor",
      location: "Centre Castor",
      sessions: [
        { day: i18n.language === 'ar' ? "السبت" : "Samedi", time: "21:00" }
      ],
      color: "from-orange-500 to-amber-500",
      icon: "⭐"
    },
    {
      id: 5,
      name: "Groupe Canastel",
      location: "Canastel",
      sessions: [
        { day: i18n.language === 'ar' ? "السبت" : "Samedi", time: "08:00" }
      ],
      color: "from-rose-500 to-red-500",
      icon: "🌟"
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

  return (
    <section 
      ref={sectionRef}
      id="groups" 
      className="relative w-full py-16 md:py-24 overflow-hidden bg-gradient-to-b from-[hsl(220,25%,8%)] to-[hsl(220,30%,5%)]"
    >
      {/* Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-0 w-64 md:w-96 h-64 md:h-96 bg-blue-600/10 rounded-full blur-[80px] md:blur-[100px] animate-pulse" />
        <div className="absolute bottom-1/4 right-0 w-56 md:w-80 h-56 md:h-80 bg-purple-600/10 rounded-full blur-[60px] md:blur-[100px] animate-pulse" style={{ animationDelay: '1s' }} />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 md:px-6 lg:px-12">
        {/* Section Header */}
        <div className={`text-center mb-10 md:mb-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="inline-flex items-center gap-2 px-3 md:px-4 py-2 rounded-full glass border-purple-500/30 mb-4 md:mb-6 hover:border-purple-500/50 transition-all">
            <Users className="w-3 md:w-4 h-3 md:h-4 text-purple-400" />
            <span className="text-xs md:text-sm text-purple-200 font-medium">{t('groups.badge')}</span>
          </div>
          <h2 className="text-2xl md:text-4xl lg:text-5xl font-bold mb-3 md:mb-4">
            <span className="text-white">{t('groups.title')} </span>
            <span className="text-gradient">{t('groups.titleHighlight')}</span>
          </h2>
          <p className="text-sm md:text-base lg:text-lg text-white/60 max-w-2xl mx-auto px-4">
            {t('groups.description')}
          </p>
        </div>

        {/* Groups Grid */}
        <div className={`grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 transition-all duration-1000 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          {groupsData.map((group) => (
            <div
              key={group.id}
              onMouseEnter={() => setHoveredGroup(group.id)}
              onMouseLeave={() => setHoveredGroup(null)}
              className={`group relative p-4 md:p-6 rounded-xl md:rounded-2xl cursor-pointer transition-all duration-500 ${
                hoveredGroup === group.id 
                  ? 'glass border-blue-500/50 bg-blue-500/10 scale-[1.02] md:scale-105 shadow-xl shadow-blue-500/20' 
                  : 'glass hover:border-white/20 hover:bg-white/5'
              }`}
              style={{ 
                transform: hoveredGroup === group.id ? 'translateY(-4px) md:translateY(-8px)' : 'translateY(0)'
              }}
            >
              {/* Glow Effect on Hover */}
              <div className={`absolute inset-0 rounded-xl md:rounded-2xl bg-gradient-to-br ${group.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500 blur-xl`} />
              
              <div className="relative">
                <div className="flex items-center justify-between mb-3 md:mb-4">
                  {/* Group Icon */}
                  <div className={`w-10 h-10 md:w-14 md:h-14 rounded-lg md:rounded-xl bg-gradient-to-br ${group.color} flex items-center justify-center shadow-lg group-hover:shadow-xl group-hover:scale-110 transition-all duration-300`}>
                    <span className="text-lg md:text-2xl">{group.icon}</span>
                  </div>
                  
                  {/* Arrow */}
                  <ChevronRight className={`w-4 md:w-5 h-4 md:h-5 text-white/30 transition-all duration-300 ${hoveredGroup === group.id ? 'rotate-90 text-blue-400' : 'group-hover:text-white/60'}`} />
                </div>
                
                {/* Group Info */}
                <h3 className="text-base md:text-xl font-semibold text-white group-hover:text-gradient transition-all mb-1 md:mb-2">
                  {group.name}
                </h3>
                <div className="flex items-center gap-2 text-white/50 text-xs md:text-sm mb-3 md:mb-4">
                  <MapPin className="w-3 md:w-4 h-3 md:h-4" />
                  <span>{group.location}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Stats */}
        <div className={`mt-10 md:mt-12 grid grid-cols-3 gap-3 md:gap-6 transition-all duration-1000 delay-600 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          {[
            { value: "5", label: t('groups.stats.activeGroups'), icon: Users },
            { value: "12", label: t('groups.stats.sessionsPerWeek'), icon: Clock },
            { value: "3", label: t('groups.stats.locations'), icon: MapPin },
          ].map((stat, index) => (
            <div 
              key={index} 
              className="glass rounded-xl md:rounded-2xl p-4 md:p-6 text-center hover:bg-white/10 transition-all hover:scale-105 group cursor-default"
            >
              <stat.icon className="w-5 h-5 md:w-8 md:h-8 text-blue-400 mx-auto mb-2 md:mb-3 group-hover:scale-110 transition-transform" />
              <div className="text-2xl md:text-4xl font-bold text-gradient mb-0 md:mb-1 group-hover:scale-110 transition-transform">{stat.value}</div>
              <div className="text-[10px] md:text-sm text-white/50">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Groups;
