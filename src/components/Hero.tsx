import { ArrowDown, Download, Github, Linkedin } from 'lucide-react';
import { Button } from './ui/button';

const Hero = () => {
  const handleDownloadResume = () => {
    // Replace with your actual resume file path
    const resumeUrl = '/path-to-your-resume.pdf';
    window.open(resumeUrl, '_blank');
  };

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

          <div className="flex flex-wrap justify-center gap-6 mt-12 animate-fade-in opacity-0" style={{ animationDelay: '1s', animationFillMode: 'forwards' }}>
            <Button
              onClick={handleDownloadResume}
              className="bg-primary/20 backdrop-blur-sm border border-primary/50 text-primary-light hover:bg-primary hover:text-dark-bg px-8 py-6 rounded-full transition-all duration-300 font-semibold group animate-glow"
            >
              <Download className="mr-2 group-hover:translate-y-0.5 transition-transform" />
              Download Resume
            </Button>

            <div className="flex gap-4 items-center">
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-4 rounded-full bg-dark-card hover:bg-primary/20 transition-colors duration-300 group"
              >
                <Github className="w-6 h-6 group-hover:text-primary-light transition-colors" />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-4 rounded-full bg-dark-card hover:bg-primary/20 transition-colors duration-300 group"
              >
                <Linkedin className="w-6 h-6 group-hover:text-primary-light transition-colors" />
              </a>
            </div>
          </div>
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