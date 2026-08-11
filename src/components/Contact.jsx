import { motion } from "framer-motion";
import {
  FiArrowUpRight,
  FiMail,
  FiGithub,
  FiLinkedin,
  FiMapPin,
} from "react-icons/fi";

function Contact() {
  return (
    <section
      id="contact"
      className="section contact-section"
    >
      <div className="section-container">

        <motion.div
          className="contact-wrapper"
          initial={{
            opacity: 0,
            y: 30,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
          }}
          transition={{
            duration: 0.7,
          }}
        >

          {/* Heading */}

          <div className="contact-heading">

            <span className="section-label">
              07 — Contact
            </span>

            <h2>
              Let's build something
              <span> meaningful together.</span>
            </h2>

            <p>
              I'm always interested in learning, collaborating,
              and exploring new opportunities. If you'd like to
              connect, feel free to reach out.
            </p>

          </div>


          {/* Contact information */}

          <div className="contact-details">

            <a
              href="mailto:lakshikagobinath7@gmail.com"
              className="contact-email"
            >
              <FiMail />

              <span>
                lakshikagobinath7@gmail.com
              </span>

              <FiArrowUpRight />
            </a>


            <div className="contact-location">
              <FiMapPin />

              <span>
                Sri Lanka
              </span>
            </div>

          </div>


          {/* Social links */}

          <div className="contact-socials">

            <a
              href="https://github.com/GLakshika"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FiGithub />

              <span>GitHub</span>

              <FiArrowUpRight />
            </a>


            <a
              href="https://www.linkedin.com/in/lakshikagobinath/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FiLinkedin />

              <span>LinkedIn</span>

              <FiArrowUpRight />
            </a>

          </div>

        </motion.div>

      </div>
    </section>
  );
}

export default Contact;