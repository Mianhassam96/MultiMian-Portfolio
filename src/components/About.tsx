const About = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          About Me
        </h2>
        <div className="max-w-3xl mx-auto">
          <p className="text-lg text-gray-700 mb-6">
            Hi, I'm Mian Hassam, a Full Stack Developer passionate about crafting interactive and user-friendly web applications. I specialize in JavaScript, TypeScript, Python, React, and the MERN stack, turning ideas into impactful digital solutions.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
            <div className="bg-primary-light/20 p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-4">🚀 What I Do</h3>
              <ul className="space-y-2">
                <li>Building scalable and dynamic web apps</li>
                <li>Innovating with modern technologies</li>
                <li>Exploring new ideas in tech and AI</li>
              </ul>
            </div>
            <div className="bg-primary-light/20 p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-4">💡 My Approach</h3>
              <p>
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