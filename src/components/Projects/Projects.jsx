import { FiExternalLink, FiGithub, FiServer } from "react-icons/fi";
import { PROJECTS } from "../../constants/projects.constant";
import Title from "../shared/Title";

const Projects = () => {
  return (
    <section id="projects" className="py-16 bg-[#003566ff]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Title
          title="Projects"
          subtitle="Crafting User-Centric Web Experiences"
        />

        <div className="space-y-8">
          {PROJECTS.map((project, index) => (
            <div
              key={index}
              className="group relative bg-[#002240]/50 rounded-2xl border border-cyan-400/20 hover:border-cyan-400/40 transition-all overflow-hidden"
            >
              <div className="flex flex-col lg:flex-row gap-8 p-8">
                <div className="lg:w-2/5 relative overflow-hidden rounded-xl">
                  <img
                    src={project.img}
                    alt={project.name}
                    className="w-full h-full object-cover transform group-hover:scale-105 transition-transform"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#002240] via-transparent to-transparent" />
                </div>

                <div className="lg:w-3/5 space-y-4">
                  <h3 className="text-2xl font-bold text-cyan-400">
                    {project.name}
                    <span className="block text-gray-300 text-lg font-normal mt-1">
                      {project.subtitle}
                    </span>
                  </h3>

                  <div className="space-y-2">
                    <h4 className="text-cyan-400 font-semibold">
                      Key Features:
                    </h4>
                    <ul className="space-y-2 pl-4">
                      {project.features.map((feature, i) => (
                        <li key={i} className="flex items-start text-gray-300">
                          <span className="text-cyan-400 mr-2">▹</span>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="space-y-2">
                    <h4 className="text-cyan-400 font-semibold">Tech Stack:</h4>
                    <div className="flex flex-wrap gap-2">
                      {project.tech.map((tech, i) => (
                        <span
                          key={i}
                          className="px-3 py-1 bg-cyan-400/10 text-cyan-400 rounded-full text-sm"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-4 pt-4">
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noreferrer"
                      className="flex items-center gap-2 px-5 py-2 bg-cyan-600 hover:bg-cyan-700 text-white rounded-lg transition-all"
                    >
                      <FiExternalLink className="text-lg" />
                      Live Demo
                    </a>
                    <a
                      href={project.client}
                      target="_blank"
                      rel="noreferrer"
                      className="flex items-center gap-2 px-5 py-2 border border-cyan-600 text-cyan-400 hover:bg-cyan-600/10 rounded-lg transition-all"
                    >
                      <FiGithub className="text-lg" />
                      Client Code
                    </a>
                    <a
                      href={project.server}
                      target="_blank"
                      rel="noreferrer"
                      className="flex items-center gap-2 px-5 py-2 border border-cyan-600 text-cyan-400 hover:bg-cyan-600/10 rounded-lg transition-all"
                    >
                      <FiServer className="text-lg" />
                      Server Code
                    </a>
                  </div>
                </div>
              </div>

              <div className="absolute inset-0 bg-gradient-to-br from-cyan-400/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
