import { Mail, Github, Linkedin, Download, ExternalLink } from 'lucide-react';
import { Button } from './ui/button';
import { toast } from 'sonner';

const Contact = () => {
  const handleDownload = () => {
    // Replace this URL with your actual resume PDF URL
    const resumeUrl = '/resume.pdf';
    
    // Create a temporary link element
    const link = document.createElement('a');
    link.href = resumeUrl;
    link.download = 'Mian_Hassam_Resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    
    toast.success('Resume download started!');
  };

  return (
    <section id="contact" className="py-20 bg-gradient-to-b from-dark-bg to-dark-card">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 bg-gradient-to-r from-primary via-primary-light to-accent-light bg-clip-text text-transparent">
          Let's Connect
        </h2>
        
        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Contact Information */}
            <div className="space-y-8">
              <p className="text-lg text-gray-300">
                I'm always excited to collaborate on new projects and explore creative opportunities. Let's turn your ideas into reality!
              </p>
              
              <div className="space-y-4">
                <a
                  href="mailto:mhassamkb@gmail.com"
                  className="flex items-center gap-3 text-gray-300 hover:text-primary-light transition-colors group"
                >
                  <Mail className="w-5 h-5 group-hover:scale-110 transition-transform" />
                  <span>mhassamkb@gmail.com</span>
                </a>
                
                <a
                  href="https://github.com/Mianhassam96"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-gray-300 hover:text-primary-light transition-colors group"
                >
                  <Github className="w-5 h-5 group-hover:scale-110 transition-transform" />
                  <span>github.com/Mianhassam96</span>
                  <ExternalLink className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" />
                </a>
                
                <a
                  href="https://www.linkedin.com/in/mianhassam96/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-gray-300 hover:text-primary-light transition-colors group"
                >
                  <Linkedin className="w-5 h-5 group-hover:scale-110 transition-transform" />
                  <span>LinkedIn Profile</span>
                  <ExternalLink className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" />
                </a>
              </div>
            </div>

            {/* Resume Download Section */}
            <div className="bg-dark-card/50 backdrop-blur-sm p-8 rounded-2xl border border-primary/20 space-y-6">
              <h3 className="text-2xl font-semibold text-primary-light">Download Resume</h3>
              <p className="text-gray-300">
                Get a detailed overview of my skills, experience, and qualifications.
              </p>
              <Button
                onClick={handleDownload}
                className="w-full group hover:shadow-lg hover:shadow-primary/20 transition-all duration-300"
              >
                <Download className="mr-2 group-hover:translate-y-0.5 transition-transform" />
                Download CV
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
