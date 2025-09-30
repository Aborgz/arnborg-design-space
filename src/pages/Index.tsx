import ProjectCard from "@/components/ProjectCard";
import profilePhoto from "@/assets/samuel-profile.jpg";
import lifeplannerImage from "@/assets/lifeplanner-preview.png";
import { Mail, Linkedin, Github, Twitter } from "lucide-react";

const Index = () => {
  const projects = [
    {
      title: "LifePlanner",
      description: "Making it easier to plan so you can enjoy more in life. A comprehensive planning app with weekly, monthly, and custom list management.",
      image: lifeplannerImage,
      link: "/projects/lifeplanner"
    },
    {
      title: "Coming Soon",
      description: "Adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud."
    },
    {
      title: "Coming Soon",
      description: "Consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Nostrud exercitation."
    },
    {
      title: "Coming Soon",
      description: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
    },
    {
      title: "Coming Soon",
      description: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint."
    },
    {
      title: "Coming Soon",
      description: "Laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse."
    }
  ];

  return (
    <div className="min-h-screen bg-background relative overflow-hidden">
      {/* Skip to main content link for keyboard users */}
      <a href="#main-content" className="skip-link">
        Skip to main content
      </a>

      {/* Modern Header */}
      <header className="fixed top-0 left-0 right-0 z-50 glass-card border-b border-border/30" role="banner">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex justify-between items-center">
            {/* Social Icons - Left Side */}
            <div className="flex items-center gap-4">
              <a 
                href="https://www.linkedin.com/in/samuel-arnborg-5a0145337/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-all duration-300 hover:scale-110"
                aria-label="LinkedIn profile"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a 
                href="https://github.com/Aborgz" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-all duration-300 hover:scale-110"
                aria-label="GitHub profile"
              >
                <Github className="w-5 h-5" />
              </a>
            </div>

            {/* Navigation - Right Side */}
            <nav className="flex items-center gap-8" role="navigation" aria-label="Main navigation">
              <a href="#projects" className="text-sm text-muted-foreground hover:text-primary transition-all duration-300 font-medium">
                Works
              </a>
              <a href="#about" className="text-sm text-muted-foreground hover:text-primary transition-all duration-300 font-medium">
                About
              </a>
              <a 
                href="mailto:arnborg.samuel@gmail.com" 
                className="px-6 py-2.5 bg-primary/10 text-primary border border-primary/20 rounded-full font-medium text-sm hover:bg-primary/20 transition-all duration-300 hover:scale-105"
                aria-label="Contact via email"
              >
                contact@samuel.com
              </a>
            </nav>
          </div>
        </div>
      </header>

      {/* Hero Section - KC Studio Inspired */}
      <section className="min-h-screen flex flex-col items-center justify-center px-4 sm:px-6 lg:px-8 pt-32 pb-20">
        <div className="text-center max-w-5xl mx-auto space-y-12 animate-fade-in">
          {/* Profile Photo with Status Badge */}
          <div className="relative inline-block">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/40 via-accent/40 to-primary/30 rounded-full blur-3xl animate-pulse" />
            <img 
              src={profilePhoto} 
              alt="Samuel Arnborg - UX Designer"
              className="relative w-40 h-40 rounded-full object-cover border-2 border-primary/30 shadow-2xl mx-auto"
              style={{ objectPosition: 'center 20%' }}
            />
            <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 px-4 py-1 bg-primary/20 border border-primary/30 rounded-full backdrop-blur-xl">
              <span className="text-xs font-medium text-primary">✦ Available for work</span>
            </div>
          </div>

          <h1 className="text-7xl md:text-8xl lg:text-9xl font-bold leading-tight">
            <span className="block text-foreground/40 text-3xl md:text-4xl mb-4 font-normal">I'm Samuel</span>
            <span className="gradient-text block">UX DESIGNER</span>
            <span className="gradient-text block">&</span>
            <span className="gradient-text block">GRAPHIC ARTIST</span>
          </h1>

          <p className="text-xl md:text-2xl text-foreground/70 max-w-3xl mx-auto leading-relaxed">
            Over the years, I've created <strong className="text-primary">intuitive digital experiences</strong><br />
            that blend rigorous research with minimalist aesthetics
          </p>

          {/* Scroll Indicator */}
          <div className="pt-12 animate-bounce">
            <div className="w-6 h-10 border-2 border-primary/30 rounded-full mx-auto flex items-start justify-center p-2">
              <div className="w-1 h-3 bg-primary rounded-full" />
            </div>
          </div>
        </div>
      </section>

      {/* About Section - Redesigned */}
      <section id="about" className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-32" aria-labelledby="about-heading">
        <div className="glass-card rounded-3xl p-12 md:p-16">
          <h2 id="about-heading" className="text-5xl md:text-6xl font-bold gradient-text mb-12 text-center">About Me</h2>
          
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6 text-lg text-foreground/90 leading-relaxed">
              <p>
                I am a passionate <strong className="text-primary">UX Designer and Graphic Artist</strong> focused on creating intuitive, 
                human-centered digital experiences and impactful visual branding.
              </p>
              <p>
                My process blends rigorous user research with a minimalist aesthetic, drawing inspiration from retro web design 
                and brutalist architecture.
              </p>
              <p>
                My work spans the entire product lifecycle, from initial concept sketches and wireframing to 
                high-fidelity prototyping and visual design systems.
              </p>
            </div>
            
            <div className="space-y-6">
              <div className="glass-card p-6 rounded-2xl border border-primary/20">
                <h3 className="text-2xl font-bold text-primary mb-2">Design Process</h3>
                <p className="text-foreground/80">Double Diamond framework for structured, iterative solutions</p>
              </div>
              <div className="glass-card p-6 rounded-2xl border border-accent/20">
                <h3 className="text-2xl font-bold text-accent mb-2">Focus Areas</h3>
                <p className="text-foreground/80">User research, accessibility, visual systems, prototyping</p>
              </div>
              <div className="glass-card p-6 rounded-2xl border border-primary/20">
                <h3 className="text-2xl font-bold text-primary mb-2">Location</h3>
                <p className="text-foreground/80">📍 Based in Karlstad, available worldwide</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <main id="main-content" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32" role="main" aria-labelledby="projects-heading">
        <div className="text-center mb-20">
          <h2 id="projects-heading" className="text-5xl md:text-6xl font-bold gradient-text mb-6">Selected Works</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            A curated collection of design projects showcasing UX research, visual design, and user-centered solutions
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

      {/* Contact Section - Simplified */}
      <section id="contact" className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-32" aria-labelledby="contact-heading">
        <div className="glass-card rounded-3xl p-12 md:p-20 text-center border border-primary/20">
          <h2 id="contact-heading" className="text-5xl md:text-6xl font-bold gradient-text mb-8">Let's Talk</h2>
          <p className="text-xl text-foreground/80 mb-12 leading-relaxed max-w-2xl mx-auto">
            Whether you're a design team in need of support or an early-stage company looking to level up your design, 
            I'd love to talk about your project 💜
          </p>
          
          <a 
            href="mailto:arnborg.samuel@gmail.com" 
            className="inline-flex items-center gap-3 px-10 py-5 bg-gradient-to-r from-primary via-accent to-primary text-primary-foreground font-bold rounded-2xl transition-all duration-500 hover:scale-105 hover:-translate-y-1 relative overflow-hidden group text-lg"
            aria-label="Send email to arnborg.samuel@gmail.com"
          >
            <Mail className="w-5 h-5 relative z-10" />
            <span className="relative z-10">Drop me a line</span>
            <div className="absolute inset-0 bg-gradient-to-r from-accent via-primary to-accent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          </a>
          
          <div className="flex justify-center items-center gap-6 pt-12 mt-12 border-t border-border/30">
            <span className="text-sm text-muted-foreground">or say 👋 on</span>
            <a 
              href="https://www.linkedin.com/in/samuel-arnborg-5a0145337/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-all duration-300 font-medium hover:scale-110"
              aria-label="LinkedIn"
            >
              LinkedIn
            </a>
            <span className="text-border" aria-hidden="true">•</span>
            <a 
              href="https://github.com/Aborgz" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-all duration-300 font-medium hover:scale-110"
              aria-label="GitHub"
            >
              GitHub
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 border-t border-border/30">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-muted-foreground">© 2025 Samuel Arnborg | Design & UX</p>
          <p className="text-xs text-muted-foreground/60">Cooked with love in Karlstad 🇸🇪</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
