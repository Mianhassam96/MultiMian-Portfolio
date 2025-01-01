const About = () => {
  return (
    <section id="about" className="py-20 bg-dark-bg text-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 bg-gradient-to-r from-primary via-primary-light to-accent-light bg-clip-text text-transparent">
          About Me
        </h2>
        <div className="max-w-3xl mx-auto">
          <p className="text-lg text-gray-300 mb-6 animate-fade-in">
            Hi, I'm Mian Hassam, a Full Stack Developer passionate about crafting interactive and user-friendly web applications. I specialize in JavaScript, TypeScript, Python, React, and the MERN stack, turning ideas into impactful digital solutions.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
            <div className="bg-dark-card p-6 rounded-lg border border-primary/20 hover:border-primary/50 transition-colors animate-slide-in">
              <h3 className="text-xl font-semibold mb-4 text-primary-light">🚀 What I Do</h3>
              <ul className="space-y-2 text-gray-300">
                <li>Building scalable and dynamic web apps</li>
                <li>Innovating with modern technologies</li>
                <li>Exploring new ideas in tech and AI</li>
              </ul>
            </div>
            <div className="bg-dark-card p-6 rounded-lg border border-primary/20 hover:border-primary/50 transition-colors animate-slide-in" style={{ animationDelay: '0.2s' }}>
              <h3 className="text-xl font-semibold mb-4 text-primary-light">💡 My Approach</h3>
              <p className="text-gray-300">
                I believe in creating solutions that not only meet technical requirements but also provide an exceptional user experience. Let's connect and share knowledge to create something amazing together!
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;