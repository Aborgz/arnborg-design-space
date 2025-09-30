interface ProjectCardProps {
  title: string;
  description: string;
  image?: string;
  link?: string;
}

import { Link } from "react-router-dom";

const ProjectCard = ({ title, description, image, link }: ProjectCardProps) => {
  const content = (
    <div className="block project-card rounded-2xl border-0 overflow-hidden group" role="article" aria-label={`${title} project card`}>
      <div className="p-6">
        {/* Project Visual with gradient overlay */}
        <div className="h-52 bg-secondary rounded-xl mb-6 flex items-center justify-center relative overflow-hidden border border-border/50">
          {image ? (
            <>
              <img 
                src={image} 
                alt={title}
                className="w-full h-full object-cover transition-all duration-700 group-hover:scale-110 group-hover:brightness-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-card/90 via-card/20 to-transparent opacity-60 group-hover:opacity-40 transition-opacity duration-500" />
              <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-accent/10 opacity-0 group-hover:opacity-30 transition-opacity duration-500 mix-blend-overlay" />
            </>
          ) : (
            <>
              <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-accent/10 to-transparent" />
              <div className="absolute text-[12rem] leading-none text-primary/20 transform -rotate-12 blur-sm select-none animate-pulse">
                ✦
              </div>
              <p className="text-muted-foreground text-sm italic z-10 relative code-text">
                Coming Soon
              </p>
            </>
          )}
        </div>
        
        <div className="space-y-3">
          <h3 className="text-2xl font-bold gradient-text group-hover:scale-105 transition-transform duration-300 origin-left">
            {title}
          </h3>
          <p className="text-sm text-muted-foreground leading-relaxed">
            {description}
          </p>
        </div>
      </div>
    </div>
  );
  
  if (link) {
    return <Link to={link} aria-label={`View ${title} project details`}>{content}</Link>;
  }
  
  return <div role="article">{content}</div>;
};

export default ProjectCard;
