import { motion } from "framer-motion";
import { FiArrowUpRight } from "react-icons/fi";

import { experience } from "../data/portfolioData";

function Experience() {
  return (
    <section
      id="experience"
      className="section experience-section"
    >
      <div className="section-container">

        {/* Heading */}
        <motion.div
          className="section-heading"
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="section-label">
            04 — Experience
          </span>

          <h2>
            Where I've been
            <span> building.</span>
          </h2>
        </motion.div>


        {/* Timeline */}
        <div className="experience-timeline">

          {experience.map((item, index) => (

            <motion.article
              className="experience-item"
              key={item.id}

              initial={{
                opacity: 0,
                x: -30,
              }}

              whileInView={{
                opacity: 1,
                x: 0,
              }}

              viewport={{
                once: true,
              }}

              transition={{
                duration: 0.6,
                delay: index * 0.1,
              }}
            >

              {/* Timeline marker */}
              <div className="timeline-marker">
                <span></span>
              </div>


              {/* Experience date */}
              <div className="experience-period">
                {item.period}
              </div>


              {/* Experience content */}
              <div className="experience-content">

                <div className="experience-header">

                  <div>
                    <h3>{item.title}</h3>

                    <p className="experience-organization">
                      {item.organization}
                    </p>
                  </div>

                  <span className="experience-type">
                    {item.type}
                  </span>

                </div>


                <p className="experience-description">
                  {item.description}
                </p>


                {/* Responsibilities */}
                <ul className="experience-responsibilities">

                  {item.responsibilities.map(
                    (responsibility) => (
                      <li key={responsibility}>
                        <FiArrowUpRight />
                        <span>{responsibility}</span>
                      </li>
                    )
                  )}

                </ul>


                {/* Technologies */}
                <div className="experience-technologies">

                  {item.technologies.map(
                    (technology) => (
                      <span key={technology}>
                        {technology}
                      </span>
                    )
                  )}

                </div>

              </div>

            </motion.article>

          ))}

        </div>

      </div>
    </section>
  );
}

export default Experience;