import { useEffect, useRef } from "react";
import { useTranslation } from "react-i18next";
import {
  Instagram,
  Phone,
  ChevronDown,
  Sparkles,
  Atom,
  Microscope,
  FlaskConical,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import LanguageSwitcher from "@/components/LanguageSwitcher";

// Custom TikTok Icon Component
const TikTokIcon = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
    <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z" />
  </svg>
);

const Hero = () => {
  const { t, i18n } = useTranslation();
  const heroRef = useRef<HTMLDivElement>(null);
  const particlesRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!particlesRef.current) return;
      const particles = particlesRef.current.querySelectorAll(".particle");
      const x = e.clientX / window.innerWidth;
      const y = e.clientY / window.innerHeight;

      particles.forEach((particle, i) => {
        const speed = (i + 1) * 0.5;
        const el = particle as HTMLElement;
        el.style.transform = `translate(${x * speed * 20}px, ${y * speed * 20}px)`;
      });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: "smooth" });
  };

  const isRTL = i18n.language === "ar";
  const textAlign = isRTL
    ? "text-center lg:text-right"
    : "text-center lg:text-left";
  const alignActions = isRTL ? "lg:justify-end" : "lg:justify-start";
  const alignSocial = isRTL ? "justify-end" : "justify-center";
  const descriptionMargin = isRTL ? "lg:ml-auto lg:mr-0" : "lg:mx-0";
  const profName = isRTL ? "مهيرة" : "Mehira";

  return (
    <section
      ref={heroRef}
      id="hero"
      className="relative min-h-screen w-full overflow-hidden bg-gradient-hero"
    >
      {/* Animated Background Particles */}
      <div
        ref={particlesRef}
        className="absolute inset-0 pointer-events-none hidden md:block"
      >
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="particle absolute w-1 h-1 rounded-full bg-blue-400/30"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
            }}
          />
        ))}
        <Atom
          className="particle absolute top-20 left-10 w-8 h-8 text-blue-500/20 animate-float"
          style={{ animationDelay: "0s" }}
        />
        <Microscope
          className="particle absolute bottom-40 right-20 w-10 h-10 text-purple-500/20 animate-float"
          style={{ animationDelay: "2s" }}
        />
        <FlaskConical
          className="particle absolute top-1/3 right-1/4 w-6 h-6 text-cyan-500/20 animate-float"
          style={{ animationDelay: "1s" }}
        />
      </div>

      {/* Gradient Orbs */}
      <div className="absolute top-0 left-1/4 w-[300px] h-[300px] md:w-[500px] md:h-[500px] bg-blue-600/20 rounded-full blur-[100px] md:blur-[150px] animate-pulse-glow" />
      <div
        className="absolute bottom-0 right-1/4 w-[250px] h-[250px] md:w-[400px] md:h-[400px] bg-purple-600/15 rounded-full blur-[80px] md:blur-[120px] animate-pulse-glow"
        style={{ animationDelay: "1.5s" }}
      />

      {/* Navigation */}
      <nav className="absolute top-0 left-0 right-0 z-50 px-4 md:px-6 lg:px-12 py-4 md:py-6">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-2 md:gap-4">
            <img
              src="/images/logo-white.png"
              alt="Mehira Science"
              className="h-28 md:h-40 w-auto object-contain drop-shadow-lg"
            />
          </div>
          <div className="flex items-center gap-3 md:gap-6">
            <div className="hidden md:flex items-center gap-6 lg:gap-8">
              <button
                onClick={() => scrollToSection("hero")}
                className="text-white/70 hover:text-white transition-colors text-sm font-medium hover:scale-105 transform"
              >
                {t("nav.home")}
              </button>
              <button
                onClick={() => scrollToSection("groups")}
                className="text-white/70 hover:text-white transition-colors text-sm font-medium hover:scale-105 transform"
              >
                {t("nav.groups")}
              </button>
              <button
                onClick={() => scrollToSection("program")}
                className="text-white/70 hover:text-white transition-colors text-sm font-medium hover:scale-105 transform"
              >
                {t("nav.program")}
              </button>
              <button
                onClick={() => scrollToSection("about")}
                className="text-white/70 hover:text-white transition-colors text-sm font-medium hover:scale-105 transform"
              >
                {t("nav.about")}
              </button>
              <button
                onClick={() => scrollToSection("contact")}
                className="text-white/70 hover:text-white transition-colors text-sm font-medium hover:scale-105 transform"
              >
                {t("nav.contact")}
              </button>
            </div>
            <LanguageSwitcher />
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <div className="relative z-10 min-h-screen flex items-center pt-20 md:pt-0">
        <div className="w-full max-w-7xl mx-auto px-4 md:px-6 lg:px-12 py-8 md:py-24">
          <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-12">
            {/* Left Content - Text */}
            <div
              className={`w-full lg:w-1/2 space-y-4 md:space-y-6 ${textAlign} order-2 lg:order-1`}
            >
              {/* Badge */}
              <div className="inline-flex items-center gap-2 px-3 md:px-5 py-2 rounded-full glass border-blue-500/30 hover:border-blue-500/50 transition-all cursor-default group">
                <Sparkles className="w-3 md:w-4 h-3 md:h-4 text-blue-400 group-hover:rotate-12 transition-transform" />
                <span className="text-xs md:text-sm text-blue-200 font-medium">
                  {t("hero.badge")}
                </span>
              </div>

              {/* Title */}
              <div className="space-y-2 md:space-y-4">
                <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight">
                  <span className="text-white">{t("hero.title")}</span>
                  <br />
                  <span className="text-gradient animate-gradient">
                    {profName}
                  </span>
                </h1>
                <p className="text-lg md:text-xl lg:text-2xl text-white/70 font-light">
                  {t("hero.subtitle")}
                </p>
              </div>

              {/* Description */}
              <p
                className={`text-sm md:text-base lg:text-lg text-white/60 max-w-md mx-auto ${descriptionMargin} leading-relaxed`}
              >
                {t("hero.description")}
              </p>

              {/* CTA Buttons */}
              <div
                className={`flex flex-col sm:flex-row gap-3 md:gap-4 ${alignActions} ${isRTL ? "sm:flex-row-reverse" : ""}`}
              >
                <Button
                  onClick={() => scrollToSection("program")}
                  className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-500 hover:to-purple-500 text-white px-6 md:px-8 py-5 md:py-6 text-base md:text-lg font-semibold rounded-xl shadow-lg shadow-blue-600/25 transition-all hover:scale-105 hover:shadow-blue-600/40"
                >
                  {t("hero.ctaProgram")}
                </Button>
                <Button
                  onClick={() => scrollToSection("contact")}
                  variant="outline"
                  className="border-white/20 text-white hover:bg-white/10 px-6 md:px-8 py-5 md:py-6 text-base md:text-lg font-semibold rounded-xl transition-all hover:scale-105 hover:border-white/40"
                >
                  {t("hero.ctaContact")}
                </Button>
              </div>

              {/* Social Media Links */}
              <div className="pt-4 md:pt-6">
                <p className="text-xs md:text-sm text-white/50 mb-3 md:mb-4 text-center">
                  {t("hero.socialTitle")}
                </p>
                <div
                  className={`flex gap-3 md:gap-4 ${isRTL ? "lg:flex-row-reverse lg:justify-end" : "lg:justify-start"} justify-center`}
                >
                  <a
                    href="https://www.instagram.com/professeur_mehira/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group relative flex items-center justify-center w-12 h-12 md:w-14 md:h-14 rounded-xl md:rounded-2xl glass hover:bg-gradient-to-br hover:from-pink-500 hover:to-purple-600 transition-all duration-300 hover:scale-110 hover:rotate-3"
                  >
                    <Instagram className="w-5 h-5 md:w-6 md:h-6 text-white/70 group-hover:text-white transition-colors" />
                  </a>
                  <a
                    href="https://www.tiktok.com/@prof_ahmed_science_bac25"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group relative flex items-center justify-center w-12 h-12 md:w-14 md:h-14 rounded-xl md:rounded-2xl glass hover:bg-gradient-to-br hover:from-cyan-500 hover:to-blue-600 transition-all duration-300 hover:scale-110 hover:-rotate-3"
                  >
                    <TikTokIcon className="w-5 h-5 md:w-6 md:h-6 text-white/70 group-hover:text-white transition-colors" />
                  </a>
                  <a
                    href="https://wa.me/213657856175"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group relative flex items-center justify-center w-12 h-12 md:w-14 md:h-14 rounded-xl md:rounded-2xl glass hover:bg-gradient-to-br hover:from-green-500 hover:to-emerald-600 transition-all duration-300 hover:scale-110 hover:rotate-3"
                  >
                    <Phone className="w-5 h-5 md:w-6 md:h-6 text-white/70 group-hover:text-white transition-colors" />
                  </a>
                </div>
              </div>
            </div>

            {/* Right Content - Professor Image */}
            <div className="w-full lg:w-1/2 relative flex justify-center order-1 lg:order-2">
              <div className="relative">
                {/* Glow Effect Behind Image */}
                <div className="absolute inset-0 bg-gradient-to-br from-blue-600/40 via-purple-600/30 to-cyan-600/40 rounded-full blur-[60px] md:blur-[100px] scale-110 animate-pulse-glow" />

                {/* Image Container */}
                <div className="relative w-[280px] h-[350px] sm:w-[320px] sm:h-[400px] md:w-[380px] md:h-[480px] lg:w-[420px] lg:h-[540px]">
                  {/* Decorative Rings - Hidden on mobile */}
                  <div className="hidden md:block absolute inset-0 rounded-full border-2 border-blue-500/20 animate-[spin_20s_linear_infinite]" />
                  <div className="hidden md:block absolute -inset-4 rounded-full border border-purple-500/10 animate-[spin_25s_linear_infinite_reverse]" />

                  {/* Professor Image */}
                  <img
                    src="/images/prof-new.png"
                    alt="Professeur Mehira"
                    className="w-full h-full object-contain object-bottom drop-shadow-2xl"
                  />
                </div>

                {/* Floating Stats Cards - Hidden on small mobile */}
                <div
                  className="hidden sm:block absolute -left-4 md:-left-10 top-1/4 glass rounded-xl md:rounded-2xl p-3 md:p-4 animate-float hover:scale-110 transition-transform cursor-default"
                  style={{ animationDelay: "0.5s" }}
                >
                  <div className="text-xl md:text-3xl font-bold text-gradient">
                    500+
                  </div>
                  <div className="text-[10px] md:text-xs text-white/60">
                    {t("hero.stats.students")}
                  </div>
                </div>
                <div
                  className="hidden sm:block absolute -right-2 md:-right-6 top-1/3 glass rounded-xl md:rounded-2xl p-3 md:p-4 animate-float hover:scale-110 transition-transform cursor-default"
                  style={{ animationDelay: "1s" }}
                >
                  <div className="text-xl md:text-3xl font-bold text-gradient">
                    95%
                  </div>
                  <div className="text-[10px] md:text-xs text-white/60">
                    {t("hero.stats.success")}
                  </div>
                </div>
                <div
                  className="hidden sm:block absolute left-0 md:left-0 bottom-1/4 glass rounded-xl md:rounded-2xl p-3 md:p-4 animate-float hover:scale-110 transition-transform cursor-default"
                  style={{ animationDelay: "1.5s" }}
                >
                  <div className="text-xl md:text-3xl font-bold text-gradient">
                    10+
                  </div>
                  <div className="text-[10px] md:text-xs text-white/60">
                    {t("hero.stats.experience")}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <button
        onClick={() => scrollToSection("groups")}
        className="absolute bottom-6 md:bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 md:gap-2 text-white/40 hover:text-white/70 transition-colors animate-bounce"
      >
        <span className="text-[10px] md:text-xs font-medium">
          {isRTL ? "اكتشف" : "Découvrir"}
        </span>
        <ChevronDown className="w-4 h-4 md:w-5 md:h-5" />
      </button>
    </section>
  );
};

export default Hero;
