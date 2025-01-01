const Footer = () => {
  return (
    <footer className="bg-dark-card text-white py-12 border-t border-primary/20">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          <div className="space-y-4">
            <h3 className="text-3xl font-bold bg-gradient-to-r from-primary via-primary-light to-accent-light bg-clip-text text-transparent">
              MultiMian
            </h3>
            <p className="text-gray-300">
              Building the future of web development, one project at a time.
            </p>
          </div>
          
          <div className="space-y-4">
            <h4 className="text-xl font-semibold text-primary-light">Quick Links</h4>
            <nav className="flex flex-col space-y-2">
              <a href="#about" className="text-gray-300 hover:text-primary-light transition-colors">About</a>
              <a href="#projects" className="text-gray-300 hover:text-primary-light transition-colors">Projects</a>
              <a href="#skills" className="text-gray-300 hover:text-primary-light transition-colors">Skills</a>
              <a href="#contact" className="text-gray-300 hover:text-primary-light transition-colors">Contact</a>
            </nav>
          </div>

          <div className="space-y-4">
            <h4 className="text-xl font-semibold text-primary-light">Contact</h4>
            <div className="space-y-2">
              <a 
                href="mailto:mhassamkb@gmail.com" 
                className="block text-gray-300 hover:text-primary-light transition-colors"
              >
                mhassamkb@gmail.com
              </a>
              <a 
                href="https://github.com/Mianhassam96" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="block text-gray-300 hover:text-primary-light transition-colors"
              >
                github.com/Mianhassam96
              </a>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-primary/10 text-center">
          <p className="text-gray-400">
            &copy; {new Date().getFullYear()} Mian Hassam. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;