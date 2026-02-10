import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import "./contact.scss";

const Contact = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="contact" id="contact" ref={ref}>
      <div className="contact-inner">
        <motion.div
          className="contact-content"
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <span className="contact-overline">04. What's Next?</span>
          <h2 className="contact-heading">Get In Touch</h2>
          <p className="contact-text">
            {"I'm currently open to new opportunities and collaborations. Whether you have a project in mind, a question, or just want to say hi \u2014 my inbox is always open. I'll do my best to get back to you!"}
          </p>
          <a href="mailto:hello@atulkharel.com" className="contact-button">
            Say Hello
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <line x1="5" y1="12" x2="19" y2="12" />
              <polyline points="12 5 19 12 12 19" />
            </svg>
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
