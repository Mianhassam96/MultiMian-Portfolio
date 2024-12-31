import { useState, useEffect } from 'react';
import { Menu, X, Sun, Moon } from 'lucide-react';
import { Toggle } from "@/components/ui/toggle";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    const isDark = document.documentElement.classList.contains('dark');
    setIsDarkMode(isDark);
  }, []);

  const toggleDarkMode = () => {
    document.documentElement.classList.toggle('dark');
    setIsDarkMode(!isDarkMode);
  };

  return (
    <header className="fixed w-full bg-white/80 dark:bg-dark-bg/90 backdrop-blur-sm z-50 shadow-sm transition-colors duration-300">
      <div className="container mx-auto px-4 py-4">
        <nav className="flex justify-between items-center">
          <a href="#" className="text-2xl font-bold text-primary dark:text-primary-light">
            MultiMian 🌟
          </a>
          
          <div className="flex items-center gap-4">
            <Toggle
              pressed={isDarkMode}
              onPressedChange={toggleDarkMode}
              className="bg-primary/10 dark:bg-primary-light/10 data-[state=on]:bg-primary-dark data-[state=on]:text-white"
            >
              {isDarkMode ? <Sun size={18} /> : <Moon size={18} />}
            </Toggle>

            {/* Mobile menu button */}
            <button
              className="md:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          {/* Desktop menu */}
          <div className="hidden md:flex gap-8">
            <NavLinks />
          </div>

          {/* Mobile menu */}
          {isMenuOpen && (
            <div className="absolute top-full left-0 right-0 bg-white dark:bg-dark-bg shadow-lg md:hidden transition-colors">
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
    <a href="#home" className="hover:text-primary dark:text-gray-200 dark:hover:text-primary-light transition-colors">Home</a>
    <a href="#about" className="hover:text-primary dark:text-gray-200 dark:hover:text-primary-light transition-colors">About</a>
    <a href="#skills" className="hover:text-primary dark:text-gray-200 dark:hover:text-primary-light transition-colors">Skills</a>
    <a href="#projects" className="hover:text-primary dark:text-gray-200 dark:hover:text-primary-light transition-colors">Projects</a>
    <a href="#contact" className="hover:text-primary dark:text-gray-200 dark:hover:text-primary-light transition-colors">Contact</a>
  </>
);

export default Header;