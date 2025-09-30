import ProjectCard from "@/components/ProjectCard";
import profilePhoto from "@/assets/samuel-profile.jpg";

const Index = () => {
  const projects = [
    {
      title: "Coming soonn",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna."
    },
    {
      title: "Coming soonn",
      description: "Adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud."
    },
    {
      title: "Coming soonn",
      description: "Consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Nostrud exercitation."
    },
    {
      title: "Coming soonn",
      description: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
    },
    {
      title: "Coming soonn",
      description: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint."
    },
    {
      title: "Coming soonn",
      description: "Laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse."
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Header / Navigation */}
      <header className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 border-b border-border sticky top-0 bg-background/95 backdrop-blur-sm z-10">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <h1 className="text-3xl font-bold code-text tracking-wider text-foreground">
            Samuel Arnborg
          </h1>
          <nav className="mt-4 md:mt-0 space-x-6">
            <a href="#projects" className="text-muted-foreground hover:text-primary code-text transition duration-200">
              Projects
            </a>
            <a href="#about" className="text-muted-foreground hover:text-primary code-text transition duration-200">
              About
            </a>
            <a href="#contact" className="text-muted-foreground hover:text-primary code-text transition duration-200">
              Contact
            </a>
          </nav>
        </div>
      </header>

      {/* About Section */}
      <section id="about" className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <h2 className="text-4xl font-bold text-primary mb-8 code-text">About Me</h2>
        <div className="flex flex-col md:flex-row gap-8 items-start">
          {/* Profile Photo */}
          <div className="flex-shrink-0">
            <img 
              src={profilePhoto} 
              alt="Samuel Arnborg - UX Designer and Graphic Artist"
              className="w-48 h-48 md:w-56 md:h-56 rounded-2xl object-cover border-2 border-border shadow-lg"
              style={{ objectPosition: 'center 20%' }}
            />
          </div>
          
          {/* About Text */}
          <div className="space-y-4 text-lg text-foreground flex-1">
            <p>
              I am a passionate <strong>UX Designer and Graphic Artist</strong> focused on creating intuitive, 
              human-centered digital experiences and impactful visual branding. My process blends rigorous 
              user research with a minimalist, dark aesthetic, drawing inspiration from retro web design 
              and brutalist architecture.
            </p>
            <p>
              My work spans the entire product lifecycle, from initial concept sketches and wireframing to 
              high-fidelity prototyping and visual design systems. I thrive on solving complex problems with 
              simple, elegant solutions that prioritize clarity and accessibility.
            </p>
            <p className="code-text italic text-muted-foreground">
              Currently based in Karlstad, available for freelance projects and collaborations.
            </p>
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <main id="projects" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h2 className="text-4xl font-bold text-primary mb-6 code-text">Selected Projects</h2>
        <p className="text-center text-lg mb-12 text-muted-foreground max-w-2xl mx-auto">
          A curated selection of UX/UI and Graphic Design work. Click on a card to explore the case study.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <ProjectCard
              key={index}
              title={project.title}
              description={project.description}
            />
          ))}
        </div>
      </main>

      {/* Contact Section */}
      <section id="contact" className="max-w-xl mx-auto px-4 sm:px-6 lg:px-8 py-20 border-t border-border">
        <h2 className="text-4xl font-bold text-primary mb-8 code-text text-center">Get in Touch</h2>
        <div className="space-y-6">
          <p className="text-lg text-foreground text-center">
            Have a project idea, collaboration request, or just want to talk design? I'd love to hear from you.
          </p>
          
          <div className="flex flex-col space-y-4">
            <a 
              href="mailto:arnborg.samuel@gmail.com" 
              className="block text-center p-4 bg-primary hover:bg-primary/90 text-primary-foreground font-bold rounded-lg shadow-lg transition duration-200 project-card"
              style={{ boxShadow: '0 4px 6px -1px rgba(139, 92, 246, 0.4)' }}
            >
              Send Me an Email
            </a>
            
            <div className="flex justify-center space-x-6">
              <a 
                href="https://www.linkedin.com/in/samuel-arnborg-5a0145337/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition duration-200 code-text"
              >
                LinkedIn
              </a>
              <a 
                href="https://github.com/Aborgz" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition duration-200 code-text"
              >
                GitHub
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 mt-12 border-t border-border text-center text-sm text-muted-foreground">
        <p className="code-text">&copy; 2025 Samuel Arnborg | Design & UX</p>
      </footer>
    </div>
  );
};

export default Index;
