import { useEffect, useRef, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Phone, Instagram, MessageCircle, MapPin, Clock, Send, ExternalLink, ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';

// Custom TikTok Icon
const TikTokIcon = ({ className }: { className?: string }) => (
  <svg 
    viewBox="0 0 24 24" 
    fill="currentColor" 
    className={className}
  >
    <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"/>
  </svg>
);

const Contact = () => {
  const { t, i18n } = useTranslation();
  const sectionRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [focusedField, setFocusedField] = useState<string | null>(null);
  const whatsappLink = 'https://wa.me/213657856175';
  const whatsappDisplay = '+213 657 856 175';

  const contactMethods = [
    {
      icon: Phone,
      title: "WhatsApp",
      value: whatsappDisplay,
      description: i18n.language === 'ar' ? "متاح للأسئلة" : "Disponible pour vos questions",
      link: whatsappLink,
      color: "from-green-500 to-emerald-600",
      bgColor: "bg-green-500/10",
      borderColor: "border-green-500/30",
    },
    {
      icon: Instagram,
      title: "Instagram",
      value: "@professeur_mehira",
      description: i18n.language === 'ar' ? "تابع أخبارنا" : "Suivez nos actualités",
      link: "https://www.instagram.com/professeur_mehira/",
      color: "from-pink-500 to-purple-600",
      bgColor: "bg-pink-500/10",
      borderColor: "border-pink-500/30",
    },
    {
      icon: TikTokIcon,
      title: "TikTok",
      value: "@prof_ahmed_science_bac25",
      description: i18n.language === 'ar' ? "فيديوهات تعليمية" : "Vidéos éducatives",
      link: "https://www.tiktok.com/@prof_ahmed_science_bac25",
      color: "from-cyan-500 to-blue-600",
      bgColor: "bg-cyan-500/10",
      borderColor: "border-cyan-500/30",
    },
  ];

  const locations = [
    {
      name: "Les Jasmins School",
      address: "École Les Jasmins",
      sessions: i18n.language === 'ar' ? "السبت 11:00 & الأربعاء 21:00" : "Samedi 11:00 & Mercredi 21:00",
    },
    {
      name: "Centre Castor",
      address: "Centre Castor",
      sessions: i18n.language === 'ar' ? "الجمعة، السبت، الثلاثاء" : "Vendredi, Samedi, Mardi",
    },
    {
      name: "Canastel",
      address: "Canastel",
      sessions: i18n.language === 'ar' ? "السبت 08:00" : "Samedi 08:00",
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

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    setIsSubmitting(false);
    setSubmitted(true);
    setFormData({ name: '', email: '', phone: '', message: '' });
    
    setTimeout(() => setSubmitted(false), 5000);
  };

  return (
    <section 
      ref={sectionRef}
      id="contact" 
      className="relative w-full py-16 md:py-24 overflow-hidden bg-gradient-to-b from-[hsl(220,30%,5%)] to-[hsl(220,25%,8%)]"
    >
      {/* Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/3 w-64 md:w-96 h-64 md:h-96 bg-blue-600/10 rounded-full blur-[60px] md:blur-[120px] animate-pulse" />
        <div className="absolute bottom-0 right-1/3 w-56 md:w-80 h-56 md:h-80 bg-purple-600/10 rounded-full blur-[50px] md:blur-[100px] animate-pulse" style={{ animationDelay: '1s' }} />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 md:px-6 lg:px-12">
        {/* Section Header */}
        <div className={`text-center mb-10 md:mb-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="inline-flex items-center gap-2 px-3 md:px-4 py-2 rounded-full glass border-purple-500/30 mb-4 md:mb-6 hover:border-purple-500/50 transition-all">
            <MessageCircle className="w-3 md:w-4 h-3 md:h-4 text-purple-400" />
            <span className="text-xs md:text-sm text-purple-200 font-medium">{t('contact.badge')}</span>
          </div>
          <h2 className="text-2xl md:text-4xl lg:text-5xl font-bold mb-3 md:mb-4">
            <span className="text-white">{t('contact.title')} </span>
            <span className="text-gradient">{t('contact.titleHighlight')}</span>
          </h2>
          <p className="text-sm md:text-base lg:text-lg text-white/60 max-w-2xl mx-auto px-4">
            {t('contact.description')}
          </p>
        </div>

        {/* Contact Methods Grid */}
        <div className={`grid grid-cols-1 sm:grid-cols-3 gap-3 md:gap-6 mb-10 md:mb-16 transition-all duration-1000 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          {contactMethods.map((method, index) => (
            <a
              key={index}
              href={method.link}
              target="_blank"
              rel="noopener noreferrer"
              className={`group relative p-4 md:p-6 rounded-xl md:rounded-2xl ${method.bgColor} border ${method.borderColor} hover:bg-opacity-20 transition-all duration-300 hover:scale-105 hover:shadow-lg`}
            >
              <div className={`w-10 h-10 md:w-14 md:h-14 rounded-lg md:rounded-2xl bg-gradient-to-br ${method.color} flex items-center justify-center mb-3 md:mb-4 shadow-lg group-hover:shadow-xl group-hover:scale-110 transition-all`}>
                <method.icon className="w-5 md:w-7 h-5 md:h-7 text-white" />
              </div>
              
              <h3 className="text-base md:text-xl font-semibold text-white mb-1 group-hover:text-gradient transition-all">{method.title}</h3>
              <p className="text-white font-medium text-xs md:text-base mb-0 md:mb-1">{method.value}</p>
              <p className="text-white/50 text-[10px] md:text-sm mb-2 md:mb-4">{method.description}</p>
              
              <div className="flex items-center text-xs md:text-sm text-white/70 group-hover:text-white transition-colors">
                <span>{i18n.language === 'ar' ? 'تواصل' : 'Contacter'}</span>
                <ExternalLink className="w-3 md:w-4 h-3 md:h-4 ml-1 md:ml-2 group-hover:translate-x-1 transition-transform" />
              </div>
            </a>
          ))}
        </div>

        {/* Main Content Grid */}
        <div className="flex flex-col lg:flex-row gap-6 md:gap-12">
          {/* Left - Contact Form */}
          <div className={`w-full lg:w-1/2 transition-all duration-1000 delay-400 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}>
            <div className="glass rounded-2xl md:rounded-3xl p-5 md:p-8">
              <h3 className="text-lg md:text-2xl font-bold text-white mb-4 md:mb-6">
                {t('contact.form.title')}
              </h3>
              
              {submitted ? (
                <div className="text-center py-8 md:py-12">
                  <div className="w-12 h-12 md:w-16 md:h-16 rounded-full bg-green-500/20 flex items-center justify-center mx-auto mb-3 md:mb-4 animate-bounce">
                    <Send className="w-6 h-6 md:w-8 md:h-8 text-green-400" />
                  </div>
                  <h4 className="text-lg md:text-xl font-semibold text-white mb-1 md:mb-2">{t('contact.form.successTitle')}</h4>
                  <p className="text-white/60 text-sm">{t('contact.form.successDesc')}</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4 md:space-y-5">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-5">
                    <div className="relative">
                      <label className={`block text-xs md:text-sm text-white/70 mb-1 md:mb-2 transition-all ${focusedField === 'name' ? 'text-blue-400' : ''}`}>{t('contact.form.name')}</label>
                      <Input
                        type="text"
                        placeholder={t('contact.form.namePlaceholder')}
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        onFocus={() => setFocusedField('name')}
                        onBlur={() => setFocusedField(null)}
                        required
                        className="bg-white/5 border-white/10 text-white placeholder:text-white/30 focus:border-blue-500/50 rounded-lg md:rounded-xl text-sm transition-all focus:shadow-lg focus:shadow-blue-500/20 h-10 md:h-12"
                      />
                    </div>
                    <div className="relative">
                      <label className={`block text-xs md:text-sm text-white/70 mb-1 md:mb-2 transition-all ${focusedField === 'phone' ? 'text-blue-400' : ''}`}>{t('contact.form.phone')}</label>
                      <Input
                        type="tel"
                        placeholder={t('contact.form.phonePlaceholder')}
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        onFocus={() => setFocusedField('phone')}
                        onBlur={() => setFocusedField(null)}
                        className="bg-white/5 border-white/10 text-white placeholder:text-white/30 focus:border-blue-500/50 rounded-lg md:rounded-xl text-sm transition-all focus:shadow-lg focus:shadow-blue-500/20 h-10 md:h-12"
                      />
                    </div>
                  </div>
                  
                  <div className="relative">
                    <label className={`block text-xs md:text-sm text-white/70 mb-1 md:mb-2 transition-all ${focusedField === 'email' ? 'text-blue-400' : ''}`}>{t('contact.form.email')}</label>
                    <Input
                      type="email"
                      placeholder={t('contact.form.emailPlaceholder')}
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      onFocus={() => setFocusedField('email')}
                      onBlur={() => setFocusedField(null)}
                      required
                      className="bg-white/5 border-white/10 text-white placeholder:text-white/30 focus:border-blue-500/50 rounded-lg md:rounded-xl text-sm transition-all focus:shadow-lg focus:shadow-blue-500/20 h-10 md:h-12"
                    />
                  </div>
                  
                  <div className="relative">
                    <label className={`block text-xs md:text-sm text-white/70 mb-1 md:mb-2 transition-all ${focusedField === 'message' ? 'text-blue-400' : ''}`}>{t('contact.form.message')}</label>
                    <Textarea
                      placeholder={t('contact.form.messagePlaceholder')}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      onFocus={() => setFocusedField('message')}
                      onBlur={() => setFocusedField(null)}
                      required
                      rows={3}
                      className="bg-white/5 border-white/10 text-white placeholder:text-white/30 focus:border-blue-500/50 rounded-lg md:rounded-xl text-sm resize-none transition-all focus:shadow-lg focus:shadow-blue-500/20"
                    />
                  </div>
                  
                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-500 hover:to-purple-500 text-white py-5 md:py-6 text-sm md:text-lg font-semibold rounded-lg md:rounded-xl shadow-lg shadow-blue-600/25 transition-all hover:scale-[1.02] disabled:opacity-50"
                  >
                    {isSubmitting ? (
                      <span className="flex items-center gap-2">
                        <div className="w-4 h-4 md:w-5 md:h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                        {t('contact.form.sending')}
                      </span>
                    ) : (
                      <span className="flex items-center gap-2">
                        <Send className="w-4 h-4 md:w-5 md:h-5" />
                        {t('contact.form.submit')}
                      </span>
                    )}
                  </Button>
                </form>
              )}
            </div>
          </div>

          {/* Right - Locations & Info */}
          <div className={`w-full lg:w-1/2 space-y-4 md:space-y-6 transition-all duration-1000 delay-600 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}>
            {/* Locations */}
            <div className="glass rounded-2xl md:rounded-3xl p-5 md:p-8">
              <h3 className="text-base md:text-xl font-bold text-white mb-4 md:mb-6 flex items-center gap-2 md:gap-3">
                <MapPin className="w-5 h-5 md:w-6 md:h-6 text-blue-400" />
                {t('contact.locations.title')}
              </h3>
              
              <div className="space-y-3 md:space-y-4">
                {locations.map((location, index) => (
                  <div 
                    key={index}
                    className="p-3 md:p-4 rounded-lg md:rounded-xl bg-white/5 hover:bg-white/10 transition-all hover:translate-x-1 md:hover:translate-x-2 cursor-default group"
                  >
                    <div className="flex items-center justify-between">
                      <div>
                        <h4 className="text-white font-semibold text-sm md:text-base mb-0 md:mb-1 group-hover:text-gradient transition-all">{location.name}</h4>
                        <p className="text-white/50 text-xs md:text-sm">{location.address}</p>
                      </div>
                      <ChevronRight className="w-4 md:w-5 h-4 md:h-5 text-white/30 group-hover:text-blue-400 group-hover:translate-x-1 transition-all" />
                    </div>
                    <div className="flex items-center gap-2 text-xs md:text-sm text-blue-400 mt-1 md:mt-2">
                      <Clock className="w-3 md:w-4 h-3 md:h-4" />
                      <span>{location.sessions}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Quick Contact */}
            <div className="glass rounded-2xl md:rounded-3xl p-5 md:p-8">
              <h3 className="text-base md:text-xl font-bold text-white mb-2 md:mb-4">
                {t('contact.quickContact.title')}
              </h3>
              <p className="text-white/60 mb-4 md:mb-6 text-xs md:text-base">
                {t('contact.quickContact.desc')}
              </p>
              <a 
                href={whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button className="w-full bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-500 hover:to-emerald-500 text-white py-5 md:py-6 text-sm md:text-lg font-semibold rounded-lg md:rounded-xl shadow-lg shadow-green-600/25 transition-all hover:scale-[1.02]">
                  <Phone className="w-4 h-4 md:w-5 md:h-5 mr-2" />
                  {t('contact.quickContact.button')}
                </Button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
