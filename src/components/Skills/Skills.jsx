import { SKILL_GROUPS } from "../../constants/skills.constant";

const Skills = () => (
  <section className="section skills-section" id="skills" aria-labelledby="skills-title">
    <div className="page-shell">
      <div className="section-heading split-heading">
        <div>
          <p className="eyebrow">The toolkit</p>
          <h2 id="skills-title">
            Technologies I use
            <br />
            <span>to make things work.</span>
          </h2>
        </div>
        <p className="section-aside">
          A practical set of tools for building full-stack applications. I give
          the most attention to the technologies I use most often.
        </p>
      </div>

      <div className="skill-groups">
        {SKILL_GROUPS.map((group, index) => (
          <article className="skill-group" key={group.name}>
            <div className="skill-group-heading">
              <span className="skill-index">0{index + 1}</span>
              <div>
                <h3>{group.name}</h3>
                <p>{group.level}</p>
              </div>
            </div>
            <ul className="skill-list">
              {group.skills.map((skill) => (
                <li key={skill}>{skill}</li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </div>
  </section>
);

export default Skills;
