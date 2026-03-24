import { useTranslation } from "react-i18next";
import { Instagram, Phone, Heart, ChevronUp } from "lucide-react";

// Custom TikTok Icon
const TikTokIcon = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
    <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z" />
  </svg>
);

const Footer = () => {
  const { t, i18n } = useTranslation();
  const isRTL = i18n.language === "ar";
  const textAlign = isRTL ? "text-right" : "text-left";
  const mdTextAlign = isRTL ? "md:text-right" : "md:text-left";
  const justify = isRTL ? "lg:justify-end" : "lg:justify-start";
  const flexDirection = isRTL ? "lg:flex-row-reverse" : "lg:flex-row";

  const quickLinks = [
    { name: t("nav.home"), href: "#hero" },
    { name: t("nav.groups"), href: "#groups" },
    { name: t("nav.program"), href: "#program" },
    { name: t("nav.about"), href: "#about" },
    { name: t("nav.contact"), href: "#contact" },
  ];

  const socialLinks = [
    {
      icon: Instagram,
      href: "https://www.instagram.com/professeur_mehira/",
      label: "Instagram",
      color: "hover:text-pink-500 hover:bg-pink-500/10",
    },
    {
      icon: TikTokIcon,
      href: "https://www.tiktok.com/@prof_ahmed_science_bac25",
      label: "TikTok",
      color: "hover:text-cyan-500 hover:bg-cyan-500/10",
    },
    {
      icon: Phone,
      href: "https://wa.me/213657856175",
      label: "WhatsApp",
      color: "hover:text-green-500 hover:bg-green-500/10",
    },
  ];

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <footer className="relative w-full bg-[hsl(220,30%,5%)] border-t border-white/5">
      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-12 py-10 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12">
          {/* Brand Column */}
          <div className={`lg:col-span-2 text-center ${mdTextAlign}`}>
            <div
              className={`flex items-center justify-center ${justify} gap-2 md:gap-3 mb-4 md:mb-6`}
            >
              <img
                src="/images/logo-white.png"
                alt="Mehira Science"
                className="h-28 md:h-40 w-auto object-contain"
              />
            </div>
            <p
              className={`text-white/60 mb-4 md:mb-6 max-w-md mx-auto leading-relaxed text-sm md:text-base ${isRTL ? "lg:mr-0 lg:ml-auto" : "lg:mx-0"}`}
            >
              {t("footer.description")}
            </p>

            {/* Social Links */}
            <div
              className={`flex gap-3 md:gap-4 justify-center ${isRTL ? "lg:flex-row-reverse lg:justify-end" : "lg:justify-start"}`}
            >
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`w-10 h-10 md:w-12 md:h-12 rounded-lg md:rounded-xl glass flex items-center justify-center text-white/60 ${social.color} transition-all hover:scale-110`}
                  aria-label={social.label}
                >
                  <social.icon className="w-4 md:w-5 h-4 md:h-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div className={`text-center ${mdTextAlign}`}>
            <h4 className="text-white font-semibold mb-4 md:mb-6 text-sm md:text-base">
              {t("footer.quickLinks")}
            </h4>
            <ul className="space-y-2 md:space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <button
                    onClick={() => scrollToSection(link.href)}
                    className={`text-white/60 hover:text-white transition-colors flex items-center justify-center gap-2 group text-sm ${isRTL ? "lg:flex-row-reverse lg:justify-end" : "lg:justify-start"}`}
                  >
                    <span
                      className={`w-0 group-hover:w-2 h-0.5 bg-blue-400 transition-all ${isRTL ? "order-2" : ""}`}
                    />
                    {link.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className={`text-center ${mdTextAlign}`}>
            <h4 className="text-white font-semibold mb-4 md:mb-6 text-sm md:text-base">
              {t("footer.contact")}
            </h4>
            <ul className="space-y-3 md:space-y-4">
              <li>
                <a
                  href="https://wa.me/213657856175"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`flex items-center justify-center gap-2 md:gap-3 text-white/60 hover:text-green-400 transition-colors group ${isRTL ? "lg:flex-row-reverse lg:justify-end" : "lg:justify-start"}`}
                >
                  <div
                    className={`w-8 h-8 md:w-10 md:h-10 rounded-lg bg-green-500/10 flex items-center justify-center group-hover:bg-green-500/20 transition-colors ${isRTL ? "order-2" : ""}`}
                  >
                    <Phone className="w-4 md:w-5 h-4 md:h-5" />
                  </div>
                  <div>
                    <div className="text-[10px] md:text-xs">WhatsApp</div>
                    <div className="text-white font-medium text-sm">
                      +213 657 856 175
                    </div>
                  </div>
                </a>
              </li>
              <li
                className={`flex items-center justify-center gap-2 md:gap-3 text-white/60 ${isRTL ? "lg:flex-row-reverse lg:justify-end" : "lg:justify-start"}`}
              >
                <div
                  className={`w-8 h-8 md:w-10 md:h-10 rounded-lg bg-purple-500/10 flex items-center justify-center ${isRTL ? "order-2" : ""}`}
                >
                  <svg
                    className="w-4 md:w-5 h-4 md:h-5"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
                  </svg>
                </div>
                <div>
                  <div className="text-[10px] md:text-xs">
                    {i18n.language === "ar" ? "الموقع" : "Location"}
                  </div>
                  <div className="text-white font-medium text-sm">
                    Oran, Algérie
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/5">
        <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-12 py-4 md:py-6">
          <div
            className={`flex flex-col md:flex-row items-center justify-between gap-2 md:gap-4 ${isRTL ? "md:flex-row-reverse" : ""}`}
          >
            <p
              className={`text-white/40 text-xs md:text-sm text-center ${mdTextAlign}`}
            >
              {t("footer.copyright")}
            </p>
            <p className="text-white/40 text-xs md:text-sm flex items-center gap-1">
              {t("footer.madeWith")}{" "}
              <Heart className="w-3 md:w-4 h-3 md:h-4 text-red-500 fill-red-500 animate-pulse" />{" "}
              {t("footer.forStudents")}
            </p>
          </div>
        </div>
      </div>

      {/* Scroll to Top Button */}
      <button
        onClick={scrollToTop}
        className="fixed bottom-6 md:bottom-8 right-4 md:right-8 w-10 h-10 md:w-12 md:h-12 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 flex items-center justify-center text-white shadow-lg shadow-blue-600/30 hover:scale-110 transition-all z-50"
        aria-label="Retour en haut"
      >
        <ChevronUp className="w-5 h-5 md:w-6 md:h-6" />
      </button>
    </footer>
  );
};

export default Footer;
