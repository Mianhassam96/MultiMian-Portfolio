import { ArrowDown } from 'lucide-react';

const Hero = () => {
  return (
    <section id="home" className="h-screen w-full relative bg-dark-bg flex items-center justify-center">
      {/* Main content */}
      <div className="container mx-auto px-4 text-center">
        <h1 className="text-4xl md:text-6xl font-bold text-primary-light mb-6 animate-fade-in">
          Welcome to My Portfolio
        </h1>
        <p className="text-lg md:text-xl text-dark-text/90 max-w-2xl mx-auto mb-8 animate-slide-up">
          I'm a passionate developer creating beautiful and functional web experiences. Let's build something amazing together.
        </p>
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