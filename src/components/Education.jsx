import { motion } from "framer-motion";
import {
  FiBookOpen,
  FiCalendar,
  FiMapPin,
} from "react-icons/fi";

function Education() {
  return (
    <section
      id="education"
      className="section education-section"
    >
      <div className="section-container">

        <motion.div
          className="section-heading"
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="section-label">
            05 — Education
          </span>

          <h2>
            My academic
            <span> journey.</span>
          </h2>
        </motion.div>


        <motion.div
          className="education-card"

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
            duration: 0.6,
          }}
        >

          <div className="education-icon">
            <FiBookOpen />
          </div>


          <div className="education-content">

            <div className="education-top">
              <span>
                2024 — Present
              </span>
            </div>

            <h3>
              B.Sc. (Hons) in Computer Science
              & Engineering
            </h3>

            <p className="education-institution">
              University of Moratuwa
            </p>


            <div className="education-meta">

              <span>
                <FiCalendar />
                Undergraduate
              </span>

              <span>
                <FiMapPin />
                Sri Lanka
              </span>

            </div>


            <p className="education-description">
              Studying computer science and engineering with
              a focus on software engineering, programming,
              databases, computer networks, system design and
              distributed systems.
            </p>

          </div>

        </motion.div>

      </div>
    </section>
  );
}

export default Education;