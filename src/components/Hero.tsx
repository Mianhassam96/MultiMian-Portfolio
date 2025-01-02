import { ArrowDown } from 'lucide-react';

const Hero = () => {
  return (
    <section id="home" className="h-screen w-full relative bg-dark-bg">
      {/* Full-screen banner with parallax effect */}
      <div 
        className="absolute inset-0 w-full h-full bg-cover bg-center bg-fixed"
        style={{ 
          backgroundImage: 'url("/lovable-uploads/fb1a6909-0433-47b1-ae38-0e07b07e9f01.png")',
          backgroundSize: 'cover'
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-dark-bg/80 via-dark-bg/60 to-dark-bg/90 backdrop-blur-[1px]"></div>
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