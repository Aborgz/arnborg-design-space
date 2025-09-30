import ProjectCard from "@/components/ProjectCard";
import profilePhoto from "@/assets/samuel-profile.jpg";
import lifeplannerImage from "@/assets/lifeplanner-preview.png";

const Index = () => {
  const projects = [
    {
      title: "LifePlanner",
      description: "Making it easier to plan so you can enjoy more in life. A comprehensive planning app with weekly, monthly, and custom list management.",
      image: lifeplannerImage,
      link: "/projects/lifeplanner"
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
      <header className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 border-b border-border/50 sticky top-0 glass-card z-10">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <h1 className="text-3xl font-bold tracking-tight">
            <span className="gradient-text">Samuel Arnborg</span>
          </h1>
          <nav className="mt-4 md:mt-0 space-x-8">
            <a href="#projects" className="text-muted-foreground hover:text-primary transition-all duration-300 font-medium relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-primary after:transition-all after:duration-300 hover:after:w-full">
              Projects
            </a>
            <a href="#about" className="text-muted-foreground hover:text-primary transition-all duration-300 font-medium relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-primary after:transition-all after:duration-300 hover:after:w-full">
              About
            </a>
            <a href="#contact" className="text-muted-foreground hover:text-primary transition-all duration-300 font-medium relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-primary after:transition-all after:duration-300 hover:after:w-full">
              Contact
            </a>
          </nav>
        </div>
      </header>

      {/* About Section */}
      <section id="about" className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <h2 className="text-5xl font-bold gradient-text mb-12">About Me</h2>
        <div className="glass-card rounded-3xl p-8 md:p-12">
          <div className="flex flex-col md:flex-row gap-10 items-start">
            {/* Profile Photo */}
            <div className="flex-shrink-0 relative group">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/30 to-accent/30 rounded-3xl blur-xl group-hover:blur-2xl transition-all duration-500" />
              <img 
                src={profilePhoto} 
                alt="Samuel Arnborg - UX Designer and Graphic Artist"
                className="relative w-56 h-56 md:w-64 md:h-64 rounded-3xl object-cover border border-border/50 shadow-2xl transition-transform duration-500 group-hover:scale-105"
                style={{ objectPosition: 'center 20%' }}
              />
            </div>
            
            {/* About Text */}
            <div className="space-y-5 text-lg text-foreground/90 flex-1">
              <p className="leading-relaxed">
                I am a passionate <strong className="text-primary">UX Designer and Graphic Artist</strong> focused on creating intuitive, 
                human-centered digital experiences and impactful visual branding. My process blends rigorous 
                user research with a minimalist, dark aesthetic, drawing inspiration from retro web design 
                and brutalist architecture.
              </p>
              <p className="leading-relaxed">
                My work spans the entire product lifecycle, from initial concept sketches and wireframing to 
                high-fidelity prototyping and visual design systems. I thrive on solving complex problems with 
                simple, elegant solutions that prioritize clarity and accessibility.
              </p>
              <p className="text-base text-muted-foreground pt-2 border-t border-border/30">
                📍 Currently based in Karlstad, available for freelance projects and collaborations.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <main id="projects" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold gradient-text mb-6">Selected Projects</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            A curated selection of UX/UI and Graphic Design work. Click on a card to explore the case study.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {projects.map((project, index) => (
            <ProjectCard
              key={index}
              title={project.title}
              description={project.description}
              image={project.image}
              link={project.link}
            />
          ))}
        </div>
      </main>

      {/* Contact Section */}
      <section id="contact" className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="glass-card rounded-3xl p-10 md:p-14 text-center border-border/50">
          <h2 className="text-5xl font-bold gradient-text mb-6">Get in Touch</h2>
          <p className="text-lg text-foreground/80 mb-10 leading-relaxed">
            Have a project idea, collaboration request, or just want to talk design? I'd love to hear from you.
          </p>
          
          <div className="space-y-6">
            <a 
              href="mailto:arnborg.samuel@gmail.com" 
              className="block text-center px-8 py-5 bg-gradient-to-r from-primary to-accent hover:shadow-glow text-primary-foreground font-bold rounded-xl transition-all duration-500 hover:scale-105 hover:-translate-y-1"
              style={{ boxShadow: '0 10px 40px hsl(258 90% 66% / 0.3)' }}
            >
              Send Me an Email
            </a>
            
            <div className="flex justify-center items-center gap-8 pt-4">
              <a 
                href="https://www.linkedin.com/in/samuel-arnborg-5a0145337/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-all duration-300 font-medium text-lg hover:scale-110"
              >
                LinkedIn
              </a>
              <span className="text-border">•</span>
              <a 
                href="https://github.com/Aborgz" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-all duration-300 font-medium text-lg hover:scale-110"
              >
                GitHub
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 mt-16 border-t border-border/30 text-center">
        <p className="text-sm text-muted-foreground">&copy; 2025 Samuel Arnborg | Design & UX</p>
      </footer>
    </div>
  );
};

export default Index;
