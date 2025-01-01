const skills = [
  { name: "JavaScript", level: "Expert", icon: "⚡" },
  { name: "TypeScript", level: "Advanced", icon: "🔷" },
  { name: "React", level: "Expert", icon: "⚛️" },
  { name: "Node.js", level: "Advanced", icon: "🟢" },
  { name: "Python", level: "Intermediate", icon: "🐍" },
  { name: "MongoDB", level: "Advanced", icon: "🍃" },
  { name: "SCSS", level: "Advanced", icon: "🎨" },
  { name: "Git", level: "Advanced", icon: "📚" },
];

const Skills = () => {
  return (
    <section id="skills" className="py-20 bg-gradient-to-b from-dark-bg to-dark-card">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 bg-gradient-to-r from-primary via-primary-light to-accent-light bg-clip-text text-transparent">
          Skills & Expertise
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {skills.map((skill, index) => (
            <div
              key={skill.name}
              className="bg-dark-card/50 backdrop-blur-sm p-6 rounded-lg border border-primary/20 hover:border-primary/50 transition-all hover:transform hover:scale-105 animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="text-3xl mb-3">{skill.icon}</div>
              <h3 className="font-semibold mb-2 text-primary-light">{skill.name}</h3>
              <p className="text-sm text-gray-400">{skill.level}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;