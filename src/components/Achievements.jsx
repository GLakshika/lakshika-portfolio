import { motion } from "framer-motion";
import {
  FiAward,
  FiStar,
  FiTrendingUp,
  FiBook,
} from "react-icons/fi";

function Achievements() {
  const achievements = [

    {
      value: "Dean's List",
      title: "Academic Excellence",
      description:
        "Recognized for outstanding academic performance at university.",
      icon: <FiAward />,
    },

  ];

  return (
    <section
      id="achievements"
      className="section achievements-section"
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
            06 — Achievements
          </span>

          <h2>
            Milestones I'm
            <span> proud of.</span>
          </h2>
        </motion.div>


        <div className="achievements-grid">

          {achievements.map(
            (achievement, index) => (

              <motion.article
                className="achievement-card"
                key={achievement.title + achievement.value}

                initial={{
                  opacity: 0,
                  y: 25,
                }}

                whileInView={{
                  opacity: 1,
                  y: 0,
                }}

                viewport={{
                  once: true,
                }}

                transition={{
                  duration: 0.5,
                  delay: index * 0.1,
                }}
              >

                <div className="achievement-icon">
                  {achievement.icon}
                </div>

                <div className="achievement-value">
                  {achievement.value}
                </div>

                <h3>
                  {achievement.title}
                </h3>

                <p>
                  {achievement.description}
                </p>

              </motion.article>

            )
          )}

        </div>

      </div>
    </section>
  );
}

export default Achievements;