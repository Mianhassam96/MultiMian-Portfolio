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
        <div className="absolute inset-0 bg-gradient-to-b from-dark-bg/40 to-dark-bg"></div>
      </div>

      {/* Content */}
      <div className="relative container mx-auto px-4 py-32 flex flex-col justify-center min-h-screen">
        <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-fade-in">
          Innovating the Future with <span className="text-primary">MultiMian</span>
        </h1>
        <p className="text-2xl md:text-3xl text-gray-300 mb-8 animate-slide-up max-w-3xl">
          Crafting Scalable and User-Centric Web Applications
        </p>
        <div className="space-y-4 text-lg text-gray-300 animate-slide-up" style={{ animationDelay: '200ms' }}>
          <p className="flex items-center gap-2">
            <span className="text-primary">•</span> 
            Turning ideas into impactful digital solutions
          </p>
          <p className="flex items-center gap-2">
            <span className="text-primary">•</span>
            Specializing in Full Stack Development (MERN, TypeScript, Python)
          </p>
          <p className="flex items-center gap-2">
            <span className="text-primary">•</span>
            Building interactive, scalable, and user-driven platforms
          </p>
        </div>
        
        <div className="mt-12 animate-fade-in" style={{ animationDelay: '400ms' }}>
          <a
            href="#about"
            className="inline-flex items-center gap-2 bg-primary text-dark-bg px-8 py-4 rounded-full hover:bg-primary-light transition-colors font-semibold"
          >
            Explore My Work <ArrowDown size={20} />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;