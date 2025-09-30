interface ProjectCardProps {
  title: string;
  description: string;
  image?: string;
}

const ProjectCard = ({ title, description, image }: ProjectCardProps) => {
  return (
    <a href="#" className="block project-card bg-card rounded-xl border border-border hover:border-primary">
      <div className="p-6">
        {/* Project Visual */}
        <div className="h-48 bg-secondary rounded-lg mb-4 flex items-center justify-center border border-border relative overflow-hidden">
          {image ? (
            <img 
              src={image} 
              alt={title}
              className="w-full h-full object-cover"
            />
          ) : (
            <>
              <div className="absolute text-[12rem] leading-none text-muted opacity-20 transform -rotate-45 blur-md select-none">
                &times;
              </div>
              <div className="absolute text-[12rem] leading-none text-muted opacity-20 transform rotate-45 blur-md select-none">
                &times;
              </div>
              <p className="text-muted-foreground text-base italic z-10 relative code-text">
                Image Placeholder
              </p>
            </>
          )}
        </div>
        <h3 className="text-xl font-semibold mb-1 text-primary">
          {title}
        </h3>
        <p className="text-sm text-muted-foreground code-text">
          {description}
        </p>
      </div>
    </a>
  );
};

export default ProjectCard;
