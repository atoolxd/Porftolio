import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import "./about.scss";

const skills = [
  "JavaScript (ES6+)",
  "React",
  "Node.js",
  "TypeScript",
  "Python",
  "Project Management",
  "Team Leadership",
  "Agile / Scrum",
];

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="about" id="about" ref={ref}>
      <div className="about-inner">
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <span className="section-number">01.</span>
          <h2 className="section-title">About Me</h2>
          <div className="section-line" />
        </motion.div>

        <div className="about-content">
          <motion.div
            className="about-text"
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <p>
              {"Hello! I'm Atul, a developer and project manager who enjoys building things that live on the internet. My interest in development started back when I decided to try creating custom game mods \u2014 turns out hacking together scripts taught me a lot about code!"}
            </p>
            <p>
              {"Fast-forward to today, and I've had the privilege of working across development and management roles. My main focus these days is building accessible, inclusive products and digital experiences for a variety of clients."}
            </p>
            <p>
              {"When I'm not at the computer, I'm usually competing in esports tournaments, exploring new games, or managing project timelines and team sprints."}
            </p>

            <div className="skills-grid">
              <h3>Technologies I work with:</h3>
              <ul>
                {skills.map((skill) => (
                  <li key={skill}>{skill}</li>
                ))}
              </ul>
            </div>
          </motion.div>

          <motion.div
            className="about-image"
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <div className="image-wrapper">
              <img src="/atul.png" alt="Atul Ballav Kharel" />
              <div className="image-overlay" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
