import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Toggle } from "@/components/ui/toggle";
import { Github, ExternalLink, Code2, Rocket } from 'lucide-react';

const projects = [
   {
    title: "MM-s-2048-Quest",
    description: " MM's 2048 Quest 🎮 is a modern twist on the classic 2048 puzzle game. Merge tiles, reach 2048, and enjoy smooth gameplay with sound effects, theme switcher, and confetti animations. Built using HTML, CSS, and JavaScript, this game is mobile-friendly, tracks your high score, and offers endless fun. Challenge yourself to master the quest! 🚀 ",
    tech: ["HTML", "JavsScript", "CSS"],
    github: "https://github.com/Mianhassam96/MM-s-2048-Quest",
    live: "https://mm-s-2048-quest.vercel.app/"
  },
  {
    title: "Currency-Converter",
    description: "Real-time currency conversion with support for multiple currencies and live exchange rates.",
    tech: ["React", "API Integration", "Financial Data"],
    github: "https://github.com/Mianhassam96/",
    live: "https://currency-converter-green-iota.vercel.app/"
  },
  {
    title: "Background-Remover",
    description: "Remove image backgrounds instantly using advanced AI algorithms.",
    tech: ["React", "Image Processing", "AI Integration"],
    github: "https://github.com/Mianhassam96/",
    live: "https://background-remover-zeta.vercel.app/Background-Remover"
  },
  {
    title: "Text-JPG-PNG-to-PDF-Converter",
    description: "Convert various file formats to PDF with ease and maintain quality.",
    tech: ["React", "File Conversion", "PDF Processing"],
    github: "https://github.com/Mianhassam96/Text-JPG-PNG-to-PDF-Converter",
    live: "https://text-jpg-png-to-pdf-converter.vercel.app/"
  },
  {
    title: "IP-Address-Tracker",
    description: "Track and visualize IP addresses with detailed information and mapping.",
    tech: ["React", "Mapping API", "Geolocation"],
    github: "https://github.com/Mianhassam96/IP-Address-Tracker",
    live: "https://ip-address-tracker-flame-five.vercel.app/"
  },
  {
    title: "Video-Processor",
    description: "Process and manipulate video content with various transformation options.",
    tech: ["React", "Video Processing", "Media Handling"],
    github: "https://github.com/Mianhassam96/Video-Processor",
    live: "https://video-processor-lac.vercel.app/"
  },
    {
    title: "Typing-Speed-Test",
    description: "Test and improve your typing speed with real-time feedback and statistics.",
    tech: ["React", "TypeScript", "Real-time Processing"],
    github: "https://github.com/Mianhassam96/Typing-Speed-Test",
    live: "https://typing-speed-test-neon.vercel.app/"
  },
   {
    title: "Text-To-Voice",
    description: "Convert text to natural-sounding speech with support for multiple languages and voices.",
    tech: ["React", "Web Speech API", "Audio Processing"],
    github: "https://github.com/Mianhassam96/Text-To-Voice",
    live: "https://text-to-voice-black.vercel.app/"
  },
  {
    title: "MultiMian-World-Explorer",
    description: "Explore virtual worlds with interactive 3D visualization and navigation.",
    tech: ["React", "3D Graphics", "Interactive UI"],
    github: "https://github.com/Mianhassam96/MultiMian-World-Explorer",
    live: "https://multi-mian-world-explorer.vercel.app/"
  }
];

const Projects = () => {
  const [showAll, setShowAll] = useState(false);

  return (
    <section id="projects" className="py-20 bg-gradient-to-br from-primary-light/5 via-dark-bg to-dark-card dark:text-gray-200 transition-colors duration-300">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-primary-light to-accent-light bg-clip-text text-transparent animate-fade-in">
            Featured Projects
          </h2>
          <Toggle
            pressed={showAll}
            onPressedChange={setShowAll}
            className="bg-primary/10 hover:bg-primary/20 dark:bg-primary-light/10 data-[state=on]:bg-primary data-[state=on]:text-white transition-all duration-300"
          >
            {showAll ? "Show Less" : "Show All"}
          </Toggle>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.slice(0, showAll ? projects.length : 6).map((project, index) => (
            <Card 
              key={project.title} 
              className="group hover:shadow-xl dark:bg-dark-card dark:border-gray-700 transition-all duration-300 animate-scale-in hover:scale-105 backdrop-blur-sm bg-opacity-90"
              style={{ 
                animationDelay: `${index * 100}ms`,
                background: 'linear-gradient(145deg, rgba(155, 135, 245, 0.05) 0%, rgba(30, 27, 38, 0.9) 100%)'
              }}
            >
              <CardHeader>
                <CardTitle className="text-xl group-hover:text-primary dark:group-hover:text-primary-light transition-colors">
                  {project.title}
                </CardTitle>
                <CardDescription className="dark:text-gray-400 line-clamp-2">
                  {project.description}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 text-sm bg-primary/10 dark:bg-primary-light/10 rounded-full transition-colors hover:bg-primary/20 dark:hover:bg-primary-light/20"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex gap-4">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-sm hover:text-primary dark:hover:text-primary-light transition-colors group/link"
                  >
                    <Github className="w-4 h-4 transition-transform group-hover/link:scale-110" />
                    <Code2 className="w-4 h-4 transition-transform group-hover/link:scale-110" />
                    Code
                  </a>
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-sm hover:text-primary dark:hover:text-primary-light transition-colors group/link"
                  >
                    <ExternalLink className="w-4 h-4 transition-transform group-hover/link:scale-110" />
                    <Rocket className="w-4 h-4 transition-transform group-hover/link:scale-110" />
                    Live Demo
                  </a>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
