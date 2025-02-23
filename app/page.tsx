"use client";

import { useEffect } from 'react';
import { Mail, Github, Linkedin, Calendar, Download, BookOpen, Code, Briefcase, Award, Terminal } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import Navbar from "@/components/Navbar";
import ProjectsSection from '@/components/ProjectSection';

export default function Home() {
  useEffect(() => {
    const observerCallback = (entries: IntersectionObserverEntry[]) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('in-view');
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, {
      threshold: 0.1
    });

    document.querySelectorAll('.section-fade-up').forEach(section => {
      observer.observe(section);
    });

    return () => observer.disconnect();
  }, []);

  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <main className="min-h-screen bg-background">
      <Navbar onNavClick={scrollToSection} />
      
      {/* Hero Section */}
      <section id="about" className="relative h-[90vh] flex items-center section-fade-up">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-primary/10 to-background z-10" />
        </div>
        <div className="container mx-auto px-4 z-20">
          <div className="flex items-center justify-center h-screen">
            <div className="flex items-center justify-center h-screen gap-12 px-6">
              {/* Text Section */}
              <div className="max-w-3xl text-center">
                <h1 className="text-6xl font-bold text-foreground mb-6 leading-tight">
                  Crafting Digital Experiences
                </h1>
                <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
                  Full-stack developer passionate about creating innovative solutions
                  and delivering exceptional user experiences.
                </p>
                <div className="flex justify-center gap-4">
                  <Button 
                    variant="default" 
                    size="lg"
                    className="bg-primary text-primary-foreground hover:bg-primary/90 transition-all duration-300 hover:transform hover:scale-105"
                    onClick={() => scrollToSection('projects')}
                  >
                    View Projects
                  </Button>
                  <Button 
                    variant="outline" 
                    size="lg"
                    className="border-primary hover:bg-primary/10 transition-all duration-300 hover:transform hover:scale-105"
                    onClick={() => scrollToSection('contact')}
                  >
                    Contact Me
                  </Button>
                </div>
              </div>

              {/* Image Section */}
              <div className="max-w-md">
                <img 
                  src="/Images/22P31A0424.png" 
                  alt="Developer working" 
                  className="w-full rounded-lg shadow-lg transition-all duration-300 hover:transform hover:scale-105 hover:shadow-primary/30"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent z-10" />
      </section>

      {/* Education Section */}
      <section id="education" className="py-20 section-fade-up">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-16 flex items-center justify-center gap-2">
            <BookOpen className="w-8 h-8 text-primary" />
            Education
          </h2>
          <div className="max-w-3xl mx-auto space-y-8">
            <Card className="p-6 bg-secondary/50 border-primary/10">
              <h3 className="text-xl font-semibold">Bachelor of Technology in Electronics and Communication Engineering</h3>
              <p className="text-muted-foreground">Aditya College of Engineering and Technology, Surampalem</p>
              <p className="text-sm text-muted-foreground">October 2022 - Present</p>
            </Card>
            <Card className="p-6 bg-secondary/50 border-primary/10">
              <h3 className="text-xl font-semibold">Board of Intermediate Education</h3>
              <p className="text-muted-foreground">Sri Chaitanya Junior College</p>
              <p className="text-sm text-muted-foreground">August 2020 - May 2022</p>
            </Card>
          </div>
        </div>
      </section>

      {/* Work Experience Section with Timeline */}
      <section id="experience" className="py-20 bg-secondary/20 section-fade-up">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-16 flex items-center justify-center gap-2">
            <Briefcase className="w-8 h-8 text-primary" />
            Work Experience
          </h2>
          <div className="timeline-container max-w-4xl mx-auto">
            {experiences.map((experience, index) => (
              <div key={index} className="timeline-item">
                <div className="timeline-content">
                  <Card className="p-6 relative bg-secondary/50 border-primary/10 hover:bg-secondary/70 transition-all duration-300">
                    <div className="flex items-start gap-4">
                      <div className="flex-shrink-0">
                        <Calendar className="w-6 h-6 text-primary" />
                      </div>
                      <div>
                        <h3 className="text-xl font-semibold">{experience.role}</h3>
                        <p className="text-muted-foreground mb-2">
                          {experience.company}
                        </p>
                        <p className="text-sm text-muted-foreground mb-4">
                          {experience.date}
                        </p>
                        <p className="text-foreground/90">{experience.description}</p>
                      </div>
                    </div>
                  </Card>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Technical Skills Section */}
      <section id="skills" className="py-20 section-fade-up">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-16 flex items-center justify-center gap-2">
            <Code className="w-8 h-8 text-primary" />
            Technical Skills
          </h2>
          <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card className="p-6 bg-secondary/50 border-primary/10">
              <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
                <Terminal className="w-5 h-5 text-primary" />
                Programming Languages
              </h3>
              <div className="flex flex-wrap gap-2">
                {["C++", "Python", "Java", "C"].map((lang) => (
                  <span key={lang} className="bg-primary/10 text-primary px-3 py-1 rounded-full text-sm">
                    {lang}
                  </span>
                ))}
              </div>
            </Card>
            <Card className="p-6 bg-secondary/50 border-primary/10">
              <h3 className="text-xl font-semibold mb-4">Developer Tools</h3>
              <div className="flex flex-wrap gap-2">
                {["Git", "GitHub"].map((tool) => (
                  <span key={tool} className="bg-primary/10 text-primary px-3 py-1 rounded-full text-sm">
                    {tool}
                  </span>
                ))}
              </div>
            </Card>
            <Card className="p-6 bg-secondary/50 border-primary/10">
              <h3 className="text-xl font-semibold mb-4">Frontend Development</h3>
              <div className="flex flex-wrap gap-2">
                {["HTML", "CSS", "JavaScript", "Bootstrap", "React.js", "Next.js", "React Native"].map((tech) => (
                  <span key={tech} className="bg-primary/10 text-primary px-3 py-1 rounded-full text-sm">
                    {tech}
                  </span>
                ))}
              </div>
            </Card>
            <Card className="p-6 bg-secondary/50 border-primary/10">
              <h3 className="text-xl font-semibold mb-4">Backend Development</h3>
              <div className="flex flex-wrap gap-2">
                {["Node.js", "Express.js", "MongoDB", "SQL", "Figma"].map((tech) => (
                  <span key={tech} className="bg-primary/10 text-primary px-3 py-1 rounded-full text-sm">
                    {tech}
                  </span>
                ))}
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Projects Section with Enhanced Animations */}

      <ProjectsSection/>
      {/* <section id="projects" className="py-20 bg-secondary/20 section-fade-up">
  <div className="container mx-auto px-4">
    <h2 className="text-4xl font-bold text-center mb-16">Projects</h2>
    <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {projects.map((project, index) => (
        <Card key={index} className="project-card overflow-hidden bg-secondary/50 border-primary/10">
          <div className="relative">
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-48 object-cover transition-transform duration-300 hover:scale-105 cursor-pointer"
              onClick={() => window.open(project.live, "_blank")}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300" />
          </div>
          <div className="p-6">
            <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
            <p className="text-muted-foreground mb-4">{project.description}</p>
            <div className="flex gap-2 flex-wrap">
              {project.technologies.map((tech, i) => (
                <span key={i} className="skill-tag bg-primary/10 text-primary px-2 py-1 rounded text-sm">
                  {tech}
                </span>
              ))}
            </div>
            <div className="mt-4 flex gap-4">
              <button
                type="button"
                className="border-primary/20 px-4 py-2 rounded bg-primary/10 hover:bg-primary/20 transition-all duration-300"
                onClick={() => window.open(project.live, "_blank")}
              >
                View Live
              </button>
              {project.repo && (
                <button
                  type="button"
                  className="border-primary/20 px-4 py-2 rounded bg-primary/10 hover:bg-primary/20 transition-all duration-300"
                  onClick={() => window.open(project.repo, "_blank")}
                >
                  View Repo
                </button>
              )}
            </div>
          </div>
        </Card>
      ))}
    </div>
  </div>
</section> */}




      {/* Certifications Section */}
      <section id="certifications" className="py-20 section-fade-up">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-16 flex items-center justify-center gap-2">
            <Award className="w-8 h-8 text-primary" />
            Certifications
          </h2>
          <div className="max-w-3xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
            {certifications.map((cert, index) => (
              <Card key={index} className="p-6 bg-secondary/50 border-primary/10">
                <h3 className="font-semibold text-lg mb-2">{cert.title}</h3>
                <p className="text-muted-foreground text-sm">{cert.issuer}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Coding Profiles Section */}
      <section id="coding-profiles" className="py-20 bg-secondary/20 section-fade-up">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-16">Coding Profiles</h2>
          <div className="max-w-3xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
            {codingProfiles.map((profile, index) => (
              <Card key={index} className="p-6 bg-secondary/50 border-primary/10">
                <h3 className="font-semibold text-lg mb-2">{profile.platform}</h3>
                <p className="text-muted-foreground">{profile.achievement}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 section-fade-up">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-16">Get in Touch</h2>
          <div className="max-w-3xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
              <Card className="p-6 text-center bg-secondary/50 border-primary/10">
                <Mail className="w-8 h-8 mx-auto mb-4 text-primary" />
                <h3 className="font-semibold mb-2">Email</h3>
                <p className="text-muted-foreground">sudheer13ks@gmail.com</p>
              </Card>
              <Card className="p-6 text-center bg-secondary/50 border-primary/10">
                <Github className="w-8 h-8 mx-auto mb-4 text-primary" />
                <h3 className="font-semibold mb-2"><a href='https://github.com/Sudheer-18'>GitHub</a></h3>
                <p className="text-muted-foreground"><a href='https://github.com/Sudheer-18'>sudheer-13</a></p>
              </Card>
              <Card className="p-6 text-center bg-secondary/50 border-primary/10">
                <Linkedin className="w-8 h-8 mx-auto mb-4 text-primary" />
                <h3 className="font-semibold mb-2"><a href='https://in.linkedin.com/in/sudheer-kosireddi-430729258'>LinkedIn</a></h3>
                <p className="text-muted-foreground"><a href='https://in.linkedin.com/in/sudheer-kosireddi-430729258'>sudheer kosireddi</a></p>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

const experiences = [
  {
    role: "JAVA Intern",
    company: "Technical Hub",
    date: "July 2024 – January 2025",
    description:
      "Gained comprehensive practical experience in implementing and optimizing Java programming as part of an internship opportunity.",
  },
  {
    role: "DSA Intern",
    company: "Technical Hub",
    date: "February 2024 – June 2024",
    description:
      "Gained hands-on experience in implementing and optimizing data structures using C programming, improving problem-solving skills and coding efficiency during an internship.",
  },
];

// const projects = [
//   {
//     title: "E-Commerce Website",
//     description: "Developed the backend for an e-commerce website for a mobile and laptop shop, including functionalities like product listings, shopping cart, and secure checkout.",
//     image: "https://images.unsplash.com/photo-1557821552-17105176677c?q=80&w=1000&auto=format&fit=crop",
//     technologies: ["Node.js", "Express.js", "MongoDB"],
//     repo: "#",
//     live: "#"
//   },
//   {
//     title: "Blood Donation Statistics Tracker",
//     description: "A web-based project designed to showcase blood donation statistics with interactive charts and donor categorization.",
//     image: "https://images.unsplash.com/photo-1540350394557-8d14678e7f91?q=80&w=1000&auto=format&fit=crop",
//     technologies: ["React.js", "Chart.js", "Node.js"],
//     repo: "#",
//     live: "#"
//   },
//   {
//     title: "Memory Game",
//     description: "A visually appealing memory card flip game with time limits and interactive features.",
//     image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1000&auto=format&fit=crop",
//     technologies: ["React", "CSS", "JavaScript"],
//     repo: "https://github.com/Sudheer-18/MemoryGame.git",
//     live: "https://memory-game-nu-self.vercel.app/"
//   }
// ];


const certifications = [
  { title: "Python IT Specialist Certification", issuer: "IT Specialist" },
  { title: "C++ Certification", issuer: "Cisco" },
  { title: "HTML and CSS IT Specialist Certification", issuer: "IT Specialist" },
  { title: "Java Certification", issuer: "HackerRank" },
  { title: "JavaScript IT Specialist Certification", issuer: "IT Specialist" },
];

const codingProfiles = [
  { platform: "LeetCode", achievement: "Solved 400+ Problems and participated in 25+ contests" },
  { platform: "CodeChef", achievement: "Solved 200+ problems and participated in 30+ contests" },
  { platform: "GeeksforGeeks", achievement: "Solved 250+ problems" },
  { platform: "HackerRank", achievement: "4 Star in Problem Solving" },
];