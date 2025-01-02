import { useState, useEffect } from 'react';
import { Menu, X, Palette } from 'lucide-react';
import { Toggle } from "@/components/ui/toggle";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { toast } from "sonner";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [currentTheme, setCurrentTheme] = useState('purple');

  useEffect(() => {
    const theme = localStorage.getItem('theme') || 'purple';
    setCurrentTheme(theme);
    document.documentElement.setAttribute('data-theme', theme);
  }, []);

  const changeTheme = (theme: string) => {
    setCurrentTheme(theme);
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
    toast.success(`Theme changed to ${theme}`);
  };

  return (
    <header className="fixed w-full bg-white/80 dark:bg-dark-bg/90 backdrop-blur-sm z-50 shadow-sm transition-colors duration-300">
      <div className="container mx-auto px-4 py-4">
        <nav className="flex justify-between items-center">
          <a href="#" className="text-2xl font-bold text-primary">
            MultiMian 🌟
          </a>
          
          <div className="flex items-center gap-4">
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Toggle className="bg-primary/10 hover:bg-primary/20 dark:bg-primary-light/10">
                  <Palette className="w-5 h-5" />
                </Toggle>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                <DropdownMenuItem onClick={() => changeTheme('purple')}>
                  <span className="w-4 h-4 rounded-full bg-[#9b87f5] mr-2" />
                  Purple Theme
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => changeTheme('blue')}>
                  <span className="w-4 h-4 rounded-full bg-[#0EA5E9] mr-2" />
                  Blue Theme
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => changeTheme('green')}>
                  <span className="w-4 h-4 rounded-full bg-[#10B981] mr-2" />
                  Green Theme
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>

            <button
              className="md:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          <div className="hidden md:flex gap-8">
            <NavLinks />
          </div>

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