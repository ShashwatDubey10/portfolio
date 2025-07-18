import { ArrowRight, ExternalLink, Github } from "lucide-react";

const projects = [
  {
    id: 1,
    title: "Bantr Chat Application",
    description:
      "A sleek real-time chat platform built with React and Tailwind, designed for seamless, modern messaging experiences.",
    tags: ["React", "ExpressJs", "MongoDb"],
    demoUrl: "https://bantr-mern-chatapp-1.onrender.com",
    githubUrl: "https://github.com/ShashwatDubey10/bantr-mern-chatapp",
  },
  {
    id: 2,
    title: "E-commerce Platform",
    description:
      "A full-featured e-commerce frontend built with modern web technologies, offering user authentication flows and payment interface design.",
    tags: ["JavaScript", "HTML", "CSS"],
    demoUrl: "https://shashwatdubey10.github.io/nexcart-website/html/",
    githubUrl: "https://github.com/ShashwatDubey10/nexcart-website",
  },
];

export const ProjectsSection = () => {
  return (
    <section id="projects" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          Featured <span className="text-primary">Projects</span>
        </h2>

        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Here are some of my recent projects. Each project was carefully
          crafted with attention to detail, performance, and user experience.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div
              key={project.id}
              className="group bg-card rounded-lg overflow-hidden shadow-xs card-hover flex flex-col h-full"
            >
              <div className="p-6 flex flex-col flex-1">
                {/* Description at the top */}
                <p className="text-muted-foreground text-sm mb-4">
                  {project.description}
                </p>

                {/* Tech tags below description */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, idx) => (
                    <span
                      key={idx}
                      className="px-2 py-1 text-xs font-medium border rounded-full bg-secondary text-secondary-foreground"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Project title */}
                <h3 className="text-xl font-semibold mb-4">{project.title}</h3>

                {/* Links */}
                <div className="flex justify-between items-center mt-auto">
                  <div className="flex space-x-3">
                    <a
                      href={project.demoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-foreground/80 hover:text-primary transition-colors duration-300"
                      aria-label={`View ${project.title} Demo`}
                    >
                      <ExternalLink size={20} />
                    </a>
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-foreground/80 hover:text-primary transition-colors duration-300"
                      aria-label={`View ${project.title} on GitHub`}
                    >
                      <Github size={20} />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <a
            className="cosmic-button w-fit flex items-center mx-auto gap-2"
            target="_blank"
            rel="noopener noreferrer"
            href="https://github.com/ShashwatDubey10"
          >
            Check My Github <ArrowRight size={16} />
          </a>
        </div>
      </div>
    </section>
  );
};
