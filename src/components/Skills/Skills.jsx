import { SKILLS } from "../../constants/skills.constant";
import Title from "../shared/Title";

const Skills = () => {
  return (
    <section id="skills" className="py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Title
          title="Technical Skills"
          subtitle="Tools & technologies I use to bring ideas to life"
        />

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-6 py-8">
          {SKILLS.map((skill, index) => (
            <div
              key={index}
              className="group relative flex flex-col items-center p-6 bg-[#002240]/50 rounded-xl hover:bg-[#002240] transition-all duration-300 hover:-translate-y-2 hover:shadow-xl hover:shadow-cyan-900/20"
            >
              <div className="mb-4 p-3 bg-[#003566]/50 rounded-lg group-hover:bg-[#003566] transition-colors">
                <img
                  src={skill.icon}
                  alt={skill.name}
                  className="h-12 w-12 object-contain filter grayscale group-hover:grayscale-0 transition-all duration-300"
                />
              </div>
              <span className="text-cyan-200 text-sm font-medium text-center">
                {skill.name}
              </span>

              {/* Hover Glow Effect */}
              <div className="absolute inset-0 rounded-xl border border-cyan-900/30 group-hover:border-cyan-400/50 transition-all duration-300 pointer-events-none" />
              <div className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none shadow-[inset_0_0_20px_rgba(34,211,238,0.1)]" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
