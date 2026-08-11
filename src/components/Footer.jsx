import {
  FiArrowUp,
  FiGithub,
  FiLinkedin,
} from "react-icons/fi";

function Footer() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <footer className="footer">

      <div className="footer-container">

        {/* Logo */}

        <div className="footer-brand">

          <div className="footer-logo">
            Lakshika Gobinath
          </div>

          <p>
            Computer Science & Engineering
          </p>

        </div>


        {/* Social links */}

        <div className="footer-socials">

          <a
            href="https://github.com/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
          >
            <FiGithub />
          </a>

          <a
            href="https://linkedin.com/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
          >
            <FiLinkedin />
          </a>

        </div>


        {/* Back to top */}

        <button
          className="back-to-top"
          onClick={scrollToTop}
          aria-label="Back to top"
        >
          <span>
            Back to top
          </span>

          <FiArrowUp />
        </button>

      </div>


      <div className="footer-bottom">

        <p>
          © {new Date().getFullYear()} Lakshika Gobinath.
          All rights reserved.
        </p>

        <p>
          Built with React.
        </p>

      </div>

    </footer>
  );
}

export default Footer;