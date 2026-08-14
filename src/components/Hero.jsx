import { motion } from "framer-motion";
import {
  FiArrowRight,
  FiDownload,
  FiGithub,
  FiLinkedin,
} from "react-icons/fi";
import profileImage from "../assets/profile/lakshika.jpeg";

function Hero() {
  return (
    <section id="home" className="hero">

      <div className="hero-container">

        {/* Left Content */}
        <motion.div
          className="hero-content"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >

          <p className="hero-greeting">
            Hi, I'm
          </p>

          <h1>
            Lakshika
            <span> Gobinath</span>
          </h1>

          <h2>
            Computer Science & Engineering Student
          </h2>

          <p className="hero-description">
            I build scalable, creative and user-focused software
            solutions using modern technologies.
          </p>

          {/* Buttons */}
          <div className="hero-buttons">

            <a
              href="#projects"
              className="btn btn-primary"
            >
              View My Work
              <FiArrowRight />
            </a>

            <a
              href={"/cv/Lakshika-Gobinath-CV.pdf"}
              className="btn btn-secondary"
              download="Lakshika-Gobinath-CV.pdf"
              
            >
              Download CV
              <FiDownload />
            </a>

          </div>
          <div className="hero-stats">
            <div className="hero-stat">
                <strong>3+</strong>
                <span>Projects</span>
            </div>

            <div className="hero-stat">
                <strong>2+</strong>
                <span>Years Learning</span>
            </div>

            <div className="hero-stat">
                <strong>10+</strong>
                <span>Technologies</span>
            </div>
          </div>

          {/* Social Links */}
          <div className="hero-socials">

            <a
              href="https://github.com/GLakshika"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
            >
              <FiGithub />
            </a>

            <a
              href="https://www.linkedin.com/in/lakshikagobinath/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
            >
              <FiLinkedin />
            </a>

          </div>

        </motion.div>


        {/* Right Visual */}
        <motion.div
          className="hero-visual"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
        >

          <div className="hero-circle">

            <div className="hero-circle-inner">
                <img
                    src={profileImage}
                    alt="Lakshika Gobinath"
                    className="hero-profile-image"
                />
            </div>

          </div>

          <div className="floating-card card-one">
            React
          </div>

          <div className="floating-card card-two">
            Node.js
          </div>

          <div className="floating-card card-three">
            PostgreSQL
          </div>

        </motion.div>

      </div>

      {/* Scroll Indicator */}
      <motion.a
        href="#about"
        className="scroll-indicator"
        animate={{ y: [0, 8, 0] }}
        transition={{
          duration: 1.8,
          repeat: Infinity,
        }}
      >
        <span>Scroll to explore</span>
        <div className="scroll-line"></div>
      </motion.a>

    </section>
  );
}

export default Hero;