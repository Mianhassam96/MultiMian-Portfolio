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
        <div className="absolute inset-0 bg-gradient-to-b from-dark-bg/90 via-dark-bg/70 to-dark-bg/95"></div>
      </div>

      {/* Content */}
      <div className="relative container mx-auto px-4 py-32 flex flex-col justify-center min-h-screen">
        <div className="max-w-4xl">
          <h1 className="text-6xl md:text-8xl font-bold mb-6 animate-slide-up">
            Building the
            <span className="bg-gradient-to-r from-primary via-primary-light to-accent bg-clip-text text-transparent animate-pulse"> Future </span>
            of Web
          </h1>
          
          <p className="text-2xl md:text-3xl text-gray-300 mb-8 animate-fade-in opacity-0" style={{ animationDelay: '300ms', animationFillMode: 'forwards' }}>
            Full Stack Developer & Digital Innovator
          </p>

          <div className="space-y-4 text-lg text-gray-300">
            {[
              "Crafting Scalable Solutions",
              "MERN Stack Specialist",
              "UI/UX Enthusiast"
            ].map((text, index) => (
              <p 
                key={text}
                className="flex items-center gap-2 animate-fade-in opacity-0"
                style={{ animationDelay: `${(index + 2) * 200}ms`, animationFillMode: 'forwards' }}
              >
                <span className="text-primary text-2xl">•</span>
                {text}
              </p>
            ))}
          </div>
        </div>
        
        <div className="mt-12 animate-bounce-slow">
          <a
            href="#about"
            className="inline-flex items-center gap-2 bg-primary/20 backdrop-blur-sm border border-primary/50 text-primary hover:bg-primary hover:text-dark-bg px-8 py-4 rounded-full transition-all duration-300 font-semibold group"
          >
            Explore My Work 
            <ArrowDown size={20} className="group-hover:translate-y-1 transition-transform" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;