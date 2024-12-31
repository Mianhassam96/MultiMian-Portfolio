import { ArrowDown } from 'lucide-react';

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center bg-gradient-to-br from-primary-light/20 to-white">
      <div className="container mx-auto px-4 py-20 text-center">
        <h1 className="text-4xl md:text-6xl font-bold mb-6 animate-fade-in">
          Hi, I'm <span className="text-primary">Mian Hassam</span> 👋
        </h1>
        <p className="text-xl md:text-2xl text-gray-600 mb-8 animate-slide-up">
          Full Stack Developer | JavaScript Expert | Problem Solver
        </p>
        <a
          href="#about"
          className="inline-flex items-center gap-2 bg-primary text-white px-6 py-3 rounded-full hover:bg-primary-dark transition-colors"
        >
          Learn More <ArrowDown size={20} />
        </a>
      </div>
    </section>
  );
};

export default Hero;