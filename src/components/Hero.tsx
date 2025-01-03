import { ArrowDown } from 'lucide-react';

const Hero = () => {
  return (
    <section id="home" className="h-screen w-full relative bg-dark-bg flex items-center justify-center overflow-hidden">
      {/* Main content */}
      <div className="container mx-auto px-4 text-center relative z-10">
        {/* Name with flowing animation */}
        <h2 className="text-2xl md:text-4xl font-semibold mb-4 animate-slide-in bg-gradient-to-r from-accent-light via-primary to-primary-light bg-clip-text text-transparent">
          I am Mian Hassam
        </h2>
        
        {/* Animated flowing heading with enhanced gradient text */}
        <h1 className="text-4xl md:text-7xl font-bold mb-6 animate-slide-in bg-gradient-to-r from-primary-light via-accent-light to-primary bg-clip-text text-transparent hover:scale-105 transition-transform duration-300">
          Full Stack Developer
        </h1>
        
        {/* Animated flowing subheading with glow effect */}
        <div className="text-2xl md:text-4xl font-semibold mb-8 animate-blur-in delay-200">
          <span className="bg-gradient-to-r from-accent-light via-primary to-primary-light bg-clip-text text-transparent animate-pulse">
            CEO & Founder of MultiMian
          </span>
        </div>
        
        {/* Expanded description with multiple flowing elements */}
        <div className="space-y-4 mb-12">
          <p className="text-lg md:text-xl text-dark-text/90 max-w-2xl mx-auto animate-slide-up delay-300">
            <span className="relative inline-block animate-float">
              Creating innovative digital solutions
            </span>
          </p>
        </div>

        {/* Enhanced decorative elements */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-primary/5 rounded-full blur-3xl animate-pulse -z-10"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] bg-accent/5 rounded-full blur-2xl animate-float -z-10"></div>
      </div>

      {/* Animated scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce-slow">
        <a
          href="#about"
          className="inline-flex items-center gap-2 bg-primary/20 backdrop-blur-sm border border-primary/50 text-primary-light hover:bg-primary hover:text-dark-bg px-6 py-3 rounded-full transition-all duration-300 font-semibold group animate-glow"
        >
          <ArrowDown className="group-hover:translate-y-1 transition-transform" />
        </a>
      </div>
    </section>
  );
};

export default Hero;