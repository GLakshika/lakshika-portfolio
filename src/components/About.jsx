import { motion } from "framer-motion";
import {
  FiCode,
  FiLayers,
  FiCpu,
  FiUsers,
} from "react-icons/fi";


function About() {
  const highlights = [
    {
      icon: <FiCode />,
      title: "Software Development",
      description:
        "Building practical web applications and software solutions with modern technologies.",
    },
    {
      icon: <FiLayers />,
      title: "System Design",
      description:
        "Interested in scalable architectures, REST APIs, microservices and distributed systems.",
    },
    {
      icon: <FiCpu />,
      title: "Problem Solving",
      description:
        "Enjoy solving technical problems and turning ideas into reliable software.",
    },
    {
      icon: <FiUsers />,
      title: "Team Collaboration",
      description:
        "Experienced in collaborative university projects using Git and modern development workflows.",
    },
  ];

  return (
    <section id="about" className="section about-section">
      <div className="section-container">

        {/* Section Heading */}
        <motion.div
          className="section-heading"
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="section-label">01 — About Me</span>
        
          <h2>
            Building software with
            <span> curiosity and purpose.</span>
          </h2>
        </motion.div>

        {/* About Content */}
        <div className="about-content">

          <motion.div
            className="about-text"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <p>
              I'm a Computer Science and Engineering student at the
              University of Moratuwa with a strong interest in software
              engineering and building practical applications.
            </p>

            <p>
              I enjoy designing scalable systems, developing web and
              mobile applications, and exploring how different
              technologies can work together to solve real-world
              problems.
            </p>

            <p>
              Through academic and personal projects, I've gained
              experience working with full-stack development,
              microservices, REST APIs, databases, authentication,
              event-driven systems and modern development tools.
            </p>

            <p>
              I'm continuously learning new technologies and looking
              for opportunities to grow as a creative and
              problem-solving software engineer.
            </p>
          </motion.div>

          {/* Highlights */}
          <div className="about-highlights">

            {highlights.map((item, index) => (
              <motion.div
                className="highlight-card"
                key={item.title}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.1,
                }}
              >
                <div className="highlight-icon">
                  {item.icon}
                </div>

                <div>
                  <h3>{item.title}</h3>
                  <p>{item.description}</p>
                </div>
              </motion.div>
            ))}

          </div>

        </div>
      </div>
    </section>
  );
}

export default About;