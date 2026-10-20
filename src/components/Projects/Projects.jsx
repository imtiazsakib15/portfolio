import {
  FiArrowUpRight,
  FiExternalLink,
  FiGithub,
  FiServer,
} from "react-icons/fi";
import { PROJECTS } from "../../constants/projects.constant";

const WorkflowPreview = () => (
  <div
    className="workflow-preview"
    role="img"
    aria-label="Illustrative recruitment workflow with candidate profiles and request statuses"
  >
    <div className="workflow-windowbar">
      <span className="window-dots" aria-hidden="true">
        <i />
        <i />
        <i />
      </span>
      <span>talentra / workspace</span>
      <span className="workflow-avatar">TA</span>
    </div>
    <div className="workflow-body">
      <div className="workflow-sidebar" aria-hidden="true">
        <span className="workflow-logo">T.</span>
        <i className="workflow-nav-active" />
        <i />
        <i />
        <i />
      </div>
      <div className="workflow-content">
        <div className="workflow-topline">
          <div>
            <span className="workflow-overline">COMPANY WORKSPACE</span>
            <strong>Candidate matches</strong>
          </div>
          <span className="workflow-filter">Filter results</span>
        </div>
        <div className="workflow-search">Search candidates</div>
        {[
          { initials: "01", name: "Candidate profile 01", role: "Profile summary", state: "Request sent" },
          { initials: "02", name: "Candidate profile 02", role: "Profile summary", state: "In review" },
          { initials: "03", name: "Candidate profile 03", role: "Profile summary", state: "New match" },
        ].map((candidate, index) => (
          <div className="candidate-row" key={candidate.initials}>
            <span className={`candidate-avatar candidate-avatar-${index}`}>
              {candidate.initials}
            </span>
            <span className="candidate-details">
              <strong>{candidate.name}</strong>
              <small>{candidate.role}</small>
            </span>
            <span className={`candidate-status candidate-status-${index}`}>
              <i aria-hidden="true" />
              {candidate.state}
            </span>
          </div>
        ))}
      </div>
    </div>
    <span className="preview-caption">Illustrative interface - not a product screenshot</span>
  </div>
);

const Projects = () => (
  <section className="section projects-section" id="projects" aria-labelledby="projects-title">
    <div className="page-shell">
      <div className="section-heading split-heading project-section-heading">
        <div>
          <p className="eyebrow">Selected work / full-stack applications</p>
          <h2 id="projects-title">
            Products built
            <br />
            <span>to solve real problems.</span>
          </h2>
        </div>
        <p className="section-aside">
          A selection of full-stack applications, each shaped around a
          different workflow and set of users.
        </p>
      </div>

      <div className="projects-grid">
        {PROJECTS.map((project, index) => (
          <article
            className={`project-card${index === 0 ? " project-card-featured" : ""}`}
            key={project.name}
          >
            <div className="project-visual">
              {project.preview === "workflow" ? (
                <WorkflowPreview />
              ) : (
                <img
                  src={project.img}
                  alt={`${project.name} application preview`}
                  loading="lazy"
                  decoding="async"
                />
              )}
              <span className="project-number">0{index + 1}</span>
            </div>

            <div className="project-information">
              <div className="project-heading-row">
                <div>
                  <p className="project-category">{project.category}</p>
                  <h3>{project.name}</h3>
                </div>
                <a
                  className="project-arrow"
                  href={project.live}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={`Visit ${project.name} live demo (opens in a new tab)`}
                >
                  <FiArrowUpRight aria-hidden="true" />
                </a>
              </div>
              <p className="project-description">{project.description}</p>
              <ul className="project-features">
                {project.features.map((feature) => (
                  <li key={feature}>{feature}</li>
                ))}
              </ul>
              <ul className="project-tech" aria-label={`${project.name} technologies`}>
                {project.tech.map((technology) => (
                  <li key={technology}>{technology}</li>
                ))}
              </ul>
              <div className="project-links">
                {project.live && (
                  <a
                    className="project-link project-link-primary"
                    href={project.live}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={`${project.name} live demo (opens in a new tab)`}
                  >
                    Live demo <FiExternalLink aria-hidden="true" />
                  </a>
                )}
                {project.client && (
                  <a
                    className="project-link"
                    href={project.client}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={`${project.name} frontend repository (opens in a new tab)`}
                  >
                    <FiGithub aria-hidden="true" /> Frontend
                  </a>
                )}
                {project.server && (
                  <a
                    className="project-link"
                    href={project.server}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={`${project.name} backend repository (opens in a new tab)`}
                  >
                    <FiServer aria-hidden="true" /> Backend
                  </a>
                )}
              </div>
            </div>
          </article>
        ))}
      </div>
    </div>
  </section>
);

export default Projects;
