import { useState } from 'react';
import { Menu, X } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed w-full bg-white/80 backdrop-blur-sm z-50 shadow-sm">
      <div className="container mx-auto px-4 py-4">
        <nav className="flex justify-between items-center">
          <a href="#" className="text-2xl font-bold text-primary">
            MultiMian 🌟
          </a>
          
          {/* Mobile menu button */}
          <button
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>

          {/* Desktop menu */}
          <div className="hidden md:flex gap-8">
            <NavLinks />
          </div>

          {/* Mobile menu */}
          {isMenuOpen && (
            <div className="absolute top-full left-0 right-0 bg-white shadow-lg md:hidden">
              <div className="flex flex-col items-center py-4">
                <NavLinks />
              </div>
            </div>
          )}
        </nav>
      </div>
    </header>
  );
};

const NavLinks = () => (
  <>
    <a href="#home" className="hover:text-primary transition-colors">Home</a>
    <a href="#about" className="hover:text-primary transition-colors">About</a>
    <a href="#skills" className="hover:text-primary transition-colors">Skills</a>
    <a href="#contact" className="hover:text-primary transition-colors">Contact</a>
  </>
);

export default Header;