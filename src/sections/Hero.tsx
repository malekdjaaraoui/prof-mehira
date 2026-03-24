import { useEffect, useRef, useState } from "react";
import { useTranslation } from "react-i18next";
import {
  Instagram,
  Phone,
  Sparkles,
  Atom,
  Microscope,
  FlaskConical,
  ChevronDown,
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
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Trigger animations after mount
    setIsVisible(true);

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
  const descriptionMargin = isRTL ? "lg:ml-auto lg:mr-0" : "lg:mx-0";
  const socialTitleAlign = isRTL ? "lg:text-right" : "lg:text-left";
  const profName = isRTL ? "مهيرة" : "Mehira";

  return (
    <section
      ref={heroRef}
      id="hero"
      className="relative w-full overflow-hidden bg-gradient-hero"
      style={{ minHeight: "100dvh" }}
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

      {/* Gradient Orbs - Enhanced for mobile */}
      <div className="absolute top-0 left-1/4 w-[200px] h-[200px] sm:w-[300px] sm:h-[300px] md:w-[500px] md:h-[500px] bg-blue-600/20 rounded-full blur-[80px] sm:blur-[100px] md:blur-[150px] animate-pulse-glow" />
      <div
        className="absolute bottom-0 right-1/4 w-[180px] h-[180px] sm:w-[250px] sm:h-[250px] md:w-[400px] md:h-[400px] bg-purple-600/15 rounded-full blur-[70px] sm:blur-[80px] md:blur-[120px] animate-pulse-glow"
        style={{ animationDelay: "1.5s" }}
      />

      {/* Navigation - Enhanced for mobile */}
      <nav className="absolute top-0 left-0 right-0 z-50 px-4 md:px-6 lg:px-12 py-2 md:py-6 bg-gradient-to-b from-black/20 to-transparent backdrop-blur-sm">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center transform transition-all duration-500 hover:scale-105">
            <img
              src="/images/logo-white.png"
              alt="Mehira Science"
              className="h-12 sm:h-16 md:h-40 w-auto object-contain drop-shadow-lg"
            />
          </div>
          <div className="flex items-center gap-2 sm:gap-3 md:gap-6">
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

      {/* Main Content — enhanced for mobile with animations */}
      <div
        className="relative z-10 flex items-center"
        style={{ minHeight: "100dvh" }}
      >
        <div className="w-full max-w-7xl mx-auto px-4 md:px-6 lg:px-12 pt-20 sm:pt-24 pb-6 md:py-24">
          <div className="flex flex-col lg:flex-row items-center gap-4 sm:gap-6 md:gap-8 lg:gap-12">
            {/* Professor Image — bigger and animated */}
            <div
              className="w-full lg:w-1/2 relative flex justify-center order-1 lg:order-2 animate-fade-in-up"
              style={{ animationDelay: "0.2s" }}
            >
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-600/40 via-purple-600/30 to-cyan-600/40 rounded-full blur-[50px] sm:blur-[60px] md:blur-[100px] scale-110 animate-pulse-glow" />

                <div className="relative w-[260px] h-[320px] sm:w-[300px] sm:h-[380px] md:w-[380px] md:h-[480px] lg:w-[420px] lg:h-[540px] transform transition-all duration-700 hover:scale-105">
                  <div className="hidden md:block absolute inset-0 rounded-full border-2 border-blue-500/20 animate-[spin_20s_linear_infinite]" />
                  <div className="hidden md:block absolute -inset-4 rounded-full border border-purple-500/10 animate-[spin_25s_linear_infinite_reverse]" />
                  <img
                    src="/images/prof-new.png"
                    alt="Professeur Mehira"
                    className="w-full h-full object-contain object-bottom drop-shadow-2xl animate-float-slow"
                  />
                </div>

                {/* Floating Stats — visible on mobile with animation */}
                <div
                  className="absolute -left-2 sm:-left-4 md:-left-10 top-1/4 glass rounded-xl md:rounded-2xl p-2 sm:p-3 md:p-4 animate-float hover:scale-110 transition-transform cursor-default"
                  style={{ animationDelay: "0.5s" }}
                >
                  <div className="text-base sm:text-xl md:text-3xl font-bold text-gradient">
                    500+
                  </div>
                  <div className="text-[8px] sm:text-[10px] md:text-xs text-white/60">
                    {t("hero.stats.students")}
                  </div>
                </div>
                <div
                  className="absolute -right-2 sm:-right-4 md:-right-6 top-1/3 glass rounded-xl md:rounded-2xl p-2 sm:p-3 md:p-4 animate-float hover:scale-110 transition-transform cursor-default"
                  style={{ animationDelay: "1s" }}
                >
                  <div className="text-base sm:text-xl md:text-3xl font-bold text-gradient">
                    95%
                  </div>
                  <div className="text-[8px] sm:text-[10px] md:text-xs text-white/60">
                    {t("hero.stats.success")}
                  </div>
                </div>
                <div
                  className="absolute left-0 sm:left-0 bottom-1/4 glass rounded-xl md:rounded-2xl p-2 sm:p-3 md:p-4 animate-float hover:scale-110 transition-transform cursor-default"
                  style={{ animationDelay: "1.5s" }}
                >
                  <div className="text-base sm:text-xl md:text-3xl font-bold text-gradient">
                    10+
                  </div>
                  <div className="text-[8px] sm:text-[10px] md:text-xs text-white/60">
                    {t("hero.stats.experience")}
                  </div>
                </div>
              </div>
            </div>

            {/* Text Content — with animations */}
            <div
              className={`w-full lg:w-1/2 space-y-3 sm:space-y-4 md:space-y-6 ${textAlign} order-2 lg:order-1 animate-fade-in-up`}
              style={{ animationDelay: "0.1s" }}
            >
              {/* Badge - Animated */}
              <div className="inline-flex items-center gap-2 px-3 md:px-5 py-1.5 md:py-2 rounded-full glass border-blue-500/30 hover:border-blue-500/50 transition-all cursor-default group animate-fade-in">
                <Sparkles className="w-3 md:w-4 h-3 md:h-4 text-blue-400 group-hover:rotate-12 transition-transform" />
                <span className="text-[10px] sm:text-xs md:text-sm text-blue-200 font-medium">
                  {t("hero.badge")}
                </span>
              </div>

              {/* Title - Larger and animated */}
              <div className="space-y-1 sm:space-y-2 md:space-y-4">
                <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight animate-slide-in">
                  <span className="text-white bg-gradient-to-r from-white to-white/80 bg-clip-text">
                    {t("hero.title")}
                  </span>
                  <br />
                  <span className="text-gradient animate-gradient bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text">
                    {profName}
                  </span>
                </h1>
                <p
                  className="text-sm sm:text-lg md:text-xl lg:text-2xl text-white/80 font-light animate-fade-in-up"
                  style={{ animationDelay: "0.2s" }}
                >
                  {t("hero.subtitle")}
                </p>
              </div>

              {/* Description - Animated */}
              <p
                className={`text-xs sm:text-sm md:text-base lg:text-lg text-white/70 max-w-md mx-auto ${descriptionMargin} leading-relaxed animate-fade-in-up`}
                style={{ animationDelay: "0.3s" }}
              >
                {t("hero.description")}
              </p>

              {/* CTA Buttons - Animated */}
              <div
                className={`flex flex-col sm:flex-row gap-2 sm:gap-3 md:gap-4 ${alignActions} ${isRTL ? "sm:flex-row-reverse" : ""} animate-fade-in-up`}
                style={{ animationDelay: "0.4s" }}
              >
                <Button
                  onClick={() => scrollToSection("program")}
                  className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-500 hover:to-purple-500 text-white px-5 sm:px-6 md:px-8 py-3 sm:py-4 md:py-6 text-sm sm:text-base md:text-lg font-semibold rounded-xl shadow-lg shadow-blue-600/25 transition-all hover:scale-105 hover:shadow-blue-600/40 animate-glow"
                >
                  {t("hero.ctaProgram")}
                </Button>
                <Button
                  onClick={() => scrollToSection("contact")}
                  variant="outline"
                  className="border-white/20 text-white hover:bg-white/10 px-5 sm:px-6 md:px-8 py-3 sm:py-4 md:py-6 text-sm sm:text-base md:text-lg font-semibold rounded-xl transition-all hover:scale-105 hover:border-white/40"
                >
                  {t("hero.ctaContact")}
                </Button>
              </div>

              {/* Social Media Links - Animated */}
              <div
                className="pt-2 sm:pt-3 md:pt-6 animate-fade-in-up"
                style={{ animationDelay: "0.5s" }}
              >
                <p
                  className={`text-[10px] sm:text-xs md:text-sm text-white/50 mb-2 sm:mb-3 md:mb-4 text-center ${socialTitleAlign}`}
                >
                  {t("hero.socialTitle")}
                </p>
                <div
                  className={`flex gap-2 sm:gap-3 md:gap-4 ${isRTL ? "lg:flex-row-reverse lg:justify-end" : "lg:justify-start"} justify-center`}
                >
                  <a
                    href="https://www.instagram.com/professeur_mehira/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group relative flex items-center justify-center w-9 h-9 sm:w-10 sm:h-10 md:w-14 md:h-14 rounded-xl md:rounded-2xl glass hover:bg-gradient-to-br hover:from-pink-500 hover:to-purple-600 transition-all duration-300 hover:scale-110 hover:rotate-3 animate-fade-in"
                    style={{ animationDelay: "0.6s" }}
                  >
                    <Instagram className="w-4 h-4 sm:w-4 sm:h-4 md:w-6 md:h-6 text-white/70 group-hover:text-white transition-colors" />
                  </a>
                  <a
                    href="https://www.tiktok.com/@prof_ahmed_science_bac25"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group relative flex items-center justify-center w-9 h-9 sm:w-10 sm:h-10 md:w-14 md:h-14 rounded-xl md:rounded-2xl glass hover:bg-gradient-to-br hover:from-cyan-500 hover:to-blue-600 transition-all duration-300 hover:scale-110 hover:-rotate-3 animate-fade-in"
                    style={{ animationDelay: "0.7s" }}
                  >
                    <TikTokIcon className="w-4 h-4 sm:w-4 sm:h-4 md:w-6 md:h-6 text-white/70 group-hover:text-white transition-colors" />
                  </a>
                  <a
                    href="https://wa.me/213657856175"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group relative flex items-center justify-center w-9 h-9 sm:w-10 sm:h-10 md:w-14 md:h-14 rounded-xl md:rounded-2xl glass hover:bg-gradient-to-br hover:from-green-500 hover:to-emerald-600 transition-all duration-300 hover:scale-110 hover:rotate-3 animate-fade-in"
                    style={{ animationDelay: "0.8s" }}
                  >
                    <Phone className="w-4 h-4 sm:w-4 sm:h-4 md:w-6 md:h-6 text-white/70 group-hover:text-white transition-colors" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator - Animated */}
      <button
        onClick={() => scrollToSection("groups")}
        className="absolute bottom-4 sm:bottom-6 md:bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 md:gap-2 text-white/40 hover:text-white/70 transition-colors animate-bounce-slow z-20"
      >
        <span className="text-[8px] sm:text-[10px] md:text-xs font-medium">
          {isRTL ? "اكتشف" : "Découvrir"}
        </span>
        <ChevronDown className="w-3 h-3 sm:w-4 sm:h-4 md:w-5 md:h-5" />
      </button>

      <style jsx>{`
        @keyframes fade-in {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }

        @keyframes fade-in-up {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes slide-in {
          from {
            opacity: 0;
            transform: translateX(-30px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes glow {
          0%,
          100% {
            box-shadow: 0 0 5px rgba(59, 130, 246, 0.3);
          }
          50% {
            box-shadow: 0 0 20px rgba(59, 130, 246, 0.6);
          }
        }

        @keyframes bounce-slow {
          0%,
          100% {
            transform: translateX(-50%) translateY(0);
          }
          50% {
            transform: translateX(-50%) translateY(10px);
          }
        }

        @keyframes float-slow {
          0%,
          100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-10px);
          }
        }

        .animate-fade-in {
          animation: fade-in 0.6s ease-out forwards;
        }

        .animate-fade-in-up {
          animation: fade-in-up 0.8s ease-out forwards;
          opacity: 0;
        }

        .animate-slide-in {
          animation: slide-in 0.8s ease-out forwards;
          opacity: 0;
        }

        .animate-glow {
          animation: glow 2s ease-in-out infinite;
        }

        .animate-bounce-slow {
          animation: bounce-slow 2s ease-in-out infinite;
        }

        .animate-float-slow {
          animation: float-slow 3s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
};

export default Hero;
