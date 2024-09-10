import { animate, motion } from "framer-motion";
import "./hero.scss";

const textvariants = {
  initial: {
    x: -500,
    opacity: 0,
  },
  animate: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 1,
      staggerChildren: 0.1,
    },
  },
  scrollButton: {
    opacity: 0,
    y: 10,
    transition: {
      duration: 2,
      repeat: Infinity,
    },
  },
};

const sliderVariants = {
  initial: {
    x: 0,
  },
  animate: {
    x: "-220%",
    transition: {
      repeat: Infinity,
      repeateType:"mirror",
      duration: 20,
    },
  },
};

const Hero = () => {
  return (
    <div className="hero">
      <div className="wrapper">
        <motion.div
          className="textContainer"
          variants={textvariants}
          initial="initial"
          animate="animate"
        >
          <motion.h2 variants={textvariants}>ATUL BALLAV KHAREL</motion.h2>
          <motion.h1 variants={textvariants}>
            Developer And Project Manager
          </motion.h1>
          <motion.div variants={textvariants} className="buttons">
            <motion.button variants={textvariants}>Contact</motion.button>
          </motion.div>
          <motion.img
            variants={textvariants}
            animate="scrollButton"
            src="/scroll.png"
            alt=""
          />
        </motion.div>
      </div>
      <motion.div
        className="slidingTextContainer"
        variants={sliderVariants}
        initial="intitial"
        animate="animate"
      >
        Developer Game Enthusiast Esports Athelete
      </motion.div>
      <div className="imgContainer">
        <img src="/atul.png" alt="" />
      </div>
    </div>
  );
};

export default Hero;
