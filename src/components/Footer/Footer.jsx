import { FiArrowUp, FiGithub, FiLinkedin } from "react-icons/fi";

const Footer = () => (
  <footer className="site-footer">
    <div className="page-shell footer-main">
      <a className="footer-brand" href="#home">
        <span className="wordmark-mark" aria-hidden="true">
          IS
        </span>
        <span>
          <strong>Md. Imtiaz Ahmed Sakib</strong>
          <small>Full Stack Developer</small>
        </span>
      </a>
      <nav className="footer-nav" aria-label="Footer navigation">
        <a href="#about">About</a>
        <a href="#skills">Toolkit</a>
        <a href="#projects">Work</a>
        <a href="#contact">Contact</a>
      </nav>
      <div className="footer-socials">
        <a
          href="https://github.com/imtiazsakib15"
          target="_blank"
          rel="noreferrer"
          aria-label="GitHub profile (opens in a new tab)"
        >
          <FiGithub aria-hidden="true" />
        </a>
        <a
          href="https://www.linkedin.com/in/imtiaz-ahmed-sakib"
          target="_blank"
          rel="noreferrer"
          aria-label="LinkedIn profile (opens in a new tab)"
        >
          <FiLinkedin aria-hidden="true" />
        </a>
      </div>
    </div>
    <div className="page-shell footer-bottom">
      <span>© {new Date().getFullYear()} Imtiaz Ahmed Sakib</span>
      <span>Designed &amp; built with care</span>
      <a href="#home">
        Back to top <FiArrowUp aria-hidden="true" />
      </a>
    </div>
  </footer>
);

export default Footer;
