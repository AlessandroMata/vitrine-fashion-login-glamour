
import { useState, useEffect } from "react";
import Logo from "@/components/Logo";
import LoginForm from "@/components/LoginForm";
import ThemeToggle from "@/components/ThemeToggle";

const Index = () => {
  const [loaded, setLoaded] = useState(false);
  const [isMasculine, setIsMasculine] = useState(false);

  useEffect(() => {
    setLoaded(true);

    // Check if masculine theme is active
    const checkTheme = () => {
      const isMasculineTheme = document.documentElement.classList.contains('masculine');
      setIsMasculine(isMasculineTheme);
    };

    // Initial check
    checkTheme();

    // Set up observer to detect theme changes
    const observer = new MutationObserver(checkTheme);
    observer.observe(document.documentElement, { 
      attributes: true,
      attributeFilter: ['class']
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div className="w-full min-h-screen flex flex-col md:flex-row-reverse overflow-hidden">
      {/* Right column - Form (switched from left) */}
      <div className="w-full md:w-1/2 h-full flex flex-col justify-center items-center p-6 md:p-12 lg:p-20 relative">
        {/* Move theme toggle to the top of the page on mobile */}
        <div className="w-full max-w-md flex justify-end mb-4 md:mb-0 md:absolute md:top-4 md:right-4">
          <ThemeToggle />
        </div>
        
        <div className={`w-full max-w-md transition-all duration-700 ${loaded ? 'animate-fade-in' : 'opacity-0'}`}>
          <Logo className="mb-10" />
          <LoginForm className="animate-slide-up" />
        </div>
      </div>

      {/* Left column - Image (switched from right) */}
      <div className="hidden md:block md:w-1/2 h-screen relative overflow-hidden">
        <div className="absolute inset-0 bg-black/20 z-10 dark:bg-black/40"></div>
        {isMasculine ? (
          <img 
            src="https://images.unsplash.com/photo-1593030761757-71fae45fa0e7?q=80&w=1887&auto=format&fit=crop" 
            alt="Moda Masculina" 
            className="w-full h-full object-cover object-center scale-105 dark:brightness-75"
          />
        ) : (
          <img 
            src="https://images.unsplash.com/photo-1483985988355-763728e1935b?q=80&w=1470&auto=format&fit=crop" 
            alt="Moda Feminina" 
            className="w-full h-full object-cover object-center scale-105 dark:brightness-75"
          />
        )}
        <div className="absolute bottom-0 left-0 right-0 p-10 z-20">
          <div className="glass-effect p-6 md:p-8 rounded-lg max-w-md mx-auto text-left">
            <h3 className="font-serif text-2xl mb-2">{isMasculine ? "Nova coleção masculina" : "Nova coleção feminina"}</h3>
            <p className="text-foreground/80 text-sm">
              Descubra as últimas tendências e peças exclusivas para a temporada em nossa loja online. 
              Estilo e sofisticação para todos os momentos.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
