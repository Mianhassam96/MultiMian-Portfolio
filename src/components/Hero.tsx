import { ArrowDown } from 'lucide-react';

const Hero = () => {
  return (
    <section id="home" className="min-h-screen relative bg-dark-bg text-white overflow-hidden">
      {/* Banner Image */}
      <div 
        className="absolute inset-0 w-full h-full bg-cover bg-center"
        style={{ 
          backgroundImage: 'url("/lovable-uploads/fb1a6909-0433-47b1-ae38-0e07b07e9f01.png")',
          backgroundSize: 'cover'
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-dark-bg/80 via-dark-bg/60 to-dark-bg"></div>
      </div>

      {/* Content */}
      <div className="relative container mx-auto px-4 py-32 flex flex-col justify-end min-h-screen pb-20">
        <div className="mt-12 animate-fade-in" style={{ animationDelay: '400ms' }}>
          <a
            href="#about"
            className="inline-flex items-center gap-2 bg-primary/90 text-dark-bg px-8 py-4 rounded-full hover:bg-primary transition-colors font-semibold backdrop-blur-sm"
          >
            Explore <ArrowDown size={20} />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;