const Footer = () => {
  return (
    <footer className="bg-primary text-white py-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <h3 className="text-2xl font-bold mb-4">MultiMian 🌟</h3>
            <p className="text-primary-light">
              Building the future of web development, one project at a time.
            </p>
          </div>
          <div className="flex flex-col md:items-end">
            <h4 className="text-xl font-semibold mb-2">Contact</h4>
            <a href="mailto:mhassamkb@gmail.com" className="hover:text-primary-light transition-colors">
              mhassamkb@gmail.com
            </a>
            <a href="https://github.com/Mianhassam96" target="_blank" rel="noopener noreferrer" className="hover:text-primary-light transition-colors">
              github.com/Mianhassam96
            </a>
          </div>
        </div>
        <div className="mt-8 pt-4 border-t border-primary-light/30 text-center">
          <p>&copy; {new Date().getFullYear()} Mian Hassam. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;