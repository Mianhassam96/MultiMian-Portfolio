const skills = [
  { name: "JavaScript", level: "Expert" },
  { name: "TypeScript", level: "Advanced" },
  { name: "React", level: "Expert" },
  { name: "Node.js", level: "Advanced" },
  { name: "Python", level: "Intermediate" },
  { name: "MongoDB", level: "Advanced" },
  { name: "SCSS", level: "Advanced" },
  { name: "Git", level: "Advanced" },
];

const Skills = () => {
  return (
    <section id="skills" className="py-20 bg-primary-light/20">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          Skills & Expertise
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {skills.map((skill) => (
            <div
              key={skill.name}
              className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow"
            >
              <h3 className="font-semibold mb-2">{skill.name}</h3>
              <p className="text-sm text-gray-600">{skill.level}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;