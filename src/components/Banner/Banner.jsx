import myPhoto from "../../assets/my-photo.png";
import {
  FiArrowDown,
  FiArrowUpRight,
  FiGithub,
  FiLinkedin,
  FiMapPin,
} from "react-icons/fi";

const Banner = () => (
  <section className="hero-section" id="home" aria-labelledby="hero-title">
    <div className="hero-grid" aria-hidden="true" />
    <div className="hero-content page-shell">
      <div className="hero-copy">
        <p className="eyebrow hero-eyebrow">
          <span className="status-dot" aria-hidden="true" />
          Full Stack Developer <span className="eyebrow-divider">/</span> Dhaka,
          Bangladesh
        </p>
        <h1 id="hero-title">
          I build useful
          <br />
          software for the
          <br />
          <span className="headline-accent">way we work.</span>
        </h1>
        <p className="hero-intro">
          I&apos;m Md. Imtiaz Ahmed Sakib. I create modern web applications,
          thoughtful frontend experiences, and the backend systems behind
          them.
        </p>
        <div className="hero-actions">
          <a className="button button-primary" href="#contact">
            Start a conversation <FiArrowUpRight aria-hidden="true" />
          </a>
          <a className="button button-quiet" href="#projects">
            Explore selected work <FiArrowDown aria-hidden="true" />
          </a>
        </div>
        <div className="hero-socials" aria-label="Social profiles">
          <a
            href="https://github.com/imtiazsakib15"
            target="_blank"
            rel="noreferrer"
            aria-label="GitHub profile (opens in a new tab)"
          >
            <FiGithub aria-hidden="true" />
            GitHub
          </a>
          <a
            href="https://www.linkedin.com/in/imtiaz-ahmed-sakib"
            target="_blank"
            rel="noreferrer"
            aria-label="LinkedIn profile (opens in a new tab)"
          >
            <FiLinkedin aria-hidden="true" />
            LinkedIn
          </a>
        </div>
      </div>

      <div className="hero-portrait-wrap">
        <div className="portrait-orbit portrait-orbit-one" aria-hidden="true" />
        <div className="portrait-orbit portrait-orbit-two" aria-hidden="true" />
        <div className="portrait-frame">
          <img
            className="hero-portrait"
            src={myPhoto}
            alt="Md. Imtiaz Ahmed Sakib"
          />
        </div>
        <div className="portrait-caption">
          <FiMapPin aria-hidden="true" />
          <span>Based in Dhaka, Bangladesh</span>
        </div>
        <span className="portrait-index" aria-hidden="true">
          01 / 05
        </span>
      </div>
    </div>

    <a className="scroll-cue" href="#about">
      <span>Scroll to explore</span>
      <span className="scroll-line" aria-hidden="true" />
    </a>
  </section>
);

export default Banner;
