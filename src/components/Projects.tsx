import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Toggle } from "@/components/ui/toggle";
import { Github, ExternalLink } from 'lucide-react';

const projects = [
  {
    title: "IP-Address-Tracker",
    description: "Track and locate IP addresses with an interactive map interface.",
    tech: ["React", "API Integration", "Mapping"],
    github: "https://github.com/Mianhassam96/ip-tracker"
  },
  {
    title: "Real-Time-Character-Counter",
    description: "Dynamic character counting tool with real-time updates.",
    tech: ["JavaScript", "DOM Manipulation"],
    github: "https://github.com/Mianhassam96/char-counter"
  },
  {
    title: "Currency-Converter",
    description: "Real-time currency conversion with up-to-date exchange rates.",
    tech: ["React", "API Integration"],
    github: "https://github.com/Mianhassam96/currency-converter"
  },
  {
    title: "Text-To-Voice",
    description: "Convert text to natural-sounding speech with multiple language support.",
    tech: ["JavaScript", "Web Speech API"],
    github: "https://github.com/Mianhassam96/text-to-voice"
  },
  {
    title: "Text-JPG-PNG-to-PDF-Converter",
    description: "Convert various text and image formats to PDF seamlessly.",
    tech: ["React", "File Conversion API"],
    github: "https://github.com/Mianhassam96/file-converter"
  },
  {
    title: "Background-Remover",
    description: "Remove image backgrounds with AI-powered precision.",
    tech: ["React", "Image Processing API"],
    github: "https://github.com/Mianhassam96/bg-remover"
  }
];

const Projects = () => {
  const [showAll, setShowAll] = useState(false);

  return (
    <section id="projects" className="py-20 bg-gradient-to-br from-primary-light/10 to-white">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold">
            Featured Projects
          </h2>
          <Toggle
            pressed={showAll}
            onPressedChange={setShowAll}
            className="bg-primary/10 data-[state=on]:bg-primary data-[state=on]:text-white"
          >
            {showAll ? "Show Less" : "Show All"}
          </Toggle>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.slice(0, showAll ? projects.length : 3).map((project) => (
            <Card key={project.title} className="group hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="text-xl group-hover:text-primary transition-colors">
                  {project.title}
                </CardTitle>
                <CardDescription>{project.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="px-2 py-1 text-sm bg-primary/10 rounded-full"
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
                    className="flex items-center gap-2 text-sm hover:text-primary transition-colors"
                  >
                    <Github size={16} />
                    Code
                  </a>
                  <a
                    href="#"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-sm hover:text-primary transition-colors"
                  >
                    <ExternalLink size={16} />
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