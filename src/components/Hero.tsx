import { ArrowDown } from 'lucide-react';

const Hero = () => {
  return (
    <section id="home" className="h-screen w-full relative bg-dark-bg flex items-center justify-center overflow-hidden">
      {/* Main content */}
      <div className="container mx-auto px-4 text-center relative z-10">
        {/* Animated heading with gradient text */}
        <h1 className="text-4xl md:text-7xl font-bold mb-6 animate-fade-in bg-gradient-to-r from-primary-light via-accent-light to-primary bg-clip-text text-transparent">
          Full Stack Developer
        </h1>
        
        {/* Animated subheading */}
        <div className="text-2xl md:text-4xl font-semibold text-primary-light/90 mb-8 animate-slide-up delay-200">
          CEO & Founder of MultiMian
        </div>
        
        {/* Description with glow effect */}
        <p className="text-lg md:text-xl text-dark-text/90 max-w-2xl mx-auto mb-12 animate-slide-up delay-300 relative">
          <span className="relative inline-block animate-float">
            Creating innovative digital solutions and leading technological advancement
          </span>
        </p>

        {/* Decorative elements */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-primary/5 rounded-full blur-3xl animate-pulse -z-10"></div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce-slow">
        <a
          href="#about"
          className="inline-flex items-center gap-2 bg-primary/20 backdrop-blur-sm border border-primary/50 text-primary-light hover:bg-primary hover:text-dark-bg px-6 py-3 rounded-full transition-all duration-300 font-semibold group"
        >
          <ArrowDown className="group-hover:translate-y-1 transition-transform" />
        </a>
      </div>
    </section>
  );
};

export default Hero;