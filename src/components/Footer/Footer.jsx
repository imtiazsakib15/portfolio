import { FiGithub, FiLinkedin, FiMail } from "react-icons/fi";

const Footer = () => {
  return (
    <footer className="bg-[#002240] border-t border-cyan-400/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div className="space-y-4">
            <h3 className="text-2xl font-bold text-cyan-400">
              Md. Imtiaz Ahmed Sakib
            </h3>
            <p className="text-gray-300 max-w-xs">
              Full Stack Developer specializing in modern web applications and
              user-centric digital experiences.
            </p>
            <div className="flex space-x-4">
              <a
                href="https://github.com/imtiazsakib15"
                target="_blank"
                rel="noreferrer"
                className="text-cyan-400 hover:text-cyan-300 transition-colors"
              >
                <FiGithub className="text-xl" />
              </a>
              <a
                href="https://www.linkedin.com/in/imtiaz-ahmed-sakib/"
                target="_blank"
                rel="noreferrer"
                className="text-cyan-400 hover:text-cyan-300 transition-colors"
              >
                <FiLinkedin className="text-xl" />
              </a>
              <a
                href="mailto:sakib.imtiaz15@gmail.com"
                className="text-cyan-400 hover:text-cyan-300 transition-colors"
              >
                <FiMail className="text-xl" />
              </a>
            </div>
          </div>

          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-cyan-400">Navigation</h4>
            <ul className="space-y-2">
              <li>
                <a
                  href="#home"
                  className="text-gray-300 hover:text-cyan-400 transition-colors"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="#about"
                  className="text-gray-300 hover:text-cyan-400 transition-colors"
                >
                  About
                </a>
              </li>
              <li>
                <a
                  href="#projects"
                  className="text-gray-300 hover:text-cyan-400 transition-colors"
                >
                  Projects
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  className="text-gray-300 hover:text-cyan-400 transition-colors"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Resources */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-cyan-400">Resources</h4>
            <ul className="space-y-2">
              <li>
                <a
                  href="#"
                  className="text-gray-300 hover:text-cyan-400 transition-colors"
                >
                  Privacy Policy
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-300 hover:text-cyan-400 transition-colors"
                >
                  Terms of Service
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-300 hover:text-cyan-400 transition-colors"
                >
                  Documentation
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-cyan-400/20 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">
            © {new Date().getFullYear()} Md. Imtiaz Ahmed Sakib. All rights
            reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
