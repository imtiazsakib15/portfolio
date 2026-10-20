import { FiArrowDownRight, FiCode, FiLayers, FiServer } from "react-icons/fi";

const focusAreas = [
  {
    icon: FiLayers,
    title: "Interfaces with intent",
    detail: "Responsive, accessible frontend experiences",
  },
  {
    icon: FiServer,
    title: "Systems that connect",
    detail: "APIs, data models, and application logic",
  },
  {
    icon: FiCode,
    title: "A thoughtful process",
    detail: "Maintainable code shaped around real needs",
  },
];

const AboutMe = () => (
  <section className="section about-section" id="about" aria-labelledby="about-title">
    <div className="page-shell">
      <div className="section-heading about-heading">
        <p className="eyebrow">A little about me</p>
        <h2 id="about-title">
          Full stack by craft.
          <br />
          <span>Curious by nature.</span>
        </h2>
      </div>

      <div className="about-layout">
        <div className="about-copy">
          <p className="about-lead">
            I enjoy turning a complex idea into a clear, useful web product —
            from the first interaction to the data and logic that power it.
          </p>
          <p>
            My work moves between frontend and backend development. I care about
            interfaces that feel considered, software that is straightforward
            to maintain, and solutions that make sense for the people using
            them.
          </p>
          <a className="text-link" href="#skills">
            How I work <FiArrowDownRight aria-hidden="true" />
          </a>
        </div>

        <div className="focus-list">
          {focusAreas.map(({ icon: Icon, title, detail }, index) => (
            <article className="focus-item" key={title}>
              <span className="focus-number">0{index + 1}</span>
              <span className="focus-icon">
                <Icon aria-hidden="true" />
              </span>
              <div>
                <h3>{title}</h3>
                <p>{detail}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  </section>
);

export default AboutMe;
