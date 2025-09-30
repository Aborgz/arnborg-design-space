import { ArrowLeft, Sparkles, Video, Heart, Users } from "lucide-react";
import { Link } from "react-router-dom";
import christmasHero from "@/assets/christmas-hero.jpg";

const ChristmasCard = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 glass-card border-b border-border/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <Link 
            to="/" 
            className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary transition-all duration-300"
          >
            <ArrowLeft className="w-5 h-5" />
            <span>Back to Portfolio</span>
          </Link>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="mb-12">
            <div className="inline-flex items-center gap-2 text-primary mb-4">
              <Sparkles className="w-6 h-6" />
              <span className="text-sm font-semibold uppercase tracking-wider">Educational Project</span>
            </div>
            <h1 className="text-6xl md:text-7xl font-bold text-foreground mb-6">
              Merry Christmas Video Card
            </h1>
            <p className="text-2xl text-muted-foreground max-w-3xl">
              Teaching digital storytelling and creative expression through holiday spirit
            </p>
          </div>

          <div className="rounded-3xl overflow-hidden shadow-2xl mb-20">
            <img 
              src={christmasHero} 
              alt="Children creating digital Christmas cards" 
              className="w-full h-[600px] object-cover"
            />
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pb-32">
        <div className="space-y-12">
          {/* Overview */}
          <div className="glass-card rounded-3xl p-12">
            <h2 className="text-4xl font-bold text-foreground mb-6">Project Overview</h2>
            <div className="space-y-4 text-lg text-foreground/90 leading-relaxed">
              <p>
                I created the Merry Christmas Video Card project to bring digital creativity into elementary 
                school classrooms, empowering young students to create personalized animated holiday greetings 
                for their families and friends. This initiative combined festive joy with fundamental 
                digital literacy skills.
              </p>
              <p>
                Over three weeks, I guided students through basic animation principles, digital storytelling 
                techniques, and the power of visual communication—all while they crafted heartfelt messages 
                that celebrated the holiday season and strengthened family connections.
              </p>
            </div>
          </div>

          {/* Problem & Solution */}
          <div className="grid md:grid-cols-2 gap-8 mt-12 pt-12 border-t border-border/30">
            <div>
              <h3 className="text-2xl font-bold text-foreground mb-4 flex items-center gap-2">
                <span className="text-red-500">⚠️</span> The Problem
              </h3>
              <p className="text-foreground/80 leading-relaxed">
                Elementary school students often lack engaging opportunities to learn digital creativity 
                and storytelling. Traditional holiday activities don't leverage modern technology, missing 
                the chance to teach valuable digital literacy skills while creating meaningful, personal 
                gifts for loved ones.
              </p>
            </div>
            <div>
              <h3 className="text-2xl font-bold text-foreground mb-4 flex items-center gap-2">
                <span className="text-green-500">✓</span> The Solution
              </h3>
              <p className="text-foreground/80 leading-relaxed">
                I created an interactive project that combines holiday spirit with digital education. 
                Students learned animation, video editing, and storytelling while creating personalized 
                Christmas video cards for their families—blending technical skills with emotional expression 
                and festive joy.
              </p>
            </div>
          </div>

          {/* Key Features */}
          <div className="grid md:grid-cols-2 gap-8">
            <div className="glass-card rounded-2xl p-8 border border-primary/20">
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                <Video className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-2xl font-bold text-foreground mb-4">Animation Basics</h3>
              <p className="text-foreground/80 leading-relaxed">
                I taught students frame-by-frame animation concepts, timing, and movement through 
                user-friendly digital tools designed for young learners. Each child created their 
                own animated characters and holiday scenes.
              </p>
            </div>

            <div className="glass-card rounded-2xl p-8 border border-accent/20">
              <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center mb-4">
                <Sparkles className="w-6 h-6 text-accent" />
              </div>
              <h3 className="text-2xl font-bold text-foreground mb-4">Creative Expression</h3>
              <p className="text-foreground/80 leading-relaxed">
                Children designed custom backgrounds, chose music, added sound effects, and wrote 
                personal messages. The project encouraged individuality while teaching technical skills.
              </p>
            </div>

            <div className="glass-card rounded-2xl p-8 border border-primary/20">
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                <Heart className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-2xl font-bold text-foreground mb-4">Emotional Connection</h3>
              <p className="text-foreground/80 leading-relaxed">
                Beyond technical skills, students explored themes of gratitude, family, and kindness. 
                Many created deeply personal messages that brought parents to tears when received.
              </p>
            </div>

            <div className="glass-card rounded-2xl p-8 border border-accent/20">
              <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center mb-4">
                <Users className="w-6 h-6 text-accent" />
              </div>
              <h3 className="text-2xl font-bold text-foreground mb-4">Collaboration Skills</h3>
              <p className="text-foreground/80 leading-relaxed">
                I encouraged students to work in pairs and small groups, sharing ideas, providing feedback, 
                and learning from each other. Teamwork became an integral part of the creative process.
              </p>
            </div>
          </div>

          {/* Learning Outcomes */}
          <div className="glass-card rounded-3xl p-12">
            <h2 className="text-4xl font-bold text-foreground mb-6">Learning Outcomes</h2>
            <div className="space-y-8">
              <div className="flex gap-6 items-start">
                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center text-primary font-bold">
                  1
                </div>
                <div>
                  <h4 className="text-xl font-semibold text-foreground mb-2">Digital Literacy</h4>
                  <p className="text-foreground/80">
                    I helped students gain confidence using digital tools, understanding file management, 
                    and navigating creative software—foundational skills for the digital age.
                  </p>
                </div>
              </div>

              <div className="flex gap-6 items-start">
                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center text-primary font-bold">
                  2
                </div>
                <div>
                  <h4 className="text-xl font-semibold text-foreground mb-2">Visual Storytelling</h4>
                  <p className="text-foreground/80">
                    I taught children how to convey emotions, messages, and narratives through images, 
                    animation, and music—a crucial skill in modern communication.
                  </p>
                </div>
              </div>

              <div className="flex gap-6 items-start">
                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center text-primary font-bold">
                  3
                </div>
                <div>
                  <h4 className="text-xl font-semibold text-foreground mb-2">Problem-Solving</h4>
                  <p className="text-foreground/80">
                    I turned technical challenges into opportunities to develop resilience, critical thinking, 
                    and creative problem-solving abilities in a supportive environment.
                  </p>
                </div>
              </div>

              <div className="flex gap-6 items-start">
                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center text-primary font-bold">
                  4
                </div>
                <div>
                  <h4 className="text-xl font-semibold text-foreground mb-2">Emotional Intelligence</h4>
                  <p className="text-foreground/80">
                    Through crafting heartfelt messages, I helped students articulate feelings, practice empathy, 
                    and understand the impact of thoughtful communication.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Video Section */}
          <div className="glass-card rounded-3xl p-12 bg-gradient-to-br from-primary/5 to-accent/5">
            <h2 className="text-4xl font-bold text-foreground mb-6 text-center">Project Showcase</h2>
            <p className="text-center text-muted-foreground mb-8">
              Watch one of the student-created Christmas video cards
            </p>
            <div className="rounded-2xl overflow-hidden shadow-2xl">
              <video 
                controls 
                className="w-full h-auto"
                poster="/christmas-video-poster.jpg"
              >
                <source src="/christmas-video.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
          </div>

        </div>
      </section>
    </div>
  );
};

export default ChristmasCard;
