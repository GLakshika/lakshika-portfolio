import { motion } from "framer-motion";
import {
  FiArrowUpRight,
  FiGithub,
} from "react-icons/fi";

import { projects } from "../data/portfolioData";

function Projects() {
  return (
    <section id="projects" className="section projects-section">

      <div className="section-container">

        {/* Section Heading */}
        <motion.div
          className="section-heading"
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="section-label">
            03 — Projects
          </span>

          <h2>
            Things I've
            <span> built.</span>
          </h2>
        </motion.div>


        {/* Projects */}
        <div className="projects-list">

          {projects.map((project, index) => (

            <motion.article
              className={`project-card ${
                project.featured ? "featured" : ""
              }`}
              key={project.id}

              initial={{
                opacity: 0,
                y: 40,
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
                delay: index * 0.1,
              }}
            >

            {/* Project Visual */}
            <div className="project-visual">

                <img
                    src={project.image}
                    alt={`${project.title} project screenshot`}
                    className="project-image"
                />

                <div className="project-number">
                    0{index + 1}
                </div>
            </div>


              {/* Project Content */}
              <div className="project-content">

                <div className="project-top">

                  <span className="project-category">
                    {project.category}
                  </span>

                  {project.featured && (
                    <span className="featured-label">
                      Featured
                    </span>
                  )}

                </div>


                <h3>
                  {project.title}
                </h3>


                <p>
                  {project.description}
                </p>


                {/* Technologies */}
                <div className="project-technologies">

                  {project.technologies.map(
                    (technology) => (
                      <span
                        key={technology}
                        className="technology-tag"
                      >
                        {technology}
                      </span>
                    )
                  )}

                </div>


                {/* Links */}
                <div className="project-links">

                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="project-link"
                  >
                    <FiGithub />
                    GitHub
                  </a>


                  {project.demo !== "#" && (
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="project-link"
                    >
                      Live Demo
                      <FiArrowUpRight />
                    </a>
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

export default Projects;