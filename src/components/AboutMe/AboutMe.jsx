import myPhoto from "../../assets/my-photo2.jpeg";
import { FaCode, FaTools } from "react-icons/fa";
import Title from "../shared/Title";
import { CORE_SKILLS } from "../../constants/coreSkills.constant";

const AboutMe = () => {
  return (
    <section id="about" className="py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Title
          title="About Me"
          subtitle="Full Stack Developer Specializing in MERN Stack"
        />

        <div className="flex flex-col lg:flex-row items-center gap-12">
          <div className="lg:w-1/3 relative group">
            <img
              src={myPhoto}
              alt="Profile"
              className="rounded-2xl shadow-2xl w-full max-w-md border-4 border-cyan-400/30 hover:border-cyan-400/50 transition-all hover:origin-center hover:rotate-6 hover:duration-500"
            />
          </div>

          <div className="lg:w-2/3 text-gray-300 space-y-6">
            <p className="text-lg leading-relaxed">
              I&apos;m a passionate full-stack developer specializing in the
              MERN stack, dedicated to creating efficient and user-friendly web
              applications. With a strong foundation in modern web technologies,
              I focus on building solutions that combine robust functionality
              with elegant design.
            </p>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-3">
                <div className="flex items-center gap-3 text-cyan-400">
                  <FaCode className="text-2xl" />
                  <h3 className="text-xl font-semibold">Core Skills</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {CORE_SKILLS.map((skill) => (
                    <span
                      key={skill}
                      className="px-3 py-1 bg-cyan-400/10 text-cyan-400 rounded-full text-sm"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              <div className="space-y-3">
                <div className="flex items-center gap-3 text-cyan-400">
                  <FaTools className="text-2xl" />
                  <h3 className="text-xl font-semibold">Development Focus</h3>
                </div>
                <ul className="space-y-2 pl-4 list-disc">
                  <li>Building scalable web applications</li>
                  <li>Implementing RESTful APIs</li>
                  <li>Creating responsive UIs</li>
                </ul>
              </div>
            </div>

            <p className="text-gray-400">
              Continuously expanding my knowledge through personal projects and
              staying updated with the latest industry trends, I strive to
              deliver solutions that meet both technical requirements and user
              needs.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
