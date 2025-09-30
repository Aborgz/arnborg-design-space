import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import bullyingHero from "@/assets/bullying-hero.jpg";
import bullyingProject from "@/assets/bullying-project.jpg";
import bookMockup from "@/assets/book-mockup.jpg";

const BullyingPsychology = () => {
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
            <h1 className="text-6xl md:text-7xl font-bold text-foreground mb-6">
              How to Kill a Child
            </h1>
            <p className="text-2xl text-muted-foreground max-w-3xl">
              A visual meditation on the invisible wounds of bullying and their lasting impact on the human psyche
            </p>
          </div>

          <div className="rounded-3xl overflow-hidden shadow-2xl mb-20">
            <img 
              src={bullyingHero} 
              alt="Artistic representation of childhood trauma" 
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
                Inspired by Stig Dagerman's haunting essay "Att döda ett barn," I created this novel 
                cover design titled "How to Kill a Child" that explores the psychological devastation 
                of childhood bullying—a trauma that slowly erases the essence of who a child could become.
              </p>
              <p>
                The title is deliberately provocative, forcing us to confront an uncomfortable truth: 
                sustained bullying doesn't just hurt a child; it fundamentally alters their developmental 
                trajectory, killing the person they might have been.
              </p>
            </div>
          </div>

          {/* Book Cover Mockup */}
          <div className="rounded-3xl overflow-hidden shadow-2xl">
            <img 
              src={bookMockup} 
              alt="Novel cover mockup for How to Kill a Child" 
              className="w-full h-auto"
            />
          </div>

          {/* Problem & Solution */}
          <div className="grid md:grid-cols-2 gap-8 mt-12 pt-12 border-t border-border/30">
            <div>
              <h3 className="text-2xl font-bold text-foreground mb-4 flex items-center gap-2">
                <span className="text-red-500">⚠️</span> The Problem
              </h3>
              <p className="text-foreground/80 leading-relaxed">
                Childhood bullying's psychological impact is often invisible and misunderstood. Society 
                tends to dismiss it as "part of growing up," failing to recognize the profound, lasting 
                neurological and emotional damage it causes. Victims grow into adults carrying unprocessed 
                trauma that affects their relationships, careers, and sense of self-worth.
              </p>
            </div>
            <div>
              <h3 className="text-2xl font-bold text-foreground mb-4 flex items-center gap-2">
                <span className="text-green-500">✓</span> The Solution
              </h3>
              <p className="text-foreground/80 leading-relaxed">
                This visual project raises awareness through evocative imagery and psychological research, 
                helping viewers understand the gravity of childhood bullying. By making the invisible visible, 
                it encourages empathy, validates survivors' experiences, and promotes conversations about 
                prevention, intervention, and healing.
              </p>
            </div>
          </div>

          {/* Research & Insights */}
          <div className="grid md:grid-cols-2 gap-8">
            <div className="glass-card rounded-2xl p-8 border border-primary/20">
              <h3 className="text-2xl font-bold text-foreground mb-4">The Neuroscience</h3>
              <p className="text-foreground/80 leading-relaxed">
                Chronic bullying rewires the developing brain, particularly affecting the amygdala 
                (fear processing) and prefrontal cortex (decision-making). Victims show heightened 
                cortisol levels decades later, indicating permanent alterations to stress response systems.
              </p>
            </div>

            <div className="glass-card rounded-2xl p-8 border border-accent/20">
              <h3 className="text-2xl font-bold text-foreground mb-4">Long-term Impact</h3>
              <p className="text-foreground/80 leading-relaxed">
                Adult survivors often struggle with anxiety, depression, trust issues, and imposter syndrome. 
                The child's internalized shame becomes the adult's inner critic, shaping relationships, 
                career choices, and self-perception for life.
              </p>
            </div>

            <div className="glass-card rounded-2xl p-8 border border-primary/20">
              <h3 className="text-2xl font-bold text-foreground mb-4">Identity Fragmentation</h3>
              <p className="text-foreground/80 leading-relaxed">
                Victims develop a "false self" to survive, hiding their authentic personality. This split 
                can persist into adulthood, creating a profound sense of disconnection from one's true identity 
                and purpose.
              </p>
            </div>

            <div className="glass-card rounded-2xl p-8 border border-accent/20">
              <h3 className="text-2xl font-bold text-foreground mb-4">Breaking the Cycle</h3>
              <p className="text-foreground/80 leading-relaxed">
                Healing requires acknowledging the wound, processing the grief of "what could have been," 
                and slowly rebuilding self-worth through therapy, community, and self-compassion. The scar 
                remains, but it need not define the person.
              </p>
            </div>
          </div>

          {/* Visual Concept */}
          <div className="glass-card rounded-3xl p-12">
            <h2 className="text-4xl font-bold text-foreground mb-6">Visual Concept</h2>
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div className="space-y-4 text-lg text-foreground/90 leading-relaxed">
                <p>
                  The double exposure technique merges the adult face with the child's lonely journey, 
                  symbolizing how past trauma inhabits the present self. The empty road represents 
                  isolation, while the fading imagery suggests fractured memory and identity.
                </p>
                <p>
                  Black and white photography strips away distraction, focusing on raw emotion and 
                  psychological weight. The composition invites viewers to sit with discomfort, 
                  mirroring the unresolved tension survivors carry.
                </p>
              </div>
              <div className="rounded-2xl overflow-hidden shadow-xl">
                <img 
                  src={bullyingProject} 
                  alt="Double exposure artwork showing psychological impact" 
                  className="w-full h-auto"
                />
              </div>
            </div>
          </div>

          {/* Design Process */}
          <div className="glass-card rounded-3xl p-12 bg-gradient-to-br from-primary/5 to-accent/5">
            <h2 className="text-4xl font-bold text-foreground mb-6">Design Approach</h2>
            <div className="space-y-6">
              <div>
                <h4 className="text-xl font-semibold text-foreground mb-2">1. Research Phase</h4>
                <p className="text-foreground/80">
                  Studied psychological research papers, survivor testimonials, and neuroscientific 
                  findings on childhood trauma. Consulted with therapists specializing in trauma recovery.
                </p>
              </div>
              <div>
                <h4 className="text-xl font-semibold text-foreground mb-2">2. Conceptualization</h4>
                <p className="text-foreground/80">
                  Developed visual metaphors that authentically represent the internal experience without 
                  sensationalizing or trivializing the subject matter.
                </p>
              </div>
              <div>
                <h4 className="text-xl font-semibold text-foreground mb-2">3. Visual Execution</h4>
                <p className="text-foreground/80">
                  Used double exposure photography, careful composition, and monochromatic tones to create 
                  a haunting yet dignified representation of psychological complexity.
                </p>
              </div>
            </div>
          </div>

        </div>
      </section>
    </div>
  );
};

export default BullyingPsychology;
