import { ArrowDown } from 'lucide-react';

const Hero = () => {
  return (
    <section id="home" className="min-h-screen relative bg-dark-bg text-white">
      {/* Full-screen banner with parallax effect */}
      <div 
        className="absolute inset-0 w-full h-full bg-cover bg-center bg-fixed"
        style={{ 
          backgroundImage: 'url("/lovable-uploads/fb1a6909-0433-47b1-ae38-0e07b07e9f01.png")',
          backgroundSize: 'cover'
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-dark-bg/95 via-dark-bg/80 to-dark-bg/90 backdrop-blur-[2px]"></div>
      </div>

      {/* Content */}
      <div className="relative container mx-auto px-4 py-32 flex flex-col justify-center items-center min-h-screen">
        <div className="text-center space-y-8 max-w-4xl mx-auto">
          <h1 className="text-6xl md:text-8xl font-bold animate-blur-in bg-gradient-to-r from-primary via-primary-light to-accent-light bg-clip-text text-transparent pb-2">
            Creative Developer
          </h1>
          
          <p className="text-2xl md:text-3xl text-gray-300 animate-slide-in opacity-0" style={{ animationDelay: '0.5s', animationFillMode: 'forwards' }}>
            Turning Ideas into Digital Reality
          </p>
        </div>
        
        <div className="absolute bottom-8 animate-bounce-slow">
          <a
            href="#about"
            className="inline-flex items-center gap-2 bg-primary/20 backdrop-blur-sm border border-primary/50 text-primary-light hover:bg-primary hover:text-dark-bg px-6 py-3 rounded-full transition-all duration-300 font-semibold group"
          >
            Explore
            <ArrowDown className="group-hover:translate-y-1 transition-transform" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;