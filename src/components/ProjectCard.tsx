interface ProjectCardProps {
  title: string;
  description: string;
  image?: string;
}

const ProjectCard = ({ title, description, image }: ProjectCardProps) => {
  return (
    <a href="#" className="block project-card rounded-2xl border-0 overflow-hidden group">
      <div className="p-6">
        {/* Project Visual with gradient overlay */}
        <div className="h-52 bg-secondary rounded-xl mb-6 flex items-center justify-center relative overflow-hidden">
          {image ? (
            <>
              <img 
                src={image} 
                alt={title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-card/90 via-card/20 to-transparent opacity-60 group-hover:opacity-40 transition-opacity duration-500" />
            </>
          ) : (
            <>
              <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-accent/5" />
              <div className="absolute text-[12rem] leading-none text-primary/10 transform -rotate-12 blur-sm select-none">
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
    </a>
  );
};

export default ProjectCard;
