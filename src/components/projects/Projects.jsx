import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import "./projects.scss";

const projects = [
  {
    title: "Analytics Dashboard",
    description:
      "A comprehensive analytics platform with real-time data visualization, interactive charts, and customizable reporting. Built with a focus on performance and accessibility to handle large datasets smoothly.",
    image: "/project-1.jpg",
    technologies: ["React", "Node.js", "D3.js", "PostgreSQL"],
    github: "#",
    live: "#",
    featured: true,
  },
  {
    title: "Esports Team Manager",
    description:
      "Tournament management and team coordination platform for competitive gaming. Features include bracket generation, player statistics tracking, match scheduling, and real-time score updates.",
    image: "/project-2.jpg",
    technologies: ["React", "Firebase", "WebSockets", "Tailwind"],
    github: "#",
    live: "#",
    featured: true,
  },
  {
    title: "E-Commerce Platform",
    description:
      "A modern e-commerce solution with dynamic product catalogs, secure payment integration, inventory management, and a responsive storefront designed for optimal conversion rates.",
    image: "/project-3.jpg",
    technologies: ["Next.js", "Stripe", "MongoDB", "SCSS"],
    github: "#",
    live: "#",
    featured: true,
  },
];

const otherProjects = [
  {
    title: "Portfolio Website",
    description: "A personal portfolio built with React and Framer Motion featuring smooth animations and a modern dark theme.",
    technologies: ["React", "Framer Motion", "SCSS"],
  },
  {
    title: "Task Management CLI",
    description: "A command-line task manager with priority sorting, deadline tracking, and project organization features.",
    technologies: ["Python", "Click", "SQLite"],
  },
  {
    title: "Weather Dashboard",
    description: "Real-time weather application with location-based forecasts, interactive maps, and severe weather alerts.",
    technologies: ["React", "OpenWeather API", "Chart.js"],
  },
  {
    title: "Chat Application",
    description: "Real-time messaging platform with rooms, file sharing, and presence indicators using WebSocket technology.",
    technologies: ["Node.js", "Socket.io", "React"],
  },
  {
    title: "Game Score Tracker",
    description: "Esports match history and performance analytics tracker with leaderboards and team comparison tools.",
    technologies: ["TypeScript", "React", "Firebase"],
  },
  {
    title: "Markdown Editor",
    description: "A live markdown editor with syntax highlighting, preview mode, and export functionality for documents.",
    technologies: ["React", "CodeMirror", "Marked"],
  },
];

const ExternalIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
    <polyline points="15 3 21 3 21 9" />
    <line x1="10" y1="14" x2="21" y2="3" />
  </svg>
);

const GithubIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
  </svg>
);

const FolderIcon = () => (
  <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
    <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z" />
  </svg>
);

const Projects = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const otherRef = useRef(null);
  const otherInView = useInView(otherRef, { once: true, margin: "-50px" });

  return (
    <section className="projects" id="projects" ref={ref}>
      <div className="projects-inner">
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <span className="section-number">03.</span>
          <h2 className="section-title">Projects</h2>
          <div className="section-line" />
        </motion.div>

        <div className="featured-projects">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              className={`featured-card ${index % 2 !== 0 ? "reverse" : ""}`}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 * index }}
            >
              <div className="project-image">
                <a href={project.live}>
                  <img src={project.image} alt={project.title} />
                  <div className="image-overlay" />
                </a>
              </div>

              <div className="project-info">
                <p className="project-overline">Featured Project</p>
                <h3 className="project-title">{project.title}</h3>
                <div className="project-description">
                  <p>{project.description}</p>
                </div>
                <ul className="project-tech">
                  {project.technologies.map((tech) => (
                    <li key={tech}>{tech}</li>
                  ))}
                </ul>
                <div className="project-links">
                  <a href={project.github} aria-label="GitHub Repository">
                    <GithubIcon />
                  </a>
                  <a href={project.live} aria-label="Live Demo">
                    <ExternalIcon />
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="other-projects"
          ref={otherRef}
          initial={{ opacity: 0, y: 30 }}
          animate={otherInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h3 className="other-heading">Other Noteworthy Projects</h3>
          <div className="other-grid">
            {otherProjects.map((project, index) => (
              <motion.div
                key={index}
                className="other-card"
                initial={{ opacity: 0, y: 20 }}
                animate={otherInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.4, delay: 0.1 * index }}
                whileHover={{ y: -8 }}
              >
                <div className="card-top">
                  <div className="card-folder">
                    <FolderIcon />
                  </div>
                  <div className="card-links">
                    <a href="#" aria-label="GitHub Repository"><GithubIcon /></a>
                  </div>
                </div>
                <h4 className="card-title">{project.title}</h4>
                <p className="card-description">{project.description}</p>
                <ul className="card-tech">
                  {project.technologies.map((tech) => (
                    <li key={tech}>{tech}</li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
