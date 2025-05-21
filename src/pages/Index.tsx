
import { useState, useEffect } from "react";
import Logo from "@/components/Logo";
import LoginForm from "@/components/LoginForm";

const Index = () => {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    setLoaded(true);
  }, []);

  return (
    <div className="w-full min-h-screen flex flex-col md:flex-row overflow-hidden">
      {/* Left column - Form */}
      <div className="w-full md:w-1/2 h-full flex flex-col justify-center items-center p-6 md:p-12 lg:p-20">
        <div className={`w-full max-w-md transition-all duration-700 ${loaded ? 'animate-fade-in' : 'opacity-0'}`}>
          <Logo className="mb-10" />
          <LoginForm className="animate-slide-up" />
        </div>
      </div>

      {/* Right column - Image */}
      <div className="hidden md:block md:w-1/2 h-screen relative overflow-hidden">
        <div className="absolute inset-0 bg-black/20 z-10"></div>
        <img 
          src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80" 
          alt="Vitrine Fashion" 
          className="w-full h-full object-cover object-center scale-105"
        />
        <div className="absolute bottom-0 left-0 right-0 p-10 z-20">
          <div className="glass-effect p-6 md:p-8 rounded-lg max-w-md mx-auto text-left">
            <h3 className="font-serif text-2xl mb-2">Nova coleção outono</h3>
            <p className="text-gray-700 text-sm">
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
