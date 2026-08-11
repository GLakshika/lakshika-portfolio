import { motion } from "framer-motion";
import {
  SiJavascript,
  SiTypescript,
  SiPython,
  SiC,
  SiReact,
  SiNodedotjs,
  SiExpress,
  SiPostgresql,
  SiDocker,
  SiKubernetes,
  SiApachekafka,
  SiGit,
  SiGithub,
  SiPostman,
} from "react-icons/si";

function Skills() {
  const skillCategories = [
    {
      title: "Languages",
      skills: [
        { name: "JavaScript", icon: <SiJavascript /> },
        { name: "TypeScript", icon: <SiTypescript /> },
        { name: "Python", icon: <SiPython /> },
        { name: "C", icon: <SiC /> },
        { name: "Java", icon: "☕" },
        { name: "SQL", icon: "▣" },
      ],
    },

    {
      title: "Frontend",
      skills: [
        { name: "React", icon: <SiReact /> },
        { name: "HTML", icon: "◇" },
        { name: "CSS", icon: "◆" },
        { name: "Vite", icon: "⚡" },
      ],
    },

    {
      title: "Backend & Database",
      skills: [
        { name: "Node.js", icon: <SiNodedotjs /> },
        { name: "Express.js", icon: <SiExpress /> },
        { name: "PostgreSQL", icon: <SiPostgresql /> },
        { name: "REST APIs", icon: "↔" },
      ],
    },

    {
      title: "DevOps & Tools",
      skills: [
        { name: "Docker", icon: <SiDocker /> },
        { name: "Kubernetes", icon: <SiKubernetes /> },
        { name: "Apache Kafka", icon: <SiApachekafka /> },
        { name: "Git", icon: <SiGit /> },
        { name: "GitHub", icon: <SiGithub /> },
        { name: "Postman", icon: <SiPostman /> },
      ],
    },
  ];

  return (
    <section id="skills" className="section skills-section">
      <div className="section-container">

        <motion.div
          className="section-heading"
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="section-label">
            02 — Skills
          </span>

          <h2>
            Technologies I
            <span> work with.</span>
          </h2>
        </motion.div>

        <div className="skills-grid">

          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              className="skill-category"
              key={category.title}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.5,
                delay: categoryIndex * 0.1,
              }}
            >
              <h3>{category.title}</h3>

              <div className="skill-list">

                {category.skills.map((skill) => (
                  <div
                    className="skill-item"
                    key={skill.name}
                  >
                    <span className="skill-icon">
                      {skill.icon}
                    </span>

                    <span>
                      {skill.name}
                    </span>
                  </div>
                ))}

              </div>
            </motion.div>
          ))}

        </div>

      </div>
    </section>
  );
}

export default Skills;