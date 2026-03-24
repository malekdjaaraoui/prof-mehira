import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import Hero from './sections/Hero';
import Groups from './sections/Groups';
import Program from './sections/Program';
import About from './sections/About';
import Contact from './sections/Contact';
import Footer from './sections/Footer';
import { Atom, Loader2, Sparkles, FlaskConical, Microscope } from 'lucide-react';

function App() {
  const { i18n } = useTranslation();
  const [isLoading, setIsLoading] = useState(true);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  // Loading screen
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  // Scroll progress
  useEffect(() => {
    const handleScroll = () => {
      const totalScroll = document.documentElement.scrollHeight - window.innerHeight;
      const progress = (window.scrollY / totalScroll) * 100;
      setScrollProgress(progress);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Mouse tracking for parallax effect
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth - 0.5) * 20,
        y: (e.clientY / window.innerHeight - 0.5) * 20,
      });
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  if (isLoading) {
    return (
      <div className="fixed inset-0 bg-[hsl(220,25%,8%)] flex flex-col items-center justify-center z-50">
        {/* Animated Logo */}
        <div className="relative mb-8">
          <div className="absolute inset-0 bg-blue-500/30 rounded-full blur-2xl animate-pulse" />
          <div className="absolute inset-0 bg-purple-500/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '0.5s' }} />
          <img 
            src="/images/logo-glow.png" 
            alt="Mehira Science" 
            className="relative h-40 w-auto object-contain animate-float"
          />
        </div>
        
        {/* Loading Text */}
        <div className="flex items-center gap-3 text-white/60">
          <Loader2 className="w-5 h-5 animate-spin" />
          <span className="text-sm font-medium">
            {i18n.language === 'ar' ? 'جاري التحميل...' : 'Chargement...'}
          </span>
        </div>

        {/* Loading Bar */}
        <div className="mt-6 w-48 h-1 bg-white/10 rounded-full overflow-hidden">
          <div className="h-full bg-gradient-to-r from-blue-500 via-purple-500 to-cyan-500 rounded-full animate-[loading_2s_ease-in-out_infinite]" />
        </div>

        {/* Floating Icons */}
        <Atom className="absolute top-1/4 left-1/4 w-8 h-8 text-blue-500/20 animate-float" style={{ animationDelay: '0s' }} />
        <FlaskConical className="absolute bottom-1/3 right-1/4 w-10 h-10 text-purple-500/20 animate-float" style={{ animationDelay: '1s' }} />
        <Microscope className="absolute top-1/3 right-1/3 w-6 h-6 text-cyan-500/20 animate-float" style={{ animationDelay: '2s' }} />
      </div>
    );
  }

  return (
    <div className="relative min-h-screen bg-[hsl(220,25%,8%)]" dir={i18n.language === 'ar' ? 'rtl' : 'ltr'}>
      {/* Scroll Progress Bar */}
      <div className="fixed top-0 left-0 right-0 h-1 bg-white/5 z-50">
        <div 
          className="h-full bg-gradient-to-r from-blue-500 via-purple-500 to-cyan-500 transition-all duration-150"
          style={{ width: `${scrollProgress}%` }}
        />
      </div>

      {/* Floating Particles Background with Parallax */}
      <div 
        className="fixed inset-0 pointer-events-none overflow-hidden z-0"
        style={{
          transform: `translate(${mousePosition.x * 0.5}px, ${mousePosition.y * 0.5}px)`,
          transition: 'transform 0.3s ease-out',
        }}
      >
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute animate-float"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${6 + Math.random() * 4}s`,
            }}
          >
            {i % 3 === 0 && <Atom className="w-4 h-4 text-blue-500/10" />}
            {i % 3 === 1 && <Sparkles className="w-3 h-3 text-purple-500/10" />}
            {i % 3 === 2 && <FlaskConical className="w-5 h-5 text-cyan-500/10" />}
          </div>
        ))}
      </div>

      {/* Gradient Orbs with Parallax */}
      <div 
        className="fixed inset-0 pointer-events-none z-0"
        style={{
          transform: `translate(${-mousePosition.x}px, ${-mousePosition.y}px)`,
          transition: 'transform 0.5s ease-out',
        }}
      >
        <div className="absolute top-1/4 left-1/4 w-[600px] h-[600px] bg-blue-600/5 rounded-full blur-[150px]" />
        <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-purple-600/5 rounded-full blur-[120px]" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-cyan-600/5 rounded-full blur-[200px]" />
      </div>

      {/* Main Content */}
      <main className="relative z-10">
        <Hero />
        <Groups />
        <Program />
        <About />
        <Contact />
        <Footer />
      </main>
    </div>
  );
}

export default App;
