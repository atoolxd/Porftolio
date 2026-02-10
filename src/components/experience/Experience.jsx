import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import "./experience.scss";

const experiences = [
  {
    period: "2024 \u2014 Present",
    role: "Project Manager & Developer",
    company: "Freelance",
    description:
      "Leading project timelines and delivering full-stack applications for clients. Managing cross-functional teams and implementing agile methodologies to ship products on time.",
    technologies: ["React", "Node.js", "Agile", "Jira"],
  },
  {
    period: "2023 \u2014 2024",
    role: "Frontend Developer",
    company: "Web Development Projects",
    description:
      "Built and maintained responsive web applications using modern frameworks. Collaborated with designers and backend teams to deliver pixel-perfect, performant user interfaces.",
    technologies: ["JavaScript", "React", "SCSS", "Framer Motion"],
  },
  {
    period: "2022 \u2014 2023",
    role: "Esports Athlete & Content Creator",
    company: "Competitive Gaming",
    description:
      "Competed in professional esports tournaments while building a community through content creation. Developed strategic thinking and team coordination skills applicable to tech leadership.",
    technologies: ["Team Strategy", "Leadership", "Content Creation", "Analytics"],
  },
];

const Experience = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="experience" id="experience" ref={ref}>
      <div className="experience-inner">
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <span className="section-number">02.</span>
          <h2 className="section-title">Experience</h2>
          <div className="section-line" />
        </motion.div>

        <div className="experience-list">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              className="experience-card"
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.15 * index }}
            >
              <div className="exp-period">{exp.period}</div>
              <div className="exp-details">
                <h3 className="exp-role">
                  {exp.role} <span className="exp-company">{"@ " + exp.company}</span>
                </h3>
                <p className="exp-description">{exp.description}</p>
                <div className="exp-tech">
                  {exp.technologies.map((tech) => (
                    <span key={tech} className="tech-tag">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
