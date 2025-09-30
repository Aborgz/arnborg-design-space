import ProjectCard from "@/components/ProjectCard";
import profilePhoto from "@/assets/samuel-profile.jpg";
import lifeplannerImage from "@/assets/lifeplanner-preview.png";
import bullyingProjectImage from "@/assets/bullying-project.jpg";
import { Mail, Linkedin, Github, Briefcase, Users, Award, BookOpen } from "lucide-react";

const Index = () => {
  const projects = [
    {
      title: "LifePlanner",
      description: "Making it easier to plan so you can enjoy more in life. A comprehensive planning app with weekly, monthly, and custom list management.",
      image: lifeplannerImage,
      link: "/projects/lifeplanner"
    },
    {
      title: "The Psychology of Bullying",
      description: "An exploration of how childhood bullying shapes adult psychology. Research shows that victims of sustained bullying often carry invisible scars—altered stress responses, diminished self-worth, and fragmented identity. This visual project examines the lasting neurological and emotional imprints that persist long after the bullying stops, revealing how early trauma rewires our perception of safety, trust, and belonging.",
      image: bullyingProjectImage
    },
    {
      title: "Merry Christmas Video Card",
      description: "A heartwarming digital Christmas card project created for elementary school students. This interactive video experience taught young learners about digital storytelling, animation basics, and the joy of sharing seasonal messages with family and friends through modern media."
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
                aria-label="Visit Samuel Arnborg on LinkedIn (opens in new tab)"
              >
                <Linkedin className="w-5 h-5" aria-hidden="true" />
              </a>
              <a 
                href="https://github.com/Arnborgz" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-all duration-300 hover:scale-110"
                aria-label="Visit Samuel Arnborg on GitHub (opens in new tab)"
              >
                <Github className="w-5 h-5" aria-hidden="true" />
              </a>
            </div>

            {/* Navigation - Right Side */}
            <nav className="flex items-center gap-8" role="navigation" aria-label="Main navigation">
              <a 
                href="#projects" 
                className="text-sm text-muted-foreground hover:text-primary transition-all duration-300 font-medium"
                aria-label="Navigate to Works section"
              >
                Works
              </a>
              <a 
                href="#about" 
                className="text-sm text-muted-foreground hover:text-primary transition-all duration-300 font-medium"
                aria-label="Navigate to About section"
              >
                About
              </a>
              <a 
                href="mailto:arnborg@gmail.com" 
                className="px-6 py-2.5 bg-primary/10 text-primary border border-primary/20 rounded-full font-medium text-sm hover:bg-primary/20 transition-all duration-300 hover:scale-105"
                aria-label="Send email to arnborg@gmail.com"
              >
                <span aria-hidden="true">arnborg@gmail.com</span>
                <span className="sr-only">Contact via email</span>
              </a>
            </nav>
          </div>
        </div>
      </header>

      {/* Hero Section - KC Studio Inspired */}
      <section id="main-content" className="min-h-screen flex flex-col items-center justify-center px-4 sm:px-6 lg:px-8 pt-32 pb-20 glitch-entrance" role="main" aria-labelledby="hero-heading">
        <div className="text-center max-w-5xl mx-auto space-y-12">
          {/* Profile Photo */}
          <div className="relative inline-block">
            <div className="mx-auto w-40 h-40 rounded-full overflow-hidden shadow-xl">
              <img 
                src={profilePhoto} 
                alt="Samuel Arnborg, professional headshot"
                className="w-full h-full object-cover"
                style={{ objectPosition: 'center 20%' }}
              />
            </div>
          </div>

          <h1 id="hero-heading" className="text-7xl md:text-8xl lg:text-9xl font-bold leading-tight text-foreground">
            <span className="block text-2xl md:text-3xl tracking-[0.3em] uppercase text-muted-foreground font-light mb-8">
              Samuel Arnborg
            </span>
            <span className="block">UX DESIGNER</span>
            <span className="block" aria-hidden="true">&</span>
            <span className="block">GRAPHIC ARTIST</span>
          </h1>

          <p className="text-xl md:text-2xl text-foreground/90 max-w-3xl mx-auto leading-relaxed">
            Over the years, I've created <strong className="text-foreground">intuitive digital experiences</strong><br />
            that combine thoughtful user research with clean, purposeful design
          </p>

          {/* Scroll Indicator */}
          <div className="pt-12 animate-bounce" aria-hidden="true">
            <div className="w-6 h-10 border-2 border-primary/30 rounded-full mx-auto flex items-start justify-center p-2">
              <div className="w-1 h-3 bg-primary rounded-full" />
            </div>
          </div>
        </div>
      </section>

      {/* About Section - Redesigned */}
      <section id="about" className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-32" aria-labelledby="about-heading">
        <div className="glass-card rounded-3xl p-12 md:p-16">
          <h2 id="about-heading" className="text-5xl md:text-6xl font-bold text-foreground mb-12 text-center">About Me</h2>
          
          <div className="grid md:grid-cols-2 gap-12 items-start">
            <div className="space-y-6 text-lg text-foreground/90 leading-relaxed">
              <p>
                I am a passionate <strong className="text-foreground">UX Designer and Graphic Artist</strong> focused on creating intuitive, 
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
            
            <div className="space-y-6" role="list">
              <div className="glass-card p-6 rounded-2xl border border-primary/20" role="listitem">
                <h3 className="text-2xl font-bold text-foreground mb-2">Design Process</h3>
                <p className="text-foreground/80">Double Diamond framework for structured, iterative solutions</p>
              </div>
              <div className="glass-card p-6 rounded-2xl border border-accent/20" role="listitem">
                <h3 className="text-2xl font-bold text-foreground mb-2">Focus Areas</h3>
                <p className="text-foreground/80">User research, accessibility, visual systems, prototyping</p>
              </div>
              <div className="glass-card p-6 rounded-2xl border border-primary/20" role="listitem">
                <h3 className="text-2xl font-bold text-foreground mb-2">Location</h3>
                <p className="text-foreground/80">
                  <span aria-label="Located in">📍</span> Based in Karlstad, available worldwide
                </p>
              </div>
            </div>
          </div>

          {/* Frameworks & Methodologies */}
          <div className="mt-16 pt-12 border-t border-border/30">
            <h3 className="text-3xl font-bold text-foreground mb-8 text-center">Frameworks & Methodologies</h3>
            <div className="flex flex-wrap justify-center gap-4">
              {[
                'User-Centered Design (UCD)',
                'Agile',
                'Double Diamond',
                'Design Thinking',
                'Lean UX',
                'Design Sprint',
                'Jobs To Be Done (JTBD)',
                'Atomic Design'
              ].map((framework) => (
                <span 
                  key={framework}
                  className="px-6 py-3 glass-card rounded-full border border-primary/20 text-foreground/90 font-medium hover:border-primary/40 hover:scale-105 transition-all duration-300"
                >
                  {framework}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Tools & Software Section */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-bold text-foreground mb-6">Tools & Software</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Proficient in industry-standard design and collaboration tools
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          {[
            { name: 'Figma', color: 'from-purple-500/20 to-pink-500/20' },
            { name: 'FigJam', color: 'from-green-500/20 to-teal-500/20' },
            { name: 'Miro', color: 'from-yellow-500/20 to-orange-500/20' },
            { name: 'Canva', color: 'from-blue-500/20 to-cyan-500/20' },
            { name: 'Photoshop', color: 'from-blue-600/20 to-indigo-500/20' },
            { name: 'Illustrator', color: 'from-orange-500/20 to-red-500/20' },
            { name: 'InDesign', color: 'from-pink-500/20 to-rose-500/20' },
            { name: 'After Effects', color: 'from-purple-600/20 to-violet-500/20' },
            { name: 'XD', color: 'from-fuchsia-500/20 to-pink-500/20' },
            { name: 'Premiere Pro', color: 'from-indigo-500/20 to-purple-500/20' },
            { name: 'Sketch', color: 'from-amber-500/20 to-yellow-500/20' },
            { name: 'Blender', color: 'from-orange-600/20 to-amber-500/20' }
          ].map((tool) => (
            <div 
              key={tool.name}
              className={`glass-card rounded-2xl p-6 text-center hover:scale-105 transition-all duration-300 border border-primary/20 hover:border-primary/40 bg-gradient-to-br ${tool.color}`}
            >
              <p className="text-lg font-bold text-foreground">{tool.name}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Projects Grid */}
      <section id="projects" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32" aria-labelledby="projects-heading">
        <div className="text-center mb-20">
          <h2 id="projects-heading" className="text-5xl md:text-6xl font-bold text-foreground mb-6">Selected Works</h2>
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
      </section>

      {/* Contact Section - Simplified */}
      <section id="contact" className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-32" aria-labelledby="contact-heading">
        <div className="glass-card rounded-3xl p-12 md:p-20 text-center border border-primary/20">
          <h2 id="contact-heading" className="text-5xl md:text-6xl font-bold text-foreground mb-8">Let's Talk</h2>
          <p className="text-xl text-foreground/80 mb-12 leading-relaxed max-w-2xl mx-auto">
            Whether you're a design team in need of support or an early-stage company looking to level up your design, 
            I'd love to talk about your project <span role="img" aria-label="purple heart">💜</span>
          </p>
          
          <a 
            href="mailto:arnborg@gmail.com" 
            className="inline-flex items-center gap-3 px-10 py-5 bg-primary text-primary-foreground font-bold rounded-2xl transition-all duration-500 hover:scale-105 hover:-translate-y-1 text-lg"
            aria-label="Send email to arnborg at gmail dot com"
          >
            <Mail className="w-5 h-5" aria-hidden="true" />
            <span>Drop me a line</span>
          </a>
          
          <div className="flex flex-wrap justify-center items-center gap-6 pt-12 mt-12 border-t border-border/30">
            <span className="text-sm text-muted-foreground">or say <span role="img" aria-label="waving hand">👋</span> on</span>
            <a 
              href="https://www.linkedin.com/in/samuel-arnborg-5a0145337/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-all duration-300 font-medium hover:scale-110"
              aria-label="Connect on LinkedIn (opens in new tab)"
            >
              LinkedIn
            </a>
            <span className="text-border" aria-hidden="true">•</span>
            <a 
              href="https://github.com/Arnborgz" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-all duration-300 font-medium hover:scale-110"
              aria-label="View projects on GitHub (opens in new tab)"
            >
              GitHub
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 border-t border-border/30" role="contentinfo">
        <div className="flex justify-center items-center">
          <p className="text-sm text-muted-foreground">
            <span aria-label="Copyright">©</span> 2025 Samuel Arnborg | Design & UX
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
