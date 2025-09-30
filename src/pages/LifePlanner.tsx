import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import heroImage from "@/assets/lifeplanner-hero.png";
import screen1 from "@/assets/lifeplanner-screen1.png";
import screen2 from "@/assets/lifeplanner-screen2.png";
import screen3 from "@/assets/lifeplanner-screen3.png";

const LifePlanner = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Skip to main content link for keyboard users */}
      <a href="#main-content" className="skip-link">
        Skip to main content
      </a>

      {/* Header */}
      <header className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 border-b border-border/50 sticky top-0 glass-card z-10" role="banner">
        <Link 
          to="/" 
          className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary transition-all duration-300 font-medium group"
          aria-label="Return to portfolio homepage"
        >
          <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform duration-300" aria-hidden="true" />
          Back to Portfolio
        </Link>
      </header>

      {/* Hero Section */}
      <section id="main-content" className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20" role="main" aria-labelledby="project-title">
        <div className="text-center mb-16">
          <h1 id="project-title" className="text-6xl md:text-7xl font-bold gradient-text mb-6">
            LifePlanner
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Making it easier to plan so you can enjoy more in life
          </p>
        </div>

        {/* Hero Image */}
        <div className="glass-card rounded-3xl p-8 mb-20">
          <div className="relative overflow-hidden rounded-2xl">
            <img 
              src={heroImage} 
              alt="LifePlanner application interface showing the main dashboard with weekly planning view, custom lists, and progress tracking features"
              className="w-full h-auto"
            />
          </div>
        </div>

        {/* Design Process Section */}
        <div className="glass-card rounded-3xl p-8 md:p-12 mb-20" role="region" aria-labelledby="design-process-heading">
          <h2 id="design-process-heading" className="text-4xl font-bold gradient-text mb-8">Design Process</h2>
          <div className="space-y-6 text-lg text-foreground/90 leading-relaxed">
            <p>
              Our work followed the <strong className="text-primary">Double Diamond model</strong>, a recognized design framework that guides teams from broad exploration of a problem to the development of focused solutions.
            </p>
            <p>
              In the first phase, we <strong>discovered</strong> user needs by conducting research and gathering insights to understand the challenges they faced. Next, we <strong>defined</strong> the core problems by analyzing these insights and translating them into clear design challenges.
            </p>
            <p>
              During the <strong>development</strong> phase, we generated a variety of ideas, tested potential solutions, and created prototypes to explore what would work best. Finally, in the <strong>delivery</strong> phase, we refined the concepts and implemented the final solution.
            </p>
            <p>
              We chose the Double Diamond because it provides a structured balance between divergent thinking—exploring many possibilities—and convergent thinking—focusing on the most effective solutions. Working iteratively within each phase allowed us to continuously test, learn, and refine our ideas, ensuring the design was built on genuine user needs rather than the first concept that came to mind.
            </p>
          </div>
        </div>

        {/* App Screens */}
        <div className="space-y-12 mb-20" role="region" aria-labelledby="app-screens-heading">
          <h2 id="app-screens-heading" className="text-4xl font-bold gradient-text text-center">App Screens</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="glass-card rounded-2xl p-6 group hover:scale-105 transition-all duration-500">
              <img 
                src={screen1} 
                alt="LifePlanner list view interface displaying custom categorized lists for managing different life aspects"
                className="w-full h-auto rounded-xl mb-4"
              />
              <h3 className="text-xl font-bold gradient-text mb-2">List Management</h3>
              <p className="text-sm text-muted-foreground">
                Create and manage custom lists for different aspects of your life
              </p>
            </div>

            <div className="glass-card rounded-2xl p-6 group hover:scale-105 transition-all duration-500">
              <img 
                src={screen2} 
                alt="LifePlanner progress tracking screen with visual charts showing weekly and monthly completion metrics"
                className="w-full h-auto rounded-xl mb-4"
              />
              <h3 className="text-xl font-bold gradient-text mb-2">Progress Tracking</h3>
              <p className="text-sm text-muted-foreground">
                Track your weekly and monthly progress with intuitive visualizations
              </p>
            </div>

            <div className="glass-card rounded-2xl p-6 group hover:scale-105 transition-all duration-500">
              <img 
                src={screen3} 
                alt="LifePlanner weekly planning view with organized tasks and schedules in a clean, minimalist layout"
                className="w-full h-auto rounded-xl mb-4"
              />
              <h3 className="text-xl font-bold gradient-text mb-2">Weekly Planning</h3>
              <p className="text-sm text-muted-foreground">
                Plan your week ahead with a clean, focused interface
              </p>
            </div>
          </div>
        </div>

        {/* Key Features */}
        <div className="glass-card rounded-3xl p-8 md:p-12" role="region" aria-labelledby="key-features-heading">
          <h2 id="key-features-heading" className="text-4xl font-bold gradient-text mb-8">Key Features</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-3">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center mb-4 border border-primary/30">
                <span className="text-2xl">📝</span>
              </div>
              <h3 className="text-xl font-bold text-foreground">Custom Lists</h3>
              <p className="text-muted-foreground">
                Create unlimited custom lists tailored to your specific needs and goals
              </p>
            </div>

            <div className="space-y-3">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center mb-4 border border-primary/30">
                <span className="text-2xl">📅</span>
              </div>
              <h3 className="text-xl font-bold text-foreground">Weekly & Monthly Views</h3>
              <p className="text-muted-foreground">
                Switch between weekly and monthly perspectives to stay organized
              </p>
            </div>

            <div className="space-y-3">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center mb-4 border border-primary/30">
                <span className="text-2xl">✨</span>
              </div>
              <h3 className="text-xl font-bold text-foreground">Clean Interface</h3>
              <p className="text-muted-foreground">
                Minimalist design that keeps you focused on what matters most
              </p>
            </div>

            <div className="space-y-3">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center mb-4 border border-primary/30">
                <span className="text-2xl">📊</span>
              </div>
              <h3 className="text-xl font-bold text-foreground">Progress Tracking</h3>
              <p className="text-muted-foreground">
                Visualize your progress and stay motivated with clear metrics
              </p>
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

export default LifePlanner;
