import React, { useState } from "react";

const ProjectsSection = () => {
  const [selectedUrl, setSelectedUrl] = useState("");

  const projects = [
    {
      title: "Memory Game",
      description:
        "A visually appealing memory card flip game with time limits and interactive features.",
      image:
        "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1000&auto=format&fit=crop",
      technologies: ["React", "CSS", "JavaScript"],
      live: "https://memory-game-nu-self.vercel.app/",
    },
    {
      title: "E-Commerce Website",
      description:
        "Developed the backend for an e-commerce website for a mobile and laptop shop, including functionalities like product listings, shopping cart, and secure checkout.",
      image:
        "https://images.unsplash.com/photo-1557821552-17105176677c?q=80&w=1000&auto=format&fit=crop",
      technologies: ["Node.js", "Express.js", "MongoDB"],
      live: "https://github.com/Sudheer-18/horizon-tailwind-react",
    },
    {
      title: "Blood Donation Statistics Tracker",
      description:
        "A web-based project designed to showcase blood donation statistics with interactive charts and donor categorization.",
      image:
        "https://images.unsplash.com/photo-1540350394557-8d14678e7f91?q=80&w=1000&auto=format&fit=crop",
      technologies: ["React.js", "Chart.js", "Node.js"],
      live: "https://blood-donation-swart-nu.vercel.app/",
    },
  ];

  return (
    <section id="projects" className="py-20 bg-secondary/20 section-fade-up">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-16">Projects</h2>
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="project-card overflow-hidden bg-secondary/50 border-primary/10 transition-transform transform hover:scale-105 shadow-lg rounded-lg cursor-pointer"
              onClick={() => {
                setSelectedUrl(project.live);
                window.open(project.live, "_blank", "noopener,noreferrer");
              }}
            >
              <div className="relative">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover transition-transform duration-300 hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300" />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                <p className="text-muted-foreground mb-4">{project.description}</p>
                <div className="flex gap-2 flex-wrap">
                  {project.technologies.map((tech, i) => (
                    <span
                      key={i}
                      className="skill-tag bg-primary/10 text-primary px-2 py-1 rounded text-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
